/**
 * VIDI Docs — Textarea Component
 * Route: /components/textarea
 */

"use client";

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";

const SPEC = [
  { prop: "placeholder", type: "string",  default: "—",    description: "Placeholder text" },
  { prop: "disabled",    type: "boolean", default: "false", description: "Disabled state" },
  { prop: "rows",        type: "number",  default: "—",    description: "Visible row count (overrides auto-grow)" },
  { prop: "maxLength",   type: "number",  default: "—",    description: "Character limit" },
  { prop: "className",   type: "string",  default: "—",    description: "Merge additional Tailwind classes" },
];

export default function TextareaPage() {
  const [charCount, setCharCount] = React.useState(0);
  const maxLen = 280;

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Textarea</h1>
          <p className="text-muted-foreground">
            Multi-line text input with auto-grow support via <code className="text-foreground">field-sizing-content</code>. Maia focus ring with rounded-xl shape.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/textarea", "Native HTML", "field-sizing-content"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Default */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Default</h2>
          <div className="max-w-md rounded-xl border border-border bg-card/40 p-5">
            <Textarea placeholder="Write something…" />
          </div>
        </section>

        {/* With Character Count */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">With Character Count</h2>
          <div className="max-w-md space-y-1.5 rounded-xl border border-border bg-card/40 p-5">
            <Textarea
              placeholder="Write a message (max 280 characters)…"
              maxLength={maxLen}
              onChange={(e) => setCharCount(e.target.value.length)}
            />
            <p className="text-right text-xs text-muted-foreground">
              {charCount}/{maxLen}
            </p>
          </div>
        </section>

        {/* Disabled */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Disabled</h2>
          <div className="max-w-md rounded-xl border border-border bg-card/40 p-5">
            <Textarea disabled defaultValue="This textarea is disabled." />
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Textarea placeholder="…" />
// bg-input/30, rounded-xl
// focus: ring-ring/50 ring-[3px]`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`TextEditor(text: $value)
  .cornerRadius(12)
  .overlay(
    RoundedRectangle(cornerRadius: 12)
      .stroke(Color.border)
  )`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`OutlinedTextField(
  value = text,
  onValueChange = { text = it },
  shape = RoundedCornerShape(12.dp),
  colors = VidiTextFieldColors()
)`}</pre>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Usage</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`import { Textarea } from "@/components/ui/textarea";

<Textarea placeholder="Write something…" />

{/* Auto-grow (default via field-sizing-content) */}
<Textarea placeholder="Grows as you type…" />

{/* Fixed rows */}
<Textarea rows={5} placeholder="5 visible rows" />`}</pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Textarea auto-grows via <code className="text-foreground">field-sizing-content</code> — no JS needed. Set <code className="text-foreground">rows</code> to override.</li>
            <li>Add <code className="text-foreground">aria-invalid</code> for error states — triggers destructive ring style.</li>
            <li>Use with character count for UGC inputs (comments, bios, descriptions).</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
