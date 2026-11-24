# UI/UX Redesign Prompt for Google Stitch — «Генератор документів на БВПД» (Desktop & Mobile, Light & Dark Modes)

## 1. Product Overview & Strict Scope

Design a modern, calm, authoritative **LegalTech / GovTech responsive web application (Desktop-first with full Mobile UI parity)** named **«Генератор документів на БВПД»** (Free Secondary Legal Aid Document Generator) used daily by Ukrainian state legal aid lawyers and intake specialists. The tool streamlines client intake, automatic Ukrainian name declension, legal income-eligibility calculation under Ministry of Justice Methodology No. 1445/5, optional Gemini AI drafting assistance, live legal document preview, and client-side `.DOCX` generation (Applications, Intake Receipts/Talons, Orders, and Internal Service Letters).

**CRITICAL LANGUAGE & FIDELITY RULES:**
- These instructions are written in English for visual and structural accuracy, **HOWEVER 100% of visible UI text inside all generated screens (both Desktop and Mobile)—page titles, header buttons, navigation links, card headings, form labels, placeholders, radio options, dropdowns, tabs, checkboxes, status badges, validation alerts, table headers, tooltips, modal dialogs, bottom sheets, and legal document preview text—MUST be written in natural, accurate Ukrainian**, using the exact Ukrainian strings provided below. Zero English UI text may appear on the mockups.
- Redesign **strictly the real functional blocks** present in the application. Do NOT invent login screens, user avatars, multi-page CRM dashboards, charts, calendars, or unrelated navigation sidebars.

---

## 2. Dual Design System — Full Light Mode & Dark Mode Parity (Desktop & Mobile)

- **Aesthetic Direction:** Understated European GovTech / LegalTech utility built for 6–8 hours of focused daily legal work. High scannability, zero decorative clutter, crisp hairline borders over heavy drop shadows, clear typographic hierarchy, and comfortable low-strain contrast across both themes and all screen sizes.
- **Responsive Breakpoints & Target Viewports:**
  - **Desktop (Primary):** `1440px` (`≥ 1200px` 3-zone workspace).
  - **Tablet / Compact Laptop:** `768px–1199px` (collapsible nav rail, fluid form column, compact action dock).
  - **Mobile (Dedicated Smartphone UI):** `375px–390px` (`< 768px`, single-column touch-first layout with compact mobile header, accordion income blocks, sticky bottom action bar, bottom sheet, and full-screen document preview).
- **Theme Switcher in Top Header:** Place a clearly recognizable **Light / Dark Mode** control in the top-right header utility cluster right beside the Profile and AI Settings buttons — styled as a compact segmented pill toggle (`[☀️ Світла | 🌙 Темна]`, height `34px`, radius `999px`) on desktop, and a crisp `44px × 44px` bordered icon button (`🌙` in Light Mode / `☀️` in Dark Mode, tooltip: `Перемкнути тему`) on mobile.

### Color Tokens (Light Mode vs. Dark Mode)

| Token Role | Light Mode (Default) | Dark Mode (`data-theme="dark"` — NO pure `#000000`) |
|---|---|---|
| **Page Canvas Background** | `#F4F6F9` (soft cool light gray) | `#0F172A` (deep slate-graphite; reduces eye fatigue) |
| **Elevated Card / Panel / Modal / Sheet Surface** | `#FFFFFF` (pure white) | `#1E293B` (1–2 tones lighter than canvas) |
| **Nested Container / Month Card / Row Well** | `#F8FAFC` | `#162032` (subtle recessed surface) or `#253349` (raised row) |
| **Card Border / Subtle Divider** | `#E2E8F0` | `#334155` (crisp `1px` separation) |
| **Primary Accent (Legal Navy / Soft Slate-Blue)** | `#1E3A5F` (hover `#152C4A`) | `#3B82F6` primary fills / `#60A5FA` text & icons (hover `#93C5FD`) |
| **Primary Accent Soft Container / Active Tab Fill** | `#EBF2FA` (border `#BFDBFE`, text `#1E3A5F`) | `rgba(59, 130, 246, 0.16)` (border `#3B82F6`, text `#93C5FD`) |
| **Secondary Accent (Graphite)** | `#334155` | `#94A3B8` |
| **Primary Text (Headings & Input Values)** | `#0F172A` | `#F1F5F9` (comfortable soft off-white, no harsh glare) |
| **Secondary Text (Form Labels & Subtitles)** | `#475569` | `#CBD5E1` |
| **Muted Text (Placeholders & Hints)** | `#94A3B8` | `#64748B` (placeholders) / `#94A3B8` (helper captions) |
| **Input / Select / Textarea / Datepicker Fill** | `#FFFFFF` (border `#CBD5E1`, icon `#64748B`) | `#0F172A` recessed fill (border `#475569`, light chevron/calendar icon `#94A3B8`) |
| **Input Focus State** | Border `#1E3A5F`, ring `0 0 0 3px rgba(30, 58, 95, 0.14)` | Border `#60A5FA`, ring `0 0 0 3px rgba(96, 165, 250, 0.22)` |
| **Readonly Input (`signerName`)** | Fill `#F1F5F9`, text `#64748B`, border `#E2E8F0` | Fill `#172234`, text `#94A3B8`, border `#334155` |

### Semantic Status Tokens (WCAG AA/AAA Contrast in Both Themes)

