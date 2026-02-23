"use client";

/**
 * VIDI Docs — CodeBlock
 * ─────────────────────────────────────────────────────────────
 * Styled <pre> block with optional platform label and copy button.
 * No external syntax highlighter dependency — font-mono + color tokens only.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export type PlatformLabel =
  | "React"
  | "Web"
  | "Mobile Web"
  | "TV"
  | "Android"
  | "iOS"
  | "Tokens";

const PLATFORM_COLORS: Record<PlatformLabel, string> = {
  React:      "bg-blue-30/15 text-blue-20",
  Web:        "bg-tosca-30/15 text-tosca-20",
  "Mobile Web": "bg-green-30/15 text-green-20",
  TV:         "bg-purple-30/15 text-purple-20",
  Android:    "bg-green-30/15 text-green-30",
  iOS:        "bg-gray-50/40 text-gray-20",
  Tokens:     "bg-yellow-30/15 text-yellow-20",
};

interface CodeBlockProps {
  code: string;
  language?: string;
  platform?: PlatformLabel;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  platform,
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-xl border border-border bg-gray-60/30", className)}>
      {/* Header bar */}
      {(platform || filename) && (
        <div className="flex items-center justify-between border-b border-border/50 px-4 py-2">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="font-mono text-[11px] text-muted-foreground">
                {filename}
              </span>
            )}
            {platform && (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold",
                  PLATFORM_COLORS[platform]
                )}
              >
                {platform}
              </span>
            )}
            {language && !filename && (
              <span className="font-mono text-[10px] text-muted-foreground/50 uppercase">
                {language}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code"
            className="rounded px-2 py-0.5 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}

      {/* Code */}
      <pre
        className={cn(
          "overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-gray-10",
          !platform && !filename && "pr-16"
        )}
      >
        <code>{code}</code>
      </pre>

      {/* Floating copy when no header */}
      {!platform && !filename && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code"
          className="absolute right-3 top-3 rounded px-2 py-0.5 text-[11px] text-muted-foreground opacity-0 transition-all hover:bg-muted hover:text-foreground focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:opacity-100"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      )}
    </div>
  );
}
