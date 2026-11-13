# GK Interactive Learning Module Generator

## PROJECT PURPOSE
This is a competitive exam preparation workspace. When the user uploads or provides ANY study material (PDF, notes, text, transcript), the agent MUST automatically transform it into a complete interactive learning HTML module WITHOUT asking any clarifying questions about the format or features.

## AUTOMATIC TRIGGER
Whenever the user uploads a PDF, pastes notes, or shares any study content in this workspace:
1. DO NOT ask "what should I do with this?"
2. DO NOT ask "which features do you want?"
3. DO NOT create a dashboard or management system
4. IMMEDIATELY start building the interactive learning module

## STEP-BY-STEP PROCESS

### Step 1: Extract & Analyze Content
- Read the entire material carefully
- Identify all topics, subtopics, key facts, dates, names, places, events
- Extract exam-oriented information
- Find relationships between facts
- Identify commonly confused facts
- Preserve ALL important information — do not shorten unnecessarily
- Do NOT invent facts
- Mark unclear information as "requires verification"

### Step 2: Build ONE Self-Contained HTML File
Output: `lectures/Lecture-XX-Topic-Name.html`

The file must contain ALL HTML, CSS, JavaScript, and data inline. No separate files.

### Step 3: Include ALL 6 Learning Stages

#### STAGE A — UNDERSTAND (Visual Lessons)
- Topic-wise explanations with highlighted facts
- Timelines for historical events
- Comparison tables
- SVG diagrams, maps, flowcharts where relevant
- Important personalities and contributions
- Memory tricks and mnemonics
- Exam-oriented fact highlights

#### STAGE B — ACTIVE RECALL (Most Important)
- Click to reveal answer
- Fill in the blanks
- Guess the correct fact
- Question-answer cards
- Identify the personality / place
- Recall important dates
- Match the following
- True or False
- Hide-and-reveal revision
- NEVER show answers immediately — make the learner think first

#### STAGE C — INTERACTIVE FLASHCARDS
- Front/back cards with smooth flip animation
- Previous / Next / Shuffle
- Mark difficult / Remembered / Forgotten buttons
- Progress counter
- Keyboard navigation (arrow keys, space to flip)

#### STAGE D — QUIZ & PRACTICE
- Minimum 15 meaningful MCQs (when content supports it)
- Basic, Moderate, and Difficult levels
- Statement-based questions
- Match the following
- Chronological arrangement
- Assertion & Reasoning (where appropriate)
- Practice questions labelled clearly (not fake PYQs)
- Features: one question at a time, submit button, correct answer reveal, explanation, score, accuracy, review incorrect, retake with shuffle

#### STAGE E — QUICK REVISION
- Important one-liners
- Key dates, names, locations
- Most important facts
- Confusing facts
- Frequently tested concepts
- Designed for last-minute rapid revision

#### STAGE F — FINAL MEMORY TEST
- Comprehensive recall test (no reading notes)
- Performance report: attempted, correct, incorrect, accuracy %, weak topics, recommended revision areas

### Step 4: Smart Features
- Progress tracking with LocalStorage
- Section completion indicators
- Bookmark important facts
- Mark difficult questions
- Save quiz results & flashcard status
- Resume previous progress
- Retry incorrect questions
- Separate progress per lecture

### Step 5: UI/UX Design
- Premium dark/light theme toggle
- Minimal professional layout
- Beautiful typography (system fonts, no external dependencies)
- Clean cards with subtle animations
- Interactive timelines
- Progress indicators
- Responsive mobile layout
- Keyboard accessibility
- Sidebar or top navigation between sections
- No clutter

### Step 6: Subject-Specific Adaptations
- **History**: timelines, personalities, events, chronology exercises
- **Geography**: SVG maps, location diagrams, identification exercises
- **Polity**: constitutional articles, comparisons, amendment flowcharts
- **Science**: labelled diagrams, processes, concept quizzes
- **Economics**: relationship diagrams, comparative tables, examples
- **Static GK**: flashcard-heavy, one-liner drills, memory challenges

### Step 7: Quality Control (Before Delivering)
- Verify all facts match the source material
- Check every MCQ answer and explanation
- Test all interactive elements
- Verify quiz scoring logic
- Verify flashcard flip works
- Verify LocalStorage progress saving
- Check mobile responsiveness
- Fix any JavaScript errors
- Ensure no button is decorative / non-functional
- Confirm single HTML file works standalone in browser

## OUTPUT CONVENTION
- File location: `lectures/` folder in this workspace
- Naming: `Lecture-XX-Topic-Name.html` (XX = sequential number)
- Check existing files in `lectures/` to determine next number
- ALL content in ONE HTML file — no separate CSS/JS/JSON files

## WHAT NOT TO DO
- Do NOT build a dashboard or notes management system
- Do NOT ask which features to include — include ALL stages every time
- Do NOT create multiple files per lecture
- Do NOT use external APIs or paid services
- Do NOT pad questions with repetitive or fabricated content
- Do NOT use external CDN fonts/libraries if possible (use system fonts)
- Do NOT shorten or skip content from the source material
