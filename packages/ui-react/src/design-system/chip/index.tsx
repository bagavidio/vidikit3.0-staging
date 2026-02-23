/**
 * VIDI Chip Component
 * ─────────────────────────────────────────────────────────────
 * Composable chip / tag / filter token.
 *
 * Variants: filled · outline · interactive · brand
 * Sizes:    sm · default · lg · xl (10-foot/TV)
 *
 * Usage:
 *   <Chip>Genre</Chip>
 *   <Chip variant="outline" selected>Drama</Chip>
 *   <Chip variant="interactive" dismissible onDismiss={...}>Action</Chip>
 */

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { cn } from "../../lib/utils";
import { chipVariants, type ChipVariants } from "./chip.variants";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ChipProps
  extends Omit<React.ComponentProps<"span">, "onClick">,
    ChipVariants {
  /** Renders a × dismiss button. Works best with `interactive` variant. */
  dismissible?: boolean;
  /** Called when the × dismiss button is clicked. */
  onDismiss?: () => void;
  /** Called when the chip body itself is clicked. Adds cursor-pointer. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Active / selected state — visual highlight via data-selected attr. */
  selected?: boolean;
  /** Tab-stop index. Set to 0 (default when focusable) or -1 to exclude. */
  tabIndex?: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function Chip({
  className,
  variant,
  size,
  dismissible = false,
  onDismiss,
  onClick,
  selected = false,
  tabIndex,
  children,
  ...props
}: ChipProps) {
  const isInteractive = !!onClick || variant === "interactive";

  // Determine effective tab index
  const effectiveTabIndex = tabIndex ?? (isInteractive || dismissible ? 0 : undefined);

  // Chips with an onClick handler render as a <button> for accessibility.
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        data-slot="chip"
        data-selected={selected || undefined}
        tabIndex={effectiveTabIndex}
        className={cn(chipVariants({ variant, size }), "cursor-pointer", className)}
        {...(props as React.ComponentProps<"button">)}
      >
        {children}
        {dismissible && (
          <DismissButton
            onDismiss={onDismiss}
            size={size}
          />
        )}
      </button>
    );
  }

  return (
    <span
      data-slot="chip"
      data-selected={selected || undefined}
      tabIndex={effectiveTabIndex}
      role={dismissible ? "group" : undefined}
      aria-label={dismissible ? undefined : undefined}
      className={cn(chipVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {dismissible && (
        <DismissButton
          onDismiss={onDismiss}
          size={size}
        />
      )}
    </span>
  );
}

// ── Dismiss button subcomponent ───────────────────────────────────────────────

function DismissButton({
  onDismiss,
  size,
}: {
  onDismiss?: () => void;
  size?: ChipVariants["size"];
}) {
  const iconSize = size === "sm" ? "size-2" : size === "xl" ? "size-3.5" : "size-2.5";
  const btnSize  = size === "sm" ? "size-3.5" : size === "xl" ? "size-5" : "size-4";

  return (
    <button
      type="button"
      aria-label="Remove"
      onClick={(e) => {
        e.stopPropagation();
        onDismiss?.();
      }}
      className={cn(
        btnSize,
        "inline-flex shrink-0 items-center justify-center rounded-full",
        "-mr-0.5 ml-0.5 opacity-60 transition-opacity",
        "hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      )}
    >
      <HugeiconsIcon icon={Cancel01Icon} className={iconSize} />
    </button>
  );
}