| Semantic State | Light Mode | Dark Mode |
|---|---|---|
| **Income Within Threshold / Included Row (Emerald)** | Text `#166534`, Fill `#ECFDF5`, Border `#86EFAC`, Accent `#16A34A` | Text `#86EFAC`, Fill `#122B23` (`rgba(22,163,74,0.16)`), Border `#22C55E`, Accent `#4ADE80` |
| **Income Excluded / 0,00 грн Row (Neutral Slate)** | Text `#475569`, Fill `#F1F5F9`, Border `#CBD5E1` | Text `#CBD5E1`, Fill `#263244`, Border `#475569` |
| **Threshold Exceeded / Deduction / Validation Error (Crimson)** | Text `#B91C1C`, Fill `#FEF2F2`, Border `#FCA5A5`, Error Ring `#DC2626` | Text `#FCA5A5`, Fill `#311820` (`rgba(239,68,68,0.16)`), Border `#EF4444`, Error Ring `#F87171` |
| **Caution / Borderline Notice / Emblem Card (Amber)** | Text `#B45309`, Fill `#FFFBEB`, Border `#FCD34D`, Border Accent `#D97706` | Text `#FCD34D`, Fill `#2C2314` (`rgba(245,158,11,0.14)`), Border `#B45309`, Border Accent `#F59E0B` |
| **AI Assistant Controls (Soft Royal Blue)** | Text `#1D4ED8`, Fill `#EFF6FF`, Border `#BFDBFE` | Text `#93C5FD`, Fill `rgba(59, 130, 246, 0.18)`, Border `#3B82F6` |

### Typography, Radii, Spacing & Elevation
- **UI Font:** `Inter` or `Roboto` (full Ukrainian Cyrillic character set).
- **Scale:**
  - App Title: `18px–20px` desktop / `16px` mobile, `600` weight, tight tracking.
  - Section Card Heading: `14px`, `700` weight, uppercase with compact numeric pill badge (`01`–`09`), colored with Primary Accent (`#1E3A5F` light / `#93C5FD` dark).
  - Form Labels: `13px`, `500` weight; required asterisk `*` in `#DC2626` (light) / `#F87171` (dark).
  - Input & Select Values: `14px` desktop (`40px–42px` height) / `16px` mobile (`44px–48px` touch height to prevent mobile browser auto-zoom), `400` weight, horizontal padding `12px–14px`.
  - Monetary Amounts & Calculations: `font-variant-numeric: tabular-nums` for crisp column alignment.
  - Legal Document Preview Sheet: `Times New Roman`, `14px–16px`, line-height `1.5`, official Ukrainian print proportions.
- **Radii:** Cards & Modals `12px`; mobile Bottom Sheet top corners `20px`; nested sub-cards & month cards `10px`; inputs, selects, buttons `8px`; status chips & theme pill `999px`.
- **Spacing Scale:** `8px` base grid; `20px–24px` card padding on desktop (`16px` on mobile); `16px` grid gaps between fields; `20px` vertical spacing between section cards (`14px–16px` on mobile).
- **Elevation:** Flat `1px` crisp borders on cards; subtle `0 1px 3px rgba(15,23,42,0.06)` (light) or `0 1px 3px rgba(0,0,0,0.30)` (dark) on sticky header/rails/bottom bar; `0 20px 44px rgba(15,23,42,0.22)` (light) or `0 24px 48px rgba(0,0,0,0.55)` (dark) on modals and bottom sheets.

---

## 3. Desktop Layout — Ergonomic 3-Zone Workspace (`1440px`)

Replace the old single narrow vertical form with a balanced **3-zone desktop layout** (`max-width: 1420px`, centered, `24px` outer horizontal padding) so lawyers can jump to any section and preview/generate any document without scrolling back and forth.

### Zone A: Sticky Full-Width Top Header Bar (`64px` height, sticky top `0`, `1px` bottom border)
- **Left Brand Cluster:**
  - Crisp Ukrainian Coat of Arms (Tryzub) icon mark (`24px–28px`, subtle gold/navy in light mode, soft gold/light-slate in dark mode).
  - Title **«Генератор документів на БВПД»** with a subtle pill badge `Система БВПД`.
- **Right Utility Controls Cluster (aligned horizontally with `8px–10px` gaps):**
  1. Outlined button **«Імпорт профілю»** (folder/upload icon; imports client JSON file; tooltip: `Завантажити дані клієнта з файлу`).
  2. Outlined button **«Експорт профілю»** (save/download icon; exports client JSON file; tooltip: `Зберегти дані клієнта у файл`).
  3. Outlined button **«Налаштування ШІ»** (sparkles/key icon with subtle status dot; opens the local Gemini API key configuration modal).
  4. Danger-outlined button **«Скинути дані»** (reset arrow icon, crimson accent; tooltip: `Очистити всі поля, крім даних працівника`).
  5. Vertical hairline separator (`1px × 24px`) followed by the **Light / Dark Theme Switcher** (`☀️` / `🌙` compact segmented toggle or icon pill, tooltip: `Перемкнути тему`).

### Zone B: Left Sticky Section Navigation Rail (`230px` width on desktop; collapses on mobile)
A quiet, always-visible vertical anchor menu listing every real section card with active state highlight (soft accent fill + `3px` left accent bar) and subtle conditional/completion indicators:
- `Регіональний центр`
- `1. Дані заявника`
- `2. Суть звернення`
- `3. Доходи` *(conditional pill badge: `п. 1`)*
- `4. Додатки`
- `5. Підпис`
- `6. Службові відмітки`
- `7. Накази`
- `8. Службовий лист`
- `9. Налаштування (Герб)`

### Zone C: Center Main Form Column (Fluid `1fr`, `max-width: 780px`, vertical stack of section cards)
Contains **every single real section, field, conditional block, and control** from the codebase:

