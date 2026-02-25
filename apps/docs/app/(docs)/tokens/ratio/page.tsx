/**
 * VIDI Docs — Tokens / Aspect Ratio
 * Route: /tokens/ratio
 */

// ── Types ─────────────────────────────────────────────────────────────────────

interface RatioToken {
  name:        string;
  token:       string;
  tailwind:    string;
  w:           number;
  h:           number;
  category:    "standard" | "brand";
  description: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const RATIO_TOKENS: RatioToken[] = [
  // Standard
  {
    name:        "Landscape",
    token:       "--aspect-landscape",
    tailwind:    "aspect-landscape",
    w: 16, h: 9,
    category:    "standard",
    description: "Standard widescreen — video players, hero banners, thumbnails",
  },
  {
    name:        "Portrait",
    token:       "--aspect-portrait",
    tailwind:    "aspect-portrait",
    w: 9, h: 16,
    category:    "standard",
    description: "Vertical / stories format — Reels, short-form content, poster cards",
  },
  {
    name:        "Thumbnail Portrait",
    token:       "--aspect-thumb-portrait",
    tailwind:    "aspect-thumb-portrait",
    w: 2, h: 3,
    category:    "standard",
    description: "Book / poster thumbnail — movie posters, show covers, content art",
  },
  {
    name:        "Square",
    token:       "--aspect-square",
    tailwind:    "aspect-square",
    w: 1, h: 1,
    category:    "standard",
    description: "Profile pictures, album art, avatar containers",
  },
  {
    name:        "Circle",
    token:       "--aspect-circle",
    tailwind:    "aspect-circle",
    w: 1, h: 1,
    category:    "standard",
    description: "Circular containers — avatars, status indicators. Pair with rounded-full overflow-hidden",
  },
  // VIDI Brand
  {
    name:        "Headline Mobile",
    token:       "--aspect-headline-mobile",
    tailwind:    "aspect-headline-mobile",
    w: 333, h: 187,
    category:    "brand",
    description: "Primary hero headline on mobile — 333×187px canvas",
  },
  {
    name:        "Headline Desktop",
    token:       "--aspect-headline-desktop",
    tailwind:    "aspect-headline-desktop",
    w: 1000, h: 322,
    category:    "brand",
    description: "Primary hero headline on desktop — 1000×322px canvas",
  },
  {
    name:        "Subheadline",
    token:       "--aspect-subheadline",
    tailwind:    "aspect-subheadline",
    w: 236, h: 101,
    category:    "brand",
    description: "Secondary headline slot — 236×101px compact banner",
  },
  {
    name:        "Breaking Mobile",
    token:       "--aspect-breaking-mobile",
    tailwind:    "aspect-breaking-mobile",
    w: 328, h: 94,
    category:    "brand",
    description: "Breaking news banner on mobile — 328×94px ultra-wide strip",
  },
  {
    name:        "Breaking Desktop",
    token:       "--aspect-breaking-desktop",
    tailwind:    "aspect-breaking-desktop",
    w: 1200, h: 328,
    category:    "brand",
    description: "Breaking news banner on desktop — 1200×328px full-width strip",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function RatioCard({ token }: { token: RatioToken }) {
  const ratio = token.w / token.h;
  // Constrain the visual preview: max-width 200px, derive height from ratio
  const previewW = 200;
  const previewH = Math.round(previewW / ratio);
  const clampedH = Math.min(Math.max(previewH, 32), 160);
  const displayW = Math.round(clampedH * ratio);

  const isCircle = token.name === "Circle";

  return (
    <div className="rounded-xl border border-border bg-card/60 p-5 space-y-4">
      {/* Ratio preview */}
      <div className="flex items-center justify-center py-2">
        <div
          className={`border border-red-50/30 bg-red-50/10 relative flex items-center justify-center ${
            isCircle ? "rounded-full" : "rounded"
          }`}
          style={{ width: `${Math.min(displayW, 200)}px`, height: `${clampedH}px` }}
        >
          <span className="font-mono text-[9px] text-red-50/60 absolute bottom-1 right-1.5">
            {token.w}:{token.h}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold text-foreground">{token.name}</p>
          {token.category === "brand" && (
            <span className="rounded-full bg-red-50/10 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-red-50">
              Brand
            </span>
          )}
        </div>
        <code className="block font-mono text-[10px] text-muted-foreground">{token.tailwind}</code>
        {token.category === "brand" && (
          <p className="font-mono text-[10px] text-muted-foreground/60">
            {token.w} × {token.h} px
          </p>
        )}
        <p className="text-[10px] leading-relaxed text-muted-foreground/80">{token.description}</p>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function RatioPage() {
  const standard = RATIO_TOKENS.filter((t) => t.category === "standard");
  const brand    = RATIO_TOKENS.filter((t) => t.category === "brand");

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · tokens
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Aspect Ratios</h1>
          <p className="text-muted-foreground">
            5 standard + 5 VIDI brand content-type ratios — Tailwind utilities via{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">@theme inline</code>
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@theme inline", "globals.css", "aspect-*", "Brand Formats"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Policy callout */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">Always Use Token Classes</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Never hardcode <code className="rounded bg-muted px-1 font-mono text-xs">aspect-ratio: 16/9</code>{" "}
            in CSS. Use the Tailwind token class (e.g.{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">aspect-landscape</code>) so
            changes can be managed from the single source of truth in{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">globals.css</code>.
            Brand-specific ratios are exact pixel-perfect formats specified by the Design team.
          </p>
        </div>

        {/* Standard ratios */}
        <section className="space-y-4">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Standard Ratios
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {standard.map((token) => (
              <RatioCard key={token.name} token={token} />
            ))}
          </div>
        </section>

        {/* Brand-specific ratios */}
        <section className="space-y-4">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            VIDI Brand Content Formats
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brand.map((token) => (
              <RatioCard key={token.name} token={token} />
            ))}
          </div>
        </section>

        {/* Full token table */}
        <section className="space-y-2">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Token Reference
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <colgroup>
                <col className="w-44" />
                <col className="w-44" />
                <col className="w-24" />
                <col />
              </colgroup>
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["CSS Variable", "Tailwind Class", "Ratio", "Description"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {RATIO_TOKENS.map((token, i) => (
                  <tr key={token.token} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs text-muted-foreground">{token.token}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground">{token.tailwind}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs text-muted-foreground">
                        {token.w}/{token.h}
                        {token.category === "brand" && (
                          <span className="text-muted-foreground/50"> ({token.w}×{token.h}px)</span>
                        )}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Usage patterns */}
        <section className="space-y-3">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Patterns
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                label: "Image container",
                code: `<div className="aspect-landscape w-full overflow-hidden rounded-xl">\n  <img src={src} className="size-full object-cover" />\n</div>`,
              },
              {
                label: "Video embed",
                code: `<div className="aspect-landscape w-full">\n  <iframe className="size-full" src={embedUrl} />\n</div>`,
              },
              {
                label: "Breaking banner",
                code: `<div className="aspect-breaking-mobile md:aspect-breaking-desktop\n     w-full overflow-hidden rounded-lg">\n  <img ... />\n</div>`,
              },
              {
                label: "Circular avatar",
                code: `<div className="aspect-circle w-12 overflow-hidden rounded-full">\n  <img src={avatar} className="size-full object-cover" />\n</div>`,
              },
              {
                label: "Content card thumbnail",
                code: `<div className="aspect-landscape sm:aspect-thumb-portrait\n     overflow-hidden rounded-xl">\n  <img ... className="size-full object-cover" />\n</div>`,
              },
              {
                label: "Responsive headline",
                code: `<div className="aspect-headline-mobile md:aspect-headline-desktop\n     w-full overflow-hidden rounded-xl">\n  <img src={hero} className="size-full object-cover" />\n</div>`,
              },
            ].map(({ label, code }) => (
              <div key={label} className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2 font-mono text-[10px] text-foreground/80 leading-relaxed whitespace-pre-wrap">
                  {code}
                </pre>
              </div>
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
  /* Standard */
  --aspect-landscape:        16 / 9;
  --aspect-portrait:          9 / 16;
  --aspect-thumb-portrait:    2 / 3;
  --aspect-square:            1 / 1;
  --aspect-circle:            1 / 1;

  /* VIDI Brand Content Formats */
  --aspect-headline-mobile:   333 / 187;   /* 333×187 */
  --aspect-headline-desktop:  1000 / 322;  /* 1000×322 */
  --aspect-subheadline:       236 / 101;   /* 236×101 */
  --aspect-breaking-mobile:   328 / 94;    /* 328×94 */
  --aspect-breaking-desktop:  1200 / 328;  /* 1200×328 */
}`}
            </pre>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-3">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Always use token classes (<code className="rounded bg-muted px-1 font-mono text-xs text-foreground">aspect-landscape</code>) instead of hardcoded <code className="rounded bg-muted px-1 font-mono text-xs text-foreground">aspect-ratio</code> values.</li>
            <li>Use <code className="rounded bg-muted px-1 font-mono text-xs text-foreground">aspect-circle</code> with <code className="rounded bg-muted px-1 font-mono text-xs text-foreground">rounded-full overflow-hidden</code> for circular avatar containers.</li>
            <li>Brand ratios match exact pixel canvas sizes from the Design team — do not alter them.</li>
            <li>For responsive layouts, combine mobile and desktop brand tokens: <code className="rounded bg-muted px-1 font-mono text-xs text-foreground">aspect-headline-mobile md:aspect-headline-desktop</code>.</li>
            <li>Control width externally via the parent container — the aspect token only constrains the height-to-width relationship.</li>
            <li>Children of aspect containers should use <code className="rounded bg-muted px-1 font-mono text-xs text-foreground">size-full object-cover</code> to fill the space.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
