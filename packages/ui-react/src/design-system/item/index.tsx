/**
 * VIDI Item — Flexible list-item primitive
 * ─────────────────────────────────────────────────────────────
 * Use for navigation lists, search results, settings rows,
 * and any repeated row-based layout.
 *
 * Maia style: pill hover, focus-visible scale for TV/D-pad.
 *
 * Usage:
 *   <Item
 *     icon={<Play className="size-4" />}
 *     title="Episode 1"
 *     description="The Beginning"
 *     trailing={<ChevronRight className="size-4" />}
 *     onClick={() => navigate("/ep/1")}
 *   />
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const itemVariants = cva(
  [
    "flex items-center gap-3 px-3 py-2.5 rounded-xl",
    "transition-all duration-150 ease-out",
    "outline-none select-none",
    // Hover
    "hover:bg-muted/60",
    // Focus base — overridden by platform variant
    "focus-visible:ring-ring/50 focus-visible:bg-muted/80",
    // Active
    "active:scale-[0.99]",
    // Disabled
    "aria-disabled:opacity-50 aria-disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: "",
        active: "bg-red-30/10 text-red-30 hover:bg-red-30/15",
        muted: "opacity-60",
      },
      size: {
        default: "min-h-10",
        sm: "min-h-8 px-2.5 py-1.5 gap-2",
        lg: "min-h-14 px-4 py-3 gap-4",
      },
      /** Platform variant — controls focus ring size for web vs TV. */
      platform: {
        /** Web / Mobile — standard 2px ring */
        default: "focus-visible:ring-2",
        /** TV / 10-foot — 4px ring + scale for D-pad visibility */
        tv: "focus-visible:ring-4 focus-visible:scale-[1.01]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      platform: "default",
    },
  }
);

export interface ItemProps
  extends Omit<React.ComponentProps<"div">, "onClick">,
    VariantProps<typeof itemVariants> {
  /** Leading icon or avatar. */
  icon?: React.ReactNode;
  /** Primary label. */
  title: string;
  /** Secondary text line. */
  description?: string;
  /** Trailing element — chevron, badge, switch, etc. */
  trailing?: React.ReactNode;
  /** Click handler — renders as interactive when provided. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Item({
  icon,
  title,
  description,
  trailing,
  variant,
  size,
  platform,
  onClick,
  className,
  ...props
}: ItemProps) {
  return (
    <div
      data-slot="item"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
              }
            }
          : undefined
      }
      className={cn(
        itemVariants({ variant, size, platform }),
        onClick && "cursor-pointer",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="flex shrink-0 items-center text-muted-foreground [&_svg]:size-4">
          {icon}
        </span>
      )}

      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-foreground">{title}</p>
        {description && (
          <p className="truncate text-xs text-muted-foreground">{description}</p>
        )}
      </div>

      {trailing && (
        <span className="flex shrink-0 items-center text-muted-foreground">
          {trailing}
        </span>
      )}
    </div>
  );
}
