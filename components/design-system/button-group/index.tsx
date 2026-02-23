/**
 * VIDI ButtonGroup — Layout wrapper for grouped buttons
 * ─────────────────────────────────────────────────────────────
 * Merges children into a shared border container.
 * Children's individual rounded corners are flattened;
 * the group wrapper provides the pill rounding.
 *
 * Usage:
 *   <ButtonGroup>
 *     <Button intent="primary">Save</Button>
 *     <Button intent="outline">Cancel</Button>
 *   </ButtonGroup>
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonGroupVariants = cva(
  [
    "inline-flex items-stretch",
    "rounded-4xl overflow-hidden",
    "border border-border bg-clip-padding",
    // Children reset: flatten inner borders/rounding
    "[&>*]:rounded-none [&>*]:border-0",
    // Divider between children
    "[&>*+*]:border-l [&>*+*]:border-border/50",
    // First/last get rounding
    "[&>*:first-child]:rounded-l-4xl",
    "[&>*:last-child]:rounded-r-4xl",
    // Focus within — TV ring on the group
    "focus-within:ring-2 focus-within:ring-ring/40 focus-within:scale-[1.02]",
  ],
  {
    variants: {
      size: {
        default: "",
        sm: "[&>*]:h-8 [&>*]:px-3 [&>*]:text-xs",
        lg: "[&>*]:h-10 [&>*]:px-4",
      },
      orientation: {
        horizontal: "flex-row",
        vertical: [
          "flex-col",
          "[&>*+*]:border-l-0 [&>*+*]:border-t [&>*+*]:border-border/50",
          "[&>*:first-child]:rounded-l-none [&>*:first-child]:rounded-t-4xl",
          "[&>*:last-child]:rounded-r-none [&>*:last-child]:rounded-b-4xl",
        ].join(" "),
      },
    },
    defaultVariants: {
      size: "default",
      orientation: "horizontal",
    },
  }
);

export interface ButtonGroupProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof buttonGroupVariants> {}

export function ButtonGroup({
  className,
  size,
  orientation,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      data-slot="button-group"
      role="group"
      className={cn(buttonGroupVariants({ size, orientation }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
