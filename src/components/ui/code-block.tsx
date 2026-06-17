interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

// Lightweight, dependency-free code card (terminal-style header + mono body).
// Always dark — reads well in both light and dark themes.
export default function CodeBlock({
  code,
  language = "sql",
  filename,
  className = "",
}: CodeBlockProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[11px] font-mono text-zinc-400">
          {filename ?? language.toUpperCase()}
        </span>
      </div>
      <pre className="p-4 sm:p-5 overflow-x-auto text-[12.5px] leading-relaxed">
        <code className="font-mono text-zinc-200 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