1. **Card 0 — «Оберіть центр»**
   - Full-width select **«Регіональний центр»** with 5 options: `Південний міжрегіональний центр`, `Північний міжрегіональний центр`, `Західний міжрегіональний центр`, `Південно-Східний міжрегіональний центр`, `Східний міжрегіональний центр`.

2. **Card 1 — «1. Дані заявника»**
   - Full-width text input **«ПІБ Заявника/Представника (у називному відмінку) *»** (placeholder: `Іванов Іван Іванович`) with inline declension loading spinner on the right edge.
   - Collapsible indented inflection helper strip (nested surface with `3px` primary-accent left border): **«Родовий відмінок (Від кого? — для шапки заяви):»** (placeholder: `Іванова Івана Івановича`).
   - 2-column row:
     - **«Телефон *»** (masked input, placeholder: `+38 (0__) ___-__-__`)
     - **«Адреса електронної пошти»** *(optional, NO asterisk; placeholder: `email@example.com`)*
   - Full-width text input **«Адреса проживання *»** (placeholder: `вулиця, будинок, кв., місто, індекс`).
   - 2-column row:
     - Select **«Повідомити мене»** (`телефоном`, `засобами поштового зв'язку на адресу (вказану в зверненні адресу)`, `особисто при відвідуванні бюро правничої допомоги`).
     - Text input **«Документ особи *»** (placeholder: `Паспорт серії...`).

3. **Card 2 — «2. Суть звернення»**
   - Full-width text input **«Кому надати допомогу (ПІБ у називному відмінку) *»** (placeholder: `Іванов Іван Іванович`) with inline declension spinner.
   - Collapsible inflection helper strip containing two stacked/2-col inputs:
     - **«Давальний відмінок (Кому? — для тексту заяви та наказів):»** (placeholder: `Іванову Івану Івановичу`)
     - **«Родовий відмінок (Кого? — для наказів та службових):»** (placeholder: `Іванова Івана Івановича`)
   - Segmented radio card selector **«Тип провадження»** (3 mutually exclusive options):
     - `Цивільне / Адміністративне (КАСУ)` *(selected by default)*
     - `Кримінальне (Потерпілий)`
     - `Адмін. правопорушення (КУпАП)`
   - **Conditional Proceeding Fields Block** (swaps based on selected radio):
     - *Civil / KASU:* Select **«Вид правничої послуги *»** (placeholder: `Оберіть вид послуги...`; 4 options: `здійснення представництва інтересів в суді`, `здійснення представництва інтересів`, `складення документів процесуального характеру`, `здійснення представництва інтересів в інших державних органах, органах місцевого самоврядування, перед іншими особами`) + textarea **«У справі *»** (placeholder: `(коротко викладається суть правового питання)`).
     - *Criminal (Victim):* 2×2 grid: **«Номер ЄРДР *»** (`Наприклад: 12025164490000371`), **«Дата внесення до ЄРДР *»** (datepicker), **«Кваліфікація (Стаття КК України) *»** (`Наприклад: ч. 1 ст. 125 КК України`), **«Номер судової справи (якщо є)»** (`Наприклад: 522/21325/25`, optional).
     - *Admin Offenses (KUoAP):* Select **«Вид послуги (КУпАП)»** (3 options: `здійснення представництва інтересів в суді (судове провадження не відкрито)`, `здійснення представництва інтересів (судове провадження відкрито)`, `з питання захисту`), text input **«Кваліфікація (Стаття КУпАП)»** (`Наприклад: ч. 1 ст. 130`), and conditionally either **«Номер судової справи»** (`Наприклад: 522/26805/25`) or a 2-column row **«Серія»** (`Наприклад: ААА`) + **«№»** (`Наприклад: 1193`).
   - **Searchable Law Category Combobox:**
     - Label **«Категорія суб'єкта права (Пункт ч. 1 ст. 14 Закону) *»** + circular `?` info icon button (tooltip: `Показати повний опис`).
     - Searchable input with inline clear `✕` icon and dropdown of all 25 statutory categories (`п. 1 - Малозабезпечені особи`, `п. 1 - Особи з інвалідністю`, `п. 2 – Діти`, `п. 9 – Засуджені та особи, взяті под варту`, ..., `п. 14 – Внутрішньо переміщені особи (ВПО)`, ..., `п. 17 – Ветерани війни та сім'ї загиблих`, ..., `п. 28-1 – Родичі зниклих безвісти`, `п. 29 – Відновлення документів для компенсації`; placeholder: `Почніть вводити (наприклад: ВПО, 14)...`).
     - Collapsible statutory description callout box (accent-tinted fill + left accent border) showing the full description of the chosen category.

