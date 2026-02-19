/**
 * VIDI Design System — Primitive Color Palette
 * ─────────────────────────────────────────────────────────────
 * This file IS the equivalent of tailwind.config.ts `theme.extend.colors`
 * for our Tailwind v4 project (which uses globals.css @theme instead).
 *
 * Use this file for:
 *   · React Native / React TV stylesheets
 *   · Storybook argTypes color pickers
 *   · Canvas / SVG / Framer Motion / GSAP
 *   · Unit tests asserting correct brand colors
 *   · Any non-CSS consumer that needs programmatic color access
 *
 * Naming convention:
 *   70 = darkest shade    10 = lightest shade
 *   30 = core brand color (the primary expression of each family)
 *
 * Tailwind utility classes (via globals.css @theme):
 *   bg-primary-30  text-blue-70  border-tosca-50  fill-green-10
 *   bg-neutral-70  bg-overlay-dark   bg-overlay-light
 */

// ── Primary (Red) ──────────────────────────────────────────────
export const primary = {
  70: "#7D0017",
  60: "#B00423",
  50: "#CA0528",
  40: "#E3052D",
  /** #FD1B44 — VIDI brand core red · bg-primary-30 */
  30: "#FD1B44",
  20: "#FE5070",
  10: "#F8C8D1",
} as const;

// ── Blue ───────────────────────────────────────────────────────
export const blue = {
  70: "#004496",
  60: "#0153B6",
  50: "#005DCC",
  40: "#0067E2",
  /** #0074FF — VIDI extended blue · bg-blue-30 */
  30: "#0074FF",
  20: "#348BF4",
  10: "#CAE2FF",
} as const;

// ── Tosca ──────────────────────────────────────────────────────
export const tosca = {
  70: "#07575C",
  60: "#0A747A",
  50: "#0C9199",
  40: "#0D9AA3",
  /** #10C1CC — VIDI tosca core · bg-tosca-30 */
  30: "#10C1CC",
  20: "#1CCEDA",
  10: "#BDF2F5",
} as const;

// ── Green ──────────────────────────────────────────────────────
export const green = {
  70: "#09782E",
  60: "#078E45",
  50: "#10AD58",
  40: "#0ABA5B",
  /** #22DA76 — VIDI green core · bg-green-30 */
  30: "#22DA76",
  20: "#25E57E",
  10: "#C4FBDD",
} as const;

// ── Purple ─────────────────────────────────────────────────────
export const purple = {
  70: "#2D075D",
  60: "#3C0A7C",
  50: "#4B0C9B",
  40: "#500DA6",
  /** #6410CF — VIDI purple core · bg-purple-30 */
  30: "#6410CF",
  20: "#7318E7",
  10: "#D8BFF8",
} as const;

// ── Pink ───────────────────────────────────────────────────────
export const pink = {
  70: "#5C0A54",
  60: "#7A0D70",
  50: "#99118C",
  40: "#A31296",
  /** #CC16BB — VIDI pink core · bg-pink-30 */
  30: "#CC16BB",
  20: "#E124CF",
  10: "#FFC6FA",
} as const;

// ── Yellow ─────────────────────────────────────────────────────
export const yellow = {
  70: "#956010",
  60: "#BB7814",
  50: "#C78015",
  40: "#E09017",
  /** #F9A01A — VIDI yellow core · bg-yellow-30 */
  30: "#F9A01A",
  20: "#FFB23E",
  10: "#FFEACA",
} as const;

// ── Neutral (Gray) ─────────────────────────────────────────────
export const neutral = {
  /** #0C0D0F — VIDI near-black · bg-neutral-70 */
  70: "#0C0D0F",
  60: "#18191C",
  50: "#26292E",
  40: "#525861",
  30: "#9498A1",
  20: "#C7CBD4",
  /** #F5F8FF — VIDI off-white · bg-neutral-10 */
  10: "#F5F8FF",
} as const;

// ── Overlays ───────────────────────────────────────────────────
export const overlays = {
  /** neutral-70 at 85% opacity — use for dark scrim/modal backdrop */
  dark: "rgba(12, 13, 15, 0.85)",
  /** neutral-10 at 20% opacity — use for light glass effects */
  light: "rgba(245, 248, 255, 0.20)",
} as const;

// ── Full palette ───────────────────────────────────────────────
/** Complete VIDI primitive color palette (all families). */
export const palette = {
  primary,
  blue,
  tosca,
  green,
  purple,
  pink,
  yellow,
  neutral,
  overlays,
} as const;

// ── Types ──────────────────────────────────────────────────────
export type PaletteFamily = keyof Omit<typeof palette, "overlays">;
export type PaletteShade = 10 | 20 | 30 | 40 | 50 | 60 | 70;
export type PaletteColor = `${PaletteFamily}-${PaletteShade}`;

/** Resolve a palette color token to its hex string. */
export function resolveColor(family: PaletteFamily, shade: PaletteShade): string {
  return palette[family][shade];
}
