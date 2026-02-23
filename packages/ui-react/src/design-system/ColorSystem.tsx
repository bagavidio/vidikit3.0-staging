/**
 * VIDI Color System — Palette Verification Component
 * ─────────────────────────────────────────────────────────────
 * Displays the complete primitive color palette as a visual grid.
 * Route: /colors
 */

import { palette } from "@vidikit/tokens";

// ── Data ───────────────────────────────────────────────────────

const SHADES = [70, 60, 50, 40, 30, 20, 10] as const;

type Shade = (typeof SHADES)[number];

interface ColorFamily {
  name: string;
  key: keyof Omit<typeof palette, "overlays">;
  core: Shade;
}

const COLOR_FAMILIES: ColorFamily[] = [
  { name: "Red",    key: "red",    core: 30 },
  { name: "Blue",   key: "blue",   core: 30 },
  { name: "Tosca",  key: "tosca",  core: 30 },
  { name: "Green",  key: "green",  core: 30 },
  { name: "Purple", key: "purple", core: 30 },
  { name: "Pink",   key: "pink",   core: 30 },
  { name: "Yellow", key: "yellow", core: 30 },
  { name: "Gray",   key: "gray",   core: 70 },
];

// ── Helpers ────────────────────────────────────────────────────

function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.55;
}

// ── Sub-components ─────────────────────────────────────────────

interface SwatchProps {
  hex: string;
  shade: Shade;
  familyKey: string;
  isCore: boolean;
}

function Swatch({ hex, shade, familyKey, isCore }: SwatchProps) {
  const dark = isDark(hex);
  const textColor = dark ? "#ffffff" : "#0C0D0F";
  const twClass = `bg-${familyKey}-${shade}`;

  return (
    <div className="flex flex-col gap-0 overflow-hidden rounded-xl border border-black/5">
      <div className="relative flex h-20 w-full items-end p-2" style={{ backgroundColor: hex }}>
        {isCore && (
          <span
            className="rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: dark ? "rgba(255,255,255,0.20)" : "rgba(0,0,0,0.12)",
              color: textColor,
            }}
          >
            core
          </span>
        )}
      </div>
      <div className="flex flex-col gap-0.5 bg-white p-2 dark:bg-gray-60/30">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold text-gray-40">{shade}</span>
          <span className="font-mono text-[10px] text-gray-30">{twClass}</span>
        </div>
        <span className="font-mono text-[11px] uppercase text-gray-40">{hex}</span>
      </div>
    </div>
  );
}

interface FamilyRowProps {
  family: ColorFamily;
}

function FamilyRow({ family }: FamilyRowProps) {
  const shades = palette[family.key];
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-gray-40">
        {family.name}
        <span className="ml-2 font-mono text-xs font-normal text-gray-30">
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
      <h2 className="mb-3 text-sm font-semibold text-gray-40">
        Overlays
        <span className="ml-2 font-mono text-xs font-normal text-gray-30">
          bg-overlay-dark · bg-overlay-light
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-4 max-w-sm">
        <div className="overflow-hidden rounded-xl border border-black/5">
          <div className="h-16 w-full" style={{ backgroundColor: palette.overlays.dark }} />
          <div className="bg-white p-2 dark:bg-gray-60/30">
            <p className="text-xs font-bold text-gray-40">Overlay Dark</p>
            <p className="font-mono text-[10px] text-gray-30">bg-overlay-dark</p>
            <p className="font-mono text-[10px] text-gray-30">#0C0D0F · 85%</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-black/5">
          <div className="h-16 w-full border border-gray-20" style={{ backgroundColor: palette.overlays.light }} />
          <div className="bg-white p-2 dark:bg-gray-60/30">
            <p className="text-xs font-bold text-gray-40">Overlay Light</p>
            <p className="font-mono text-[10px] text-gray-30">bg-overlay-light</p>
            <p className="font-mono text-[10px] text-gray-30">#F5F8FF · 20%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main ───────────────────────────────────────────────────────

export function ColorSystem() {
  return (
    <div className="min-h-screen bg-gray-10 p-10">
      <header className="mb-10 space-y-1">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gray-30">
          vidikit · primitive color palette
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-70">Color System</h1>
        <p className="text-sm text-gray-40">
          8 families · 7 shades each (70→10) · 2 overlays
          <span className="mx-2 text-gray-20">·</span>
          Tailwind v4 — use{" "}
          <code className="rounded bg-gray-20/50 px-1 font-mono text-xs text-gray-50">bg-red-30</code>
          ,{" "}
          <code className="rounded bg-gray-20/50 px-1 font-mono text-xs text-gray-50">text-tosca-70</code>
          {" "}etc.
        </p>
      </header>

      <div className="space-y-8">
        {COLOR_FAMILIES.map((family) => (
          <FamilyRow key={family.key} family={family} />
        ))}
        <OverlayRow />
      </div>

      <footer className="mt-10 flex items-center gap-4 border-t border-gray-20 pt-6">
        <div className="flex items-center gap-1.5">
          <span className="inline-block rounded-full bg-gray-40/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-gray-40">
            core
          </span>
          <span className="text-xs text-gray-30">Brand core shade</span>
        </div>
        <span className="text-gray-20">·</span>
        <p className="text-xs text-gray-30">
          Semantic layer: <code className="font-mono">--vidi-primary</code> → <code className="font-mono">var(--red-30)</code>
        </p>
      </footer>
    </div>
  );
}
