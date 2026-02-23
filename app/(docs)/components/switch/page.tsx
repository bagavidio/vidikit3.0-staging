/**
 * VIDI Docs — Switch Component
 * Route: /components/switch
 */

"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";

const SPEC = [
  { prop: "checked",         type: "boolean",            default: "—",         description: "Controlled checked state" },
  { prop: "defaultChecked",  type: "boolean",            default: "false",     description: "Initial checked state (uncontrolled)" },
  { prop: "onCheckedChange", type: "(checked) => void",  default: "—",         description: "Called when toggle changes" },
  { prop: "disabled",        type: "boolean",            default: "false",     description: "Disabled state" },
  { prop: "size",            type: '"sm" | "default"',   default: '"default"', description: "Toggle size" },
  { prop: "name",            type: "string",             default: "—",         description: "Form field name" },
];

export default function SwitchPage() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Switch</h1>
          <p className="text-muted-foreground">
            Toggle switch with Brand Red (#CA0528) active track. Built on Radix UI with keyboard and screen reader support.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/switch", "radix-ui", "Brand Red active"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Default */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Default</h2>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-5">
            <Switch checked={enabled} onCheckedChange={setEnabled} />
            <span className="text-sm text-foreground">{enabled ? "Enabled" : "Disabled"}</span>
          </div>
        </section>

        {/* With Label */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">With Labels</h2>
          <div className="max-w-sm space-y-4 rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Notifications</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Dark Mode</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Auto-play</span>
              <Switch />
            </div>
          </div>
        </section>

        {/* Size sm */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Size — sm</h2>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-5">
            <Switch size="sm" defaultChecked />
            <span className="text-xs text-muted-foreground">Small toggle</span>
          </div>
        </section>

        {/* Disabled */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Disabled</h2>
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2">
              <Switch disabled />
              <span className="text-xs text-muted-foreground">Off + disabled</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch disabled defaultChecked />
              <span className="text-xs text-muted-foreground">On + disabled</span>
            </div>
          </div>
        </section>

        {/* Brand Token Chain */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Brand Red Token Chain</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <pre className="font-mono text-xs leading-relaxed text-foreground/80">
{`Active track: data-checked:bg-primary
  → --primary: var(--vidi-primary)
  → --vidi-primary: var(--red-50)
  → --red-50: hsl(349 95% 41%) = #CA0528`}</pre>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Switch checked={on} onCheckedChange={setOn} />
// Track: bg-primary (#CA0528)
// Thumb: bg-background (white)`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Toggle(isOn: $enabled) { Text("Label") }
  .tint(Color(hex: "#CA0528"))`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Switch(
  checked = enabled,
  colors = SwitchDefaults.colors(
    checkedTrackColor = Color(0xFFCA0528)
  )
)`}</pre>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Active track uses Brand Red (#CA0528) via the <code className="text-foreground">bg-primary</code> token chain — no custom override needed.</li>
            <li>Always pair with a visible label. Place the switch to the right of the label for LTR layouts.</li>
            <li>Use <code className="text-foreground">size=&quot;sm&quot;</code> for dense settings lists and sidebar toggles.</li>
            <li>Focus ring uses Maia pattern: <code className="text-foreground">focus-visible:ring-[3px] ring-ring/50</code>.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
