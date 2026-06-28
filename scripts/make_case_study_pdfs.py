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
        "slug": "lumist-growth",
        "title": "Lumist: Acquisition &amp; Growth Analytics",
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
            "Make week-1 activation the north-star metric: it lifts conversion across every channel.",
            "Tier CAC targets by channel quality, not raw signups.",
        ],
    },
    {
        "slug": "online-retail",
        "title": "E-Commerce Customer &amp; Revenue Analytics",
        "subtitle": "Retail / customer analytics (real public data)  ·  SQL · Python · Tableau",
        "portfolio": "jknguyen-portfolio.vercel.app/projects/online-retail",
        "repo": "github.com/ndkn-code/online-retail-analytics",
        "question": "Who are the most valuable customers, do they come back, and where does revenue come from?",
        "method": "Cleaned 1.07M rows of real UK online-retail data (UCI Online Retail II) and ran SQL RFM segmentation, "
                  "cohort retention, and revenue concentration. £19.6M revenue / 5,852 customers / 43 countries.",
        "charts": ["online-retail/rfm_segments.png", "online-retail/cohort_retention.png"],
        "findings": [
            "Champions are 25% of customers but 69% of revenue; Loyal add another 14%.",
            "72% of customers re-purchase; strong cohorts still buy at ~37% a year later.",
            "Revenue is concentrated: ~23% of customers = 80%, and the UK alone is 85.5%.",
        ],
        "recommendations": [
            "Protect Champions with a VIP / loyalty track: they carry ~70% of revenue.",
            "Reactivate At-Risk / Hibernating buyers; cheaper than cold acquisition.",
            "Diversify beyond the UK using the 42 countries already transacting.",
        ],
    },
    {
        "slug": "vendor-ap-analytics",
        "title": "Vendor &amp; AP Spend Analytics",
        "subtitle": "Finance / BI (BA)  ·  SQL · Power BI · Tableau",
        "portfolio": "jknguyen-portfolio.vercel.app/projects/vendor-ap-analytics",
        "repo": "github.com/ndkn-code/vendor-ap-analytics",
        "question": "Where is accounts-payable spend going, and which vendors need cleaning up?",
        "method": "Wrote advanced SQL (CTEs, window functions, INTERSECT) over a two-entity ERP AP ledger, "
                  "validated in pandas. $7.2B spend / 3,552 vendors / 90K lines (synthetic, modeled on a real Unit4/Coda schema).",
        "charts": ["vendor-ap-analytics/spend_pareto.png", "vendor-ap-analytics/vendor_hygiene.png"],
        "findings": [
            "Spend is steeply Pareto: top 10 vendors = 38%, top 1% (29 vendors) = 61% of $7.2B AP.",
            "Vendor master data needs cleanup: 561 never-paid, 207 foreign-address, 118 cross-entity open/closed, 52 near-dup pairs.",
            "17% of invoices pay past the 45-day SLA (mean lag ~29 days), about $1.2B paid late.",
        ],
        "recommendations": [
            "Run a quarterly vendor-master cleanup: deactivate never-paid, merge duplicates, close cross-entity gaps.",
            "Focus sourcing on the ~82 vendors that make up 80% of spend.",
            "Add duplicate-vendor detection + a payment-timing SLA dashboard to cut late and double payments.",
        ],
    },
    {
        "slug": "revenue-forecasting",
        "title": "Revenue Forecasting",
        "subtitle": "Forecasting / ML  ·  Python · scikit-learn",
        "portfolio": "jknguyen-portfolio.vercel.app/projects/revenue-forecasting",
        "repo": "github.com/ndkn-code/vng-revenue-forecasting",
        "question": "Forecast a product launch's volatile daily revenue accurately enough to plan budgets against.",
        "method": "Engineered lag / seasonality / marketing / event features; gradient-boosting model vs naive "
                  "baselines, scored on a leakage-safe walk-forward backtest. Recreates VNG forecasting work.",
        "charts": ["revenue-forecasting/03_mape_comparison.png", "revenue-forecasting/02_backtest_forecast.png"],
        "findings": [
            "Model error 4.5% (MAPE) vs ~22% for a moving-average baseline, a ~80% reduction.",
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
