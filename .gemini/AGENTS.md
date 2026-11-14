# StudyOS: Universal Multi-Subject Interactive Learning Architecture

## 1. System Mission & Core Directive
StudyOS is an automated, high-retention digital learning framework engineered for competitive examination preparation (SSC, CGL, CHSL, CPO, CDS, NDA, State PCS, Banking, and allied exams).

The system transforms raw study materials (lecture notes, official PDFs, PYQ compilations, faculty slides) into **interactive, self-contained, high-retention web learning modules**.

The framework is universally structured across all exam domains:
- **English Language & Verbal Ability** (Grammar, Vocabulary, Comprehension, Error Detection)
- **Quantitative Aptitude & Mathematics** (Arithmetic, Advanced Maths, Geometry, Speed Drills)
- **Reasoning & Logical Ability** (Coding-Decoding, Series, Syllogisms, Analytical Reasoning)
- **General Studies & GK** (Indian Polity, Modern History, Geography, Economics, General Science)
- **Specialized Aptitude & Vocab Banks** (Maritime GK, Blackbook Vocab, Previous Year Question Arenas)

---

## 2. Fundamental Pedagogical Principle: "Learn by Self-Testing"
Passive reading leads to rapid memory decay. StudyOS strictly enforces an **Active In-line Retrieval** pedagogical model:

### The Self-Tested Learning Flow:
1. **Concept Exposition**: A rule, principle, theorem, or classification is introduced clearly using structured cards, comparative tables, and mnemonic chips.
2. **Immediate Self-Tested Drills**: Every single example following the concept is presented as a challenge, not a passive statement:
   - The question/sentence/problem is visible.
   - The correct answer, grammatical reason, or derivation is initially hidden behind an interactive `[Click to Reveal]` control.
   - The learner must mentally solve or evaluate the item before clicking to inspect the answer.
3. **Global Drill Controls**:
   - **Reveal All Answers (`👁️`)**: Allows quick review and revision mode when time is limited.
   - **Hide Answers (`🙈`)**: Instantly resets all drill items into self-testing examination mode.
4. **Embedded Exam-Grade Assessments**:
   - Every module contains integrated MCQ cards and error-spotting items directly relevant to the topic.
   - Instant visual validation (Emerald green for correct, Crimson red for wrong).
   - Real-time score aggregation across the session.
   - Deep explanatory notes highlighting official exam year citations and common student pitfalls.

---

## 3. UI/UX & Visual Design Standards

### A. Mandatory Light Mode (Non-Negotiable)
- **Default Theme**: All modules, practice arenas, and dashboards MUST ALWAYS default to and open in **Light Mode**.
- **Color Palette**:
  - Main Background: `--bg: #f4f7fb` / `#f8fafc`
  - Cards & Surfaces: `--surface: #ffffff`
  - Sub-surfaces & Hover: `--surface-alt: #edf2f9` / `#f1f5f9`
  - Primary Accent: `--primary: #2563eb` (Royal Blue)
  - Dark Accent: `--primary-dark: #1d4ed8` / `#1e3a8a`
  - Primary Text: `--text: #1e293b` (Slate-900 / Dark Slate)
  - Secondary Text: `--text-muted: #64748b`
  - Success Indicator: `--success: #10b981`
  - Warning/Alert: `--accent: #f59e0b`
  - Error Indicator: `--danger: #ef4444`
  - Border Lines: `--border: #e2e8f0`
- **Theme Switcher**: An optional dark mode toggle may be provided in the header for night reading, but the initial load MUST always render clean Light Mode.

### B. Strict English-Only Standard (Non-Negotiable)
- **ALL content across the platform — every web application view, digital note, interactive quiz, self-tested drill, explanation, button, header, and metadata — MUST ALWAYS BE WRITTEN 100% IN ENGLISH.**
- Even when source PDFs, lecture notes, or faculty slides are bilingual or predominantly in Hindi (Devanagari script), the system must **accurately translate, articulate, and present all concepts, question stems, options, and step-by-step logic in clean, professional English**.
- No Devanagari script is allowed in generated learning files, quizzes, or dashboard entries.

### C. Typography & Micro-Layout
- **Font Stack**: Clean, modern system sans-serif: `'Segoe UI', system-ui, -apple-system, sans-serif`.
- **Card Hierarchy**: Distinct `.card` containers with subtle drop-shadows (`0 4px 12px rgba(15, 23, 42, 0.06)`), 12px border radius, and explicit divider borders.
- **Rule Callouts**:
  - `.rule-box`: Left-bordered primary blue card for standard formulas, rules, and core definitions.
  - `.warn-box`: Left-bordered amber warning card for exam traps, exceptions, and frequent student blunders.
