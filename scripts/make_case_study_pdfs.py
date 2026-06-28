"""
Generate one-page case-study PDFs (background -> method -> charts -> findings ->
recommendations) for each data project, from the charts already in public/images/.
Output -> public/case-studies/<slug>.pdf.

Run:  python scripts/make_case_study_pdfs.py   (needs reportlab)
"""
import os
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, ListFlowable, ListItem,
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "public", "images")
OUT = os.path.join(ROOT, "public", "case-studies")
os.makedirs(OUT, exist_ok=True)

INK = colors.HexColor("#1a1a2e")
PRIMARY = colors.HexColor("#6366f1")
MUTED = colors.HexColor("#6b7280")

PROJECTS = [
    {
        "slug": "debatelab-analytics",
        "title": "DebateLab — Learning &amp; Growth Analytics",
        "subtitle": "Product analytics (DA + BA)  ·  SQL · Python · Tableau",
        "portfolio": "jknguyen-portfolio.vercel.app/projects/debatelab-analytics",
        "repo": "github.com/ndkn-code/debatelab-analytics",
        "question": "What makes a learner improve — and what turns a free user into a paying one?",
        "method": "Modeled the product schema and wrote SQL (CTEs, window functions, cohort logic), "
                  "validated in pandas. 4,200 users / 52K practice sessions (synthetic dataset on the real schema).",
        "charts": ["debatelab-analytics/01_frequency_vs_improvement.png", "debatelab-analytics/03_funnel.png"],
        "findings": [
            "Practice gains rise with frequency, then plateau past ~4 sessions/week.",
            "Of 5 scored skills, clarity improves fastest (+19 pts) and rebuttal slowest (+9).",
            "Engagement funnel: 70% activate, 43% reach 5 practices, 8.6% convert to premium.",
        ],
        "recommendations": [
            "Engineer a 5-practice habit in week 1 — the funnel's biggest leak.",
            "Concentrate coaching on the slow-moving skills (rebuttal, logic).",
            "Design streaks around ~4 sessions/week, where gains plateau.",
        ],
    },
    {
        "slug": "lumist-growth",
        "title": "Lumist — Acquisition &amp; Growth Analytics",
        "subtitle": "Growth / BI (BA)  ·  SQL · Python · Tableau",
        "portfolio": "jknguyen-portfolio.vercel.app/projects/lumist-growth",
        "repo": "github.com/ndkn-code/lumist-growth-analytics",
        "question": "Where should an SAT-prep startup spend to grow, and what converts free users to paid?",
        "method": "Cleaned 151 free-text channel labels into 7; SQL cohort / funnel / conversion analysis. "
                  "5,500 students (synthetic dataset calibrated to real production distributions).",
        "charts": ["lumist-growth/01_channel_volume_vs_value.png", "lumist-growth/02_engagement_vs_conversion.png"],
        "findings": [
            "Volume ≠ value: the biggest channel converts 5.4% vs 33% for the best channel.",
            "Conversion more than triples (8% → 27%) with engagement depth.",
            "Paying students are ~2× as engaged (4.5 vs 2.4 active days).",
        ],
        "recommendations": [
            "Rebalance acquisition spend toward high-efficiency channels; judge channels on paid users.",
            "Make week-1 activation the north-star metric — it lifts conversion across every channel.",
            "Tier CAC targets by channel quality, not raw signups.",
        ],
    },
    {
        "slug": "revenue-forecasting",
        "title": "Game-Launch Revenue Forecasting",
        "subtitle": "Forecasting / ML  ·  Python · scikit-learn",
        "portfolio": "jknguyen-portfolio.vercel.app/projects/revenue-forecasting",
        "repo": "github.com/ndkn-code/vng-revenue-forecasting",
        "question": "Forecast a game launch's daily revenue accurately enough to plan budgets against.",
        "method": "Engineered lag / seasonality / marketing / event features; gradient-boosting model vs naive "
                  "baselines, scored on a leakage-safe walk-forward backtest. Recreates VNG forecasting work.",
        "charts": ["revenue-forecasting/03_mape_comparison.png", "revenue-forecasting/02_backtest_forecast.png"],
        "findings": [
            "Model error 4.5% (MAPE) vs ~22% for a moving-average baseline — a ~80% reduction.",
            "Naive forecasts fail because they lag launch decay, weekends, and events by a day.",
            "Recent revenue, marketing spend, and seasonality carry the forecast.",
        ],
        "recommendations": [
            "Forecast with drivers (marketing, events), not history alone.",
            "Validate walk-forward, never a random split, to avoid look-ahead leakage.",
            "A ~4% forecast is tight enough to size UA budgets and cash flow.",
        ],
    },
]

