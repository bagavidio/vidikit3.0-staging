/**
 * VIDI Chip — CVA Variants
 * ─────────────────────────────────────────────────────────────
 * Three surface variants + size scale.
 * Focus states are intentionally oversized for 10-foot / TV D-pad UX.
 */

import { cva, type VariantProps } from "class-variance-authority";

export const chipVariants = cva(
  // ── Base ──────────────────────────────────────────────────────
  [
    "inline-flex items-center gap-1 rounded-full font-medium",
    "transition-all duration-150 ease-out",
    "select-none outline-none cursor-default",
    // 10-foot UI: visible ring + scale up on focus
    "focus-visible:outline-none",
    "focus-visible:ring-4 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "focus-visible:scale-105",
    // Selected state — shared across variants via data-attr
    "data-[selected]:ring-2 data-[selected]:ring-red-30/50",
  ],
  {
    variants: {
      // ── Surface variant ─────────────────────────────────────
      variant: {
        /** Solid muted surface — default chip / tag */
        filled: [
          "bg-gray-50 text-gray-10",
          "hover:bg-gray-40",
          "data-[selected]:bg-red-30/15 data-[selected]:text-red-30",
        ],

        /** Border-only, transparent background */
        outline: [
          "border border-gray-40 text-gray-10 bg-transparent",
          "hover:bg-gray-50/50 hover:border-gray-30",
          "data-[selected]:border-red-30/60 data-[selected]:text-red-30",
        ],

        /** Clickable / interactive — used in filter bars and tag inputs */
        interactive: [
          "bg-gray-50 text-gray-10 cursor-pointer",
          "hover:bg-gray-40 active:scale-95",
          "data-[selected]:bg-red-30 data-[selected]:text-white",
          // Extra-large focus ring for TV remote navigation
          "focus-visible:ring-[5px]",
        ],

        /** Brand-accented chip */
        brand: [
          "bg-red-30/10 text-red-30 border border-red-30/25",
          "hover:bg-red-30/20 hover:border-red-30/40",
        ],
      },

      // ── Size ────────────────────────────────────────────────
      size: {
        sm:      "h-5 px-2 text-[10px]",
        default: "h-6 px-2.5 text-[11px]",
        lg:      "h-7 px-3 text-xs",
        xl:      "h-9 px-4 text-sm",   // TV / 10-foot
      },
    },

    defaultVariants: {
      variant: "filled",
      size:    "default",
    },
  }
);

export type ChipVariants = VariantProps<typeof chipVariants>;