4. **Card 3 — «3. Доходи»** *(conditionally visible for `п. 1 - Малозабезпечені особи` or `п. 1 - Особи з інвалідністю`)*
   - Required helper note in crimson: `* Для обраної категорії заповнення доходів є обов'язковим.`
   - Top 2-column row:
     - **«Період (квартал)»** (`1 квартал`–`4 квартал` for low-income; swaps to **«Період (місяць)»** `січень`–`грудень` for disability)
     - **«Рік»** (number input, default `2026`)
   - Full-width selector (for low-income): **«Статус працездатності заявника (для перевірки лімітів)»** (`Працездатна особа (поріг 6 656 грн)` / `Особа, яка втратила працездатність (поріг 5 190 грн)`).
   - **Calculation Mode Switcher Tabs** (segmented pill tab bar for low-income):
     - Tab 1: **«Простий розрахунок»** (calculator icon) — reveals a 3-column grid of monthly inputs (`Липень`, `Серпень`, `Вересень`, placeholder `0.00`).
     - Tab 2: **«Розширений розрахунок (за Методикою № 1445/5)»** (scales icon) — reveals:
       - **Special Calculation Modes Sub-Card** (`Спеціальні режими розрахунку (п. 3 Методики № 1445/5)`): 2-column grid with select **«Статус ФОП (абз. 1–4 пп. 6 п. 3)»** (`Не є ФОП / ФОП на загальній системі`, `ФОП 1 група ЄП (норматив 8 647,00 грн/міс)`, `ФОП 2 група ЄП (норматив 17 294,00 грн/міс)`, `ФОП 3 група ЄП (норматив 25 941,00 грн/міс)`) AND checkbox **«Вперше призначено пенсію / звільнення у розрахунковому періоді (пп. 5 п. 3)»** toggling conditional input **«Розмір щомісячної пенсії (грн)»**.
       - **3 Dynamic Monthly Cards** (labeled dynamically for the chosen quarter, e.g., `Липень`, `Серпень`, `Вересень`):
         - Card header: Month name on left + live emerald accounted subtotal chip on right (`Враховано за місяць: 6 400,00 грн`).
         - Dynamic list of **Income Rows** inside each month card; each row contains:
           - Grouped 4DF income code dropdown (6 optgroups: Оподатковувані доходи, Доходи з періодичним розподілом, Відрахування з доходу, Соцвиплати код 128 що враховуються, Соцвиплати код 128 що НЕ враховуються, Інші неоподатковувані доходи).
           - Numeric input `Сума (грн)`.
           - Conditional Periodicity select (`Період: 1 міс.`, `3 міс. (квартал)`, `6 міс. (півріччя)`, `12 міс. (рік)`).
           - Remove row button `✕` (subtle crimson circular/square icon button).
           - Conditional inline checkboxes below the row: `Податок у 4ДФ = 0,00 грн` and `Фактично НЕ виплачено (довідка про заборгованість)`.
           - Full-width semantic calculation badge along the bottom edge of the row:
             - Emerald badge: `Враховується (+6 400,00 грн)`
             - Neutral slate badge: `Не враховується (0,00 грн)`
             - Crimson badge: `Відрахування (-1 200,00 грн)`
         - Compact secondary button at bottom of each month card: **«+ Додати код доходу»**.
   - **Summary Results Bar** (3 columns for low-income; 2 columns for disability):
     - **«Сума (грн)»** (`Наприклад: 13500.00`)
     - **«Середньомісячна (грн)»** (`Наприклад: 4500.00`)
     - **«Джерело»** (`пенсія, заробітна плата...`)
   - **Live Eligibility Status Banner (Both Semantic States Supported in Light & Dark Modes):**
     - **Within-Threshold Pass State (Emerald):** compact reassuring callout showing check icon + `Дохід у межах норми: середньомісячний дохід 4 500,00 грн не перевищує встановлений законом поріг (6 656,00 грн).`
     - **Over-Limit Legal Alert State (Crimson):** expanded warning panel with:
       - Headline: `Увага! Зазначений дохід перевищує встановлений законом поріг (6 656 грн) для цієї категорії.` + exact overage line (`Перевищення ліміту на ... грн/міс.`).
       - Clean 4-column **Quarterly Breakdown Table**: `Період` | `Нараховано брутто (грн)` | `Виключено / не враховано (грн)` | `Враховано до розрахунку (грн)`, plus `Разом за квартал` and `Підсумковий середньомісячний` summary rows.
       - Optional statutory info callout if FOP normative or First-Time Pension rule is active.
       - Numbered 4-point **«Юридичний чеклист перед прийняттям рішення про відмову:»** list.

5. **Card 4 — «4. Додатки»**
   - Dynamic compact list (5 rows initialized by default). Each row horizontally aligned: sequential number (`1.`–`5.`), wide input `Назва документа`, inline label `на`, narrow centered input `__`, inline label `арк.`, and subtle delete icon `✕`.
   - Secondary button below: **«+ Додати рядок»**.

6. **Card 5 — «5. Підпис»**
   - 2-column row: **«Дата»** (datepicker) + **«П.І.Б., підпис заявника/представника»** (readonly input, placeholder `Заповнюється автоматично`, with subtle auto-filled cue).

7. **Card 6 — «6. Службові відмітки»** *(employee fields auto-persisted in localStorage)*
   - Full-width input **«ПІБ працівника, який прийняв заяву (у називному) *»** (`Петров Петро Петрович`) + declension spinner + collapsible helper strip **«Родовий відмінок (Кого? — для службових):»** (`Петрова Петра Петровича`).
   - 3-column (or 2+1) row: **«№ РКЗК *»** (`Наприклад: 2026-1234568`), **«Реєстраційний номер звернення»** (`Наприклад: 123/4ОБ`), **«Дата реєстрації звернення»** (datepicker).

8. **Card 7 — «7. Накази»**
   - Full-width select **«Підписант»** (`Сергій МЕРЗЛЯКОВ`, `Сергій КУДРЯВЦЕВ`).

