/**
 * VIDI Docs — Tokens / Breakpoints
 * Route: /tokens/breakpoints
 */

// ── Data ─────────────────────────────────────────────────────────────────────

interface Breakpoint {
  prefix:   string;
  px:       number;
  device:   string;
  columns:  number;
  margin:   string;
  gutter:   string;
  usage:    string;
}

const BREAKPOINTS: Breakpoint[] = [
  {
    prefix:  "(default)",
    px:      0,
    device:  "Mobile portrait",
    columns: 4,
    margin:  "16px",
    gutter:  "8px",
    usage:   "Stack everything single-column. Touch targets ≥ 44px.",
  },
  {
    prefix:  "sm:",
    px:      360,
    device:  "Mobile (small-large)",
    columns: 4,
    margin:  "16px",
    gutter:  "12px",
    usage:   "First breakpoint for landscape phones and compact phones. Still 4-col.",
  },
  {
    prefix:  "md:",
    px:      768,
    device:  "Tablet",
    columns: 8,
    margin:  "24px",
    gutter:  "16px",
    usage:   "Sidebar may appear. 2-column card grids. Navigation expands.",
  },
  {
    prefix:  "lg:",
    px:      1024,
    device:  "Laptop / desktop",
    columns: 12,
    margin:  "32px",
    gutter:  "24px",
    usage:   "Full 12-column layout. Sidebar pinned. Dense content grids.",
  },
  {
    prefix:  "xl:",
    px:      1280,
    device:  "Large desktop",
    columns: 12,
    margin:  "40px",
    gutter:  "24px",
    usage:   "Max content width kicks in (1280px). No wider layouts needed.",
  },
  {
    prefix:  "2xl:",
    px:      1920,
    device:  "Big screen / Smart TV",
    columns: 12,
    margin:  "80px",
    gutter:  "32px",
    usage:   "10-foot UI — oversized typography, extra spacing, D-pad navigation.",
  },
];

// ── Responsive pattern examples ───────────────────────────────────────────────

const EXAMPLES = [
  {
    label: "Grid columns",
    code: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    description: "Stacked → 2-col → 3-col → 4-col across breakpoints",
  },
  {
    label: "Font size",
    code: "text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl",
    description: "Scale headings up for tablet, desktop, and TV",
  },
  {
    label: "Padding",
    code: "px-4 md:px-6 lg:px-8 2xl:px-20",
    description: "Grow page margins as viewport widens",
  },
  {
    label: "Visibility",
    code: "hidden md:block",
    description: "Hide on mobile, show from tablet up",
  },
  {
    label: "Sidebar",
    code: "w-0 overflow-hidden lg:w-64 transition-all",
    description: "Sidebar hidden below lg, pinned at lg+",
  },
  {
    label: "TV focus ring",
    code: "focus-visible:ring-4 focus-visible:scale-105 2xl:focus-visible:ring-[6px]",
    description: "Larger focus indicator for 10-foot / D-pad UI",
  },
];

// ── Visual grid simulator ─────────────────────────────────────────────────────

function GridSimulator({ cols, label }: { cols: number; label: string }) {
  return (
    <div className="space-y-1.5">
      <p className="font-mono text-[10px] text-muted-foreground">{label}</p>
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: cols }).map((_, i) => (
          <div
            key={i}
            className="h-8 rounded bg-red-50/15 border border-red-50/20 flex items-center justify-center"
          >
            <span className="font-mono text-[7px] text-red-50/50">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Code block ────────────────────────────────────────────────────────────────

function CodeBlock({ label, code, description }: { label: string; code: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
      <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2 font-mono text-[11px] text-foreground/90 whitespace-nowrap">
        {code}
      </pre>
      <p className="text-[10px] text-muted-foreground">{description}</p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function BreakpointsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · tokens
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Breakpoints</h1>
          <p className="text-muted-foreground">
            5-step responsive scale — mobile-first · sm:360 · md:768 · lg:1024 · xl:1280 · 2xl:1920
          </p>
        </header>

        {/* Strategy callout */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-3">
          <p className="text-sm font-semibold text-foreground">Mobile-First Strategy</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            All base styles target <strong className="text-foreground">mobile portrait (0–359px)</strong>.
            Breakpoint prefixes (<code className="rounded bg-muted px-1 font-mono text-xs">sm:</code>,{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">md:</code>, …) apply at{" "}
            <strong className="text-foreground">and above</strong>. The{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">2xl:</code> breakpoint targets
            big screens and Smart TVs — use it to add extra spacing, larger type, and D-pad focus
            indicators.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Web · @media (min-width: Npx)",
              "iOS · SizeClass.regular / .compact",
              "Android · WindowSizeClass",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Breakpoint table */}
        <section className="space-y-2">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Breakpoint Scale
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <colgroup>
                <col className="w-28" />
                <col className="w-20" />
                <col className="w-36" />
                <col className="w-16" />
                <col className="w-20" />
                <col className="w-20" />
                <col />
              </colgroup>
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Prefix", "Min-W", "Device", "Cols", "Margin", "Gutter", "Usage"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {BREAKPOINTS.map((bp, i) => (
                  <tr
                    key={bp.prefix}
                    className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}
                  >
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground">
                        {bp.prefix}
                      </code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs text-muted-foreground">
                        {bp.px === 0 ? "0px" : `${bp.px}px`}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{bp.device}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{bp.columns}</td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-[10px] text-muted-foreground">
                        {bp.margin}
                      </code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-[10px] text-muted-foreground">
                        {bp.gutter}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                      {bp.usage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Grid simulators */}
        <section className="space-y-4">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Column Grid per Breakpoint
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/60 p-4 space-y-3">
              <GridSimulator cols={4} label="default + sm: · 4 cols" />
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-4 space-y-3">
              <GridSimulator cols={8} label="md: · 8 cols" />
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-4 space-y-3">
              <GridSimulator cols={12} label="lg: / xl: / 2xl: · 12 cols" />
            </div>
          </div>
        </section>

        {/* Responsive patterns */}
        <section className="space-y-4">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Common Responsive Patterns
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {EXAMPLES.map((ex) => (
              <CodeBlock key={ex.label} {...ex} />
            ))}
          </div>
        </section>

        {/* Token definition */}
        <section className="space-y-3">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Token Definition (globals.css)
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`@theme inline {
  /* ── Breakpoints — VIDI custom scale ── */
  --breakpoint-sm:  360px;   /* Mobile portrait  */
  --breakpoint-md:  768px;   /* Tablet           */
  --breakpoint-lg:  1024px;  /* Laptop / desktop */
  --breakpoint-xl:  1280px;  /* Desktop          */
  --breakpoint-2xl: 1920px;  /* Big screen / TV  */
}`}
            </pre>
          </div>
        </section>

        {/* Platform equivalents */}
        <section className="space-y-3">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Platform Equivalents
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                platform: "Web (CSS)",
                code: `@media (min-width: 768px) {\n  /* md styles */\n}`,
              },
              {
                platform: "iOS (Swift)",
                code: `if traitCollection\n   .horizontalSizeClass == .regular {\n  // tablet layout\n}`,
              },
              {
                platform: "Android (XML)",
                code: `<!-- res/layout-sw768dp/ -->\n<!-- or WindowSizeClass\n     .MEDIUM / .EXPANDED -->`,
              },
            ].map(({ platform, code }) => (
              <div key={platform} className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {platform}
                </p>
                <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2 font-mono text-[10px] text-foreground/80 leading-relaxed">
                  {code}
                </pre>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
