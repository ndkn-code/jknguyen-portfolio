const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  TabStopType, BorderStyle, LevelFormat, ExternalHyperlink
} = require("docx");

const PAGE_WIDTH = 12240;
const PAGE_HEIGHT = 15840;
const MARGIN = 720;
const BOTTOM_MARGIN = 500;
const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN * 2);

const FONT = "Times New Roman";
const NAME_SIZE = 36;    // 18pt
const HEADER_SIZE = 24;  // 12pt
const BODY_SIZE = 22;    // 11pt

const LS = 252; // single line spacing

function sectionHeader(text) {
  return new Paragraph({
    spacing: { before: 80, after: 0, line: 244, lineRule: "auto" },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
    children: [
      new TextRun({ text, bold: true, size: HEADER_SIZE, font: FONT, color: "000000" }),
    ],
  });
}

function companyLine(company, suffix, location) {
  const children = [
    new TextRun({ text: company, bold: true, size: BODY_SIZE, font: FONT }),
  ];
  if (suffix) children.push(new TextRun({ text: " - " + suffix, size: BODY_SIZE, font: FONT }));
  children.push(new TextRun({ text: "\t", size: BODY_SIZE, font: FONT }));
  children.push(new TextRun({ text: location, italics: true, size: BODY_SIZE, font: FONT }));
  return new Paragraph({
    spacing: { before: 60, after: 0, line: 244, lineRule: "auto" },
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
    children,
  });
}

function roleDateLine(title, dates) {
  return new Paragraph({
    spacing: { before: 0, after: 0, line: 244, lineRule: "auto" },
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
    children: [
      new TextRun({ text: title, italics: true, size: BODY_SIZE, font: FONT }),
      new TextRun({ text: "\t", size: BODY_SIZE, font: FONT }),
      new TextRun({ text: dates, size: BODY_SIZE, font: FONT }),
    ],
  });
}

function b(text) {
  return new Paragraph({
    spacing: { before: 0, after: 0, line: 244, lineRule: "auto" },
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, size: BODY_SIZE, font: FONT })],
  });
}

function projectHeader(name, tech, linkTexts) {
  const children = [
    new TextRun({ text: name, bold: true, size: BODY_SIZE, font: FONT }),
    new TextRun({ text: " | " + tech + " ", size: BODY_SIZE, font: FONT }),
  ];
  if (linkTexts && linkTexts.length > 0) {
    linkTexts.forEach((lt, i) => {
      children.push(new TextRun({ text: lt, size: BODY_SIZE, font: FONT, color: "0563C1", underline: { type: "single" } }));
      if (i < linkTexts.length - 1) children.push(new TextRun({ text: " | ", size: BODY_SIZE, font: FONT }));
    });
  }
  return new Paragraph({
    spacing: { before: 30, after: 0, line: 244, lineRule: "auto" },
    children,
  });
}

