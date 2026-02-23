/**
 * VIDI Docs — Context Menu Component
 * Route: /components/context-menu
 */

"use client";

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";
import * as React from "react";

// ── Spec data ─────────────────────────────────────────────────────────────────

const ANATOMY = [
  { slot: "ContextMenu",              usage: "Root — wraps trigger + content" },
  { slot: "ContextMenuTrigger",       usage: "Element that triggers the menu on right-click" },
  { slot: "ContextMenuContent",       usage: "Floating menu container — rounded-2xl, shadow-2xl, animate" },
  { slot: "ContextMenuItem",          usage: "Individual action row — focus highlight, destructive variant" },
  { slot: "ContextMenuCheckboxItem",  usage: "Toggleable item with check indicator" },
  { slot: "ContextMenuRadioGroup",    usage: "Group for mutually exclusive radio items" },
  { slot: "ContextMenuRadioItem",     usage: "Radio option within a group" },
  { slot: "ContextMenuSub",           usage: "Sub-menu root — hover/focus reveals nested content" },
  { slot: "ContextMenuSubTrigger",    usage: "Item that opens a sub-menu (chevron right)" },
  { slot: "ContextMenuSubContent",    usage: "Nested floating panel" },
  { slot: "ContextMenuSeparator",     usage: "Visual divider line" },
  { slot: "ContextMenuLabel",         usage: "Non-interactive section heading" },
  { slot: "ContextMenuShortcut",      usage: "Right-aligned keyboard shortcut text" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ContextMenuPage() {
  const [bookmarked, setBookmarked] = React.useState(true);
  const [quality, setQuality] = React.useState("1080p");

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Context Menu</h1>
          <p className="text-muted-foreground">
            Right-click context menu built on Radix UI. Supports nested submenus, checkbox items, radio groups, and keyboard shortcuts.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/context-menu", "Radix UI", "Accessible"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Default Demo ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Default
          </h2>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 text-sm text-muted-foreground">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={bookmarked}
                onCheckedChange={setBookmarked}
              >
                Bookmarked
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuLabel>Quality</ContextMenuLabel>
              <ContextMenuRadioGroup value={quality} onValueChange={setQuality}>
                <ContextMenuRadioItem value="720p">720p</ContextMenuRadioItem>
                <ContextMenuRadioItem value="1080p">1080p</ContextMenuRadioItem>
                <ContextMenuRadioItem value="4K">4K</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Save Page As…</ContextMenuItem>
                  <ContextMenuItem>Create Shortcut</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* ── Anatomy ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Anatomy
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Slot", "Usage"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {ANATOMY.map((row, i) => (
                  <tr key={row.slot} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground">{row.slot}</code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Usage Code ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent,
  ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut,
} from "@/components/ui/context-menu";

<ContextMenu>
  <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
            </pre>
          </div>
        </section>

        {/* ── Guidelines ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Context menus open on right-click (desktop) or long-press (touch). Not available on TV — use DropdownMenu instead.</li>
            <li>Use <code className="text-foreground">variant=&quot;destructive&quot;</code> for dangerous actions (soft red highlight, Maia pattern).</li>
            <li>Group related items with <code className="text-foreground">ContextMenuLabel</code> headings and <code className="text-foreground">ContextMenuSeparator</code> dividers.</li>
            <li>Use <code className="text-foreground">ContextMenuCheckboxItem</code> for toggleable settings and <code className="text-foreground">ContextMenuRadioGroup</code> for exclusive choices.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
