"use client";

import * as React from "react";
import { Slot } from "radix-ui";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button.variants";

// ── Spinner ────────────────────────────────────────────────────────────────────
// Dependency-free inline spinner. Auto-sized by the button's SVG base rule.
function Spinner() {
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ── Props ──────────────────────────────────────────────────────────────────────

/**
 * VIDI Master Button — Props
 *
 * Follows the radix-maia component pattern:
 *   · React.ComponentProps<"button"> (React 19, no forwardRef wrapper needed)
 *   · data-slot / data-intent / data-size for CSS targeting
 *   · data-icon="inline-start|end" on icon wrappers for adaptive padding
 */
export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /**
   * Render the button styles on a child element (e.g. Next.js `<Link>`).
   * @example
   * <Button asChild><Link href="/signup">Get Started</Link></Button>
   */
  asChild?: boolean;

  /**
   * Show a loading spinner in the left-icon slot and disable interaction.
   * @example
   * <Button loading>Saving…</Button>
   */
  loading?: boolean;

  /**
   * Element rendered before the label. Replaced by spinner when `loading`.
   * Automatically sets `data-icon="inline-start"` for adaptive padding.
   * @example
   * <Button leftIcon={<PlusIcon />}>Add Item</Button>
   */
  leftIcon?: React.ReactNode;

  /**
   * Element rendered after the label. Visible even during loading.
   * Automatically sets `data-icon="inline-end"` for adaptive padding.
   * @example
   * <Button rightIcon={<ChevronRightIcon />}>Continue</Button>
   */
  rightIcon?: React.ReactNode;
}

// ── Component ──────────────────────────────────────────────────────────────────

/**
 * VIDI Master Button
 * ─────────────────────────────────────────────────────────────
 * Foundational button of the vidikit design system.
 * Structure follows the shadcn radix-maia pattern.
 * Brand tokens: VIDI Red #FD1B44 · Blue #0074FF · Dark #0C0D0F
 *
 * @example
 * ```tsx
 * <Button>Save</Button>
 * <Button intent="extended" size="lg">Watch Now</Button>
 * <Button intent="ghost" size="icon">
 *   <MenuIcon />
 * </Button>
 * <Button leftIcon={<PlusIcon />} loading>Adding…</Button>
 * <Button asChild><Link href="/signup">Get Started</Link></Button>
 * ```
 */
function Button({
  className,
  intent,
  size,
  asChild = false,
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const cls = cn(buttonVariants({ intent, size, className }));

  // When asChild, Slot.Root must receive exactly one React element child.
  // Icon wrappers are intentionally omitted — the delegated element owns its content.
  if (asChild) {
    return (
      <Slot.Root
        data-slot="button"
        data-intent={intent ?? "primary"}
        data-size={size ?? "default"}
        className={cls}
        {...props}
      >
        {children}
      </Slot.Root>
    );
  }

  return (
    <button
      data-slot="button"
      data-intent={intent ?? "primary"}
      data-size={size ?? "default"}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      className={cls}
      {...props}
    >
      {/* Left icon slot — replaced by spinner when loading.
          data-icon triggers has-data-[icon=inline-start] adaptive padding. */}
      {loading ? (
        <span data-icon="inline-start" className="inline-flex shrink-0">
          <Spinner />
        </span>
      ) : leftIcon ? (
        <span data-icon="inline-start" className="inline-flex shrink-0">
          {leftIcon}
        </span>
      ) : null}

      {children}

      {/* Right icon slot — always visible (chevrons, external-link, etc.)
          data-icon triggers has-data-[icon=inline-end] adaptive padding. */}
      {!loading && rightIcon ? (
        <span data-icon="inline-end" className="inline-flex shrink-0">
          {rightIcon}
        </span>
      ) : null}
    </button>
  );
}

Button.displayName = "VidiButton";

export { Button, buttonVariants };
