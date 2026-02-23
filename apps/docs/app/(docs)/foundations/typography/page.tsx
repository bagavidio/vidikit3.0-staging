/**
 * VIDI Docs — Foundations / Typography
 * Route: /foundations/typography
 */

// ── Types ─────────────────────────────────────────────────────────────────────

interface TypeScale {
  name: string;
  role: string;
  webPx: number;
  weight: string;
  lineHeight: string;
  iosPt: number;
  androidSp: number;
  tracking?: string;
  tailwind: string;
  example: string;
}

// ── Type scale data ───────────────────────────────────────────────────────────

const TYPE_SCALE: TypeScale[] = [
  {
    name: "Display",
    role: "Hero headlines, splash screens",
    webPx: 48,
    weight: "700",
    lineHeight: "1.1",
    iosPt: 36,
    androidSp: 48,
    tracking: "-0.02em",
    tailwind: "text-5xl font-bold tracking-tight",
    example: "The VIDI Design System",
  },
  {
    name: "H1",
    role: "Page titles",
    webPx: 36,
    weight: "700",
    lineHeight: "1.15",
    iosPt: 28,
    androidSp: 36,
    tracking: "-0.015em",
    tailwind: "text-4xl font-bold tracking-tight",
    example: "Color Foundations",
  },
  {
    name: "H2",
    role: "Section headers",
    webPx: 24,
    weight: "600",
    lineHeight: "1.25",
    iosPt: 20,
    androidSp: 24,
    tailwind: "text-2xl font-semibold",
    example: "Brand Actions",
  },
  {
    name: "H3",
    role: "Sub-section, card titles",
    webPx: 18,
    weight: "600",
    lineHeight: "1.3",
    iosPt: 15,
    androidSp: 18,
    tailwind: "text-lg font-semibold",
    example: "Surface & Backgrounds",
  },
  {
    name: "Body L",
    role: "Lead paragraph text",
    webPx: 16,
    weight: "400",
    lineHeight: "1.6",
    iosPt: 16,
    androidSp: 16,
    tailwind: "text-base leading-relaxed",
    example: "Consistent design language across all platforms.",
  },
  {
    name: "Body M",
    role: "Default body, descriptions",
    webPx: 14,
    weight: "400",
    lineHeight: "1.6",
    iosPt: 14,
    androidSp: 14,
    tailwind: "text-sm leading-relaxed",
    example: "Use semantic tokens instead of raw hex values.",
  },
  {
    name: "Body S",
    role: "Secondary text, captions",
    webPx: 12,
    weight: "400",
    lineHeight: "1.5",
    iosPt: 12,
    androidSp: 12,
    tailwind: "text-xs",
    example: "Muted supporting context for labels and helpers.",
  },
  {
    name: "Label",
    role: "Input labels, badges, tabs",
    webPx: 12,
    weight: "600",
    lineHeight: "1.3",
    iosPt: 12,
    androidSp: 12,
    tracking: "0.01em",
    tailwind: "text-xs font-semibold",
    example: "BRAND COLOR",
  },
  {
    name: "Caption",
    role: "Timestamps, fine print",
    webPx: 11,
    weight: "400",
    lineHeight: "1.4",
    iosPt: 11,
    androidSp: 11,
    tailwind: "text-[11px]",
    example: "Last updated · 12 Feb 2026",
  },
  {
    name: "Mono",
    role: "Code, tokens, hex values",
    webPx: 12,
    weight: "500",
    lineHeight: "1.5",
    iosPt: 12,
    androidSp: 12,
    tailwind: "font-mono text-xs font-medium",
    example: "--brand-primary",
  },
];

// ── Row component ──────────────────────────────────────────────────────────────

interface TypeRowProps {
  scale: TypeScale;
  index: number;
}

function TypeRow({ scale, index }: TypeRowProps) {
  return (
    <tr className={index % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
      {/* Live Example */}
      <td className="px-4 py-4 align-middle">
        <span
          style={{
            fontSize: `${Math.min(scale.webPx, 28)}px`,
            fontWeight: scale.weight,
            lineHeight: scale.lineHeight,
            letterSpacing: scale.tracking,
            fontFamily: scale.tailwind.includes("mono") ? "var(--font-mono, monospace)" : undefined,
          }}
          className="text-foreground"
        >
          {scale.example}
        </span>
      </td>

      {/* Name + Role */}
      <td className="px-4 py-4 align-middle">
        <p className="text-xs font-semibold text-foreground">{scale.name}</p>
        <p className="mt-0.5 text-[10px] text-muted-foreground">{scale.role}</p>
      </td>

      {/* Web */}
      <td className="px-4 py-4 align-middle">
        <code className="font-mono text-xs text-foreground/80">{scale.webPx}px</code>
        {scale.tracking && (
          <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">ls {scale.tracking}</p>
        )}
      </td>

      {/* iOS */}
      <td className="px-4 py-4 align-middle">
        <code className="font-mono text-xs text-muted-foreground">{scale.iosPt}pt</code>
      </td>

      {/* Android */}
      <td className="px-4 py-4 align-middle">
        <code className="font-mono text-xs text-muted-foreground">{scale.androidSp}sp</code>
      </td>

      {/* Tailwind */}
      <td className="px-4 py-4 align-middle">
        <code className="font-mono text-[10px] text-muted-foreground">{scale.tailwind}</code>
      </td>
    </tr>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TypographyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · foundations
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Typography</h1>
          <p className="text-muted-foreground">
            10-step type scale — Web (px) · iOS (pt) · Android (sp)
          </p>
        </header>

        {/* Typeface callout */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">Typeface: Inter</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            VIDI uses <strong className="text-foreground">Inter</strong> as its primary typeface on
            Web (via{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">next/font/google</code>), iOS
            uses <strong className="text-foreground">SF Pro</strong> (system default), and Android
            uses <strong className="text-foreground">Roboto</strong> (system default). Font sizes are
            specified in platform-native units to maintain visual parity.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Web · Inter / next/font", "iOS · SF Pro (system)", "Android · Roboto (system)"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {label}
                </span>
              )
            )}
          </div>
        </div>

        {/* Scale table */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Type Scale
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <colgroup>
                <col />
                <col className="w-36" />
                <col className="w-24" />
                <col className="w-20" />
                <col className="w-24" />
                <col className="w-56" />
              </colgroup>
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Example", "Style", "Web", "iOS", "Android", "Tailwind"].map((h) => (
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
                {TYPE_SCALE.map((scale, i) => (
                  <TypeRow key={scale.name} scale={scale} index={i} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Weight palette */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Weight Palette
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Regular",   weight: "400", tw: "font-normal" },
              { label: "Medium",    weight: "500", tw: "font-medium" },
              { label: "Semibold",  weight: "600", tw: "font-semibold" },
              { label: "Bold",      weight: "700", tw: "font-bold" },
            ].map((w) => (
              <div key={w.label} className="rounded-xl border border-border bg-card/60 p-4 space-y-2">
                <p
                  className="text-2xl text-foreground"
                  style={{ fontWeight: w.weight }}
                >
                  Aa
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground">{w.label}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{w.weight} · {w.tw}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
