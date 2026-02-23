/**
 * VIDI Docs — ComponentPreview
 * ─────────────────────────────────────────────────────────────
 * Styled preview container for component showcases.
 * Renders children on a dark background with a subtle pattern.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  label?: string;
  center?: boolean;
  className?: string;
  /** Padding size: "sm" | "default" | "lg" */
  padding?: "sm" | "default" | "lg";
}

export function ComponentPreview({
  children,
  label,
  center = true,
  padding = "default",
  className,
}: ComponentPreviewProps) {
  const paddingCls = {
    sm: "p-6",
    default: "p-10",
    lg: "p-16",
  }[padding];

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-gray-60/20", className)}>
      {label && (
        <div className="border-b border-border/50 px-4 py-2">
          <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
        </div>
      )}
      <div
        className={cn(
          paddingCls,
          "bg-background/60",
          center && "flex flex-wrap items-center justify-center gap-3"
        )}
      >
        {children}
      </div>
    </div>
  );
}
