/**
 * VIDI Docs — Slider Component
 * Route: /components/slider
 */

"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

const SPEC = [
  { prop: "value",          type: "number[]",             default: "—",      description: "Controlled value (array for range)" },
  { prop: "defaultValue",   type: "number[]",             default: "—",      description: "Initial value (uncontrolled)" },
  { prop: "onValueChange",  type: "(value) => void",      default: "—",      description: "Called on every drag movement" },
  { prop: "onValueCommit",  type: "(value) => void",      default: "—",      description: "Called when thumb is released" },
  { prop: "min",            type: "number",               default: "0",      description: "Minimum value" },
  { prop: "max",            type: "number",               default: "100",    description: "Maximum value" },
  { prop: "step",           type: "number",               default: "1",      description: "Step increment" },
  { prop: "disabled",       type: "boolean",              default: "false",  description: "Disabled state" },
  { prop: "orientation",    type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Slider direction" },
];

export default function SliderPage() {
  const [single, setSingle] = React.useState([40]);
  const [range, setRange] = React.useState([20, 80]);

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Slider</h1>
          <p className="text-muted-foreground">
            Range input with Brand Red (#CA0528) active track and draggable thumb. Built on Radix UI with keyboard and touch support.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/slider", "radix-ui", "Brand Red track"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Single Value */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Single Value</h2>
          <div className="max-w-md space-y-3 rounded-xl border border-border bg-card/40 p-5">
            <Slider value={single} onValueChange={setSingle} />
            <p className="text-right text-sm text-muted-foreground">Value: {single[0]}</p>
          </div>
        </section>

        {/* Range */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Range (two thumbs)</h2>
          <div className="max-w-md space-y-3 rounded-xl border border-border bg-card/40 p-5">
            <Slider value={range} onValueChange={setRange} />
            <p className="text-right text-sm text-muted-foreground">Range: {range[0]} – {range[1]}</p>
          </div>
        </section>

        {/* Step */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Step — 25</h2>
          <div className="max-w-md rounded-xl border border-border bg-card/40 p-5">
            <Slider defaultValue={[50]} step={25} />
          </div>
        </section>

        {/* Disabled */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Disabled</h2>
          <div className="max-w-md rounded-xl border border-border bg-card/40 p-5">
            <Slider defaultValue={[60]} disabled />
          </div>
        </section>

        {/* Brand Token Chain */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Brand Red Token Chain</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <pre className="font-mono text-xs leading-relaxed text-foreground/80">
{`Active track: bg-primary
  → --primary: var(--vidi-primary)
  → --vidi-primary: var(--red-50)
  → --red-50: hsl(349 95% 41%) = #CA0528

Thumb border: border-primary (same chain)
Hover/Focus ring: ring-ring/50`}</pre>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Props Specification</h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/30">
                {["Prop","Type","Default","Description"].map((h) => (<th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{h}</th>))}
              </tr></thead>
              <tbody className="divide-y divide-border/50">
                {SPEC.map((r, i) => (<tr key={r.prop} className={i % 2 === 0 ? "bg-card/40" : ""}>
                  <td className="px-4 py-3"><code className="font-mono text-xs font-semibold text-foreground">{r.prop}</code></td>
                  <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{r.type}</code></td>
                  <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{r.default}</code></td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{r.description}</td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cross-Platform */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cross-Platform Specs</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Web (React)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Slider defaultValue={[50]} />
// Track: bg-primary (#CA0528)
// Thumb: border-primary, bg-white`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Slider(value: $val, in: 0...100)
  .tint(Color(hex: "#CA0528"))`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Slider(
  value = sliderVal,
  colors = SliderDefaults.colors(
    activeTrackColor = Color(0xFFCA0528)
  )
)`}</pre>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Active track uses Brand Red (#CA0528) via the <code className="text-foreground">bg-primary</code> token chain — no custom override needed.</li>
            <li>Pass an array with two values for a range slider: <code className="text-foreground">defaultValue=&#123;[20, 80]&#125;</code>.</li>
            <li>Use <code className="text-foreground">step</code> for discrete increments (e.g. volume levels, rating scales).</li>
            <li>Track height is <code className="text-foreground">h-3</code> with <code className="text-foreground">rounded-4xl</code> (Maia pill shape).</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
