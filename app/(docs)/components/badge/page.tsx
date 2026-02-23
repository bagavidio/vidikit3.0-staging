/**
 * VIDI Docs — Badge Component
 * Route: /components/badge
 */

import { Badge } from "@/components/ui/badge";

// ── Spec ────────────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "variant",   type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default: '"default"', description: "Visual style variant" },
  { prop: "asChild",   type: "boolean",  default: "false", description: "Merge props onto child element via Slot" },
  { prop: "className", type: "string",   default: "—",     description: "Merge additional Tailwind classes" },
];

// ── Shared helpers ─────────────────────────────────────────────────────────────

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-0.5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground/70">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}

// Simple inline SVG dot for status demos
function Dot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 6 6" aria-hidden="true" className={className ?? "size-1.5"}>
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function BadgePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

      <header className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Badge</h1>
        <p className="text-muted-foreground">
          Small labelling element for status, categories, counts, and metadata.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["@/components/ui/badge", "CVA variants", "Pill shape (rounded-4xl)"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
          ))}
        </div>
      </header>

        {/* ── Variants ── */}
        <Section title="Variants" description="Six visual variants matching the maia style DNA.">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="link">Link</Badge>
        </Section>

        {/* ── With leading icon ── */}
        <Section title="With Leading Icon" description="Place icon before the label using data-icon=inline-start.">
          <Badge variant="default">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 fill-current" />
            </span>
            Live
          </Badge>
          <Badge variant="secondary">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 fill-current" />
            </span>
            Beta
          </Badge>
          <Badge variant="outline">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 fill-current" />
            </span>
            Stable
          </Badge>
          <Badge variant="destructive">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 fill-current" />
            </span>
            Deprecated
          </Badge>
        </Section>

        {/* ── Status Semantic ── */}
        <Section
          title="Status Semantics"
          description="Override the badge background to convey VIDI primitive color meanings."
        >
          <Badge variant="outline" className="border-green-30/40 bg-green-30/10 text-green-30">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 text-green-30 fill-current" />
            </span>
            Online
          </Badge>
          <Badge variant="outline" className="border-yellow-30/40 bg-yellow-30/10 text-yellow-30">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 text-yellow-30 fill-current" />
            </span>
            Away
          </Badge>
          <Badge variant="outline" className="border-red-30/40 bg-red-30/10 text-red-30">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 text-red-30 fill-current" />
            </span>
            Critical
          </Badge>
          <Badge variant="outline" className="border-blue-30/40 bg-blue-30/10 text-blue-30">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 text-blue-30 fill-current" />
            </span>
            Info
          </Badge>
          <Badge variant="outline" className="border-tosca-30/40 bg-tosca-30/10 text-tosca-30">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 text-tosca-30 fill-current" />
            </span>
            Success
          </Badge>
        </Section>

        {/* ── Count / Number ── */}
        <Section title="Count Badges" description="Numeric badges for notifications and unread counts.">
          <Badge variant="default">3</Badge>
          <Badge variant="default">12</Badge>
          <Badge variant="secondary">99+</Badge>
          <Badge variant="destructive">!</Badge>
          <Badge variant="outline">New</Badge>
        </Section>

        {/* ── Category Tags ── */}
        <Section title="Category Tags" description="Ghost and outline variants for taxonomy labelling.">
          <Badge variant="ghost">Design</Badge>
          <Badge variant="ghost">Engineering</Badge>
          <Badge variant="ghost">Product</Badge>
          <Badge variant="outline">v1.0</Badge>
          <Badge variant="outline">Stable</Badge>
          <Badge variant="outline">Beta</Badge>
        </Section>

        {/* ── as Link ── */}
        <Section title="As Link (asChild)" description="Pass asChild to render the badge as an anchor element.">
          <Badge asChild variant="default">
            <a href="#">Clickable Badge</a>
          </Badge>
          <Badge asChild variant="outline">
            <a href="#">Documentation ↗</a>
          </Badge>
          <Badge asChild variant="secondary">
            <a href="#">Release Notes</a>
          </Badge>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Badge variant="secondary">
  New
</Badge>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Text("New")
  .font(.caption2)
  .padding(.horizontal, 8)
  .background(
    Capsule().fill(.secondary)
  )`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Badge {
  Text(
    "New",
    style = MaterialTheme
      .typography.labelSmall
  )
}`}</pre>
            </div>
          </div>
        </section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Keep badge labels short — 1 word or a number. Avoid full sentences.</li>
            <li>Use <strong>default</strong> for primary counts/actions, <strong>outline</strong> for neutral metadata.</li>
            <li>Use semantic colour overrides (green, yellow, etc.) only for live status indicators.</li>
            <li>Avoid stacking more than 3 badges in one UI area — it becomes noise.</li>
            <li>Use <strong>asChild</strong> when the badge itself should be navigable (e.g. a tag linking to a category).</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
