/**
 * VIDI Docs — Design Tokens / Semantic Layer
 * Route: /foundations/semantics
 *
 * "use client" — tab state managed client-side.
 */

"use client";

import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface SemanticToken {
  /** CSS variable name without the leading -- */
  role: string;
  /** Primitive token it maps to (e.g. "red-50") */
  mapping: string;
  /** Resolved hex or rgba string */
  hex: string;
  /** Tailwind utility to apply this token */
  utility: string;
  /** Plain-language usage guidance */
  usage: string;
}

interface TokenGroup {
  label: string;
  tokens: SemanticToken[];
}

interface Tab {
  id: string;
  label: string;
}

// ── Token data ────────────────────────────────────────────────────────────────

const COLOR_GROUPS: TokenGroup[] = [
  {
    label: "Brand Actions",
    tokens: [
      {
        role:    "brand-primary",
        mapping: "red-50",
        hex:     "#CA0528",
        utility: "bg-brand-primary",
        usage:   "Main CTA buttons, primary navigation links, and key interactive elements.",
      },
      {
        role:    "brand-primary-hover",
        mapping: "red-60",
        hex:     "#B00423",
        utility: "bg-brand-primary-hover",
        usage:   "Hover state for primary brand actions. Applied automatically via CSS :hover.",
      },
      {
        role:    "brand-primary-active",
        mapping: "red-70",
        hex:     "#7D0017",
        utility: "bg-brand-primary-active",
        usage:   "Pressed / active state for primary brand actions. Applied on :active.",
      },
    ],
  },
  {
    label: "Surface & Backgrounds",
    tokens: [
      {
        role:    "bg-base",
        mapping: "gray-70",
        hex:     "#0C0D0F",
        utility: "bg-bg-base",
        usage:   "Root page background. The darkest canvas level — never place text-secondary on it.",
      },
      {
        role:    "bg-surface",
        mapping: "gray-60",
        hex:     "#18191C",
        utility: "bg-bg-surface",
        usage:   "Elevated surface for cards, modals, drawers, and sidebars.",
      },
      {
        role:    "bg-overlay",
        mapping: "overlay-dark",
        hex:     "rgba(12,13,15,0.85)",
        utility: "bg-bg-overlay",
        usage:   "Modal backdrops, sheet scrims, and dark overlay layers on top of content.",
      },
    ],
  },
  {
    label: "Content & Text",
    tokens: [
      {
        role:    "text-primary",
        mapping: "gray-10",
        hex:     "#F5F8FF",
        utility: "text-text-primary",
        usage:   "High-contrast body text, headings, and labels on dark backgrounds.",
      },
      {
        role:    "text-secondary",
        mapping: "gray-30",
        hex:     "#9498A1",
        utility: "text-text-secondary",
        usage:   "Muted supporting text, captions, placeholder copy, and helper messages.",
      },
      {
        role:    "text-brand",
        mapping: "red-40",
        hex:     "#E3052D",
        utility: "text-text-brand",
        usage:   "Brand-coloured inline text, active labels, and decorative accent strings.",
      },
    ],
  },
  {
    label: "States (Functional)",
    tokens: [
      {
        role:    "state-info",
        mapping: "blue-50",
        hex:     "#005DCC",
        utility: "bg-state-info",
        usage:   "Informational banners, tooltips, and help / guidance indicators.",
      },
      {
        role:    "state-success",
        mapping: "green-50",
        hex:     "#10AD58",
        utility: "bg-state-success",
        usage:   "Success confirmations, completed steps, and positive status indicators.",
      },
      {
        role:    "state-warning",
        mapping: "yellow-50",
        hex:     "#C78015",
        utility: "bg-state-warning",
        usage:   "Caution alerts, non-critical warnings, and pending / in-progress states.",
      },
      {
        role:    "state-error",
        mapping: "red-50",
        hex:     "#CA0528",
        utility: "bg-state-error",
        usage:   "Error states, destructive confirmations, and validation failure banners.",
      },
    ],
  },
];

// ── Tabs config ───────────────────────────────────────────────────────────────