9. **Card 8 — «8. Службовий лист»**
   - 2-column row:
     - Select **«Посада працівника»** (`помічник юриста`, `юрист`, `начальник`)
     - Select **«Назва бюро»** (6 options: `Одеського бюро правничої допомоги №1`, `№3`, `№4`, `Доброславського`, `Біляївського`, `Овідіопольського бюро правничої допомоги`).
   - **Additional Info & Gemini AI Assistant Sub-Block:**
     - Header bar: Label **«Зазначити додаткову інформацію (тільки для службового листа на адвоката)»** + circular `?` help icon (`Як налаштувати ШІ?`) on left; two soft royal-blue AI buttons on right: **«✨ Офіційно»** (formalize draft) and **«📝 Коректор»** (proofread legal grammar & style).
     - Collapsible **AI Setup Help Callout** (`Як увімкнути функції штучного інтелекту (ШІ)?`) showing the 4-step guide (`aistudio.google.com` -> `"Create API key"`), local storage privacy note (`Ключ зберігається лише у вашому браузері і нікуди не передається`), and inline reset link (`Скинути налаштування ключа`).
     - Multi-line textarea (`Наприклад: Справа потребує підготовки до судового розгляду...`) supporting a translucent theme-aware loading overlay with spinner while Gemini AI processes the anonymized text.

10. **Card 9 — «9. Налаштування (Герб)»**
    - Subtle amber-bordered utility card for the Ukrainian Coat of Arms printed on Orders.
    - Clean horizontal layout: dashed drag-and-drop upload area (`Перетягніть файл герба сюди (png, jpg)`) on left + active Tryzub preview thumbnail on a clean subtle mat with **«Скинути герб до стандартного»** (`✕`) button on right.

### Zone D: Right Sticky Quick Actions Panel (`320px` width on desktop; replaced by Sticky Bottom Bar + Bottom Sheet on mobile)
An always-accessible elevated card titled **«Формування документів»** containing all 6 real document workflows, each pairing a square outlined `👁️` preview button (`42px × 42px`) with its DOCX generation button:
- **Group 1: «Основні документи клієнта»** (Primary filled accent buttons):
  1. `[👁️]` + **«Сформувати Заяву»** (document icon)
  2. `[👁️]` + **«Сформувати Талон»** (ticket/bookmark icon)
- Subtle horizontal divider.
- **Group 2: «Призначення адвоката»** (Secondary outlined accent buttons):
  3. `[👁️]` + **«Наказ на адвоката»**
  4. `[👁️]` + **«Службова на адвоката»**
- **Group 3: «Уповноваження працівника»** (Secondary outlined accent buttons):
  5. `[👁️]` + **«Наказ на працівника»**
  6. `[👁️]` + **«Службова на працівника»**
- Subtle footer metadata inside card: `Формат експорту: .DOCX (ДСТУ / Times New Roman)`

### Global Notifications, Validation States & AI Key Modal
- **Floating Bottom-Center Toast:**
  - Validation Error variant: crimson pill (`Заповніть обов'язкові поля!`, `Помилка ШІ: Недійсний API-ключ...`). On mobile, floats `16px` above the Sticky Bottom Action Bar.
  - Info / Success variant: primary accent pill (`Профіль успішно завантажено!`, `Дані клієнта очищено!`, `Текст успішно оброблено штучним інтелектом!`).
- **Validation Error Highlighting:** Empty required fields show crisp crimson `1.5px` border + soft error glow ring (`rgba(220,38,38,0.14)` light / `rgba(248,113,113,0.22)` dark) in both themes.
- **Gemini AI API Key Modal («Налаштування API-ключа ШІ (Gemini)»):** Clean compact dialog (`max-width: 480px` on desktop; full-width rounded bottom sheet or centered `92vw` dialog on mobile; styled for both Light and Dark Modes) with masked password input (`Вставте ваш Gemini API-ключ...`), privacy reassurance badge (`Ключ зберігається лише локально у вашому браузері; ПІБ клієнта анонімізується`), direct link to `aistudio.google.com`, primary button **«Зберегти ключ»**, and danger-ghost button **«Скинути ключ»**.

---

## 4. Mobile UI & Responsive Adaptation (`375px–390px` Viewport)

Design dedicated, ergonomic smartphone layouts (`375px–390px` width) using the **exact same Light & Dark Mode design system tokens** so lawyers working on field intake or reviewing cases from a phone get zero horizontal overflow and effortless one-handed navigation:

### A. Single-Column Form Architecture & Mobile Navigation
- **Layout Grid:** All 2-column and 3-column desktop form grids (`Телефон + Email`, `Повідомити мене + Документ`, Criminal `2×2` ERDR block, `Період + Рік`, 3-month simple income inputs, `Сума + Середньомісячна + Джерело`, `Підпис`, `РКЗК + Рег. номер + Дата`, `Посада + Бюро`) collapse cleanly into a **single vertical column (`1fr`)** with `16px` horizontal viewport margins, `16px` card padding, `14px–16px` vertical field spacing, and `96px` bottom scroll padding so the sticky footer never overlaps the last card.
- **Compact Section Jump Bar:** Directly beneath the sticky mobile header, place a sleek single-row horizontally scrollable pill strip (`Регіональний центр`, `1. Заявник`, `2. Звернення`, `3. Доходи`, `4. Додатки`, `5. Підпис`, `6. Службові`, `7. Накази`, `8. Лист`, `9. Герб`) so users can jump across sections with one thumb tap.
- **Attachments List (`4. Додатки`) on Mobile:** Each attachment item renders as a compact bordered 2-line mini-card: Line 1 shows index (`1.`), full-width `Назва документа` input, and `44px` crimson `✕` delete icon; Line 2 shows inline `на` + touch-friendly pages input (`__`) + `арк.`.

