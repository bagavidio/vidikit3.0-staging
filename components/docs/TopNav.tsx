/**
 * VIDI Docs — Top Navigation Bar
 * ─────────────────────────────────────────────────────────────
 * Sticky header: sidebar trigger · VIDI logo + title · search · external links
 */

import Link from "next/link";
import { Search, Github } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { docsLinks } from "@/config/docs";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background/95 px-3 backdrop-blur-md">
      {/* Sidebar toggle */}
      <SidebarTrigger className="-ml-0.5" />

      {/* Logo + wordmark */}
      <Link
        href="/"
        className="ml-1 flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-80"
      >
        <VidiMark className="size-6 shrink-0" />
        <span className="hidden sm:block">VIDI Design System</span>
      </Link>

      {/* Right side actions */}
      <div className="ml-auto flex items-center gap-1">
        {/* Search trigger (cmd+k) */}
        <button
          type="button"
          className="hidden h-8 w-44 cursor-pointer items-center gap-2 rounded-full border border-border bg-muted/40 px-3 text-xs text-muted-foreground transition-colors hover:bg-muted md:flex"
          aria-label="Search documentation"
        >
          <Search className="size-3 shrink-0" />
          <span className="flex-1 text-left">Search docs…</span>
          <kbd className="font-mono text-[10px] text-muted-foreground/50">⌘K</kbd>
        </button>

        {/* GitHub */}
        <a
          href={docsLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Github className="size-[18px]" />
        </a>

        {/* Figma */}
        <a
          href={docsLinks.figma}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Figma"
          className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FigmaIcon className="size-4" />
        </a>
      </div>
    </header>
  );
}

// ── Brand mark (custom inline SVG — not replaceable with Lucide) ───────────

function VidiMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="var(--primary-50)" />
      <polyline
        points="6,7 12,17 18,7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Figma brand icon — kept as inline SVG since Lucide has no brand icons
function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 38 57"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" />
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}
