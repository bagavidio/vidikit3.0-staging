/**
 * VIDI Docs — Select Component
 * Route: /components/select
 */

"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SPEC = [
  { prop: "value",          type: "string",            default: "—",              description: "Controlled selected value" },
  { prop: "defaultValue",   type: "string",            default: "—",              description: "Initial value (uncontrolled)" },
  { prop: "onValueChange",  type: "(value) => void",   default: "—",              description: "Called when selection changes" },
  { prop: "disabled",       type: "boolean",           default: "false",          description: "Disabled state" },
  { prop: "size",           type: '"sm" | "default"',  default: '"default"',      description: "Trigger height" },
  { prop: "placeholder",    type: "string",            default: "—",              description: "Placeholder text via SelectValue" },
  { prop: "position",       type: '"item-aligned" | "popper"', default: '"item-aligned"', description: "Content positioning strategy" },
];

export default function SelectPage() {
  const [fruit, setFruit] = React.useState("");

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Select</h1>
          <p className="text-muted-foreground">
            Dropdown select with rounded-4xl trigger, grouped options, and animated content. Built on Radix UI with keyboard navigation.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/select", "radix-ui", "rounded-4xl trigger"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Default */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Default</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Controlled */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Controlled</h2>
          <div className="space-y-3 rounded-xl border border-border bg-card/40 p-5">
            <Select value={fruit} onValueChange={setFruit}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a fruit…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Selected: {fruit || "—"}</p>
          </div>
        </section>

        {/* Grouped */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Grouped Items</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="asia-jakarta">Jakarta (WIB)</SelectItem>
                  <SelectItem value="asia-makassar">Makassar (WITA)</SelectItem>
                  <SelectItem value="asia-jayapura">Jayapura (WIT)</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Americas</SelectLabel>
                  <SelectItem value="us-eastern">Eastern (EST)</SelectItem>
                  <SelectItem value="us-pacific">Pacific (PST)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Size sm */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Size — sm</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Select>
              <SelectTrigger size="sm">
                <SelectValue placeholder="Small trigger" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Disabled */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Disabled</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
              </SelectContent>
            </Select>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Select>
  <SelectTrigger>
    <SelectValue placeholder="…" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">A</SelectItem>
  </SelectContent>
</Select>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Picker("Label", selection: $val) {
  Text("Option A").tag("a")
  Text("Option B").tag("b")
}
.pickerStyle(.menu)`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`ExposedDropdownMenuBox(
  expanded = expanded,
  onExpandedChange = { expanded = it }
) {
  OutlinedTextField(/* trigger */)
  ExposedDropdownMenu { /* items */ }
}`}</pre>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Trigger uses Maia pill shape (<code className="text-foreground">rounded-4xl</code>) with <code className="text-foreground">bg-input/30</code> background.</li>
            <li>Content uses <code className="text-foreground">rounded-2xl</code> with <code className="text-foreground">ring-1 ring-foreground/5</code> for subtle elevation.</li>
            <li>Group items under <code className="text-foreground">SelectGroup</code> + <code className="text-foreground">SelectLabel</code> for categorized options.</li>
            <li>Use <code className="text-foreground">size=&quot;sm&quot;</code> for compact forms and toolbar selects.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
