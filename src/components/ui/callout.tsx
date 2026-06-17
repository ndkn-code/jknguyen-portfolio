import type { ReactNode } from "react";

type Variant = "insight" | "recommendation" | "note";

const VARIANTS: Record<string, { bar: string; chip: string; label: string }> = {
  insight: {
    bar: "bg-primary",
    chip: "bg-primary/10 text-primary",
    label: "Insight",
  },
  recommendation: {
    bar: "bg-emerald-500",
    chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    label: "Recommendation",
  },
  note: {
    bar: "bg-amber-500",
    chip: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    label: "Note",
  },
};

// Highlight box for a key finding or recommendation. Accent bar + labeled chip.
export default function Callout({
  variant = "insight",
  label,
  title,
  children,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  const s = VARIANTS[variant];
  return (
    <div
      className={`relative bg-white dark:bg-card border border-border rounded-xl p-5 sm:p-6 overflow-hidden ${className}`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${s.bar}`} />
      <span
        className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${s.chip}`}
      >
        {label ?? s.label}
      </span>
      {title && <h4 className="font-bold text-base mb-1.5 leading-snug">{title}</h4>}
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}
