/**
 * VIDI Docs — Aspect Ratio Component
 * Route: /components/aspect-ratio
 */

import { AspectRatio } from "@/components/ui/aspect-ratio";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-0.5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground/70">{description}</p>
        )}
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  );
}

/** Labelled ratio demo with a coloured placeholder */
function RatioDemo({
  ratio,
  label,
  className,
}: {
  ratio: number;
  label: string;
  className?: string;
}) {
  return (
    <div className="w-full max-w-sm space-y-2">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <AspectRatio ratio={ratio}>
        <div
          className={`size-full rounded-xl flex items-center justify-center ${className ?? "bg-muted/40 border border-border"}`}
        >
          <span className="font-mono text-xs text-muted-foreground">{label}</span>
        </div>
      </AspectRatio>
    </div>
  );
}

export default function AspectRatioPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Aspect Ratio</h1>
        <p className="text-muted-foreground">
          Constrains content to a specific width-to-height ratio — great for images, videos, and
          cards.
        </p>
      </header>

      <div className="max-w-4xl space-y-12">

        {/* ── Common Ratios ── */}
        <Section
          title="Common Ratios"
          description="The most frequently used aspect ratios across web and video media."
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { ratio: 16 / 9,  label: "16 : 9",  className: "bg-blue-30/10 border border-blue-30/20" },
              { ratio: 4 / 3,   label: "4 : 3",   className: "bg-tosca-30/10 border border-tosca-30/20" },
              { ratio: 1,       label: "1 : 1",   className: "bg-purple-30/10 border border-purple-30/20" },
              { ratio: 3 / 2,   label: "3 : 2",   className: "bg-green-30/10 border border-green-30/20" },
            ].map(({ ratio, label, className }) => (
              <div key={label} className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <AspectRatio ratio={ratio}>
                  <div
                    className={`size-full rounded-xl flex items-center justify-center ${className}`}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
                  </div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </Section>

        {/* ── With Image ── */}
        <Section
          title="With Image"
          description="Wrap an <img> inside AspectRatio to prevent layout shift while the image loads."
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                16 : 9 — video thumbnail
              </p>
              <AspectRatio ratio={16 / 9}>
                <div className="size-full rounded-xl bg-gradient-to-br from-primary-30/20 via-pink-30/10 to-blue-30/20 border border-border flex flex-col items-center justify-center gap-2">
                  {/* Play icon placeholder */}
                  <div className="size-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 16 16" className="size-4 fill-current text-foreground ml-0.5" aria-hidden="true">
                      <path d="M5.5 3.5L12.5 8l-7 4.5V3.5Z" />
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">Video Thumbnail</span>
                </div>
              </AspectRatio>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                1 : 1 — avatar / product card
              </p>
              <AspectRatio ratio={1}>
                <div className="size-full rounded-xl bg-gradient-to-br from-purple-30/20 via-pink-30/10 to-tosca-30/20 border border-border flex flex-col items-center justify-center gap-2">
                  <div className="size-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 16 16" className="size-5 fill-current text-foreground" aria-hidden="true">
                      <circle cx="8" cy="5" r="3" />
                      <path d="M2 13c0-3.314 2.686-6 6-6s6 2.686 6 6H2Z" />
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">Profile / Product</span>
                </div>
              </AspectRatio>
            </div>
          </div>
        </Section>

        {/* ── Portrait Ratios ── */}
        <Section
          title="Portrait Ratios"
          description="Useful for mobile screenshots, story cards, and poster layouts."
        >
          <div className="flex flex-wrap gap-6 items-start">
            {[
              { ratio: 9 / 16, label: "9 : 16",  w: "w-28", className: "bg-yellow-30/10 border border-yellow-30/20" },
              { ratio: 3 / 4,  label: "3 : 4",   w: "w-36", className: "bg-pink-30/10 border border-pink-30/20" },
              { ratio: 2 / 3,  label: "2 : 3",   w: "w-32", className: "bg-primary-30/10 border border-primary-30/20" },
            ].map(({ ratio, label, w, className }) => (
              <div key={label} className={`${w} space-y-2`}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <AspectRatio ratio={ratio}>
                  <div className={`size-full rounded-xl flex items-center justify-center ${className}`}>
                    <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
                  </div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Inside a card grid ── */}
        <Section
          title="Content Card Grid"
          description="Pair with a content card to create uniform grid thumbnails."
        >
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {["Design System", "Motion", "Typography", "Color", "Icons", "Spacing"].map((name, i) => {
              const hues = [
                "from-blue-30/20 to-tosca-30/10",
                "from-purple-30/20 to-pink-30/10",
                "from-green-30/20 to-tosca-30/10",
                "from-yellow-30/20 to-green-30/10",
                "from-primary-30/20 to-pink-30/10",
                "from-blue-30/20 to-purple-30/10",
              ];
              return (
                <div key={name} className="rounded-xl overflow-hidden border border-border bg-card">
                  <AspectRatio ratio={16 / 9}>
                    <div className={`size-full bg-gradient-to-br ${hues[i]} flex items-center justify-center`}>
                      <span className="text-[10px] font-mono text-muted-foreground">{i + 1}</span>
                    </div>
                  </AspectRatio>
                  <div className="p-2">
                    <p className="text-xs font-medium text-foreground">{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Use <strong>AspectRatio</strong> to prevent layout shift for media that loads asynchronously (images, videos, iframes).</li>
            <li>Set the child&apos;s classes to <code className="font-mono text-xs bg-muted px-1 rounded">object-cover size-full</code> on <code className="font-mono text-xs bg-muted px-1 rounded">&lt;img&gt;</code> elements so they fill the constrained box correctly.</li>
            <li>The <code className="font-mono text-xs bg-muted px-1 rounded">ratio</code> prop accepts any number — pass fractions like <code className="font-mono text-xs bg-muted px-1 rounded">16/9</code>, <code className="font-mono text-xs bg-muted px-1 rounded">4/3</code>, or <code className="font-mono text-xs bg-muted px-1 rounded">1</code>.</li>
            <li>Control the width externally (via the parent container) — AspectRatio only constraints the height relative to the width.</li>
            <li>Common ratios: <strong>16:9</strong> for video, <strong>1:1</strong> for avatars/products, <strong>4:3</strong> for classic photos, <strong>9:16</strong> for mobile/stories.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