- **Visual Micro-Components**:
  - `.chip-grid` & `.chip`: Pill-shaped tokens for word categories, suffixes, dates, and related vocabulary.
  - `.table-wrap` & `table`: Responsive, zebra-friendly comparative tabular matrices.
  - `.tag.correct` / `.tag.wrong`: Visual indicators for grammatical accuracy vs common errors.

### C. Zero AI Slop Standard
- No generic marketing slogans ("Revolutionary", "Toppers Secret", "Master in 5 minutes").
- No non-functional decorative widgets or animations that distract from cognitive processing.
- Clean, disciplined layouts prioritizing information density, legibility, and pedagogical clarity.

---

## 4. Architectural Blueprint of a Learning Module

Every generated module (`lectures/<Subject>-Ch<XX>-<Topic>-<Type>.html`) must be completely self-contained in a single file with zero external runtime dependencies.

### The Standard Three-Pane Interface:
1. **Fixed Sidebar Navigation (Left Pane — 290px)**:
   - **Header Brand**: Subject title, chapter name, and faculty/curriculum credit.
   - **Live Session Stats**: Real-time score indicator (`Score: X / Total`) with a one-click Reset button.
   - **Granular Navigation Tabs**: Ordered list of chapter modules with descriptive icons, titles, and exact source page badges (e.g. `📋 0. Syllabus & Intro [P. 1-3]`, `👥 1. Elder vs Older [P. 3-4]`).
2. **Sticky Topbar (Header Area)**:
   - **Mobile Menu Toggle**: Responsive off-canvas sidebar trigger.
   - **Real-Time Global Search**: Live text filter that searches across rules, examples, and quiz questions in the active tab without page reloads.
   - **Global Drill Toggles**: One-click "Reveal All Answers" and "Hide Answers" buttons.
   - **Theme Toggle**: High-contrast theme switch.
3. **Main Content Container (Center Area — Max 1100px)**:
   - Renders tab pages (`.section-page`) dynamically via lightweight JavaScript tab switching.
   - Each tab includes comprehensive conceptual theory, interactive click-to-reveal drill lists, and interactive assessment cards.

---

## 5. Subject-Specific Pedagogical Adaptations

| Subject Domain | Conceptual Structure | Self-Tested Drills Format | Assessment Integration |
|---|---|---|---|
| **English Grammar** | Rules, parts of speech, syntax, exceptions, confusion matrices | Example sentences with hidden error corrections and grammatical explanations | Error spotting cards, sentence improvements, filler MCQs |
| **English Vocab** | Root words, OWS categories, idioms & phrases, collocations | Word-to-meaning reveals, mnemonic prompts, sentence applications | Synonym/antonym MCQs, contextual usage quizzes |
| **Reasoning** | Pattern logic, deduction rules, visual & sequence structures | Input puzzle / number series with hidden step-by-step logic unfolds | Timed logic MCQs, arrangement checks, validation cards |
| **Mathematics / Quant** | Theorems, formulas, arithmetic short-cuts, case types | Problem statements with hidden step-by-step derivations and mental tricks | Exam-grade calculation problems with full analytical solutions |
| **General Studies** | Chronological timelines, constitutional articles, factual matrices | Fact triggers, article identifiers, landmark cases with hidden outcomes | High-yield PYQ quizzes, statement-based assertion-reason MCQs |

---

## 6. Zero Data Loss & Exhaustive Content Extraction
- **No Arbitrary Limits**: Never artificially truncate content. If a chapter notes file contains 21 pages of material, every single rule, sub-rule, exception, table, and practice example must be extracted and transformed into the interactive module.
- **Deep Verification**: Verify all answer keys, grammatical rules, formulas, and historical facts against authentic standard sources before compilation.
- **Verbatim Integrity**: Preserve faculty terminology, pedagogical nuances, and exam tips present in the original source material.

---

## 7. Automation Pipeline & Synchronization Protocol

Whenever new study materials (notes, Century practice sets, PDFs) are provided:

1. **Material Analysis**:
   - Extract raw text and structure across all pages.
   - Map topics into a clean, logical module hierarchy with page-range tracking.
2. **Module Compilation**:
   - Generate the complete, self-contained interactive HTML file adhering to the StudyOS architecture.
   - Verify that all scripts, styles, drill objects, and quiz data arrays are 100% syntactically valid.
3. **Curriculum Registry Update (`index.html`)**:
   - Register the new module under its appropriate subject and chapter node in the `CURRICULUM` array.
   - Update file size, date, title, and metadata badges.
   - Increment overall platform statistics (total subjects, chapters, modules).
4. **Offline Cache Version Bump (`sw.js`)**:
   - Increment the Service Worker cache version (e.g. `v1.0.3` ➔ `v1.0.4`) so connected devices immediately update their offline caches.
5. **Automated Git Deployment**:
   - Commit changes with clear, descriptive semantic commit messages.
   - Push to `origin master` for instant live availability via GitHub Pages.
   - Return local and live URLs to the user.
