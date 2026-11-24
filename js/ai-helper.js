/**
 * Модуль взаємодії з Gemini API (ШІ-помічник)
 * Підтримує генерацію та редагування тексту обґрунтування для службового листа на адвоката.
 */

const GEMINI_MODEL = "gemini-3.8-flash";

let _aiModalResolve = null;
let _aiModalReject = null;
let _aiModalSettingsMode = false;

/**
 * Оновлення індикатора наявності API-ключа в шапці (Desktop та Mobile)
 */
function updateAiKeyStatusDots() {
    const hasKey = !!(localStorage.getItem('geminiApiKeyLocal') || '').trim();
    ['aiKeyStatusDotDesktop', 'aiKeyStatusDotMobile'].forEach(id => {
        const dot = document.getElementById(id);
        if (dot) {
            dot.classList.toggle('is-active', hasKey);
            dot.title = hasKey ? 'API-ключ ШІ налаштовано' : 'API-ключ ШІ не вказано';
        }
    });
}

function closeAiKeyModal(reasonError = null) {
    const modal = document.getElementById('aiKeyModal');
    if (modal) modal.style.display = 'none';
    const input = document.getElementById('aiApiKeyInput');
    if (input) {
        input.classList.remove('error-border');
        input.type = 'password';
    }
    const rejectFn = _aiModalReject;
    _aiModalResolve = null;
    _aiModalReject = null;
    if (reasonError && rejectFn) {
        rejectFn(reasonError);
    }
}

/**
 * Відкриття модального вікна налаштування API-ключа Gemini
 */
function openAiKeyModal(options = {}) {
    const modal = document.getElementById('aiKeyModal');
    const input = document.getElementById('aiApiKeyInput');

    if (!modal || !input) {
        const key = prompt("Для роботи ШІ локально потрібен API-ключ Gemini.\nОтримайте його безкоштовно на aistudio.google.com та вставте сюди:");
        if (key && key.trim()) {
            const trimmed = key.trim();
            localStorage.setItem('geminiApiKeyLocal', trimmed);
            updateAiKeyStatusDots();
            return Promise.resolve(trimmed);
        }
        return Promise.reject(new Error("API ключ не надано користувачем."));
    }

    _aiModalSettingsMode = !!options.settingsMode;
    input.value = localStorage.getItem('geminiApiKeyLocal') || '';
    input.type = 'password';
    input.classList.remove('error-border');
    modal.style.display = 'flex';
    setTimeout(() => input.focus(), 50);

    return new Promise((resolve, reject) => {
        _aiModalResolve = resolve;
        _aiModalReject = reject;
    });
}

/**
 * Виклик моделі gemini-3.8-flash з механізмом повторних спроб (exponential backoff)
 */
async function callGeminiWithBackoff(promptText, systemInstructionText) {
    const modelName = GEMINI_MODEL;
    let apiKey = (localStorage.getItem('geminiApiKeyLocal') || '').trim();

    if (!apiKey) {
        apiKey = await openAiKeyModal({ settingsMode: false });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    const payload = {
        contents: [{ parts: [{ text: promptText }] }],
        systemInstruction: { parts: [{ text: systemInstructionText }] }
    };

    const delays = [1000, 2000, 4000];
    for (let i = 0; i < delays.length; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const errorMessage = errorData?.error?.message || `Помилка сервера: ${response.status}`;
                throw new Error(errorMessage);
            }

            const result = await response.json();
            return result.candidates?.[0]?.content?.parts?.[0]?.text || "";
        } catch (e) {
            if (i === delays.length - 1) throw e;
            if (e.message && (e.message.includes("API key not valid") || e.message.includes("API ключ не надано") || e.message.includes("not found"))) {
                throw e;
            }
            await new Promise(r => setTimeout(r, delays[i]));
        }
    }
}

/**
 * Екранування спецсимволів для RegExp
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Анонімізація ПІБ клієнта перед відправкою до зовнішнього API
 */
