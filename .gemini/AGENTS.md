# GK Interactive Learning Module & Live Portal System

## PROJECT OBJECTIVE
This is an automated competitive exam preparation workspace. Whenever the user uploads or provides ANY study material (PDF, lecture notes, transcripts, images), the agent MUST automatically:
1. Extract and preserve 100% of the content with ZERO data loss.
2. Generate a single-file, self-contained interactive HTML learning module in `lectures/Lecture-XX-<Subject>-<Topic>.html`.
3. Build an ultra-rigorous **Stage B: Active Recall** with multiple varied retrieval activities.
4. Automatically register/link the new lecture into the root `index.html` (Master Subject & Chapter Portal).
5. Automatically commit and push changes to GitHub (`shubh07o/gk-interactive-hub`) so that it instantly goes live on **GitHub Pages**!

---

## 1. ZERO CONTENT LOSS RULE
- Extract every single fact, date, number, person, place, exception, judicial case, quote, and diagram.
- Do not abbreviate or drop minor details — in competitive exams like SSC CGL/CHSL/CPO, questions come from specific exceptions and trivia.
- If notes mention Hindi mnemonics (e.g. "ATM without Money", "KMN", "BDSM", "TEARS OF OLD PM"), integrate them directly.

---

## 2. THE 6 MANDATORY LEARNING STAGES IN EVERY MODULE

### STAGE A: UNDERSTAND (Visual Conceptual Lessons)
- Topic-wise visual explanation cards.
- Timelines for historical/chronological developments.
- Comparison tables (e.g., Written vs Unwritten, Federal vs Unitary, Schedule 5 vs 6).
- SVG diagrams or structured flowcharts.
- Mnemonics & memory tricks highlighted with distinctive borders.
- Exam alert badges on high-yield facts.

### STAGE B: ACTIVE RECALL (Ultra-Rigorous Retrieval Lab)
Active Recall is the core of long-term memory. It MUST include at least 4 of these interactive formats:
1. **Click-to-Reveal Cards**: Question is shown first; user must mentally answer before revealing the hidden solution.
2. **Interactive Fill in the Blanks**: Input boxes with instant JS validation (`✅ Correct` / `❌ Try again`).
3. **Match the Following**: Interactive select dropdowns matching pairs (scholars, committees, dates, articles).
4. **True / False Cards**: Prompt testing common misconceptions with reasoning on reveal.
5. **Personality / Article Spotter**: "Who am I? / Which Schedule / Article am I?" challenge cards.

### STAGE C: INTERACTIVE 3D FLASHCARDS
- Front / back cards with smooth 3D flip animation.
- Previous, Next, and Shuffle buttons.
- Category tagging and status markers (Mastered ✅ / Difficult 🚩).
- Full keyboard navigation (Spacebar to flip, Left/Right arrows to navigate).

### STAGE D: EXAM QUIZ & PRACTICE
- Minimum 20 exam-oriented MCQs (Basic, Moderate, Difficult).
- 4 options with instant visual feedback (green for correct, red for wrong).
- Detailed explanatory solution for every question.
- Live score and accuracy % counters.
- "Review Mistakes" filter and "Retake Quiz" shuffle options.

### STAGE E: QUICK REVISION
- Confusing Pairs Comparator (Side-by-side comparison of easily confused concepts).
- 15+ High-Yield One-Liners.
- Quick summary tables / cheat sheets.

### STAGE F: FINAL MEMORY TEST
- 10 to 15 question timed/unassisted memory evaluation without notes.
- Performance scorecard with percentage circle.
- Automated weakness diagnostic (identifies which specific topics need revision).
- Prescribes exact revision focus.

---

## 3. MASTER PORTAL (`index.html`) & GITHUB PAGES AUTOMATION

Whenever a new lecture module is created:
1. Save the file to `lectures/Lecture-XX-<Subject>-<Topic>.html`.
2. Add a new `<a class="chapter-card">...</a>` to `index.html` under the relevant subject section.
3. Update stats counters in `index.html` (total lectures count, MCQs, flashcards).
4. Execute git sync:
   ```powershell
   git add .
   git commit -m "Add Lecture-XX: <Topic>"
   git push origin master
   ```
5. Provide the user with:
   - Local clickable file link: `file:///c:/Users/shubh/Downloads/Gk/lectures/Lecture-XX-...html`
   - Master Portal local link: `file:///c:/Users/shubh/Downloads/Gk/index.html`
   - **Live GitHub Pages URL**: `https://shubh07o.github.io/gk-interactive-hub/`

---

## 4. STRICT TECHNICAL GUIDELINES
- Standalone Single HTML File for lectures: All HTML, CSS, JavaScript, and data inline inside `<style>` and `<script>` tags.
- Zero external CDN dependencies for logic/styling (system fonts, native SVGs) — must work 100% offline.
- Dark / Light mode toggle with LocalStorage persistence.
- Auto-save bookmarks, progress, and flashcard mastery status in LocalStorage.
