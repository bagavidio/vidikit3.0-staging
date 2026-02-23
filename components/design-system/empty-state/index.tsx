/**
 * VIDI EmptyState — Pattern component for "No Data" results
 * ─────────────────────────────────────────────────────────────
 * Maia style: rounded-2xl, subtle border, centered layout.
 * Responsive: stacks vertically on mobile, horizontal on lg+.
 *
 * Usage:
 *   <EmptyState
 *     icon={<Inbox className="size-10" />}
 *     title="No results found"
 *     description="Try adjusting your search filters."
 *     action={<Button intent="primary">Reset Filters</Button>}
 *   />
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends React.ComponentProps<"div"> {
  /** Large icon or illustration. Rendered above the title. */
  icon?: React.ReactNode;
  /** Primary message. */
  title: string;
  /** Supporting text. */
  description?: string;
  /** Optional CTA button or link. */
  action?: React.ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        "flex flex-col items-center justify-center gap-4 px-6 py-16 text-center",
        "rounded-2xl border border-dashed border-border bg-card/30",
        // TV focus support
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 focus-visible:scale-[1.01]",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="text-muted-foreground/40 [&_svg]:size-12">
          {icon}
        </div>
      )}
      <div className="max-w-sm space-y-1.5">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {description && (
          <p className="text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}
