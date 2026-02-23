/**
 * VIDI Docs — Chart Component
 * Route: /components/chart
 */

"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  LineChart,
} from "recharts";

// ── Demo data ─────────────────────────────────────────────────────────────────

const barData = [
  { month: "Jan", views: 4200, subs: 1200 },
  { month: "Feb", views: 3800, subs: 980 },
  { month: "Mar", views: 5100, subs: 1450 },
  { month: "Apr", views: 4600, subs: 1100 },
  { month: "May", views: 6200, subs: 1800 },
  { month: "Jun", views: 7500, subs: 2400 },
];

const barConfig: ChartConfig = {
  views: { label: "Views", color: "hsl(349 98% 55%)" },   // red-30
  subs:  { label: "Subscribers", color: "hsl(213 100% 50%)" }, // blue-30
};

const lineData = [
  { day: "Mon", latency: 120 },
  { day: "Tue", latency: 98 },
  { day: "Wed", latency: 145 },
  { day: "Thu", latency: 88 },
  { day: "Fri", latency: 102 },
  { day: "Sat", latency: 75 },
  { day: "Sun", latency: 68 },
];

const lineConfig: ChartConfig = {
  latency: { label: "Latency (ms)", color: "hsl(168 76% 42%)" }, // tosca-30
};

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "config",    type: "ChartConfig",        default: "—",   description: "Color & label configuration keyed by data field" },
  { prop: "children",  type: "ResponsiveContainer children", default: "—",   description: "Recharts chart element (BarChart, LineChart, etc.)" },
  { prop: "className", type: "string",             default: "—",   description: "Merge additional Tailwind classes" },
];

const ANATOMY = [
  { slot: "ChartContainer",      usage: "Root wrapper — injects CSS vars from config, wraps ResponsiveContainer" },
  { slot: "ChartTooltip",        usage: "Recharts Tooltip component (re-exported)" },
  { slot: "ChartTooltipContent", usage: "Custom tooltip renderer with indicator styles (dot/line/dashed)" },
  { slot: "ChartLegend",         usage: "Recharts Legend component (re-exported)" },
  { slot: "ChartLegendContent",  usage: "Custom legend renderer matching VIDI token colors" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ChartPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Chart</h1>
          <p className="text-muted-foreground">
            Data visualization wrapper around Recharts with VIDI brand color tokens. Provides ChartContainer for responsive sizing and custom tooltip/legend renderers.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/chart", "recharts", "VIDI tokens"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Bar Chart ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Bar Chart
          </h2>
          <div className="rounded-xl border border-border bg-card p-6">
            <ChartContainer config={barConfig} className="h-64 w-full">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="views" fill="var(--color-views)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="subs" fill="var(--color-subs)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </section>

        {/* ── Line Chart ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Line Chart
          </h2>
          <div className="rounded-xl border border-border bg-card p-6">
            <ChartContainer config={lineConfig} className="h-64 w-full">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="latency"
                  stroke="var(--color-latency)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
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
            Props Specification (ChartContainer)
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
{`import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const config = {
  views: { label: "Views", color: "hsl(349 98% 55%)" },
};

<ChartContainer config={config} className="h-64 w-full">
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="views" fill="var(--color-views)" radius={[4,4,0,0]} />
  </BarChart>
</ChartContainer>`}
            </pre>
          </div>
        </section>

        {/* ── Guidelines ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Use VIDI brand colors in ChartConfig: <code className="text-foreground">red-30</code> for primary metrics, <code className="text-foreground">blue-30</code> for secondary.</li>
            <li>ChartContainer injects CSS variables from config — reference them as <code className="text-foreground">var(--color-KEY)</code>.</li>
            <li>Tooltips use the VIDI dark surface style. The <code className="text-foreground">indicator</code> prop controls dot/line/dashed styles.</li>
            <li>For responsive sizing, set <code className="text-foreground">className=&quot;h-64 w-full&quot;</code> on ChartContainer.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
