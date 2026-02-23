/**
 * VIDI Docs — Button Group Component
 * Route: /components/button-group
 */

import { Button, ButtonGroup } from "@/components/design-system";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "size",        type: '"default" | "sm" | "lg"',          default: '"default"', description: "Controls child button sizing" },
  { prop: "orientation", type: '"horizontal" | "vertical"',        default: '"horizontal"', description: "Stack direction" },
  { prop: "className",   type: "string",                           default: "—",         description: "Merge additional Tailwind classes" },
  { prop: "children",    type: "React.ReactNode",                  default: "—",         description: "Button elements to group" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ButtonGroupPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Button Group</h1>
          <p className="text-muted-foreground">
            Visually connected set of buttons sharing a single pill boundary. Ideal for toolbars, segmented controls, and toggle groups.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/design-system", "CVA", "Maia pill"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Default ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Default
          </h2>
          <ButtonGroup>
            <Button intent="outline" size="sm"><Bold className="size-4" /></Button>
            <Button intent="outline" size="sm"><Italic className="size-4" /></Button>
            <Button intent="outline" size="sm"><Underline className="size-4" /></Button>
          </ButtonGroup>
        </section>

        {/* ── With Text Labels ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Text Labels
          </h2>
          <ButtonGroup>
            <Button intent="ghost" size="sm">Day</Button>
            <Button intent="ghost" size="sm">Week</Button>
            <Button intent="ghost" size="sm">Month</Button>
            <Button intent="ghost" size="sm">Year</Button>
          </ButtonGroup>
        </section>

        {/* ── Alignment Toolbar ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Alignment Toolbar
          </h2>
          <ButtonGroup size="lg">
            <Button intent="outline"><AlignLeft className="size-4" /></Button>
            <Button intent="outline"><AlignCenter className="size-4" /></Button>
            <Button intent="outline"><AlignRight className="size-4" /></Button>
          </ButtonGroup>
        </section>

        {/* ── Vertical ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Vertical Orientation
          </h2>
          <ButtonGroup orientation="vertical">
            <Button intent="outline" size="sm">Top</Button>
            <Button intent="outline" size="sm">Middle</Button>
            <Button intent="outline" size="sm">Bottom</Button>
          </ButtonGroup>
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
{`import { Button, ButtonGroup } from "@/components/design-system";
import { Bold, Italic, Underline } from "lucide-react";

<ButtonGroup>
  <Button intent="outline" size="sm"><Bold /></Button>
  <Button intent="outline" size="sm"><Italic /></Button>
  <Button intent="outline" size="sm"><Underline /></Button>
</ButtonGroup>

{/* Vertical */}
<ButtonGroup orientation="vertical">
  <Button intent="ghost" size="sm">Option A</Button>
  <Button intent="ghost" size="sm">Option B</Button>
</ButtonGroup>`}
            </pre>
          </div>
        </section>

        {/* ── Guideline ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Use <code className="text-foreground">ButtonGroup</code> for related actions that share context (e.g. text formatting, view switching).</li>
            <li>All children should use the same <code className="text-foreground">intent</code> for visual consistency.</li>
            <li>For mutually exclusive selection, combine with state to highlight the active option.</li>
            <li>TV/D-pad: <code className="text-foreground">focus-within:ring-2</code> highlights the group boundary on focus.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
