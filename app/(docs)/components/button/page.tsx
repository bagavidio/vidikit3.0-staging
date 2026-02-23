/**
 * VIDI Docs — Button Component Page
 * ─────────────────────────────────────────────────────────────
 * Interactive style guide for the vidikit Button component.
 * Route: /components/button
 */

import { Button } from "@/components/design-system";

// ── Spec ────────────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "intent",    type: '"primary" | "extended" | "neutral" | "secondary" | "ghost" | "outline" | "destructive" | "link"', default: '"primary"', description: "Semantic purpose / color scheme" },
  { prop: "size",      type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"', default: '"default"', description: "Button dimensions" },
  { prop: "asChild",   type: "boolean",        default: "false", description: "Merge props onto child element via Slot" },
  { prop: "loading",   type: "boolean",        default: "false", description: "Show spinner, disable interaction" },
  { prop: "leftIcon",  type: "React.ReactNode", default: "—",    description: "Icon before label (triggers adaptive padding)" },
  { prop: "rightIcon", type: "React.ReactNode", default: "—",    description: "Icon after label (triggers adaptive padding)" },
  { prop: "disabled",  type: "boolean",        default: "false", description: "Disabled state" },
];

// ── Shared helpers ─────────────────────────────────────────────────────────────

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {title}
    </h2>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </section>
);

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ButtonPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

      {/* Header */}
      <header className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Button
        </h1>
        <p className="text-muted-foreground">
          Master Button — all intents, sizes, and states.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["@/components/design-system/button", "CVA + intent prop", "Maia DNA (rounded-4xl)"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
          ))}
        </div>
      </header>

        {/* Intent */}
        <Section title="Intent">
          <Button intent="primary">Primary</Button>
          <Button intent="extended">Extended</Button>
          <Button intent="neutral">Neutral</Button>
          <Button intent="ghost">Ghost</Button>
          <Button intent="outline">Outline</Button>
          <Button intent="secondary">Secondary</Button>
          <Button intent="destructive">Destructive</Button>
          <Button intent="link">Link</Button>
        </Section>

        {/* Size */}
        <Section title="Size">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </Section>

        {/* Extended × All Sizes */}
        <Section title="Extended · All Sizes">
          <Button intent="extended" size="xs">Watch Now</Button>
          <Button intent="extended" size="sm">Watch Now</Button>
          <Button intent="extended" size="default">Watch Now</Button>
          <Button intent="extended" size="lg">Watch Now</Button>
        </Section>

        {/* Extended × All Sizes */}
        <Section title="Extended · All Sizes">
          <Button intent="extended" size="xs">Explore xs</Button>
          <Button intent="extended" size="sm">Explore sm</Button>
          <Button intent="extended" size="default">Explore</Button>
          <Button intent="extended" size="lg">Explore lg</Button>
        </Section>

        {/* Icon-only */}
        <Section title="Icon-Only">
          <Button size="icon-xs" intent="ghost" aria-label="Menu xs">☰</Button>
          <Button size="icon-sm" intent="ghost" aria-label="Menu sm">☰</Button>
          <Button size="icon"    intent="ghost" aria-label="Menu">☰</Button>
          <Button size="icon-lg" intent="ghost" aria-label="Menu lg">☰</Button>
          <Button size="icon"    intent="primary"     aria-label="Add">+</Button>
          <Button size="icon"    intent="extended"        aria-label="Star">★</Button>
          <Button size="icon"    intent="outline"     aria-label="Info">i</Button>
          <Button size="icon"    intent="destructive" aria-label="Delete">✕</Button>
        </Section>

        {/* Adaptive icon padding */}
        <Section title="With Icons (adaptive padding)">
          <Button intent="primary"  leftIcon={<span>←</span>}>Back</Button>
          <Button intent="extended" rightIcon={<span>→</span>}>Continue</Button>
          <Button
            intent="neutral"
            leftIcon={<span>↑</span>}
            rightIcon={<span>↓</span>}
          >
            Both Icons
          </Button>
          <Button intent="extended"    leftIcon={<span>★</span>}>Favourite</Button>
          <Button intent="outline" leftIcon={<span>⊕</span>}>Add Item</Button>
        </Section>

        {/* Loading */}
        <Section title="Loading State">
          <Button intent="primary"  loading>Saving…</Button>
          <Button intent="extended" loading>Loading</Button>
          <Button intent="neutral"  loading size="lg">Processing</Button>
          <Button intent="outline"  loading size="sm">Fetching</Button>
          <Button intent="extended"     loading>Uploading</Button>
        </Section>

        {/* Disabled */}
        <Section title="Disabled State">
          <Button intent="primary"  disabled>Primary</Button>
          <Button intent="extended" disabled>Extended</Button>
          <Button intent="outline"  disabled>Outline</Button>
          <Button intent="ghost"    disabled>Ghost</Button>
        </Section>

        {/* Destructive */}
        <Section title="Destructive (soft — maia pattern)">
          <Button intent="destructive" size="xs">Delete xs</Button>
          <Button intent="destructive" size="sm">Delete sm</Button>
          <Button intent="destructive" size="default">Delete</Button>
          <Button intent="destructive" size="lg">Delete lg</Button>
          <Button intent="destructive" size="icon" aria-label="Delete">✕</Button>
        </Section>

        {/* ── Props Specification ── */}
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

        {/* ── Cross-Platform Specs ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cross-Platform Specs</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Web (React)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Button
  intent="primary"
  leftIcon={<Icon />}
>
  Label
</Button>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Button("Label") {
  action()
}
.buttonStyle(
  VidiButtonStyle(.primary)
)`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`VidiButton(
  intent = Primary,
  onClick = {}
) {
  Text("Label")
}`}</pre>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
