/**
 * VIDI Docs — Foundations / Shapes & Radius
 * Route: /foundations/shapes
 */

// ── Types ─────────────────────────────────────────────────────────────────────

interface RadiusToken {
  name: string;
  cssVar: string;
  tailwind: string;
  px: string;
  usage: string;
}

// ── Radius scale data ─────────────────────────────────────────────────────────

const RADIUS_TOKENS: RadiusToken[] = [
  {
    name: "None",
    cssVar: "--radius-none",
    tailwind: "rounded-none",
    px: "0px",
    usage: "Data tables, raw grid cells, full-bleed images",
  },
  {
    name: "XS",
    cssVar: "--radius-xs",
    tailwind: "rounded-sm",
    px: "4px",
    usage: "Code tokens, small badges, inline chips",
  },
  {
    name: "SM",
    cssVar: "--radius-sm",
    tailwind: "rounded",
    px: "6px",
    usage: "Input fields, select dropdowns, tooltips",
  },
  {
    name: "MD",
    cssVar: "--radius-md",
    tailwind: "rounded-md",
    px: "8px",
    usage: "Buttons (default), small cards, popovers",
  },
  {
    name: "LG",
    cssVar: "--radius-lg",
    tailwind: "rounded-lg",
    px: "12px",
    usage: "Modals, drawers, medium cards",
  },
  {
    name: "XL",
    cssVar: "--radius-xl",
    tailwind: "rounded-xl",
    px: "16px",
    usage: "Feature cards, sidebars, nav panels",
  },
  {
    name: "2XL",
    cssVar: "--radius-2xl",
    tailwind: "rounded-2xl",
    px: "20px",
    usage: "Hero sections, banners, large feature blocks",
  },
  {
    name: "Full",
    cssVar: "--radius-full",
    tailwind: "rounded-full",
    px: "9999px",
    usage: "Pills, tags, avatar rings, toggle switches",
  },
];

// ── VIDI Standard shapes ──────────────────────────────────────────────────────

const VIDI_SHAPES = [
  {
    label: "Button (Maia style)",
    tailwind: "rounded-4xl",
    description: "VIDI brand pill — used for all primary action buttons",
    color: "bg-red-50",
    textColor: "text-white",
    content: "Get Started",
  },
  {
    label: "Card",
    tailwind: "rounded-xl",
    description: "Default surface container — cards, modals, panels",
    color: "bg-card border border-border",
    textColor: "text-foreground",
    content: "Card surface",
  },
  {
    label: "Badge / Tag",
    tailwind: "rounded-full",
    description: "Inline pill for status labels and count indicators",
    color: "bg-red-50/10 border border-red-50/30",
    textColor: "text-red-50",
    content: "New",
  },
  {
    label: "Input",
    tailwind: "rounded-md",
    description: "Form inputs, selects, search fields",
    color: "bg-muted/40 border border-border",
    textColor: "text-muted-foreground",
    content: "Enter text…",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function RadiusCard({ token, index }: { token: RadiusToken; index: number }) {
  const size = Math.min(index * 6 + 0, 56);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/60 p-5">
      {/* Visual */}
      <div className="flex items-center gap-3">
        <div
          className="size-14 border-2 border-red-50/40 bg-red-50/10"
          style={{ borderRadius: token.px === "9999px" ? "9999px" : token.px }}
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{token.name}</p>
          <code className="font-mono text-[10px] text-muted-foreground">{token.px}</code>
        </div>
      </div>

      {/* Token info */}
      <div className="space-y-1">
        <code className="block font-mono text-[10px] text-muted-foreground">{token.cssVar}</code>
        <code className="block font-mono text-[10px] text-muted-foreground">{token.tailwind}</code>
        <p className="text-[10px] leading-relaxed text-muted-foreground/70">{token.usage}</p>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ShapesPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · foundations
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Shapes & Radius</h1>
          <p className="text-muted-foreground">
            Corner radius tokens — from square to full pill
          </p>
        </header>

        {/* Shape philosophy callout */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">Shape Language</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            VIDI uses <strong className="text-foreground">rounded forms</strong> to feel approachable
            and modern. The Maia button style uses{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">rounded-4xl</code> (pill) as
            the primary CTA shape. Cards use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">rounded-xl</code>. Never mix
            sharp corners with pill shapes in the same component cluster.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Web · border-radius", "iOS · cornerRadius", "Android · cornerRadiusDp"].map(
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

        {/* VIDI standard shapes */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Standard VIDI Shapes
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {VIDI_SHAPES.map((shape) => (
              <div
                key={shape.label}
                className="rounded-xl border border-border bg-card/40 p-5 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center px-4 py-2 text-xs font-semibold ${shape.color} ${shape.textColor} ${shape.tailwind}`}
                  >
                    {shape.content}
                  </div>
                  <code className="font-mono text-[10px] text-muted-foreground">{shape.tailwind}</code>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{shape.label}</p>
                  <p className="text-[10px] text-muted-foreground">{shape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full radius scale */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Radius Scale
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {RADIUS_TOKENS.map((token, i) => (
              <RadiusCard key={token.name} token={token} index={i} />
            ))}
          </div>
        </section>

        {/* Cross-platform reference */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Cross-Platform Reference
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Token", "px", "Web (CSS)", "iOS (Swift)", "Android (XML)"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { name: "SM",   px: "6px",     web: "border-radius: 6px",      ios: ".cornerRadius(6)",        android: "cornerRadius=\"6dp\"" },
                  { name: "MD",   px: "8px",     web: "border-radius: 8px",      ios: ".cornerRadius(8)",        android: "cornerRadius=\"8dp\"" },
                  { name: "LG",   px: "12px",    web: "border-radius: 12px",     ios: ".cornerRadius(12)",       android: "cornerRadius=\"12dp\"" },
                  { name: "XL",   px: "16px",    web: "border-radius: 16px",     ios: ".cornerRadius(16)",       android: "cornerRadius=\"16dp\"" },
                  { name: "Full", px: "9999px",  web: "border-radius: 9999px",   ios: ".cornerRadius(height/2)", android: "cornerRadius=\"50%\"" },
                ].map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3"><code className="font-mono text-xs font-semibold text-foreground">{row.name}</code></td>
                    <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{row.px}</code></td>
                    <td className="px-4 py-3"><code className="font-mono text-[10px] text-muted-foreground">{row.web}</code></td>
                    <td className="px-4 py-3"><code className="font-mono text-[10px] text-muted-foreground">{row.ios}</code></td>
                    <td className="px-4 py-3"><code className="font-mono text-[10px] text-muted-foreground">{row.android}</code></td>
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
