/**
 * VIDI Design System — Color Tokens
 * ─────────────────────────────────────────────────────────────
 * Source of Truth for brand colors in TypeScript / JS contexts.
 *
 * For Tailwind / CSS usage prefer the CSS variables and utilities:
 *   CSS var  →  var(--vidi-primary)
 *   Tailwind →  bg-vidi-primary, text-vidi-extended, etc.
 *
 * These constants are useful for:
 *   - Canvas / SVG rendering
 *   - React Native / React TV stylesheets
 *   - Storybook controls & documentation
 *   - Animation libraries (Framer Motion, GSAP)
 */

export const vidiColors = {
  /** #FD1B44 — VIDI Primary Red · Main CTA */
  primary: {
    DEFAULT: "#fd1b44",
    hover: "#e0153a",
    active: "#c31132",
    foreground: "#ffffff",
  },

  /** #0074FF — VIDI Extended Blue · Secondary CTA */
  extended: {
    DEFAULT: "#0074ff",
    hover: "#005fd1",
    active: "#0050b3",
    foreground: "#ffffff",
  },

  /** #0C0D0F — VIDI Neutral · Neutral actions */
  neutral: {
    DEFAULT: "#0c0d0f",
    hover: "#1a1c20",
    active: "#272a2f",
    foreground: "#ffffff",
  },
} as const;

export type VidiColorKey = keyof typeof vidiColors;
export type VidiColorShade = "DEFAULT" | "hover" | "active" | "foreground";
