import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    // Shape & border — Maia DNA
    "rounded-4xl border border-transparent bg-clip-padding",
    // Focus ring — TV-optimized (#CA0528 via --ring)
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    // TV 10-foot: scale up on focus for D-pad navigation
    "focus-visible:scale-[1.02]",
    // Invalid states
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
    "aria-invalid:ring-[3px]",
    // Typography
    "text-sm font-medium",
    // SVG auto-sizing
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
  ].join(" "),
  {
    variants: {
      variant: {
        /** VIDI Red CTA — bg red-30 (#FD1B44) */
        default:
          "bg-red-30 text-white hover:bg-red-40 active:bg-red-50 aria-expanded:bg-red-50",

        /** Glass — white/90 + backdrop-blur-md */
        secondary: [
          "bg-white/90 text-gray-70 backdrop-blur-md",
          "hover:bg-white/80 active:bg-white/70",
          "aria-expanded:bg-white/70",
          "dark:bg-white/90 dark:text-gray-70 dark:hover:bg-white/80",
        ].join(" "),

        /** Outline — gray-10/20 transparent surface */
        outline: [
          "border-gray-40 bg-gray-10/20 text-foreground",
          "hover:bg-gray-10/30 hover:border-gray-30",
          "aria-expanded:bg-muted aria-expanded:text-foreground",
          "dark:border-gray-40 dark:bg-gray-10/20 dark:hover:bg-gray-10/30",
        ].join(" "),

        /** Ghost — white/5 + subtle blur */
        ghost: [
          "bg-white/5 backdrop-blur-sm text-foreground",
          "hover:bg-white/10 active:bg-white/15",
          "aria-expanded:bg-white/10 aria-expanded:text-foreground",
          "dark:bg-white/5 dark:hover:bg-white/10",
        ].join(" "),

        /** Soft destructive — Maia pattern (never solid red bg) */
        destructive: [
          "bg-destructive/10 text-destructive",
          "hover:bg-destructive/20 active:bg-destructive/30",
          "focus-visible:ring-destructive/20 focus-visible:border-destructive/40",
          "dark:bg-destructive/20 dark:hover:bg-destructive/30",
          "dark:focus-visible:ring-destructive/40",
        ].join(" "),

        /** Link — blue-20 text, no background */
        link: "text-blue-20 underline-offset-4 hover:underline hover:text-blue-30 bg-transparent",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
