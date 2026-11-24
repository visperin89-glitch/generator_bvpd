---
name: "БВПД — LegalTech Design System"
description: "Calm, authoritative European GovTech / LegalTech design system for «Генератор документів на БВПД», built for high-legibility daily legal data entry."
---

## Overview

«Генератор документів на БВПД» is a desktop-first Ukrainian GovTech / LegalTech web application used daily by state free legal aid lawyers and case intake specialists. The design system prioritizes calm authority, zero visual noise, crisp 1px structural borders, and high typographic legibility for 6–8 hours of continuous form work without eye strain.

## Colors

The palette pairs authoritative **Legal Navy** (`#1E3A5F`) with cool neutral slate surfaces (`#F4F6F9` canvas, `#FFFFFF` cards) and soft, accessible semantic status tints for legal income-eligibility calculations (Emerald for included income, Slate for excluded, Crimson for deductions and threshold/validation errors, Amber for emblem configuration, and Royal Blue for Gemini AI drafting controls).

```yaml
colors:
  primary-hover: "#152C4A"
  primary-tint: "#EBF2FA"
  primary-border-tint: "#BFDBFE"
  success: "#166534"
  success-container: "#ECFDF5"
  success-border: "#86EFAC"
  neutral-badge: "#475569"
  neutral-badge-container: "#F1F5F9"
  neutral-badge-border: "#CBD5E1"
  error: "#B91C1C"
  on-error: "#FFFFFF"
  error-bright: "#DC2626"
  error-container: "#FEF2F2"
  error-border: "#FCA5A5"
  warning: "#B45309"
  warning-container: "#FFFBEB"
  warning-border: "#FCD34D"
  ai: "#1D4ED8"
  ai-container: "#EFF6FF"
  ai-border: "#BFDBFE"
  paper-dark-stage: "#0B1120"
  paper-dark-ink: "#111827"
  dark-success: "#86EFAC"
  dark-success-container: "#122B23"
  dark-success-border: "#22C55E"
  dark-neutral-badge: "#CBD5E1"
  dark-neutral-badge-container: "#263244"
  dark-neutral-badge-border: "#475569"
  dark-error: "#FCA5A5"
  dark-error-container: "#311820"
  dark-error-border: "#EF4444"
  dark-warning: "#FCD34D"
  dark-warning-container: "#2C2314"
  dark-warning-border: "#B45309"
  dark-ai: "#93C5FD"
  dark-ai-container: "#172554"
  dark-ai-border: "#3B82F6"
  light:
    primary: "#1E3A5F"
    on-primary: "#FFFFFF"
    secondary: "#334155"
    on-secondary: "#FFFFFF"
    background: "#F4F6F9"
    on-background: "#0F172A"
    surface: "#FFFFFF"
    on-surface: "#0F172A"
    surface-subtle: "#F8FAFC"
    surface-readonly: "#F1F5F9"
    on-surface-secondary: "#475569"
    on-surface-muted: "#94A3B8"
    on-surface-readonly: "#627188"
    border: "#E2E8F0"
    border-input: "#CBD5E1"
  dark:
    primary: "#60A5FA"
    on-primary: "#0F172A"
    primary-fill: "#3B82F6"
    on-primary-fill: "#0F172A"
    secondary: "#CBD5E1"
    on-secondary: "#0F172A"
    background: "#0F172A"
    on-background: "#F1F5F9"
    surface: "#1E293B"
    on-surface: "#F1F5F9"
    surface-subtle: "#162032"
    surface-raised: "#253349"
    surface-readonly: "#172234"
    on-surface-secondary: "#CBD5E1"
    on-surface-muted: "#94A3B8"
    on-surface-readonly: "#94A3B8"
    border: "#334155"
    border-input: "#475569"
```

## Typography

**Inter** is used across all UI controls, labels, navigation, and headings for crisp Cyrillic legibility. Monetary figures and numeric tables enforce `tabular-nums` for vertical alignment. **Tinos** (metric-compatible with Times New Roman) is used exclusively inside the A4 legal document preview sheet.

```yaml
typography:
  headline-lg:
    fontFamily: "Inter"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.3px
  headline-sm:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: -0.1px
  section-title:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.2px
  body-md:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Inter"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
  label-md:
    fontFamily: "Inter"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0px
  label-sm:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.1px
  doc-heading:
    fontFamily: "Tinos"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22px
    letterSpacing: 0px
  doc-body:
    fontFamily: "Tinos"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
```

## Layout & Spacing

Desktop-first **3-zone workspace** centered within `max-width: 1400px`, comprising a full-width sticky `64px` top bar, a `220px` sticky left section navigation rail, a fluid `max-width: 780px` center form column, and a `320px` sticky right document actions panel. Spacing follows an `8px` base grid with `20px–24px` card padding, `16px` grid gutters, and `20px` vertical gaps between section cards.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-card: 20px
  gutter-lg: 24px
  gutter-xl: 32px
```

## Elevation & Depth

Hierarchy is conveyed through flat `1px solid` borders (`#E2E8F0` on light, `#334155` on dark) and subtle surface contrast (`#F4F6F9` canvas vs `#FFFFFF` cards vs `#F8FAFC` nested wells) rather than heavy drop shadows. Only sticky panels (`0 1px 2px rgba(15, 23, 42, 0.04)`) and elevated modals (`0 20px 40px rgba(15, 23, 42, 0.18)`) carry shadows.

## Shapes

Clean, restrained corner radii: `12px` on primary section cards and modals, `10px` on nested sub-cards, `8px` on inputs, selects, and buttons, and `9999px` pill radius on compact status badges and floating toasts.

```yaml
rounded:
  sm: 6px
  DEFAULT: 8px
  md: 10px
  lg: 12px
  sheet: 20px
  full: 9999px
```

## Motion & Micro-interaction

Interactions are crisp and immediate (`120ms` ease-out for button hover, border focus rings, and tab switches; `200ms` cubic-bezier for modal entrance and toast appearance). No decorative looping animations.

```yaml
motion:
  state-change:
    duration: 120ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
```

## Voice & Content Strategy

All visible UI copy is written in natural, authoritative **Ukrainian** appropriate for state legal aid administration (БВПД). Labels are concise and precise; action buttons use clear Ukrainian verb phrases («Сформувати Заяву», «Зберегти ключ»); validation and legal alerts state the exact statutory rule or missing requirement without jargon.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Input Field** → `@components/input-field.html`: `input-field-text`, `input-field-icon`
- **Modal** → `@components/modal.html`: `modal-standard`, `modal-alert`, `modal-drawer`
