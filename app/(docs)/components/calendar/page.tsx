/**
 * VIDI Docs — Calendar Component
 * Route: /components/calendar
 */

"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "mode",             type: '"single" | "multiple" | "range"', default: '"single"', description: "Selection mode" },
  { prop: "selected",         type: "Date | Date[] | DateRange",       default: "—",        description: "Currently selected date(s)" },
  { prop: "onSelect",         type: "(date) => void",                  default: "—",        description: "Selection change callback" },
  { prop: "showOutsideDays",  type: "boolean",                         default: "true",     description: "Show days from adjacent months" },
  { prop: "captionLayout",    type: '"label" | "dropdown"',            default: '"label"',  description: "Month/year caption style" },
  { prop: "buttonVariant",    type: "ButtonVariant",                   default: '"ghost"',  description: "Variant for nav buttons" },
  { prop: "numberOfMonths",   type: "number",                          default: "1",        description: "Number of months to display" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CalendarPage() {
  const [single, setSingle] = React.useState<Date | undefined>(new Date());
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 5 * 86400000),
  });

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Calendar</h1>
          <p className="text-muted-foreground">
            Date picker calendar built on react-day-picker. Supports single, multiple, and range selection with full keyboard navigation.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/calendar", "react-day-picker", "D-pad ready"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Single Selection ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Single Selection
          </h2>
          <div className="inline-block rounded-xl border border-border bg-card p-1">
            <Calendar
              mode="single"
              selected={single}
              onSelect={setSingle}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Selected: {single ? single.toLocaleDateString() : "None"}
          </p>
        </section>

        {/* ── Range Selection ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Range Selection
          </h2>
          <div className="inline-block rounded-xl border border-border bg-card p-1">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Range: {range?.from?.toLocaleDateString()} — {range?.to?.toLocaleDateString() ?? "…"}
          </p>
        </section>

        {/* ── Props Spec ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Props Specification
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
{`"use client";
import { Calendar } from "@/components/ui/calendar";

const [date, setDate] = React.useState<Date>();

<Calendar mode="single" selected={date} onSelect={setDate} />

{/* Range */}
<Calendar mode="range" selected={range} onSelect={setRange} />

{/* Multi-month */}
<Calendar numberOfMonths={2} />`}
            </pre>
          </div>
        </section>

        {/* ── Guidelines ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Arrow keys navigate days. Tab moves between month nav buttons and the date grid.</li>
            <li>Use <code className="text-foreground">captionLayout=&quot;dropdown&quot;</code> for long date ranges (year/month dropdowns).</li>
            <li>On TV, focus-visible rings use <code className="text-foreground">ring-ring/50</code> for the VIDI red accent.</li>
            <li>Pair with a Popover for inline date-picker input fields.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
