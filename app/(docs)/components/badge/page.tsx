/**
 * VIDI Docs — Badge Component
 * Route: /components/badge
 */

import { Badge } from "@/components/ui/badge";

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

export default function BadgePage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Badge</h1>
        <p className="text-muted-foreground">
          Small labelling element for status, categories, counts, and metadata.
        </p>
      </header>

      <div className="max-w-4xl space-y-12">

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
          <Badge variant="outline" className="border-primary-30/40 bg-primary-30/10 text-primary-30">
            <span data-icon="inline-start" className="inline-flex">
              <Dot className="size-1.5 text-primary-30 fill-current" />
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
