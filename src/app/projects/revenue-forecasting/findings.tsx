"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/motion";
import Callout from "@/components/ui/callout";

const IMG = "/images/revenue-forecasting";

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-3 sm:p-4">
        <Image src={src} alt={alt} width={1000} height={600} className="w-full h-auto" />
      </div>
      <figcaption className="text-xs text-muted-foreground px-4 pb-3">{caption}</figcaption>
    </figure>
  );
}

function Row({ children, flip = false }: { children: [React.ReactNode, React.ReactNode]; flip?: boolean }) {
  return (
    <FadeUp>
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className={flip ? "lg:order-2" : ""}>{children[0]}</div>
        <div className={flip ? "lg:order-1" : ""}>{children[1]}</div>
      </div>
    </FadeUp>
  );
}

export default function FindingsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-10">
        <FadeUp>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            From a ~22% forecast error to ~4.5%
          </h2>
        </FadeUp>

        <Row>
          <Figure
            src={`${IMG}/03_mape_comparison.png`}
            alt="Forecast error (MAPE) by method"
            caption="Mean absolute % error on a 90-day hold-out, by method."
          />
          <Callout title="The model is ~5× more accurate than the baseline">
            A 7-day moving average, a typical &ldquo;business-as-usual&rdquo;
            forecast, misses by <b>~22%</b>; seasonal-naive by 24%. The
            gradient-boosting model lands at <b>4.5%</b>, an <b>~80% error
            reduction</b>. (Mirrors the 20%→4% result I delivered at VNG.)
          </Callout>
        </Row>

        <Row flip>
          <Figure
            src={`${IMG}/02_backtest_forecast.png`}
            alt="Walk-forward backtest: actual vs model vs naive"
            caption="90-day walk-forward backtest: actual vs model forecast vs naive."
          />
          <Callout title="It tracks launches, events, and weekends">
            The model (dashed) hugs the actual curve through event spikes and
            weekend swings, while the naive forecast (red) is always a day
            late, which is exactly where its error comes from.
          </Callout>
        </Row>

        <Row>
          <Figure
            src={`${IMG}/01_revenue_series.png`}
            alt="Daily revenue series"
            caption="The underlying daily revenue: launch decay, weekly seasonality, event bumps."
          />
          <Callout variant="note" title="Why simple forecasts fail here">
            Revenue is shaped by a launch-decay curve, strong weekend
            seasonality, marketing bursts, and periodic in-game events, none of
            which &ldquo;yesterday&rsquo;s number&rdquo; can anticipate.
          </Callout>
        </Row>

        <Row flip>
          <Figure
            src={`${IMG}/04_feature_importance.png`}
            alt="Model feature importance"
            caption="Which features the model relies on most."
          />
          <Callout title="What the model actually learned">
            Recent revenue (lags &amp; rolling means), <b>marketing spend</b>,
            and <b>seasonality/events</b> carry the forecast, the same drivers a
            growth team controls, which makes the model useful for planning, not
            just prediction.
          </Callout>
        </Row>
      </div>
    </section>
  );
}
