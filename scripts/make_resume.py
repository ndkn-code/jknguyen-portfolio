"""
Build Jack's Data-Analyst-tailored 1-page resume PDF (Times New Roman, matching
the resume-tailor skill's layout) with reportlab — no LibreOffice needed.
Out -> public/jack_nguyen_data_analyst.pdf
"""
import os
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable,
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "jack_nguyen_data_analyst.pdf")
SERIF, SERIF_B, SERIF_I = "Times-Roman", "Times-Bold", "Times-Italic"
BODY = 10.5
LINK = "#0563C1"

name = ParagraphStyle("name", fontName=SERIF_B, fontSize=17, alignment=TA_CENTER, leading=19)
center = ParagraphStyle("center", fontName=SERIF, fontSize=BODY, alignment=TA_CENTER, leading=13)
body = ParagraphStyle("body", fontName=SERIF, fontSize=BODY, leading=12.3)
right = ParagraphStyle("right", fontName=SERIF, fontSize=BODY, alignment=TA_RIGHT, leading=12.3)
sec = ParagraphStyle("sec", fontName=SERIF_B, fontSize=11.5, leading=13, spaceBefore=5)
bullet = ParagraphStyle("bullet", fontName=SERIF, fontSize=BODY, leading=12.3,
                        leftIndent=11, bulletIndent=1, spaceAfter=1.5)

W = 7.5 * inch  # content width (letter - 2*0.5")


def header(text):
    return [Paragraph(text, sec),
            HRFlowable(width="100%", thickness=0.7, color="#000000", spaceBefore=1, spaceAfter=2.5)]


def row(left_html, right_html, left_style=body):
    t = Table([[Paragraph(left_html, left_style), Paragraph(right_html, right)]],
              colWidths=[W * 0.62, W * 0.38])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t


def bp(text):
    return Paragraph(text, bullet, bulletText="•")


def link(text, url):
    return f'<a href="{url}" color="{LINK}"><u>{text}</u></a>'


story = []
story += [Paragraph("Jack Nguyen", name)]
story += [Paragraph("Tampa, Florida &nbsp;|&nbsp; (813) 981-9395 &nbsp;|&nbsp; jknguyen.wor@gmail.com", center)]
story += [Paragraph(" &nbsp;|&nbsp; ".join([
    link("LinkedIn", "https://www.linkedin.com/in/ndkn10292002/"),
    link("GitHub", "https://github.com/ndkn-code"),
    link("Portfolio", "https://jknguyen-portfolio.vercel.app/"),
]), center)]

# EXPERIENCE
story += header("EXPERIENCE")
story += [row("<b>Lumist.ai</b> - AI-Powered SAT Prep Platform", "<i>Tampa, Florida</i>")]
story += [row("<i>Co-Founder</i>", "Jan 2024 &ndash; Present")]
story += [
    bp("Led product pivot from offline tutoring ($50K ARR) to an AI-powered SAT platform at $6&ndash;10/mo, acquiring 1,500+ users and 100 paying customers in 2 months (4% conversion)."),
    bp("Diagnosed low AI Tutor adoption (24 DAU) via Supabase <b>SQL</b> analysis and 1:1 user interviews; led a redesign with guided onboarding that grew usage to 150+ DAU."),
    bp("Designed a lead-scoring CRM with a 5-factor prioritization algorithm and automated Jira routing; processed 1,000+ leads, eliminating manual triage."),
    bp("Analyzed marketing-channel ROI to cut underperforming spend and consolidate a 14-person team to an 8-person org, reducing burn."),
]
story += [row("<b>University of South Florida</b>", "<i>Tampa, Florida</i>")]
story += [row("<i>ERP Analyst I</i>", "Jan 2025 &ndash; Dec 2025")]
story += [bp("Owned Unit4 FP&amp;A Lite rollout: gathered requirements and delivered 7+ automated reports saving ~5 hrs/week; authored 75+ job aids and triaged 1,000+ Jira tickets across 3 enterprise systems at 95% SLA.")]
story += [row("<b>VNG Corporation</b>", "<i>Ho Chi Minh, Vietnam</i>")]
story += [row("<i>Data Analytics Intern</i>", "Jun 2024 &ndash; Aug 2024")]
story += [bp("Built a Python optimization model that cut revenue-forecast variance from <b>20% to 4%</b> for a $2M game launch; adopted into the production forecasting workflow and still in active use.")]
story += [row("<b>Deloitte</b>", "<i>Hanoi, Vietnam</i>")]
story += [row("<i>Risk Advisory Intern</i>", "May 2023 &ndash; Jul 2023")]
story += [bp("Built 4 <b>Tableau</b> dashboards and compliance reports with Oracle BI Publisher, enabling client leadership to track audit status in real time.")]

