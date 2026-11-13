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

## 1. DESIGN PHILOSOPHY: ZERO AI SLOP
- **Aesthetic Benchmark**: Linear, Notion, Vercel, Apple documentation.
- **Color Palette**: Sophisticated zinc/slate monochrome (`#09090b` / `#111114` dark; `#fbfbfb` / `#ffffff` light) with subtle, purposeful accent cues.
- **Typography**: Clean system sans typography, crisp monospaced tags (`#font-mono`), generous breathing space, disciplined font hierarchy.
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

## 3. ZERO DATA LOSS RULE
- Extract and preserve 100% of facts, rules, exceptions, formulas, cases, dates, and trivia.
- Never summarize so aggressively that exam-relevant minutiae are lost.
- In competitive examinations, cutoff-clearing marks come from rare exceptions, footnotes, and edge cases. Preserve every single one.

---

## 4. THE 6 STANDALONE MODULE STAGES

Every generated file (`lectures/Lecture-XX-<Subject>-<Topic>.html`) must be 100% self-contained (all HTML, CSS, JS inline, zero CDN dependencies, fully offline) and include:

1. **STAGE A: UNDERSTAND**  
   Structured, clean conceptual cards. Tables, flowcharts, timelines, and subject-specific breakdowns.
2. **STAGE B: ACTIVE RECALL (Ultra-Rigorous)**  
   At least 4 different interactive formats:
   - *Click-to-Reveal* cards (forces active retrieval before seeing answers)
   - *Fill-in-the-Blanks* (with real-time string checking: `✅ Correct` / `❌ Try again`)
   - *Match the Following* (interactive dropdown selector)
   - *True / False* (with detailed rationale)
   - *Identification / Formula Spotter* ("Which rule / formula / person am I?")
3. **STAGE C: 3D FLASHCARDS**  
   Front/back flip cards, category filter, shuffle, mastery tracking (Mastered / Difficult), keyboard shortcuts (`Spacebar` to flip, `Arrow keys` to navigate).
4. **STAGE D: EXAM QUIZ & PRACTICE**  
   At least 20 exam-grade MCQs (Basic, Moderate, Difficult). Immediate answer validation, full explanatory notes, score & accuracy %, filter incorrect answers, retake mode.
5. **STAGE E: QUICK REVISION**  
   High-yield one-liners, confusing pairs comparator, and fast reference cheat-sheets.
6. **STAGE F: FINAL MEMORY TEST**  
   Timed or unassisted diagnostic assessment with automatic weak-topic identification and revision prescriptions.

---

## 5. AUTOMATED WORKFLOW ON FILE UPLOAD
Whenever the user uploads or pastes material:
1. Identify the subject (Maths, Reasoning, English, General Studies, Computer).
2. Generate `lectures/Lecture-XX-<Subject>-<Topic>.html` following the clean minimalist design.
3. Automatically append the module card into the root `index.html` under its respective subject section and update counts.
4. Execute git sync:
   ```powershell
   git add .
   git commit -m "Add <Subject>-XX: <Topic>"
   git push origin master
   ```
5. Return the local clickable link, root dashboard link, and live GitHub Pages link:
   `https://shubh07o.github.io/studyos/`
