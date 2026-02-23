/**
 * VIDI Docs — Color Foundations
 * Route: /foundations/colors
 *
 * "use client" required — CopyButton uses the Clipboard API.
 */

"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { palette, special } from "@/lib/tokens/palette";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ColorSwatch {
  token: string;
  hex: string;
  isCore?: boolean;
}

interface ColorGroup {
  label: string;
  description: string;
  swatches: ColorSwatch[];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const SHADES = [70, 60, 50, 40, 30, 20, 10] as const;

/** WCAG luminance check — returns true when white text is needed on the swatch. */
function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.55;
}

/** Build a swatch list from a palette family object. */
function buildSwatches(
  family: Record<number, string>,
  prefix: string,
  core: number
): ColorSwatch[] {
  return SHADES.map((s) => ({
    token: `${prefix}-${s}`,
    hex: family[s],
    isCore: s === core,
  }));
}

// ── Color groups data ─────────────────────────────────────────────────────────

const COLOR_GROUPS: ColorGroup[] = [
  {
    label: "Red — Primary",
    description: "The VIDI brand red. Used for primary CTAs, active states, and key UI highlights.",
    swatches: buildSwatches(palette.red, "red", 30),
  },
  {
    label: "Blue",
    description: "Extended blue palette. Used for secondary actions, links, and informational states.",
    swatches: buildSwatches(palette.blue, "blue", 30),
  },
  {
    label: "Tosca",
    description: "Teal-adjacent accent. Suitable for success indicators and data visualisation.",
    swatches: buildSwatches(palette.tosca, "tosca", 30),
  },
  {
    label: "Green",
    description: "Positive confirmation. Used for success states, availability, and approvals.",
    swatches: buildSwatches(palette.green, "green", 30),
  },
  {
    label: "Purple",
    description: "Premium or creative accent. Suitable for badges, highlights, and tier indicators.",
    swatches: buildSwatches(palette.purple, "purple", 30),
  },
  {
    label: "Pink",
    description: "Playful accent for discovery, promotions, and expressive moments.",
    swatches: buildSwatches(palette.pink, "pink", 30),
  },
  {
    label: "Yellow",
    description: "Warning and caution signals. Use sparingly for alerts and pending states.",
    swatches: buildSwatches(palette.yellow, "yellow", 30),
  },
  {
    label: "Gray — Neutral",
    description: "The neutral scale for text, borders, surfaces, and disabled states.",
    swatches: [
      ...buildSwatches(palette.gray, "gray", 70),
      { token: "Black",   hex: special.black },
      { token: "White",   hex: special.white },
      { token: "Overlay Dark",  hex: palette.overlays.dark },
      { token: "Overlay Light", hex: palette.overlays.light },
    ],
  },
];

// ── CopyButton ────────────────────────────────────────────────────────────────

interface CopyButtonProps {
  hex: string;
  dark: boolean;
}

function CopyButton({ hex, dark }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Only copy the actual hex value (not rgba strings)
      const value = hex.startsWith("#") ? hex : hex;
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API not available — silent fail
    }
  };

  const iconColor = dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy hex code"
      className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-md opacity-0 transition-opacity group-hover/swatch:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
      style={{ backgroundColor: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)" }}
    >
      {copied ? (
        <Check className="size-3" style={{ color: iconColor }} />
      ) : (
        <Copy className="size-3" style={{ color: iconColor }} />
      )}
    </button>
  );
}

// ── SwatchCard ────────────────────────────────────────────────────────────────

interface SwatchCardProps {
  swatch: ColorSwatch;
}

function SwatchCard({ swatch }: SwatchCardProps) {
  const dark = isDark(swatch.hex.startsWith("#") ? swatch.hex : "#888888");
  const textColor = dark ? "#ffffff" : "#0C0D0F";

  return (
    <div className="group/swatch flex flex-col overflow-hidden rounded-xl border border-white/5">
      {/* Colour block */}
      <div
        className="relative h-16 w-full"
        style={{ backgroundColor: swatch.hex.startsWith("#") ? swatch.hex : undefined,
                 background: !swatch.hex.startsWith("#") ? `linear-gradient(135deg, ${swatch.hex.replace("rgba", "rgb").replace(", 0.85)", ")")} 0%, transparent 100%)` : undefined }}
      >
        <CopyButton hex={swatch.hex} dark={dark} />
        {swatch.isCore && (
          <span
            className="absolute bottom-1.5 left-2 rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: dark ? "rgba(255,255,255,0.20)" : "rgba(0,0,0,0.12)",
              color: textColor,
            }}
          >
            core
          </span>
        )}
      </div>

      {/* Info strip */}
      <div className="space-y-0.5 bg-card/80 p-2.5">
        <p className="text-[11px] font-semibold text-foreground">{swatch.token}</p>
        <p className="font-mono text-[10px] uppercase text-muted-foreground">{swatch.hex}</p>
      </div>
    </div>
  );
}

// ── GroupSection ──────────────────────────────────────────────────────────────

interface GroupSectionProps {
  group: ColorGroup;
}

function GroupSection({ group }: GroupSectionProps) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-sm font-semibold text-foreground">{group.label}</h2>
        <p className="mt-0.5 text-xs text-muted-foreground">{group.description}</p>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
        {group.swatches.map((swatch) => (
          <SwatchCard key={swatch.token} swatch={swatch} />
        ))}
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ColorsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-12">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · foundations
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Color</h1>
          <p className="text-muted-foreground">
            8 families · 7 shades each (70→10) · 2 overlays
          </p>
        </header>

        {/* ── Overview ────────────────────────────────────────────── */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Overview
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These palette is what we believe to communicate our brand and provide how things
            function in the interface. With these palette we try to align our products in the same
            language to speak. Every use of this color is with the intention to bring a pleasant
            experience for our users.
          </p>
        </section>

        {/* ── Color Policy callout ─────────────────────────────────── */}
        <div className="rounded-xl border border-red-50/20 bg-red-50/5 p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 size-2 shrink-0 rounded-full bg-red-50" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">Color Policy — Fixed Palette</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This palette is treated as a <strong className="text-foreground">fix color</strong>,
                meaning that the color you choose will not change between light and dark themes.
                For example you choose{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">Red 10 #F8C8D1</code>{" "}
                in a light theme, then it will be the same in a dark theme.
              </p>
            </div>
          </div>
        </div>

        {/* ── Token naming legend ──────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-foreground">red-70</span>
            <span>Darkest shade</span>
          </div>
          <span className="text-border">·</span>
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-foreground">red-30</span>
            <span>Brand core</span>
          </div>
          <span className="text-border">·</span>
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-foreground">red-10</span>
            <span>Lightest shade</span>
          </div>
          <span className="text-border">·</span>
          <div className="flex items-center gap-2">
            <Copy className="size-3" />
            <span>Hover swatch to copy hex</span>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="border-t border-border" />

        {/* ── Color groups ────────────────────────────────────────── */}
        <div className="space-y-10">
          {COLOR_GROUPS.map((group) => (
            <GroupSection key={group.label} group={group} />
          ))}
        </div>

      </div>
    </main>
  );
}