# PROJECTS
story += header("PROJECTS")
story += [Paragraph(f"<b>DebateLab Analytics</b> | SQL, Python, pandas, Tableau &nbsp; "
                    f"{link('GitHub', 'https://github.com/ndkn-code/debatelab-analytics')} | "
                    f"{link('Case Study', 'https://jknguyen-portfolio.vercel.app/projects/debatelab-analytics')}", body)]
story += [bp("Wrote SQL (CTEs, window functions, cohort logic) and pandas over 52K+ practice sessions to analyze skill-improvement curves, retention cohorts, and a signup&rarr;activation&rarr;premium funnel; found engagement depth drives conversion and recommended a week-1 activation program.")]
story += [Paragraph(f"<b>Lumist Growth Analytics</b> | SQL, Python, Tableau &nbsp; "
                    f"{link('GitHub', 'https://github.com/ndkn-code/lumist-growth-analytics')} | "
                    f"{link('Case Study', 'https://jknguyen-portfolio.vercel.app/projects/lumist-growth')}", body)]
story += [bp("Cleaned 151 free-text acquisition labels into 7 channels, then ran SQL cohort/funnel/conversion analysis on 5,500 students to prove volume &ne; value (top channel converted 5.4% vs 33%); delivered a memo to rebalance ad spend and prioritize activation.")]
story += [Paragraph(f"<b>Revenue Forecasting (Game Launch)</b> | Python, scikit-learn, pandas &nbsp; "
                    f"{link('GitHub', 'https://github.com/ndkn-code/vng-revenue-forecasting')} | "
                    f"{link('Case Study', 'https://jknguyen-portfolio.vercel.app/projects/revenue-forecasting')}", body)]
story += [bp("Engineered lag/seasonality/marketing/event features and a gradient-boosting model; a leakage-safe walk-forward backtest cut forecast error from ~22% to <b>~4.5% MAPE</b>.")]

# EDUCATION
story += header("EDUCATION")
story += [row("<b>National Louis University</b> | GPA: 4.00", "<i>Tampa, Florida</i>")]
story += [row("<i>M.S. in Business Data Analytics</i>", "Jan 2026 &ndash; May 2027")]
story += [row("<b>University of South Florida</b> | GPA: 3.98", "<i>Tampa, Florida</i>")]
story += [row("<i>B.S. in Business Analytics &amp; Information Systems</i>", "Aug 2021 &ndash; Dec 2024")]
story += [Paragraph("Honors: Dean&rsquo;s List (7 semesters), USF Green &amp; Gold Presidential Scholarship, KPMG Case Competition 2023 Finalist", body)]

# SKILLS
story += header("SKILLS")
story += [Paragraph("<b>Technical:</b> SQL (CTEs, window functions), Python, pandas, scikit-learn, Tableau, Power BI, Excel, SQLite, Git", body)]
story += [Paragraph("<b>Analytics:</b> Cohort analysis, funnel &amp; conversion analysis, retention/churn, forecasting &amp; time-series, A/B testing, data cleaning/ETL, KPI dashboards, data visualization, stakeholder reporting", body)]

doc = SimpleDocTemplate(OUT, pagesize=letter, leftMargin=0.5 * inch, rightMargin=0.5 * inch,
                        topMargin=0.45 * inch, bottomMargin=0.4 * inch)
doc.build(story)
print(f"wrote {os.path.relpath(OUT, ROOT)}")
