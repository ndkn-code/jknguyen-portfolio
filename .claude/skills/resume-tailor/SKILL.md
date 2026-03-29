---
name: resume-tailor
description: "Tailor Jack Nguyen's PM resume for specific job applications. Use this skill whenever Jack asks to edit his resume, tailor it for a job posting, swap bullets, adjust content for a specific role, update his resume, or generate a new version for a specific company. Also trigger when Jack pastes a job description and asks to apply, or says 'tailor for this role', 'update my resume', 'adjust resume for JD', 'make a version for [company]', or anything involving his PM/APM resume. This skill contains his base resume content, build script, and ATS optimization rules."
---

# Resume Tailor for Jack Nguyen

## Overview

This skill generates a 1-page ATS-optimized PM resume (.docx + .pdf) tailored to specific job descriptions. It uses a Node.js build script with the `docx` npm package to produce pixel-perfect output that never exceeds 1 page.

## How It Works

1. Read the build script at `scripts/build_resume.js` bundled with this skill
2. Edit the bullet text and skills keywords to match the target JD
3. Run `node build_resume.js` to generate the .docx
4. Validate with `python /mnt/skills/public/docx/scripts/office/validate.py`
5. Convert to PDF with `python /mnt/skills/public/docx/scripts/office/soffice.py --headless --convert-to pdf`
6. Verify 1 page with `pdfinfo *.pdf | grep Pages`
7. Deliver both .docx and .pdf

## CRITICAL RULES

### Page Limit
- **NEVER exceed 1 page.** If it overflows, shorten bullets — do NOT reduce font size or margins.
- The build script is pre-calibrated: Name 18pt, headers 12pt, body 11pt, all Times New Roman, 0.5" margins top/sides, 0.35" bottom, line spacing 244 (1.02x).
- **Do NOT change font sizes or margins.** If content overflows, trim bullet text.

### Section Order (FIXED)
1. Header (name, contact, links)
2. EXPERIENCE
3. PROJECT
4. EDUCATION
5. SKILLS

### Formatting Rules
- Font: Times New Roman everywhere
- Em dashes (—) are fine and encouraged
- Bullets use Unicode • via LevelFormat.BULLET
- Hyperlinks for LinkedIn, Github, Portfolio are real ExternalHyperlinks
- Company name bold + suffix on same line, right-aligned location
- Role title italic, right-aligned dates

## Jack's Base Resume Content

Below is the full content library. When tailoring, select the most relevant bullets and swap/edit as needed. Do NOT rewrite from scratch — modify existing bullets.

### EXPERIENCE

#### Lumist.ai — Co-Founder (Jan 2024 – Present)
**Full bullet library (pick 4-5 per application):**

1. **Market Pivot (use for: market research, GTM, pricing, strategy roles)**
   Identified that SAT prep in Vietnam was 10–15x overpriced for target market; led product pivot from offline tutoring ($50K ARR) to AI-powered platform at $6–10/mo, acquiring 1,500+ users and 100 paying customers in 2 months (4% conversion).

2. **Data-Driven Diagnosis (use for: analytics, data-informed, user research roles)**
   Diagnosed low AI Tutor adoption (24 DAU) through Supabase SQL analysis and 1:1 user interviews; discovered feature was siloed from core workflow with no onboarding. Led redesign integrating weekly planning and guided onboarding — grew to 150+ DAU.

3. **Stakeholder Pushback (use for: stakeholder management, prioritization, strategy roles)**
   Pushed back on CEO's IELTS expansion by presenting retention and user feedback data showing core SAT UX issues; redirected team resources to fix onboarding first, directly driving the AI Tutor adoption recovery.

4. **Lead Scoring CRM (use for: GTM, sales ops, growth, automation roles)**
   Designed lead scoring CRM with 5-factor prioritization algorithm and automated Jira routing; processed 1,000+ leads, eliminating manual triage and establishing sales team accountability system.

