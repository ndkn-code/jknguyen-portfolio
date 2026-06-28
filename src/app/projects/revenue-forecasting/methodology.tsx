"use client";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";

const STEPS = [
  { name: "Features", note: "lags, rolling means, day-of-week, marketing, events" },
  { name: "Model", note: "gradient-boosting regressor (scikit-learn)" },
  { name: "Baselines", note: "naive, seasonal-naive, 7-day moving average" },
  { name: "Validation", note: "walk-forward backtest: no look-ahead leakage" },
  { name: "Metric", note: "MAPE on a 90-day hold-out" },
];

const BACKTEST = `# Walk-forward backtest: each day predicted using ONLY prior days.
for pos in range(len(d) - 90, len(d)):
    train  = d.iloc[:pos]          # history up to (not incl.) the target day
    target = d.iloc[pos]
    model = GradientBoostingRegressor(
        n_estimators=300, max_depth=3, learning_rate=0.05)
    model.fit(train[FEATURES], train.revenue)
    forecast = model.predict(target[FEATURES])
    # ...compared against naive / seasonal-naive / moving-average baselines`;

export default function MethodologySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Approach</h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Turn a raw revenue series into features the launch dynamics actually
            depend on, then prove the model out-of-sample with a leakage-safe
            walk-forward backtest against the baselines a team would otherwise use.
          </p>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <FadeLeft>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The pipeline
            </h3>
            <div className="space-y-3">
              {STEPS.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-white dark:bg-card border border-border rounded-lg px-4 py-3"
                >
                  <code className="text-sm font-mono font-semibold text-primary">
                    {s.name}
                  </code>
                  <span className="text-xs text-muted-foreground">{s.note}</span>
                </div>
              ))}
            </div>
          </FadeLeft>
          <FadeRight>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The backtest loop (leakage-safe)
            </p>
            <CodeBlock code={BACKTEST} language="python" filename="forecasting.py" />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
