/**
 * VIDI Color System — Palette Verification Component
 * ─────────────────────────────────────────────────────────────
 * Displays the complete primitive color palette as a visual grid.
 * Use this to verify the vibe matches the design reference.
 *
 * Route: /colors   (see app/colors/page.tsx)
 */

import { palette } from "@/lib/tokens";

// ── Data ───────────────────────────────────────────────────────

const SHADES = [70, 60, 50, 40, 30, 20, 10] as const;

type Shade = (typeof SHADES)[number];

interface ColorFamily {
  name: string;
  key: keyof Omit<typeof palette, "overlays">;
  core: Shade; // the "brand core" shade to highlight
}

const COLOR_FAMILIES: ColorFamily[] = [
  { name: "Primary", key: "primary", core: 30 },
  { name: "Blue",    key: "blue",    core: 30 },
  { name: "Tosca",   key: "tosca",   core: 30 },
  { name: "Green",   key: "green",   core: 30 },
  { name: "Purple",  key: "purple",  core: 30 },
  { name: "Pink",    key: "pink",    core: 30 },
  { name: "Yellow",  key: "yellow",  core: 30 },
  { name: "Neutral", key: "neutral", core: 70 },
];

// ── Helpers ────────────────────────────────────────────────────

/** Decide whether to use black or white text on a given hex swatch. */
function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // WCAG relative luminance approximation
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.55;
}

// ── Sub-components ─────────────────────────────────────────────

function Swatch({
  hex,
  shade,
  familyKey,
  isCore,
}: {
  hex: string;
  shade: Shade;
  familyKey: string;
  isCore: boolean;
}) {
  const dark = isDark(hex);
  const textColor = dark ? "#ffffff" : "#0C0D0F";
  const twClass = `bg-${familyKey}-${shade}`;

  return (
    <div className="flex flex-col gap-0 overflow-hidden rounded-xl border border-black/5">
      {/* Color block */}
      <div
        className="relative flex h-20 w-full items-end p-2"
        style={{ backgroundColor: hex }}
      >
        {/* Core badge */}
        {isCore && (
          <span
            className="rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: dark
                ? "rgba(255,255,255,0.20)"
                : "rgba(0,0,0,0.12)",
              color: textColor,
            }}
          >
            core
          </span>
        )}
      </div>

      {/* Info strip */}
      <div className="flex flex-col gap-0.5 bg-white p-2 dark:bg-neutral-60/30">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold text-neutral-40">{shade}</span>
          <span className="font-mono text-[10px] text-neutral-30">{twClass}</span>
        </div>
        <span className="font-mono text-[11px] uppercase text-neutral-40">
          {hex}
        </span>
      </div>
    </div>
  );
}

function FamilyRow({ family }: { family: ColorFamily }) {
  const shades = palette[family.key];

  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-neutral-40">
        {family.name}
        <span className="ml-2 font-mono text-xs font-normal text-neutral-30">
          bg-{family.key}-*
        </span>
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {SHADES.map((shade) => (
          <Swatch
            key={shade}
            hex={shades[shade]}
            shade={shade}
            familyKey={family.key}
            isCore={shade === family.core}
          />
        ))}
      </div>
    </section>
  );
}

function OverlayRow() {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-neutral-40">
        Overlays
        <span className="ml-2 font-mono text-xs font-normal text-neutral-30">
          bg-overlay-dark · bg-overlay-light
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-4 max-w-sm">
        {/* Dark overlay */}
        <div className="overflow-hidden rounded-xl border border-black/5">
          <div
            className="h-16 w-full"
            style={{ backgroundColor: palette.overlays.dark }}
          />
          <div className="bg-white p-2 dark:bg-neutral-60/30">
            <p className="text-xs font-bold text-neutral-40">Overlay Dark</p>
            <p className="font-mono text-[10px] text-neutral-30">
              bg-overlay-dark
            </p>
            <p className="font-mono text-[10px] text-neutral-30">
              #0C0D0F · 85%
            </p>
          </div>
        </div>

        {/* Light overlay */}
        <div className="overflow-hidden rounded-xl border border-black/5">
          <div
            className="h-16 w-full border border-neutral-20"
            style={{ backgroundColor: palette.overlays.light }}
          />
          <div className="bg-white p-2 dark:bg-neutral-60/30">
            <p className="text-xs font-bold text-neutral-40">Overlay Light</p>
            <p className="font-mono text-[10px] text-neutral-30">
              bg-overlay-light
            </p>
            <p className="font-mono text-[10px] text-neutral-30">
              #F5F8FF · 20%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main ───────────────────────────────────────────────────────

export function ColorSystem() {
  return (
    <div className="min-h-screen bg-neutral-10 p-10">
      {/* Header */}
      <header className="mb-10 space-y-1">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-30">
          vidikit · primitive color palette
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-70">
          Color System
        </h1>
        <p className="text-sm text-neutral-40">
          8 families · 7 shades each (70→10) · 2 overlays
          <span className="mx-2 text-neutral-20">·</span>
          Tailwind v4 — use{" "}
          <code className="rounded bg-neutral-20/50 px-1 font-mono text-xs text-neutral-50">
            bg-primary-30
          </code>
          ,{" "}
          <code className="rounded bg-neutral-20/50 px-1 font-mono text-xs text-neutral-50">
            text-tosca-70
          </code>{" "}
          etc.
        </p>
      </header>

      {/* Color grid */}
      <div className="space-y-8">
        {COLOR_FAMILIES.map((family) => (
          <FamilyRow key={family.key} family={family} />
        ))}
        <OverlayRow />
      </div>

      {/* Legend */}
      <footer className="mt-10 flex items-center gap-4 border-t border-neutral-20 pt-6">
        <div className="flex items-center gap-1.5">
          <span className="inline-block rounded-full bg-neutral-40/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-40">
            core
          </span>
          <span className="text-xs text-neutral-30">Brand core shade</span>
        </div>
        <span className="text-neutral-20">·</span>
        <p className="text-xs text-neutral-30">
          Semantic layer:{" "}
          <code className="font-mono">--vidi-primary</code> →{" "}
          <code className="font-mono">var(--primary-30)</code>
        </p>
      </footer>
    </div>
  );
}