styles = getSampleStyleSheet()
S = {
    "title": ParagraphStyle("t", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=15, textColor=colors.white, leading=18),
    "sub": ParagraphStyle("s", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, textColor=colors.white, leading=12),
    "links": ParagraphStyle("l", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, textColor=colors.white, alignment=2, leading=11),
    "label": ParagraphStyle("lb", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8, textColor=PRIMARY, spaceBefore=6, spaceAfter=2, leading=10),
    "body": ParagraphStyle("b", parent=styles["Normal"], fontName="Helvetica", fontSize=9.5, textColor=INK, leading=13),
    "bullet": ParagraphStyle("bl", parent=styles["Normal"], fontName="Helvetica", fontSize=9, textColor=INK, leading=12.5),
    "foot": ParagraphStyle("f", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, textColor=MUTED, leading=10),
}


def sized_image(rel, width):
    path = os.path.join(IMG, rel)
    iw, ih = ImageReader(path).getSize()
    return Image(path, width=width, height=width * ih / iw)


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, S["bullet"]), leftIndent=10, value="•") for t in items],
        bulletType="bullet", start="•", leftIndent=12, spaceBefore=1, spaceAfter=1,
    )


def build(p):
    doc = SimpleDocTemplate(
        os.path.join(OUT, f"{p['slug']}.pdf"), pagesize=letter,
        leftMargin=0.6 * inch, rightMargin=0.6 * inch, topMargin=0.45 * inch, bottomMargin=0.45 * inch)
    story = []

    header = Table(
        [[Paragraph(p["title"], S["title"]),
          Paragraph(f"Jack Nguyen<br/>{p['portfolio']}<br/>{p['repo']}", S["links"])]],
        colWidths=[4.55 * inch, 2.75 * inch])
    header.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PRIMARY),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 12), ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story += [header, Spacer(1, 3)]
    story += [Paragraph(p["subtitle"], ParagraphStyle("subdark", parent=S["body"], fontSize=8.5, textColor=MUTED)), Spacer(1, 6)]

    story += [Paragraph("BUSINESS QUESTION", S["label"]), Paragraph(p["question"], S["body"])]
    story += [Paragraph("APPROACH", S["label"]), Paragraph(p["method"], S["body"]), Spacer(1, 4)]

    w = 3.35 * inch
    imgs = Table([[sized_image(p["charts"][0], w), sized_image(p["charts"][1], w)]], colWidths=[w + 6, w + 6])
    imgs.setStyle(TableStyle([("ALIGN", (0, 0), (-1, -1), "CENTER"), ("VALIGN", (0, 0), (-1, -1), "TOP")]))
    story += [imgs, Spacer(1, 6)]

    half = [
        [Paragraph("KEY FINDINGS", S["label"]), Paragraph("RECOMMENDATIONS", S["label"])],
        [bullets(p["findings"]), bullets(p["recommendations"])],
    ]
    cols = Table(half, colWidths=[3.55 * inch, 3.55 * inch])
    cols.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (0, -1), 0), ("RIGHTPADDING", (1, 0), (1, -1), 0)]))
    story += [cols, Spacer(1, 8)]
    story += [Paragraph(
        "Synthetic dataset modeled on a real production schema (confidential). "
        f"Full case study &amp; code: {p['portfolio']} · {p['repo']}", S["foot"])]

    doc.build(story)
    print(f"  wrote case-studies/{p['slug']}.pdf")


if __name__ == "__main__":
    for proj in PROJECTS:
        build(proj)
    print("done")