5. **Team Leadership (use for: cross-functional, agile, team lead roles)**
   Led cross-functional team of 14 through sprint planning, PRDs, and bi-weekly releases. Analyzed marketing channel ROI, cut underperforming team, and consolidated to 8-person engineering-focused org to reduce burn.

6. **AI Prototyping (use for: AI-native, technical PM, builder roles)**
   Used Claude Code to prototype interactive feature demos, replacing weeks of wireframe-to-dev handoff with same-day working prototypes that eliminated miscommunication between product and engineering.

7. **UX Overhaul / Less Is More (use for: UX, design-oriented, consumer product roles)**
   Benchmarked against Duolingo, Brilliant, and competitors; led dashboard revamp based on "less is more" principles — white space, smooth transitions, guided onboarding — after user testing revealed feature overload was hurting retention.

8. **Internal AI Agent (use for: AI ops, automation, technical PM roles)**
   Deployed internal AI agent ("Lumi") connecting 5 data sources via Telegram with deny-by-default security sandbox and automated blog publishing — used daily by team to eliminate ad-hoc reporting.

#### University of South Florida — ERP Analyst I (Jan 2025 – Dec 2025)
9. **Full bullet (default):**
   Owned Unit4 FP&A Lite rollout as product owner: gathered requirements, pushed back on out-of-scope features due to budget, coordinated vendor training, and delivered 7+ automated reports saving ~5 hrs/week. Authored 75+ job aids; triaged 1,000+ Jira tickets across 3 enterprise systems maintaining 95% SLA.

10. **Split version A — Product Owner focus:**
    Owned Unit4 FP&A Lite rollout as product owner: gathered stakeholder requirements, pushed back on out-of-scope feature requests due to budget constraints, coordinated vendor training — delivered 7+ automated reports saving ~5 hrs/week.

11. **Split version B — Adoption & Ops focus:**
    Drove adoption across resistant stakeholders through 75+ job aids and 1:1 training; triaged 1,000+ Jira tickets by business impact across 3 enterprise systems, maintaining 95% on-time SLA.

#### VNG Corporation — Data Analytics Intern (June 2024 – August 2024)
12. Built Python optimization model reducing revenue forecast variance from 20% to 4% for $2M game launch; model adopted into production forecasting workflow and remains in active use.

#### Deloitte — Risk Advisory Intern (May 2023 – July 2023)
13. Built 4 Tableau dashboards and compliance reports using Oracle BI Publisher, enabling client leadership to track audit status in real time and ensuring on-time project delivery.

### PROJECTS

#### DebateLab (Next.js, TypeScript, Supabase, Gemini AI, Groq, Deepgram)
14. Built AI debate practice platform for family members learning English; designed real-time speech transcription, AI scoring across 12 categories, and full Vietnamese localization. Iterated on gamification based on beta tester feedback.

#### Lumist Analytics Dashboard (React, Supabase, Recharts, TypeScript)
15. Built 7-module analytics platform tracking DAU, retention cohorts, funnels, and feature adoption; directly surfaced the AI Tutor adoption problem and weekend usage patterns that reshaped product roadmap.

#### Lumi the Secretary (OpenClaw, Gemini AI, Supabase, Telegram, Obsidian MCP)
16. Deployed internal AI agent connecting 5 data sources (Supabase, GitHub, Linear, PostHog) via Telegram with deny-by-default security sandbox and automated blog publishing — used daily by Lumist team to eliminate ad-hoc reporting.

#### AI Customer Support System (n8n, Gemini AI, Supabase Vector, Zalo API) — BENCH
17. Designed multi-platform RAG chatbot with intent classification and 5-stage sales funnel tracking; built 7-trigger confidence-based escalation system routing complex queries to human agents across Zalo and Discord.