### B. Compact Sticky Mobile Header (`56px` height, `1px` bottom border)
- **Left:** Subtle Ukrainian Coat of Arms (Tryzub) icon (`22px`) + shortened single-line title **«Генератор БВПД»** (zero wrapping, high contrast).
- **Right Quick-Access Icons (`44px × 44px` tap targets, uncluttered layout):**
  1. **Theme Switcher icon button** (`🌙` / `☀️`, toggles Light / Dark Mode).
  2. **AI Settings icon button** (sparkles/key icon with subtle status dot; opens Gemini API key dialog).
  3. **Profile & Utilities Menu button** (profile/folder or `⋯` overflow button opening a clean dropdown/sheet with `📂 Імпорт профілю`, `💾 Експорт профілю`, and danger action `↺ Скинути дані`).

### C. Touch-Friendly Ergonomics (Minimum `44px–48px` Tap Targets)
- Every input, `<select>`, datepicker, segmented tab, button, and checkbox row must have a **minimum touch height of `44px–48px`** and `16px` input font size (preventing iOS zoom).
- `Тип провадження` radio selector stacks into 3 full-width `48px` selectable touch cards (`Цивільне / Адміністративне (КАСУ)`, `Кримінальне (Потерпілий)`, `Адмін. правопорушення (КУпАП)`).
- AI drafting controls in Section 8 (`✨ Офіційно`, `📝 Коректор`) sit side-by-side in an equal-width 2-column `44px` touch bar right above the textarea.
- Checkboxes use a crisp `22px × 22px` visual indicator embedded in a full-width `44px+` tappable label row.

### D. Mobile Adaptation of Complex Extended Income Calculator (3 Months + 4DF Codes)
- **Mode Switcher:** Segmented pill bar (`Простий розрахунок` / `Розширений (№ 1445/5)`) spanning 100% width (`44px–48px` height).
- **3 Monthly Blocks as a Vertical Accordion** *(eliminating horizontal overflow on `375px–390px` screens)*:
  - Each of the 3 months (`Липень`, `Серпень`, `Вересень`) renders as a collapsible accordion card (`border-radius: 10px`).
  - **Accordion Header (`52px` min-height):** Left shows Month Name + expand/collapse chevron (`▾` / `▸`); right shows live emerald subtotal pill (`Враховано: 7 200,00 грн`, `tabular-nums`) always visible even when collapsed.
  - **Inside an Expanded Month Card — Vertically Stacked 4DF Income Rows:** Each `.income-row` is a nested sub-card with zero horizontal scrolling:
    1. Top strip: full-width 4DF Code `<select>` (`48px` height, clean ellipsis) + `44px` crimson `✕` remove button.
    2. Input strip: full-width `Сума (грн)` numeric input (`48px` height) + conditional full-width `Період` periodicity `<select>` stacked cleanly underneath when applicable.
    3. Options strip: stacked `44px` touch checkbox rows (`Податок у 4ДФ = 0,00 грн`, `Фактично НЕ виплачено (довідка про заборгованість)`).
    4. Full-width semantic status badge (`Враховується (+7 200,00 грн)`, `Не враховується (0,00 грн)`, or `Відрахування (-1 200,00 грн)`) wrapping cleanly to 2 lines if needed.
  - Full-width `44px` secondary button **«+ Додати код доходу»** at the bottom of the expanded accordion body.
- **Mobile Eligibility & Breakdown Block:** Quarterly breakdown renders cleanly as compact stacked month-summary rows (`Липень` / `Серпень` / `Вересень` / `Разом` / `Середньомісячний`) inside the crimson Over-Limit Alert Box (above the 4-point legal refusal checklist), alongside full support for the compact emerald **«Дохід у межах норми»** pass banner in both Light and Dark themes.

### E. Sticky Mobile Bottom Action Bar & DOCX Bottom Sheet
- **Sticky Bottom Action Bar** (fixed to bottom edge, `68px` height + safe-area inset, `1px` top border, subtle elevation shadow):
  - **Left Secondary Outlined Button (`~42%` width, `48px` height):** **«👁️ Перегляд»** — opens immediate full-screen preview of the primary document (`Заява`).
  - **Right Primary Filled CTA (`~58%` width, `48px` height):** **«📄 Документи (6) ▴»** — opens the **Mobile Document Actions Bottom Sheet**.
- **Mobile Bottom Sheet («Формування документів»):** Slides smoothly from the bottom (`border-radius: 20px 20px 0 0`, drag handle bar, header `Формування документів` + `44px` close `×`, dimmed backdrop) listing all **6 real DOCX actions** grouped into `Основні документи клієнта`, `Призначення адвоката`, and `Уповноваження працівника` — each row `48px–52px` tall pairing a `44px` outlined `👁️` preview button with a full-width DOCX download button (`Сформувати Заяву`, `Сформувати Талон`, `Наказ на адвоката`, `Службова на адвоката`, `Наказ на працівника`, `Службова на працівника`).

### F. Full-Screen Mobile Document Preview Modal («Попередній перегляд»)
- Opens at **`100vw × 100dvh`** (edge-to-edge full-screen overlay) for comfortable smartphone inspection:
  - **Sticky Top Bar (`56px`):** Title/chip (`Попередній перегляд · Наказ на адвоката`), compact zoom pill controls (`−`, `100%`, `+` / pinch-zoom cue), and `44px` close `×` button.
  - **Scrollable & Zoomable Sheet Canvas:** Frames the A4 `Times New Roman` legal sheet scaled smoothly to mobile width (`Light Mode`: crisp `#FFFFFF` paper on `#E2E8F0` stage; `Dark Mode`: eye-comfort `#F1F5F9` paper with `#111827` ink on deep `#0B1120` stage).
  - **Fixed Bottom Download Bar (`68px` + safe area):** Prominent full-width `48px` primary button **«⬇️ Завантажити .DOCX»** so the lawyer can download the verified document directly from the preview without closing it.

