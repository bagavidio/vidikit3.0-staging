import { cva } from "class-variance-authority";

/**
 * VIDI Master Button — CVA Variant Definitions
 * ─────────────────────────────────────────────────────────────
 * Structural pattern follows the shadcn radix-maia style:
 *   · rounded-4xl pill shape
 *   · border border-transparent bg-clip-padding (border is always
 *     in layout; color is set per-variant or on focus)
 *   · focus-visible: border-ring + ring-ring/50 at 3px
 *   · aria-invalid states built-in
 *   · has-data-[icon=inline-*] adaptive padding when icons present
 *   · group/button for child targeting
 *
 * Intent map (VIDI brand tokens):
 *   primary     #FD1B44  — main CTA         (VIDI Red)
 *   extended    #0074FF  — secondary CTA    (VIDI Blue)
 *   neutral     #0C0D0F  — neutral action   (VIDI Dark)
 *   ghost       transparent bg, muted hover
 *   outline     border-border, bg-input/30
 *   destructive soft red — bg-destructive/10 (maia pattern)
 *   pink        VIDI Pink — pink-50 (#99118C) accent CTA
 *   link        underline style, no bg
 *
 * Size map:
 *   default     h-9  / px-3   / gap-1.5
 *   xs          h-6  / px-2.5 / gap-1   / text-xs   · icon size-3
 *   sm          h-8  / px-3   / gap-1
 *   lg          h-10 / px-4   / gap-1.5
 *   icon        size-9   (square)
 *   icon-xs     size-6   (square) · icon size-3
 *   icon-sm     size-8   (square)
 *   icon-lg     size-10  (square)
 */
export const buttonVariants = cva(
  // ── Base (maia structural pattern) ──────────────────────────
  [
    // focus & validation ring
    "focus-visible:border-ring focus-visible:ring-ring/50",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
    // shape & border
    "rounded-4xl border border-transparent bg-clip-padding",
    // typography
    "text-sm font-medium",
    // ring widths
    "focus-visible:ring-[3px] aria-invalid:ring-[3px]",
    // svg auto-sizing (only when no explicit size- class)
    "[&_svg:not([class*='size-'])]:size-4",
    // layout
    "inline-flex items-center justify-center whitespace-nowrap",
    // transitions
    "transition-all",
    // disabled
    "disabled:pointer-events-none disabled:opacity-50",
    // svg interaction
    "[&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
    // misc
    "outline-none group/button select-none",
  ],
  {
    variants: {
      // ── Intent ──────────────────────────────────────────────
      intent: {
        /** VIDI Red — primary call-to-action */
        primary:
          "bg-[--vidi-primary] text-[--vidi-primary-foreground] hover:bg-[--vidi-primary-hover] aria-expanded:bg-[--vidi-primary-active]",

        /** VIDI Blue — secondary / extended actions */
        extended:
          "bg-[--vidi-extended] text-[--vidi-extended-foreground] hover:bg-[--vidi-extended-hover] aria-expanded:bg-[--vidi-extended-active]",

        /** VIDI Dark — neutral / tertiary actions */
        neutral:
          "bg-[--vidi-neutral] text-[--vidi-neutral-foreground] hover:bg-[--vidi-neutral-hover] aria-expanded:bg-[--vidi-neutral-active]",

        /** No background. Muted on hover. Supports aria-expanded */
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",

        /** Bordered. Semi-transparent input background */
        outline:
          "border-border bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",

        /** Soft destructive — maia pattern (not solid) */
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",

        /** VIDI Pink — accent CTA · pink-50 (#99118C) */
        pink: "bg-[--pink-50] text-white hover:bg-[--pink-40] aria-expanded:bg-[--pink-60]",

        /** Text link — underline on hover */
        link: "text-primary underline-offset-4 hover:underline",
      },

      // ── Size ────────────────────────────────────────────────
      size: {
        /** Default (md equivalent): h-9 */
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",

        /** Extra small: h-6 */
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",

        /** Small: h-8 */
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",

        /** Large: h-10 */
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        /** Icon-only square — default size */
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
    },
  },
);
