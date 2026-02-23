/**
 * VIDI Docs — Top Navigation Bar
 * ─────────────────────────────────────────────────────────────
 * Full-width sticky header: sidebar trigger · search · Design / Code / GitHub
 * Logo and wordmark live in the Sidebar; TopNav is intentionally minimal.
 */

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { docsLinks } from "@/config/docs";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 flex h-12 w-full shrink-0 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur-md">
      {/* Sidebar toggle */}
      <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search */}
      <button
        type="button"
        className="hidden h-7 w-40 cursor-pointer items-center gap-2 rounded-full border border-border bg-muted/40 px-3 text-xs text-muted-foreground transition-colors hover:bg-muted md:flex"
        aria-label="Search documentation"
      >
        <HugeiconsIcon icon={Search01Icon} className="size-3 shrink-0" />
        <span className="flex-1 text-left">Search…</span>
        <kbd className="font-mono text-[10px] text-muted-foreground/40">⌘K</kbd>
      </button>

      {/* Nav links */}
      <nav className="flex items-center gap-1" aria-label="External links">
        <a
          href={docsLinks.figma}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-7 items-center rounded-full px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
        >
          Design
        </a>
        <a
          href={docsLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-7 items-center rounded-full px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
        >
          Code
        </a>
        <a
          href={docsLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <HugeiconsIcon icon={GithubIcon} className="size-4" />
        </a>
      </nav>
    </header>
  );
}