---

## 5. Key Screens & States to Generate Separately (7 Artboards: 4 Desktop + 3 Mobile)

Generate **7 dedicated, cohesive high-resolution screens/artboards** (4 Desktop + 3 Mobile) strictly adhering to the dual Light/Dark design system and exact Ukrainian copy above:

### Desktop Screens (`1440×1024+`)

1. **Screen 1 — Desktop Main Form Workspace in Light Mode (`1440×1024+`, Light Theme):**
   - Full 3-zone desktop layout on `#F4F6F9` canvas with crisp `#FFFFFF` cards and `#1E3A5F` Legal Navy accents.
   - Sticky Top Header showing Tryzub icon, **«Генератор документів на БВПД»**, `Імпорт профілю`, `Експорт профілю`, `Налаштування ШІ`, `Скинути дані`, and the segmented Theme Switcher active on **Light (`☀️ Світла`)**.
   - Left Sticky Section Rail (`Регіональний центр`, `1`–`9`) with `2. Суть звернення` active.
   - Center Form Column showing `Оберіть центр`, `1. Дані заявника` filled with realistic Ukrainian sample data (e.g., `Коваленко Олена Петрівна`, expanded genitive helper `Коваленко Олени Петрівни`, masked phone `+38 (067) 412-38-90`, optional email, address, passport), `2. Суть звернення` (`Цивільне / Адміністративне (КАСУ)` active, searchable combobox displaying `п. 14 – Внутрішньо переміщені особи (ВПО)` with expanded law description callout), and top edge of `4. Додатки`.
   - Right Sticky Panel **«Формування документів»** with all 6 Preview `👁️` + Generate DOCX button pairs cleanly grouped.

2. **Screen 2 — Desktop Main Form Workspace in Dark Mode (`1440×1024+`, Dark Theme):**
   - The exact same ergonomic 3-zone workspace rendered in the **Dark Mode** palette: deep slate-graphite `#0F172A` canvas (never pure `#000000`), elevated `#1E293B` cards with `#334155` `1px` borders, soft off-white `#F1F5F9` typography, muted-yet-clear `#60A5FA` / `#3B82F6` primary accents, and properly recessed dark inputs/selects/datepickers (`#0F172A` fill, `#475569` border, light dropdown arrows & calendar icons).
   - Theme Switcher in Top Header active on **Dark (`🌙 Темна`)**.
   - Center column displays lower operational sections (`6. Службові відмітки` with a subtle validation error border on `№ РКЗК *`, `7. Накази`, `8. Службовий лист` with dark-adapted `✨ Офіційно` & `📝 Коректор` AI buttons and draft justification text, and `9. Налаштування (Герб)` with dark amber accent & Tryzub preview), paired with a subtle bottom-center crimson validation toast (`Заповніть обов'язкові поля!`) and/or compact floating reference of the Dark Mode **«Налаштування API-ключа ШІ (Gemini)»** modal to demonstrate complete dark-theme contrast across forms, alerts, and modals.

3. **Screen 3 — Desktop Expanded Extended Income Calculator («3. Доходи — Розширений розрахунок за Методикою № 1445/5»):**
   - Focused desktop view of Section `3. Доходи` opened for `п. 1 - Малозабезпечені особи` with **«Розширений розрахунок (за Методикою № 1445/5)»** tab active (`3 квартал`, `2026`, `Працездатна особа (поріг 6 656 грн)`).
   - Displays the **Special Calculation Modes Sub-Card** (`Статус ФОП` dropdown + `Вперше призначено пенсію / звільнення...` checkbox).
   - Displays **all 3 Monthly Blocks** (`Липень`, `Серпень`, `Вересень`) with rich realistic 4DF rows showcasing every semantic badge and conditional control:
     - `Липень`: `101 — Заробітна плата` (`7 200,00`, emerald `Враховується (+7 200,00 грн)` badge) + `128 — Допомога на проживання ВПО` (`2 000,00`, neutral slate `Не враховується (0,00 грн)` badge).
     - `Серпень`: `106, 195 — Оренда земельного паю` (`12 000,00`, visible `Період: 12 міс. (рік)` select, emerald `Враховується (+3 000,00 грн)` badge) + `Сплачені аліменти` (`1 200,00`, crimson `Відрахування (-1 200,00 грн)` badge).
     - `Вересень`: `101 — Заробітна плата` (`7 500,00`, checkbox `Фактично НЕ виплачено (довідка про заборгованість)` visible) + `+ Додати код доходу` buttons.
   - Summary Results Row (`Сума (грн)`, `Середньомісячна (грн)`, `Джерело`).
   - Clearly showcases **both threshold eligibility states**:
     - Primary state: expanded crimson **Over-Limit Legal Alert Box** (`Увага! Зазначений дохід перевищує встановлений законом поріг (6 656 грн)` + exact monthly excess, 4-column quarterly breakdown table, and 4-point `Юридичний чеклист перед прийняттям рішення про відмову`).
     - Side/companion state card (or split showcase): emerald **Within-Norm Pass Banner** (`Дохід у межах норми: 4 850,00 грн/міс. ≤ 6 656,00 грн`) demonstrating balanced emerald readability in both Light and Dark themes.

