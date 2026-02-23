/**
 * VIDI Docs — Command Component
 * Route: /components/command
 */

"use client";

import * as React from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Calculator, Calendar, Settings, User, Search, CreditCard, Smile } from "lucide-react";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "children",  type: "React.ReactNode",  default: "—", description: "CommandInput, CommandList, CommandGroup, etc." },
  { prop: "className", type: "string",            default: "—", description: "Merge additional Tailwind classes" },
  { prop: "value",     type: "string",            default: "—", description: "Controlled search value" },
  { prop: "onValueChange", type: "(value: string) => void", default: "—", description: "Search value change callback" },
];

const ANATOMY = [
  { slot: "Command",          usage: "Root wrapper — cmdk provider, rounded-4xl pill shape" },
  { slot: "CommandInput",     usage: "Search field with InputGroup addon (magnifying glass)" },
  { slot: "CommandList",      usage: "Scrollable results container (max-h-72)" },
  { slot: "CommandEmpty",     usage: "Shown when no results match the search query" },
  { slot: "CommandGroup",     usage: "Grouped section with a heading label" },
  { slot: "CommandItem",      usage: "Individual result row — focus highlight + check icon" },
  { slot: "CommandSeparator", usage: "Visual divider between groups" },
  { slot: "CommandShortcut",  usage: "Right-aligned keyboard shortcut hint" },
  { slot: "CommandDialog",    usage: "Command wrapped in a Dialog for spotlight/palette UX" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CommandPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Command</h1>
          <p className="text-muted-foreground">
            Command palette / search menu built on cmdk. Fast filtering, keyboard-first, accessible. Use as inline menu or spotlight dialog.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/command", "cmdk", "Keyboard-first"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Default Command ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Default
          </h2>
          <div className="mx-auto max-w-md rounded-xl border border-border">
            <Command>
              <CommandInput placeholder="Type a command or search…" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="size-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="size-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="size-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="size-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="size-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="size-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
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

        {/* ── Props Spec ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Props Specification (Command root)
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Prop", "Type", "Default", "Description"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {SPEC.map((row, i) => (
                  <tr key={row.prop} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground">{row.prop}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs text-muted-foreground">{row.type}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs text-muted-foreground">{row.default}</code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.description}</td>
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
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandShortcut,
} from "@/components/ui/command";

<Command>
  <CommandInput placeholder="Search…" />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>
        <Settings className="size-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

{/* As dialog (spotlight) */}
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Search…" />
  <CommandList>…</CommandList>
</CommandDialog>`}
            </pre>
          </div>
        </section>

        {/* ── Guidelines ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Arrow keys navigate items. Enter selects. Typing filters instantly via cmdk.</li>
            <li>Use <code className="text-foreground">CommandDialog</code> for spotlight/palette triggered by <code className="text-foreground">⌘K</code>.</li>
            <li>Group related commands with <code className="text-foreground">CommandGroup heading=&quot;…&quot;</code> for scannability.</li>
            <li>Show keyboard shortcuts with <code className="text-foreground">CommandShortcut</code> for power users.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
