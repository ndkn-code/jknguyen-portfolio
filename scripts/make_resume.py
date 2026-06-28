"""
Build Jack's Data-Analyst-tailored 1-page resume PDF (Times New Roman, matching
the resume-tailor skill's layout) with reportlab, no LibreOffice needed.
Out -> public/jack_nguyen_data_analyst.pdf
"""
import os
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Table, TableStyle, HRFlowable,
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
    t.hAlign = "LEFT"
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
    bp("Diagnosed low AI Tutor adoption (24 DAU) via Supabase <b>SQL</b> analysis and 1:1 user interviews; led a guided-onboarding redesign that grew usage to 150+ DAU."),
    bp("Analyzed marketing-channel ROI to cut underperforming spend and consolidate a 14-person team to an 8-person org, reducing monthly burn."),
]
story += [row("<b>University of South Florida</b>", "<i>Tampa, Florida</i>")]
story += [row("<i>ERP Analyst I</i>", "Jan 2025 &ndash; Present")]
story += [
    bp("On-call data analyst for the Unit4 ERP (Coda) finance system: write ad-hoc <b>SQL</b> against a replica database to fulfill stakeholder requests for vendor, transaction, general-ledger/FP&amp;A, and user-access reporting."),
    bp("Built a <b>Power BI</b> access-review report with row-level security mapping Unit4 user groups to 40+ clinical and finance divisions (multi-CTE SQL with OUTER APPLY and STRING_AGG), replacing a manual access audit."),
    bp("Wrote advanced SQL (CTEs, INTERSECT, window functions) to audit vendor master data, flagging never-paid, foreign-address, and cross-entity open/closed vendors; delivered 7+ automated FP&amp;A reports saving ~5 hrs/week."),
]
story += [row("<b>VNG Corporation</b>", "<i>Ho Chi Minh, Vietnam</i>")]
story += [row("<i>Data Analytics Intern</i>", "Jun 2024 &ndash; Aug 2024")]
story += [
    bp("Built a Python optimization model that cut revenue-forecast variance from <b>20% to 4%</b> for a $2M game launch; adopted into the production forecasting workflow and still in active use."),
    bp("Resolved 15+ data-pipeline tickets on missing/incorrect data with PySpark, SparkSQL, and Apache Airflow; built a <b>Tableau</b> heatmap to surface anomalies for the team lead."),
]
story += [row("<b>Deloitte</b>", "<i>Hanoi, Vietnam</i>")]
story += [row("<i>Risk Advisory Intern</i>", "May 2023 &ndash; Jul 2023")]
story += [
    bp("Built 4 <b>Tableau</b> dashboards and compliance reports with Oracle BI Publisher, enabling client leadership to track audit status in real time."),
    bp("Ran system-integration testing on a state bank&rsquo;s compliance platform across 160+ scenarios, logging 10+ defects and compiling findings into a 50+ page requirements document."),
]

# PROJECTS
story += header("PROJECTS")
story += [Paragraph(f"<b>E-Commerce Customer &amp; Revenue Analytics</b> | SQL, Python, pandas, Tableau &nbsp; "
                    f"{link('GitHub', 'https://github.com/ndkn-code/online-retail-analytics')} | "
                    f"{link('Case Study', 'https://jknguyen-portfolio.vercel.app/projects/online-retail')}", body)]
story += [bp("Cleaned <b>1.07M rows</b> of real UK e-commerce data (UCI Online Retail II); ran SQL RFM segmentation + cohort retention on &#163;19.6M across 5,852 customers: &ldquo;Champions&rdquo; are 25% of buyers but <b>69% of revenue</b>.")]
story += [Paragraph(f"<b>Vendor &amp; AP Spend Analytics</b> | SQL, Power BI, Tableau &nbsp; "
                    f"{link('GitHub', 'https://github.com/ndkn-code/vendor-ap-analytics')} | "
                    f"{link('Case Study', 'https://jknguyen-portfolio.vercel.app/projects/vendor-ap-analytics')}", body)]
story += [bp("Advanced SQL (CTEs, window functions, INTERSECT) + a Power BI dashboard over a $7.2B two-entity ERP AP ledger: <b>38% of spend in 10 vendors</b>; flagged 561 never-paid / 207 foreign / 118 cross-entity vendors to clean up.")]
story += [Paragraph(f"<b>Lumist Growth Analytics</b> | SQL, Python, Tableau &nbsp; "
                    f"{link('GitHub', 'https://github.com/ndkn-code/lumist-growth-analytics')} | "
                    f"{link('Case Study', 'https://jknguyen-portfolio.vercel.app/projects/lumist-growth')}", body)]
story += [bp("Cleaned 151 free-text acquisition labels into 7 channels, then ran SQL cohort/funnel/conversion analysis on 5,500 students to prove volume &ne; value (top channel 5.4% vs 33%); memo to rebalance ad spend.")]

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

doc = BaseDocTemplate(OUT, pagesize=letter, leftMargin=0.5 * inch, rightMargin=0.5 * inch,
                      topMargin=0.45 * inch, bottomMargin=0.4 * inch)
# Zero frame padding so plain paragraphs (section headers, project titles, skills)
# start at the true 0.5" margin, aligning with the full-width row() tables.
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height,
              leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc.addPageTemplates([PageTemplate(id="resume", frames=[frame])])
doc.build(story)
print(f"wrote {os.path.relpath(OUT, ROOT)}")