function anonymizeText(text) {
    if (!text) return text;
    let res = text;

    const dat = document.getElementById('helpReceiverNameDative')?.value.trim();
    const gen = document.getElementById('helpReceiverNameGenitive')?.value.trim() || document.getElementById('applicantNameGenitive')?.value.trim();
    const nom = document.getElementById('helpReceiverName')?.value.trim() || document.getElementById('applicantName')?.value.trim();

    const replaceRules = [
        { name: dat, marker: '[CLIENT_DAT]' },
        { name: gen, marker: '[CLIENT_GEN]' },
        { name: nom, marker: '[CLIENT_NOM]' }
    ];

    replaceRules.forEach(rule => {
        if (rule.name) {
            res = res.replaceAll(new RegExp(escapeRegExp(rule.name), 'gi'), rule.marker);
            const parts = rule.name.split(/\s+/);
            if (parts.length > 0 && parts[0].length > 2) {
                res = res.replaceAll(new RegExp(escapeRegExp(parts[0]), 'gi'), rule.marker);
            }
        }
    });

    return res;
}

/**
 * Обробка задач ШІ: «formalize» (✨ Офіційно) або «proofread» (📝 Коректор)
 */
async function handleAITask(taskType) {
    const infoField = document.getElementById('letterAdditionalInfo');
    const overlay = document.getElementById('aiLoadingOverlay');
    if (!infoField) return;

    const draftText = infoField.value.trim();
    const toastFn = window.showToast || (typeof showToast === 'function' ? showToast : alert);

    if (!draftText) {
        toastFn("Спочатку введіть короткі нотатки або чернетку в поле!", false);
        return;
    }

    if (overlay) overlay.style.display = 'flex';
    const safeText = anonymizeText(draftText);
    let sysInstr = "";
    let userPrompt = "";

    if (taskType === 'formalize') {
        const caseContextData = typeof collectData === 'function' ? collectData() : (window.collectData ? window.collectData() : {});
        const caseContext = anonymizeText(caseContextData.actionDescription || '');
        sysInstr = "Ти досвідчений юрист системи БВПД в Україні. Перетвори короткі нотатки на формальне обґрунтування. Замість імені клієнта обов'язково використовуй маркери: [CLIENT_NOM], [CLIENT_GEN], [CLIENT_DAT].";
        userPrompt = `Суть справи: ${caseContext || 'Не вказано'}.\n\nЧернетка працівника: ${safeText}`;
    } else if (taskType === 'proofread') {
        sysInstr = "Виправ орфографічні, пунктуаційні та стилістичні помилки в тексті, зберігши юридичний зміст та термінологію. Виведи лише виправлений текст без коментарів.";
        userPrompt = safeText;
    }

    try {
        let resultText = await callGeminiWithBackoff(userPrompt, sysInstr);
        if (resultText) {
            const nom = document.getElementById('helpReceiverName')?.value.trim() || document.getElementById('applicantName')?.value.trim();
            const gen = document.getElementById('helpReceiverNameGenitive')?.value.trim() || document.getElementById('applicantNameGenitive')?.value.trim() || nom;
            const dat = document.getElementById('helpReceiverNameDative')?.value.trim() || nom;

            if (nom) {
                resultText = resultText.replace(/\[CLIENT_DAT\]/gi, dat);
                resultText = resultText.replace(/\[CLIENT_GEN\]/gi, gen);
                resultText = resultText.replace(/\[CLIENT_NOM\]/gi, nom);
                resultText = resultText.replace(/\[CLIENT_[A-Z]+\]/gi, nom);
            }

            infoField.value = resultText.trim();
            toastFn("Текст успішно оброблено штучним інтелектом!", true);
        }
    } catch (err) {
        console.error("AI Error:", err);
        let displayError = "Спробуйте пізніше.";
        if (err.message && err.message.includes("API key not valid")) {
            displayError = "Недійсний API-ключ. Перевірте «Налаштування ШІ».";
        } else if (err.message) {
            displayError = err.message;
        }
        toastFn("Помилка ШІ: " + displayError, false);
    } finally {
        if (overlay) overlay.style.display = 'none';
    }
}