4. **Screen 4 — Document Preview Modal («Попередній перегляд») in Both Light & Dark Modes (Desktop + Mobile Full-Screen Reference):**
   - Present a side-by-side dual-theme showcase of the centered elevated **«Попередній перегляд»** modal (`max-width: 820px`) over the dimmed form backdrop, featuring the header (`Попередній перегляд`, subtle document type pill `Наказ на адвоката`, close `×` button) and the scrollable A4-proportioned legal paper sheet inside:
     - **Light Mode Variant:** `#FFFFFF` modal chrome, `#E2E8F0` neutral stage framing a crisp `#FFFFFF` A4 paper sheet (`1px solid #CBD5E1` border, soft shadow), `Times New Roman` `#000000` ink.
     - **Dark Mode Variant:** `#1E293B` modal chrome with `#F1F5F9` title and `#334155` border, deep `#0B1120` preview stage framing an **eye-comfort adapted paper sheet** (`#F1F5F9` softly attenuated off-white paper with `#111827` `Times New Roman` ink and subtle edge elevation — keeping 100% authentic printable Ukrainian legal formatting without blinding white glare against the dark UI).
   - Include a compact mobile full-screen preview companion frame (`390×844`) illustrating the sticky mobile zoom toolbar (`− 100% +`), responsive A4 sheet view, and fixed bottom **«⬇️ Завантажити .DOCX»** button.
   - Document content rendered realistically on the sheet: centered Ukrainian Tryzub Coat of Arms, bold uppercase `ПІВДЕННИЙ МІЖРЕГІОНАЛЬНИЙ ЦЕНТР З НАДАННЯ БЕЗОПЛАТНОЇ ПРАВНИЧОЇ ДОПОМОГИ`, `Н А К А З`, 3-column metadata row (`від __________________` | `Одеса` | `№ _________`), title `Про надання безоплатної вторинної правничої допомоги О. П. Коваленко`, Ukrainian legal preamble, `НАКАЗУЮ:` clauses (`1.`, `2.`, `3.`), and signatory block (`Начальник Південного управління надання безоплатної правничої допомоги` / `Сергій МЕРЗЛЯКОВ`).

### Mobile Screens (`390×844` Smartphone Artboards)

5. **Screen 5 — Mobile Main Form Workspace in Light Mode (`390×844`, Light Theme):**
   - Compact sticky Mobile Header (`56px`, `#FFFFFF`) with Tryzub mark, **«Генератор БВПД»**, and `44px` quick-access buttons (Theme `🌙`, AI Settings icon, Profile/Utilities menu icon).
   - Horizontally scrollable section-jump pill bar underneath (`1. Заявник` active).
   - Single-column stacked cards (`#F4F6F9` canvas, `#FFFFFF` cards, `16px` padding): `Оберіть центр`, `1. Дані заявника` with touch-sized `48px` inputs (`Коваленко Олена Петрівна`, expanded genitive strip `Коваленко Олени Петрівни`, `+38 (067) 412-38-90`, optional email, address), and top of `2. Суть звернення` with vertical `48px` `Тип провадження` radio cards.
   - Fixed **Sticky Bottom Action Bar** (`👁️ Перегляд` outlined button + `📄 Документи (6) ▴` primary `#1E3A5F` CTA).

6. **Screen 6 — Mobile Main Form Workspace in Dark Mode (`390×844`, Dark Theme):**
   - Identical mobile single-column ergonomics rendered in the **Dark Mode** palette (`#0F172A` canvas, `#1E293B` elevated cards, `#334155` crisp borders, recessed `#0F172A` `48px` inputs/selects/datepickers with `#475569` borders and light icons, active `☀️` toggle in Dark header).
   - Displays operational intake sections (`2. Суть звернення` searchable category combobox `п. 14 – Внутрішньо переміщені особи (ВПО)` + `8. Службовий лист` with equal-width 2-column `✨ Офіційно` & `📝 Коректор` `44px` touch buttons above the dark textarea), a floating crimson validation toast (`Заповніть обов'язкові поля!`) positioned cleanly above the Dark Sticky Bottom Action Bar.

7. **Screen 7 — Mobile Extended Income Calculator (Vertical Accordion) & Document Bottom Sheet (`390×844`):**
   - Mobile view of Section `3. Доходи` for `п. 1 - Малозабезпечені особи` with **«Розширений (№ 1445/5)»** tab active (`3 квартал`, `2026`, `Працездатна особа (поріг 6 656 грн)`):
     - Single-column `Спеціальні режими розрахунку` card (`Статус ФОП` dropdown + `44px` touch checkbox `Вперше призначено пенсію...`).
     - **3 Monthly Blocks as a clean Vertical Accordion** (zero horizontal overflow): `Липень` **expanded** showing vertically stacked 4DF rows (`101 — Заробітна плата` + `7 200,00` + emerald `Враховується (+7 200,00 грн)` badge; `128 — Допомога на проживання ВПО` + `2 000,00` + neutral `Не враховується (0,00 грн)` badge; full-width `44px` `+ Додати код доходу` button), while `Серпень` (`Враховано: 1 800,00 грн ▸`) and `Вересень` (`Враховано: 7 500,00 грн ▸`) appear neatly **collapsed** with emerald subtotals right in their headers, plus a visible threshold status pill (`Перевищення порогу` or `Дохід у межах норми`).
   - Overlaid from the bottom (or paired cleanly in a 2-state mobile frame): the opened **Mobile Bottom Sheet («Формування документів»)** with rounded top corners (`20px`), drag handle, and large `48px` touch rows for all 6 DOCX document types (`Сформувати Заяву`, `Сформувати Талон`, `Наказ на адвоката`, `Службова на адвоката`, `Наказ на працівника`, `Службова на працівника`), each paired with a `44px` `👁️` preview button.