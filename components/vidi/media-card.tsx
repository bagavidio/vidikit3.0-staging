"use client";

import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { mediaCardVariants } from "./media-card.variants";

// ── Types ────────────────────────────────────────────────────────────────────

export interface MediaCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof mediaCardVariants> {
  /** Thumbnail image src */
  src?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Video/content title */
  title: string;
  /** Subtitle / channel name / metadata */
  subtitle?: string;
  /** Badge content (default: "LIVE") */
  badgeLabel?: string;
  /** Hide the badge entirely */
  hideBadge?: boolean;
  /** Timestamp text shown bottom-right of thumbnail (e.g. "12:34") */
  timestamp?: string;
  /** Icon overlay top-left of thumbnail */
  topLeftIcon?: React.ReactNode;
  /** Progress 0-100 (brand-red bar at bottom of thumbnail) */
  progress?: number;
}

// ── Thumbnail ────────────────────────────────────────────────────────────────

function Thumbnail({
  src,
  alt,
  timestamp,
  topLeftIcon,
  progress,
  badgeLabel,
  hideBadge,
}: Pick<
  MediaCardProps,
  "src" | "alt" | "timestamp" | "topLeftIcon" | "progress" | "badgeLabel" | "hideBadge"
>) {
  return (
    <div
      data-slot="media-card-thumbnail"
      className="relative aspect-video overflow-hidden bg-muted"
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? ""}
          className="size-full object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-gradient-to-br from-red-30/20 via-pink-30/10 to-blue-30/20">
          <svg
            viewBox="0 0 16 16"
            className="size-6 fill-current text-foreground/30"
            aria-hidden="true"
          >
            <path d="M5.5 3.5L12.5 8l-7 4.5V3.5Z" />
          </svg>
        </div>
      )}

      {/* Badge (top-left) */}
      {!hideBadge && (
        <div className="absolute left-2 top-2 z-10">
          <span className="inline-flex items-center rounded bg-[var(--red-50)] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            {badgeLabel ?? "LIVE"}
          </span>
        </div>
      )}

      {/* Top-left icon overlay (only when badge hidden) */}
      {topLeftIcon && hideBadge && (
        <div className="absolute left-2 top-2 z-10 text-white drop-shadow-md [&_svg]:size-4">
          {topLeftIcon}
        </div>
      )}

      {/* Timestamp (bottom-right with blur) */}
      {timestamp && (
        <div className="absolute bottom-2 right-2 z-10 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[10px] font-medium text-white backdrop-blur-sm">
          {timestamp}
        </div>
      )}

      {/* Progress bar (brand-red, bottom of thumbnail) */}
      {progress != null && progress > 0 && (
        <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/20">
          <div
            className="h-full bg-[var(--red-50)] transition-all"
            style={{
              width: `${Math.min(100, Math.max(0, progress))}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}

// ── MediaCard ────────────────────────────────────────────────────────────────

function MediaCard({
  className,
  variant,
  size,
  src,
  alt,
  title,
  subtitle,
  badgeLabel,
  hideBadge,
  timestamp,
  topLeftIcon,
  progress,
  children,
  ...props
}: MediaCardProps) {
  return (
    <div
      data-slot="media-card"
      data-variant={variant ?? "horizontal"}
      data-size={size ?? "md"}
      className={cn(mediaCardVariants({ variant, size }), className)}
      {...props}
    >
      <Thumbnail
        src={src}
        alt={alt}
        timestamp={timestamp}
        topLeftIcon={topLeftIcon}
        progress={progress}
        badgeLabel={badgeLabel}
        hideBadge={hideBadge}
      />
      <div data-slot="media-card-info" className="flex flex-col gap-1 p-3">
        <p className="line-clamp-2 text-sm font-medium text-foreground">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}

MediaCard.displayName = "MediaCard";

export { MediaCard, mediaCardVariants };
