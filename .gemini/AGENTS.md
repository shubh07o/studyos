# StudyOS: Universal Multi-Subject Interactive Learning System

## CORE DIRECTIVE
Transform ANY uploaded study material (PDFs, notes, lecture transcripts, sheets) into a clean, minimalist, high-retention interactive HTML learning module. 

This workspace is **NOT restricted to GK**. It is built for **ALL COMPETITIVE EXAM SUBJECTS**:
- **Quantitative Aptitude / Mathematics**
- **Reasoning & Logical Ability**
- **English Language & Verbal Ability**
- **General Studies (Polity, History, Geography, Economics, Science, Static GK)**
- **Computer Knowledge & Special Modules**

---

## 1. DESIGN PHILOSOPHY: ZERO AI SLOP & MANDATORY LIGHT MODE
- **Aesthetic Benchmark**: Mock Manager, Notion, Linear, Apple documentation.
- **MANDATORY LIGHT MODE (NON-NEGOTIABLE)**:
  - **ALL web learning modules, practice quizzes, digital notes, and dashboards MUST ALWAYS default to and open in LIGHT MODE.**
  - **Primary Palette**: Crisp light background (`#f8fafc` / `#ffffff`), pure white cards (`#ffffff`), subtle borders (`#e2e8f0`), and high-contrast dark slate text (`#0f172a` / `#1e293b`).
  - **NEVER default to dark mode** on any module, quiz, or page. If a theme toggle exists, it must default to Light Mode.
- **Typography**: Clean system sans typography (`Inter`, `-apple-system`, `Segoe UI`), crisp monospaced tags, generous breathing space, disciplined font hierarchy.
- **NO Slop**:
  - No rainbow gradients or cartoonish glows.
  - No cheesy marketing hype ("REVOLUTION", "TOPPERS MAGIC", "BECOME A TOPPER").
  - No excessive emoji spam — use icons sparingly and functionally.
  - No non-functional decorative widgets. Every component must serve active learning and memory consolidation.

---

## 2. SUBJECT-SPECIFIC LEARNING ADAPTATIONS
The interactive modules must structurally adapt to the subject matter:

| Subject | Specialized Pedagogical Components |
|---|---|
| **Mathematics / Quant** | • Formula derivation & application cards<br>• Step-by-step interactive problem solutions (click each step to reveal logic)<br>• Calculation tricks & mental arithmetic shortcuts<br>• Practice problem sets with variable difficulty |
| **Reasoning** | • Pattern recognition rule cards<br>• Visual / matrix logic puzzles<br>• Step-by-step syllogism / arrangement flowcharts<br>• Timed speed drills |
| **English Language** | • Grammar rules with highlighted exceptions<br>• Active recall vocabulary cards (Roots, Synonyms, Antonyms, Mnemonics)<br>• Error detection & sentence correction click-reveals<br>• Idioms & phrasal verb contextual matrices |
| **General Studies / GK** | • Visual chronological timelines<br>• Comparative tabular matrices (Articles, features, geographic data)<br>• Memory mnemonics & high-yield one-liners<br>• Confusing pairs comparator |
| **Computer Knowledge** | • Architectural diagrams, network layer breakdowns, shortcut matrices, protocol flashcards |

---

## 3. ZERO DATA LOSS & MAXIMALIST EXHAUSTIVE GENERATION (WORLD'S BEST STANDARD)
- **NO ARTIFICIAL QUANTITY LIMITS**: Never artificially cap or pre-decide quantity (e.g., never stop at "just 20 questions" or "10 flashcards"). Generate as many active recall prompts, quizzes, flashcards, fill-in-the-blanks, and revision items as **humanly possible** from the chapter's notes.
- **Deep Fact & Concept Verification**: Deeply inspect and verify every fact, formula, exception, case law, date, mnemonic, and footnote in the source notes. Zero omissions. Zero hallucinations.
- **Content-Adaptive Pedagogy**: Analyze the source material first to determine what method makes it the *world's best interactive module* for that specific chapter:
  - For Rule/Grammar heavy notes: Sentence error-spotter, exception callouts, click-to-correct.
  - For Fact/History/Polity heavy notes: Chronological interactive timelines, comparative article matrices, fill-in-the-blank drills.
  - For Formula/Quant/Maths heavy notes: Step-by-step solution reveals, mental arithmetic speed drills, formula flashcards.
  - For Reasoning heavy notes: Logic flowcharts, pattern recognition cards, timed deduction puzzles.
  - For Vocab heavy notes: Root word decomposition, synonym/antonym matrices, one-word substitution drills.

---

## 4. PEDAGOGICAL STAGES (UNCONSTRAINED & ADAPTIVE)

Every generated file (`lectures/Lecture-XX-<Subject>-<Topic>.html`) must be 100% self-contained (all HTML, CSS, JS inline, zero external CDN dependencies, fully offline) and maximize retention through:

1. **STAGE A: DEEP CONCEPTUAL UNDERSTANDING**  
   Exhaustive, structured visual cards. Tables, flowcharts, timelines, and subject-specific breakdowns covering 100% of the notes.
2. **STAGE B: ULTRA-MAXIMAL ACTIVE RECALL**  
   As many interactive prompts as possible across multiple formats:
   - *Click-to-Reveal* cards (forces active retrieval before seeing answers)
   - *Fill-in-the-Blanks* (with real-time string checking: `✅ Correct` / `❌ Try again`)
   - *Match the Following* (interactive dropdown selector)
   - *True / False* (with detailed rationale)
   - *Identification / Formula Spotter* ("Which rule / formula / article / person am I?")
3. **STAGE C: HIGH-VOLUME FLASHCARDS**  
   Comprehensive front/back flip cards covering every concept, categorized, shuffleable, mastery tracking (Mastered / Difficult), keyboard shortcuts (`Spacebar` to flip, `Arrow keys` to navigate).
4. **STAGE D: EXHAUSTIVE EXAM QUIZ & PRACTICE**  
   Maximum possible exam-grade MCQs (Basic, Moderate, Difficult). Immediate answer validation, full explanatory notes, score & accuracy %, filter incorrect answers, retake mode.
5. **STAGE E: SPEED REVISION & CHEAT SHEETS**  
   High-yield one-liners, confusing pairs comparator, and fast reference cheat-sheets.
6. **STAGE F: COMPREHENSIVE DIAGNOSTIC TEST**  
   Diagnostic assessment with automatic weak-topic identification and revision prescriptions.

---

## 5. AUTOMATED WORKFLOW ON FILE UPLOAD
Whenever the user uploads or pastes material:
1. Identify the subject (Maths, Reasoning, English, General Studies, Computer).
2. Generate `lectures/Lecture-XX-<Subject>-<Topic>.html` following the clean minimalist design in Light Mode.
3. Automatically append the module card into the root `index.html` under its respective subject section and update counts (preserve PWA manifest & SW links).
4. Execute git sync:
   ```powershell
   git add .
   git commit -m "Add <Subject>-XX: <Topic>"
   git push origin master
   ```
5. Return the local clickable link, root dashboard link, and live GitHub Pages link:
   `https://shubh07o.github.io/studyos/`