const doc = new Document({
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{
        level: 0,
        format: LevelFormat.BULLET,
        text: "\u2022",
        alignment: AlignmentType.LEFT,
        style: {
          paragraph: { indent: { left: 180, hanging: 180 } },
          run: { font: FONT, size: BODY_SIZE },
        },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
        margin: { top: MARGIN, right: MARGIN, bottom: BOTTOM_MARGIN, left: MARGIN },
      },
    },
    children: [
      // NAME
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 0, line: 244, lineRule: "auto" },
        children: [new TextRun({ text: "Jack Nguyen", bold: true, size: NAME_SIZE, font: FONT })],
      }),
      // CONTACT
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 0, line: 244, lineRule: "auto" },
        children: [new TextRun({ text: "Tampa, Florida | (813) 981-9395 | jknguyen.wor@gmail.com", size: BODY_SIZE, font: FONT })],
      }),
      // LINKS
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 0, line: 244, lineRule: "auto" },
        children: [
          new ExternalHyperlink({ link: "https://www.linkedin.com/in/ndkn10292002/", children: [new TextRun({ text: "LinkedIn", size: BODY_SIZE, font: FONT, color: "0563C1", underline: { type: "single" } })] }),
          new TextRun({ text: " | ", size: BODY_SIZE, font: FONT }),
          new ExternalHyperlink({ link: "https://github.com/ndkn-code", children: [new TextRun({ text: "Github", size: BODY_SIZE, font: FONT, color: "0563C1", underline: { type: "single" } })] }),
          new TextRun({ text: " | ", size: BODY_SIZE, font: FONT }),
          new ExternalHyperlink({ link: "https://jknguyen-portfolio.vercel.app/", children: [new TextRun({ text: "Portfolio", size: BODY_SIZE, font: FONT, color: "0563C1", underline: { type: "single" } })] }),
        ],
      }),

      // ======= EXPERIENCE =======
      sectionHeader("EXPERIENCE"),

      companyLine("Lumist.ai", "AI-Powered SAT Prep Platform", "Tampa, Florida"),
      roleDateLine("Co-Founder", "Jan 2024 \u2013 Present"),
      b("Identified that SAT prep in Vietnam was 10\u201315x overpriced for target market; led product pivot from offline tutoring ($50K ARR) to AI-powered platform at $6\u201310/mo, acquiring 1,500+ users and 100 paying customers in 2 months (4% conversion)."),
      b("Diagnosed low AI Tutor adoption (24 DAU) through Supabase SQL analysis and 1:1 user interviews; discovered feature was siloed from core workflow with no onboarding. Led redesign integrating weekly planning and guided onboarding \u2014 grew to 150+ DAU."),
      b("Pushed back on CEO\u2019s IELTS expansion by presenting retention and user feedback data showing core SAT UX issues; redirected team resources to fix onboarding first, directly driving the AI Tutor adoption recovery."),
      b("Designed lead scoring CRM with 5-factor prioritization algorithm and automated Jira routing; processed 1,000+ leads, eliminating manual triage and establishing sales team accountability system."),
      b("Led cross-functional team of 14 through sprint planning, PRDs, and bi-weekly releases. Analyzed marketing channel ROI, cut underperforming team, and consolidated to 8-person engineering-focused org to reduce burn."),

      companyLine("University of South Florida", "", "Tampa, Florida"),
      roleDateLine("ERP Analyst I", "Jan 2025 \u2013 Dec 2025"),
      b("Owned Unit4 FP&A Lite rollout as product owner: gathered requirements, pushed back on out-of-scope features due to budget, coordinated vendor training, and delivered 7+ automated reports saving ~5 hrs/week. Authored 75+ job aids; triaged 1,000+ Jira tickets across 3 enterprise systems maintaining 95% SLA."),

      companyLine("VNG Corporation", "", "Ho Chi Minh, Vietnam"),
      roleDateLine("Data Analytics Intern", "June 2024 \u2013 August 2024"),
      b("Built Python optimization model reducing revenue forecast variance from 20% to 4% for $2M game launch; model adopted into production forecasting workflow and remains in active use."),

      companyLine("Deloitte", "", "Hanoi, Vietnam"),
      roleDateLine("Risk Advisory Intern", "May 2023 \u2013 July 2023"),
      b("Built 4 Tableau dashboards and compliance reports using Oracle BI Publisher, enabling client leadership to track audit status in real time and ensuring on-time project delivery."),

      // ======= PROJECT =======
      sectionHeader("PROJECT"),

      projectHeader("DebateLab", "Next.js, TypeScript, Supabase, Gemini AI, Groq, Deepgram", ["Live Site", "Case Study"]),
      b("Built AI debate practice platform for family members learning English; designed real-time speech transcription, AI scoring across 12 categories, and full Vietnamese localization. Iterated on gamification based on beta tester feedback."),

      projectHeader("Lumist Analytics Dashboard", "React, Supabase, Recharts, TypeScript", ["Live Site", "Case Study"]),
      b("Built 7-module analytics platform tracking DAU, retention cohorts, funnels, and feature adoption; directly surfaced the AI Tutor adoption problem and weekend usage patterns that reshaped product roadmap."),

      projectHeader("Lumi the Secretary", "OpenClaw, Gemini AI, Supabase, Telegram, Obsidian MCP", ["Case Study"]),
      b("Deployed internal AI agent connecting 5 data sources (Supabase, GitHub, Linear, PostHog) via Telegram with deny-by-default security sandbox and automated blog publishing \u2014 used daily by Lumist team to eliminate ad-hoc reporting."),

      // ======= EDUCATION =======
      sectionHeader("EDUCATION"),
      new Paragraph({
        spacing: { before: 20, after: 0, line: 244, lineRule: "auto" },
        tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
        children: [
          new TextRun({ text: "National Louis University", bold: true, size: BODY_SIZE, font: FONT }),
          new TextRun({ text: " | GPA: 4.00", size: BODY_SIZE, font: FONT }),
          new TextRun({ text: "\t", size: BODY_SIZE }),
          new TextRun({ text: "Tampa, Florida", italics: true, size: BODY_SIZE, font: FONT }),
        ],
      }),
      new Paragraph({
        spacing: { before: 0, after: 0, line: 244, lineRule: "auto" },
        tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
        children: [
          new TextRun({ text: "M.S in Business Data Analytics", italics: true, size: BODY_SIZE, font: FONT }),
          new TextRun({ text: "\t", size: BODY_SIZE }),
          new TextRun({ text: "Jan 2026 \u2013 May 2027", size: BODY_SIZE, font: FONT }),
        ],
      }),
      new Paragraph({
        spacing: { before: 20, after: 0, line: 244, lineRule: "auto" },
        tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
        children: [
          new TextRun({ text: "University of South Florida", bold: true, size: BODY_SIZE, font: FONT }),
          new TextRun({ text: " | GPA: 3.98", size: BODY_SIZE, font: FONT }),
          new TextRun({ text: "\t", size: BODY_SIZE }),
          new TextRun({ text: "Tampa, Florida", italics: true, size: BODY_SIZE, font: FONT }),
        ],
      }),
      new Paragraph({
        spacing: { before: 0, after: 0, line: 244, lineRule: "auto" },
        tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
        children: [
          new TextRun({ text: "B.S in Business Analytics & Information Systems", italics: true, size: BODY_SIZE, font: FONT }),
          new TextRun({ text: "\t", size: BODY_SIZE }),
          new TextRun({ text: "Aug 2021 \u2013 Dec 2024", size: BODY_SIZE, font: FONT }),
        ],
      }),
      new Paragraph({
        spacing: { before: 0, after: 0, line: 244, lineRule: "auto" },
        children: [
          new TextRun({ text: "Honors: Dean\u2019s List (7 semesters), USF Green & Gold Presidential Scholarship, KPMG Case Competition 2023 Finalist", size: BODY_SIZE, font: FONT }),
        ],
      }),

      // ======= SKILLS =======
      sectionHeader("SKILLS"),
      new Paragraph({
        spacing: { before: 10, after: 0, line: 244, lineRule: "auto" },
        children: [
          new TextRun({ text: "Product: ", bold: true, size: BODY_SIZE, font: FONT }),
          new TextRun({ text: "Product Management, Roadmap Planning, User Research, PRDs, Agile/Scrum, Jira, Figma, Data Analysis, Stakeholder Management, Market Research, GTM", size: BODY_SIZE, font: FONT }),
        ],
      }),
      new Paragraph({
        spacing: { before: 0, after: 0, line: 244, lineRule: "auto" },
        children: [
          new TextRun({ text: "Technical: ", bold: true, size: BODY_SIZE, font: FONT }),
          new TextRun({ text: "SQL, Python, Supabase, PostHog, n8n, Tableau, PowerBI, Excel, RAG/LLM Integration, Claude Code", size: BODY_SIZE, font: FONT }),
        ],
      }),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/claude/jack_nguyen_pm_v4.docx", buffer);
  console.log("Resume v4 generated");
});