### EDUCATION
- **National Louis University** | GPA: 4.00 — M.S in Business Data Analytics (Jan 2026 – May 2027)
- **University of South Florida** | GPA: 3.98 — B.S in Business Analytics & Information Systems (Aug 2021 – Dec 2024)
- Honors: Dean's List (7 semesters), USF Green & Gold Presidential Scholarship, KPMG Case Competition 2023 Finalist

### SKILLS KEYWORD BANK
Pick the most relevant subset per application. Do NOT use all of them — pick what matches the JD.

**Product keywords:** Product Management, Roadmap Planning, User Research, A/B Testing, PRDs, Agile/Scrum, Sprint Planning, Jira, Figma, Data Analysis, Stakeholder Management, Market Research, Competitive Analysis, GTM, Go-to-Market Strategy, Customer Discovery, Feature Prioritization, OKRs, KPIs, Wireframing, Prototyping

**Technical keywords:** SQL, Python, R, Supabase, PostHog, n8n, Tableau, PowerBI, Excel, PowerPoint, RAG/LLM Integration, Claude Code, AI Prototyping, SharePoint, API Integration, Data Visualization

## Tailoring Process

When Jack provides a JD, follow this process:

### Step 1: Extract Keywords
Pull the top 10-15 keywords from the JD that map to skills, tools, or competencies. Categorize them:
- **Must-have** (mentioned in required qualifications)
- **Nice-to-have** (mentioned in preferred or responsibilities)
- **Implied** (not stated but clearly needed from context)

### Step 2: Select Bullets
From the bullet library above, pick the bullets that best match the JD keywords. Default configuration:
- Lumist: 5 bullets (always include #1 market pivot and #2 data diagnosis)
- USF: 1 bullet (use #9 merged, or split into #10+#11 if space allows and role is ops-heavy)
- VNG: 1 bullet (#12)
- Deloitte: 1 bullet (#13)
- Projects: 3 (always DebateLab + Analytics Dashboard + pick between Lumi Secretary or AI Support)

### Step 3: Modify Bullets
- Mirror JD language where natural (if JD says "cross-functional collaboration," use that phrase)
- Ensure the "must-have" keywords appear in bullet text OR skills section
- Do NOT force keywords unnaturally — if it reads awkward, put the keyword in Skills instead

### Step 4: Adjust Skills Section
- Product line: pick 8-12 keywords from the bank that match the JD
- Technical line: pick 8-12 keywords from the bank that match the JD
- Each line should fit on ~1.5 lines of text at 11pt TNR

### Step 5: Build and Verify
```bash
cd /home/claude
# Copy the build script from this skill
cp /path/to/this/skill/scripts/build_resume.js ./build_resume_tailored.js
# Edit the content in build_resume_tailored.js
node build_resume_tailored.js
python /mnt/skills/public/docx/scripts/office/validate.py resume_output.docx
python /mnt/skills/public/docx/scripts/office/soffice.py --headless --convert-to pdf resume_output.docx
pdfinfo resume_output.pdf | grep Pages
# Must say "Pages: 1"
```

### Step 6: If Overflow
If the result is 2 pages:
1. First try: shorten the longest bullet by 5-10 words
2. Second try: remove 1-2 keywords from Skills lines
3. Third try: cut the weakest Lumist bullet (usually #4 or #5)
4. **NEVER reduce font size or margins**

## Roles Jack Should NOT Apply To
- Hardware PM (semiconductor, chip design, manufacturing)
- Biotech/pharma PM
- Financial services PM requiring domain licenses (CFA, Series 7)
- Senior/Staff PM roles requiring 5+ years experience
- PM roles requiring specific industry experience he doesn't have (healthcare, fintech infrastructure)

## Roles Jack IS Strong For
- APM/Associate PM programs at tech companies
- SaaS PM (especially B2C, EdTech, marketplace)
- AI/ML product roles (he's genuinely AI-native)
- Growth PM / Product-Led Growth roles
- Platform PM at startups (his founder experience maps directly)
- Any PM role that values builder-founders and 0-to-1 experience
