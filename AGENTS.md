# StudyOS — Master Agent & Design System Specification (AGENTS.md)

This document establishes the mandatory architectural, UI/UX, responsive, and educational standards for all StudyOS modules, digital notes, mock tests, and interactive learning hubs. **All agents must strictly follow these rules for every new or modified file.**

---

## 1. Universal Screen Responsiveness (Mandatory Zero-Overflow Law)

Every learning module, note, quiz, and dashboard must adapt flawlessly across all device viewports:

| Category | Viewports Tested | Mandatory Behavior |
|---|---|---|
| **Small Phones** | `320px`, `340px`, `360px` | No horizontal scroll (`0px` overflow), stacked grids, readable clamp fonts |
| **Standard Phones** | `375px`, `390px`, `414px` | Single-column cards, full-width touch targets, off-canvas navigation |
| **Large Phones** | `430px`, `480px`, `600px` | Adaptive spacing, fluid containers |
| **Tablets** | `768px`, `820px`, `1024px` | 2-column grids where appropriate, collapsible or responsive drawer |
| **Laptops & Desktops** | `1280px`, `1440px`, `1920px+` | Max container width constraint (`1100px`–`1280px`), centered layout, sticky sidebar |

### Structural CSS Guardrails:
```css
html, body {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden !important;
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: border-box;
}
/* Touch targets must be 44px minimum */
button, .btn, .nav-btn, .option-btn {
  min-height: 44px;
}
/* All tables must be encased in scrollable containers */
.table-wrap {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

---

## 2. Visual Hierarchy & Premium Design System

StudyOS interfaces must feel like high-end educational apps (Linear/Apple/Notion aesthetic):

### Core Color Palette:
- **Background:** Light `#f8fafc` / Dark `#0b0f19`
- **Surface Cards:** Light `#ffffff` / Dark `#131b2e`
- **Primary Accent:** `#2563eb` (Royal Blue)
- **Success Accent:** `#10b981` (Emerald Green)
- **Warning / Trap Accent:** `#f59e0b` (Amber Gold)
- **Danger / Error Accent:** `#ef4444` (Crimson)
- **Border Subtle:** `#e2e8f0` / Dark `#243049`

### Mandatory Semantic Callout Boxes:
1. **Rule Box (`.rule-box`):** Light blue background (`#eff6ff`), dark blue left border (`4px solid #2563eb`), rounded right corners. Used for core grammar rules, theorems, and definitions.
2. **Exam Trap Box (`.warn-box`):** Soft amber background (`#fffbeb`), gold left border (`4px solid #f59e0b`). Used for recurring SSC pitfalls, common errors, and confusing exceptions.
3. **Mnemonic / Tip Box (`.tip-box`):** Soft emerald background (`#ecfdf5`), green left border (`4px solid #10b981`). Used for shortcuts, memory tricks, and high-yield formulas.
4. **Error Alert Box (`.danger-box`):** Soft red background (`#fef2f2`), crimson left border (`4px solid #ef4444`). Used for wrong usage warnings.

### Keyword Highlighting:
- Crucial concepts, contrast words, and verb forms must never be buried in walls of unformatted text.
- Use colored keyword chips: e.g. `<span class="chip chip-blue">V1: Base</span>`, `<span class="chip chip-purple">V2: Past</span>`, `<span class="chip chip-green">V3: Participle</span>`.
- High-priority exam points must have bold styling and badge pills.

---

## 3. Interactive Question & Practice Arena Architecture

Every question card in StudyOS must be an **engaging, active-recall quiz card**, not a static block of text:

### Question Card Requirements:
1. **Metadata Header:**
   - Question Number pill (e.g. `Q14`)
   - Exam Badge (e.g. `SSC CGL 2025`, `SSC CPO Pre 2024`, `MTS PYQ`)
   - Topic/Rule Pill (e.g. `Confusing Verb`, `Parallelism`, `Stative Verbs`)
2. **Interactive Sentence / Question Body:**
   - Sentence parts must be formatted cleanly with distinct segments or interactive buttons:
     - `[Part 1]`, `[Part 2]`, `[Part 3]`, `[Part 4]`, `[No Error]` (or options `A`, `B`, `C`, `D`).
   - Clicking an option provides **instant visual feedback**:
     - Correct option turns **Emerald Green** with checkmark icon.
     - Incorrect option turns **Crimson Red** with error icon.
3. **Smart Solution Drawer:**
   - Hidden by default for active retrieval practice.
   - Clicking `[Show Explanation & Rule]` reveals a structured breakdown:
     - ❌ **Error Identified:** Strikethrough of wrong word + red indicator.
     - ✅ **Corrected Replacement:** Highlighted in bold emerald green.
     - 🧠 **Grammatical Law:** Clear, logical, 100% English explanation of the rule.
     - 🎯 **Golden Memory Formula:** Monospaced formula chip for instant revision.
4. **Self-Assessment Rating:**
   - `✔️ Mastered` and `⚠️ Review Later` buttons on every question.
   - Saves state to `localStorage` and updates real-time mastery counter in the sticky sidebar.

---

## 4. Concept Modules Architecture

Every chapter must include:
1. **Module 0: Syllabus & Master Rule Bank** (Etymology, classification matrix, 10 Golden Laws).
2. **Topic Deep-Dive Modules (Modules 1–4)**:
   - Visual comparison "VERSUS" tables with color-coded verb forms.
   - Stative vs Dynamic dual nature breakdowns.
   - Preposition taboo reference lists.
   - In-line mini drills with click-to-reveal answers.
3. **Practice Arenas (Modules 5–6+)**:
   - Comprehensive sets (Set 1, Set 2) containing all questions from teacher notes without truncation.
   - Live Search filtering that finds questions, rules, or verbs instantly as the user types.
   - `👁️ Reveal All` and `🙈 Hide All` global toggles.

---

## 5. Platform Integrity & Deployment Rules
1. Every new module must be registered under its subject in `CURRICULUM` in `index.html`.
2. Total platform statistics (`# Subjects • # Chapters • # Modules`) must be updated in `index.html`.
3. Offline Service Worker cache version in `sw.js` must be bumped (e.g. `v1.1.2` $\to$ `v1.1.3`).
4. Automated Headless Chrome CDP responsive audit must pass all 15 breakpoints with **0px overflow** before delivery.
5. All commits must be pushed to `origin master` and verified on live GitHub Pages.