const TABS: Tab[] = [
  { id: "color",       label: "Color" },
  { id: "space",       label: "Space" },
  { id: "shadow",      label: "Shadow" },
  { id: "breakpoints", label: "Breakpoints" },
  { id: "typography",  label: "Typography" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Whether a hex/rgba value is visually dark (needs white foreground). */
function isDark(color: string): boolean {
  if (!color.startsWith("#")) return true; // assume rgba overlays are dark
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.6;
}

// ── Sub-components ────────────────────────────────────────────────────────────

interface TokenRowProps {
  token: SemanticToken;
  index: number;
}

function TokenRow({ token, index }: TokenRowProps) {
  const dark = isDark(token.hex);

  return (
    <tr className={index % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
      {/* Live Sample */}
      <td className="w-12 px-4 py-3">
        <div
          className="size-8 rounded-lg border border-white/10 shadow-sm"
          style={{
            backgroundColor: token.hex.startsWith("#") ? token.hex : undefined,
            background: !token.hex.startsWith("#")
              ? `linear-gradient(135deg, rgba(12,13,15,0.9) 0%, rgba(12,13,15,0.6) 100%)`
              : undefined,
          }}
          title={token.hex}
        />
      </td>

      {/* Role Name */}
      <td className="px-4 py-3">
        <div className="space-y-0.5">
          <code className="font-mono text-xs font-semibold text-foreground">
            --{token.role}
          </code>
          <p className="font-mono text-[10px] text-muted-foreground">{token.utility}</p>
        </div>
      </td>

      {/* Mapping */}
      <td className="px-4 py-3">
        <code className="font-mono text-xs text-muted-foreground">{token.mapping}</code>
      </td>

      {/* Hex */}
      <td className="px-4 py-3">
        <code className="font-mono text-xs text-foreground/80">{token.hex}</code>
      </td>

      {/* Usage */}
      <td className="px-4 py-3 text-xs leading-relaxed text-muted-foreground max-w-xs">
        {token.usage}
      </td>
    </tr>
  );
}

interface TokenGroupSectionProps {
  group: TokenGroup;
}

function TokenGroupSection({ group }: TokenGroupSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
        {group.label}
      </h3>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <colgroup>
            <col className="w-14" />
            <col className="w-56" />
            <col className="w-32" />
            <col className="w-36" />
            <col />
          </colgroup>
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Sample
              </th>
              <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Role Name
              </th>
              <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Mapping
              </th>
              <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Value
              </th>
              <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Usage Guideline
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {group.tokens.map((token, i) => (
              <TokenRow key={token.role} token={token} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Placeholder tab content ───────────────────────────────────────────────────

interface PlaceholderTabProps {
  label: string;
}

function PlaceholderTab({ label }: PlaceholderTabProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border py-20 text-center">
      <p className="text-sm font-medium text-foreground">{label} Tokens</p>
      <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
        This token category is being documented. Check back soon — or contribute via the GitHub
        repository.
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SemanticsPage() {
  const [activeTab, setActiveTab] = useState<string>("color");

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* ── Header ────────────────────────────────────────────── */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · foundations
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Design Tokens</h1>
          <p className="text-muted-foreground">
            Semantic layer — named roles that map primitives to UI meaning.
          </p>
        </header>

        {/* ── Platform callout ──────────────────────────────────── */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Source of Truth for All Platforms
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            These tokens are the canonical reference for <strong className="text-foreground">Web</strong>,{" "}
            <strong className="text-foreground">iOS</strong>, and{" "}
            <strong className="text-foreground">Android</strong>. Engineers should reference token
            names (e.g.{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">--brand-primary</code>) —
            never raw hex values — to ensure UI behaviour remains consistent across all surfaces
            when the design language evolves.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Web · CSS var(--brand-primary)", "iOS · brandPrimary", "Android · color_brand_primary"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Tab bar ───────────────────────────────────────────── */}
        <div className="border-b border-border">
          <nav className="flex gap-0" aria-label="Token categories">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "relative px-4 py-2.5 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  activeTab === tab.id
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-50"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Tab content ───────────────────────────────────────── */}
        {activeTab === "color" && (
          <section className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Color Tokens
              </h2>
              <p className="text-sm text-muted-foreground">
                13 semantic color roles. Each maps a primitive shade to a stable UI purpose.
                Use these instead of raw primitives in all product code.
              </p>
            </div>
            {COLOR_GROUPS.map((group) => (
              <TokenGroupSection key={group.label} group={group} />
            ))}
          </section>
        )}

        {activeTab === "space" && <PlaceholderTab label="Space" />}
        {activeTab === "shadow" && <PlaceholderTab label="Shadow" />}
        {activeTab === "breakpoints" && <PlaceholderTab label="Breakpoints" />}
        {activeTab === "typography" && <PlaceholderTab label="Typography" />}

      </div>
    </main>
  );
}
