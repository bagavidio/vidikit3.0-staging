import { cva } from "class-variance-authority";

/**
 * VIDI Master Button — CVA Variant Definitions (Maia Style)
 * ─────────────────────────────────────────────────────────────
 * Intent map (VIDI brand tokens):
 *   primary     #FD1B44  — main CTA (VIDI Red)
 *   extended    #0074FF  — secondary CTA (VIDI Blue)
 *   neutral     #0C0D0F  — neutral action (VIDI Dark)
 *   secondary   Glass    — white/90 + backdrop-blur-md
 *   ghost       white/5  — subtle blur
 *   outline     gray-10/20 — bordered surface
 *   destructive soft red — bg-destructive/10 (maia)
 *   link        blue-20  — text-only (#348BF4)
 */
export const buttonVariants = cva(
  // ── Base (Maia structural pattern) ──────────────────────────
  [
    // Focus ring base — overridden by platform variant below
    "focus-visible:border-ring focus-visible:ring-ring/50",
    // Invalid states
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
    "aria-invalid:ring-[3px]",
    // Shape & border — pill + invisible border in layout
    "rounded-4xl border border-transparent bg-clip-padding",
    // Typography
    "text-sm font-medium",
    // SVG auto-sizing (only when no explicit size- class)
    "[&_svg:not([class*='size-'])]:size-4",
    // Layout
    "inline-flex items-center justify-center whitespace-nowrap",
    // Transitions
    "transition-all duration-150 ease-out",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-50",
    // SVG interaction
    "[&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
    // Misc
    "outline-none group/button select-none cursor-pointer",
  ],
  {
    variants: {
      // ── Intent ──────────────────────────────────────────────
      intent: {
        /** VIDI Red CTA — bg red-30 (#FD1B44) */
        primary:
          "bg-red-30 text-white hover:bg-red-40 active:bg-red-50 aria-expanded:bg-red-50",

        /** VIDI Blue — secondary CTA */
        extended:
          "bg-blue-30 text-white hover:bg-blue-40 active:bg-blue-50 aria-expanded:bg-blue-50",

        /** VIDI Dark — neutral action */
        neutral:
          "bg-gray-70 text-gray-10 hover:bg-gray-60 active:bg-gray-50 aria-expanded:bg-gray-50",

        /** Glass — white/90 + backdrop-blur-md */
        secondary:
          "bg-white/90 text-gray-70 backdrop-blur-md hover:bg-white/80 active:bg-white/70 aria-expanded:bg-white/70",

        /** Ghost — white/5 + subtle blur */
        ghost:
          "bg-white/5 backdrop-blur-sm text-foreground hover:bg-white/10 active:bg-white/15 aria-expanded:bg-white/10",

        /** Outline — gray-10/20 bordered surface */
        outline:
          "border-gray-40 bg-gray-10/20 text-foreground hover:bg-gray-10/30 hover:border-gray-30 aria-expanded:bg-muted",

        /** Soft destructive — Maia pattern (not solid) */
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 active:bg-destructive/30 focus-visible:ring-destructive/20 focus-visible:border-destructive/40 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",

        /** Link — blue-20 (#348BF4), no background */
        link: "text-blue-20 underline-offset-4 hover:underline hover:text-blue-30 bg-transparent",
      },

      // ── Platform ─────────────────────────────────────────────
      platform: {
        /** Web / Mobile — standard 2px focus ring */
        default: "focus-visible:ring-2",
        /** TV / 10-foot — 3px ring + scale-up for D-pad visibility */
        tv: "focus-visible:ring-[3px] focus-visible:ring-red-30 focus-visible:scale-[1.02]",
      },

      // ── Size ────────────────────────────────────────────────
      size: {
        /** Default (md): h-9 */
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",

        /** Extra small: h-6 */
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",

        /** Small: h-8 */
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",

        /** Large: h-10 */
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        /** Icon-only square — default */
        icon: "size-9",

        /** Icon-only square — xs */
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",

        /** Icon-only square — sm */
        "icon-sm": "size-8",

        /** Icon-only square — lg */
        "icon-lg": "size-10",
      },
    },

    defaultVariants: {
      intent: "primary",
      size: "default",
      platform: "default",
    },
  },
);
