/**
 * VIDI Docs — Foundations / Spacing & Grid
 * Route: /foundations/spacing
 */

// ── Types ─────────────────────────────────────────────────────────────────────

interface SpaceStep {
  token: string;
  px: number;
  rem: number;
  tailwind: string;
  usage: string;
}

// ── Spacing scale data (4px base) ─────────────────────────────────────────────

const SPACE_STEPS: SpaceStep[] = [
  { token: "space-0.5", px: 2,   rem: 0.125, tailwind: "p-0.5 / m-0.5 / gap-0.5", usage: "Hairline gaps, icon nudges" },
  { token: "space-1",   px: 4,   rem: 0.25,  tailwind: "p-1 / m-1 / gap-1",       usage: "Inline icon spacing, badge padding" },
  { token: "space-2",   px: 8,   rem: 0.5,   tailwind: "p-2 / m-2 / gap-2",       usage: "Tight internal padding, tag rows" },
  { token: "space-3",   px: 12,  rem: 0.75,  tailwind: "p-3 / m-3 / gap-3",       usage: "Small button padding, compact cards" },
  { token: "space-4",   px: 16,  rem: 1,     tailwind: "p-4 / m-4 / gap-4",       usage: "Default input padding, card gap" },
  { token: "space-5",   px: 20,  rem: 1.25,  tailwind: "p-5 / m-5 / gap-5",       usage: "Card internal padding" },
  { token: "space-6",   px: 24,  rem: 1.5,   tailwind: "p-6 / m-6 / gap-6",       usage: "Section padding, drawer header" },
  { token: "space-8",   px: 32,  rem: 2,     tailwind: "p-8 / m-8 / gap-8",       usage: "Content block spacing" },
  { token: "space-10",  px: 40,  rem: 2.5,   tailwind: "p-10 / m-10 / gap-10",    usage: "Page-level section gaps" },
  { token: "space-12",  px: 48,  rem: 3,     tailwind: "p-12 / m-12 / gap-12",    usage: "Hero padding, major section breaks" },
  { token: "space-16",  px: 64,  rem: 4,     tailwind: "p-16 / m-16 / gap-16",    usage: "Full-bleed hero sections" },
  { token: "space-20",  px: 80,  rem: 5,     tailwind: "p-20 / m-20 / gap-20",    usage: "Page top/bottom padding" },
];

// ── Components ────────────────────────────────────────────────────────────────

function SpaceRow({ step, index }: { step: SpaceStep; index: number }) {
  const barWidth = Math.min((step.px / 80) * 100, 100);

  return (
    <tr className={index % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
      {/* Visual bar */}
      <td className="px-4 py-3 w-48">
        <div className="flex items-center gap-2">
          <div
            className="h-4 rounded-sm bg-red-50/70 shrink-0"
            style={{ width: `${Math.max(barWidth, 4)}%`, maxWidth: "100px" }}
          />
          <code className="font-mono text-[10px] text-muted-foreground">{step.px}px</code>
        </div>
      </td>

      {/* Token */}
      <td className="px-4 py-3">
        <code className="font-mono text-xs font-semibold text-foreground">{step.token}</code>
      </td>

      {/* Rem */}
      <td className="px-4 py-3">
        <code className="font-mono text-xs text-muted-foreground">{step.rem}rem</code>
      </td>

      {/* Tailwind */}
      <td className="px-4 py-3">
        <code className="font-mono text-[10px] text-muted-foreground">{step.tailwind}</code>
      </td>

      {/* Usage */}
      <td className="px-4 py-3 text-xs leading-relaxed text-muted-foreground max-w-xs">
        {step.usage}
      </td>
    </tr>
  );
}

// ── Grid columns visual ────────────────────────────────────────────────────────

function GridVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/40 p-6 space-y-4">
      <div className="flex gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded bg-red-50/15 border border-red-50/20 py-6 flex items-center justify-center"
          >
            <span className="font-mono text-[8px] text-red-50/60">{i + 1}</span>
          </div>
        ))}
      </div>
      <p className="text-center font-mono text-[10px] text-muted-foreground">
        12-column grid · 16px gutter (gap-4) · max-width 1280px
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SpacingPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · foundations
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Spacing & Grid</h1>
          <p className="text-muted-foreground">
            4px base unit · 12-column grid · Tailwind spacing scale
          </p>
        </header>

        {/* Base unit callout */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">4px Base Unit</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            All spacing values are multiples of <strong className="text-foreground">4px</strong>.
            Tailwind's default scale maps directly:{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">space-1 = 4px</code>,{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">space-2 = 8px</code>, etc.
            Use only values from this scale. Never hardcode arbitrary pixel values.
          </p>
        </div>

        {/* 12-column grid */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            12-Column Grid
          </h2>
          <GridVisual />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
            {[
              { label: "Columns",   value: "12" },
              { label: "Gutter",    value: "16px (gap-4)" },
              { label: "Margin",    value: "24px (px-6)" },
              { label: "Max Width", value: "1280px" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card/40 p-4">
                <p className="font-mono text-xs font-semibold text-foreground">{item.value}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing scale table */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Spacing Scale
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <colgroup>
                <col className="w-48" />
                <col className="w-28" />
                <col className="w-20" />
                <col className="w-48" />
                <col />
              </colgroup>
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Scale", "Token", "Rem", "Tailwind", "Usage"].map((h) => (
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
                {SPACE_STEPS.map((step, i) => (
                  <SpaceRow key={step.token} step={step} index={i} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Breakpoints */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Breakpoints
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Prefix", "Min Width", "Typical Device", "Columns"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { prefix: "(default)", min: "0px",    device: "Mobile portrait",  cols: "4" },
                  { prefix: "sm:",       min: "640px",  device: "Mobile landscape",  cols: "8" },
                  { prefix: "md:",       min: "768px",  device: "Tablet portrait",   cols: "12" },
                  { prefix: "lg:",       min: "1024px", device: "Tablet landscape",  cols: "12" },
                  { prefix: "xl:",       min: "1280px", device: "Desktop",           cols: "12" },
                  { prefix: "2xl:",      min: "1536px", device: "Wide desktop",      cols: "12" },
                ].map((row, i) => (
                  <tr key={row.prefix} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3"><code className="font-mono text-xs font-semibold text-foreground">{row.prefix}</code></td>
                    <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{row.min}</code></td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.device}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.cols}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
}
