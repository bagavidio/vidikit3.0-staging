/**
 * VIDI Docs — Separator Component
 * Route: /components/separator
 */

import { Separator } from "@/components/ui/separator";

const SPEC = [
  { prop: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the divider" },
  { prop: "decorative",  type: "boolean",                   default: "true",         description: "If true, hides from screen readers" },
  { prop: "className",   type: "string",                    default: "—",            description: "Merge additional Tailwind classes" },
];

export default function SeparatorPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Separator</h1>
          <p className="text-muted-foreground">
            Visual divider for separating content sections. Supports horizontal and vertical orientations with accessible semantics.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/separator", "radix-ui", "Accessible divider"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Horizontal */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Horizontal</h2>
          <div className="space-y-3 rounded-xl border border-border bg-card/40 p-5">
            <p className="text-sm text-foreground">Section A content</p>
            <Separator />
            <p className="text-sm text-foreground">Section B content</p>
            <Separator />
            <p className="text-sm text-foreground">Section C content</p>
          </div>
        </section>

        {/* Vertical */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Vertical (in toolbar)</h2>
          <div className="flex h-9 items-center gap-3 rounded-xl border border-border bg-card/40 px-5">
            <span className="text-sm text-foreground">Bold</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-foreground">Italic</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-foreground">Underline</span>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Separator />
<Separator orientation="vertical" />`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Divider()
  .background(Color.border)`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`HorizontalDivider(
  color = VidiTokens.border
)`}</pre>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Usage</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`import { Separator } from "@/components/ui/separator";

{/* Horizontal divider */}
<Separator />

{/* Vertical divider in a toolbar */}
<div className="flex items-center gap-3">
  <span>Bold</span>
  <Separator orientation="vertical" />
  <span>Italic</span>
</div>`}</pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Use horizontal separators between distinct content sections — lists, form groups, card sections.</li>
            <li>Use vertical separators in toolbars and inline button groups.</li>
            <li>Set <code className="text-foreground">decorative=&#123;false&#125;</code> when the separator conveys semantic meaning (e.g. between navigation regions).</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