/**
 * Ініціалізація слухачів подій для кнопок ШІ та модалки API-ключа
 */
function initAI() {
    const toastFn = () => window.showToast || (typeof showToast === 'function' ? showToast : alert);

    document.getElementById('btnAIFormalize')?.addEventListener('click', () => handleAITask('formalize'));
    document.getElementById('btnAIProofread')?.addEventListener('click', () => handleAITask('proofread'));

    document.getElementById('helpAiBtn')?.addEventListener('click', () => {
        const aiDesc = document.getElementById('aiHelpDescription');
        if (aiDesc) {
            aiDesc.style.display = (aiDesc.style.display === 'block' ? 'none' : 'block');
        }
    });

    document.getElementById('resetAiKeyBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('geminiApiKeyLocal');
        updateAiKeyStatusDots();
        toastFn()('Ключ ШІ успішно скинуто!', true);
    });

    const openSettingsHandler = () => {
        openAiKeyModal({ settingsMode: true }).catch(() => {});
    };
    document.getElementById('btnOpenAiModal')?.addEventListener('click', openSettingsHandler);
    document.getElementById('btnMobileAiModal')?.addEventListener('click', openSettingsHandler);

    const aiModal = document.getElementById('aiKeyModal');
    const apiInput = document.getElementById('aiApiKeyInput');

    document.getElementById('closeAiModalBtn')?.addEventListener('click', () => {
        closeAiKeyModal(_aiModalSettingsMode ? null : new Error("API ключ не надано користувачем."));
    });

    aiModal?.addEventListener('click', (e) => {
        if (e.target === aiModal) {
            closeAiKeyModal(_aiModalSettingsMode ? null : new Error("API ключ не надано користувачем."));
        }
    });

    document.getElementById('btnToggleAiKeyVis')?.addEventListener('click', () => {
        if (!apiInput) return;
        apiInput.type = apiInput.type === 'password' ? 'text' : 'password';
    });

    document.getElementById('btnModalSaveAiKey')?.addEventListener('click', () => {
        const trimmed = (apiInput?.value || '').trim();
        if (!trimmed) {
            apiInput?.classList.add('error-border');
            apiInput?.focus();
            toastFn()('Введіть API-ключ Gemini!', false);
            return;
        }
        apiInput?.classList.remove('error-border');
        localStorage.setItem('geminiApiKeyLocal', trimmed);
        updateAiKeyStatusDots();
        const resolveFn = _aiModalResolve;
        const wasSettings = _aiModalSettingsMode;
        _aiModalResolve = null;
        _aiModalReject = null;
        if (aiModal) aiModal.style.display = 'none';
        if (apiInput) apiInput.type = 'password';
        if (wasSettings) {
            toastFn()('API-ключ ШІ збережено!', true);
        }
        if (resolveFn) resolveFn(trimmed);
    });

    document.getElementById('btnModalResetAiKey')?.addEventListener('click', () => {
        localStorage.removeItem('geminiApiKeyLocal');
        if (apiInput) {
            apiInput.value = '';
            apiInput.classList.remove('error-border');
        }
        updateAiKeyStatusDots();
        toastFn()('Ключ ШІ успішно скинуто!', true);
        closeAiKeyModal(_aiModalSettingsMode ? null : new Error("API ключ не надано користувачем."));
    });

    updateAiKeyStatusDots();
}

// Експорт
window.AIHelper = {
    GEMINI_MODEL,
    callGeminiWithBackoff,
    escapeRegExp,
    anonymizeText,
    handleAITask,
    initAI,
    openAiKeyModal,
    updateAiKeyStatusDots
};
window.callGeminiWithBackoff = callGeminiWithBackoff;
window.anonymizeText = anonymizeText;
window.handleAITask = handleAITask;
window.initAI = initAI;
window.openAiKeyModal = openAiKeyModal;
window.updateAiKeyStatusDots = updateAiKeyStatusDots;
