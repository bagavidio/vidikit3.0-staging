/**
 * VIDI Docs — Empty State Component
 * Route: /components/empty-state
 */

import { EmptyState } from "@/components/design-system";
import { Button } from "@/components/design-system";
import { Inbox, Search, FileX, WifiOff } from "lucide-react";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "icon",        type: "React.ReactNode",  default: "—",   description: "Large icon or illustration" },
  { prop: "title",       type: "string",            default: "—",   description: "Primary heading (required)" },
  { prop: "description", type: "string",            default: "—",   description: "Supporting paragraph text" },
  { prop: "action",      type: "React.ReactNode",   default: "—",   description: "CTA element (Button, link, etc.)" },
  { prop: "className",   type: "string",            default: "—",   description: "Merge additional Tailwind classes" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function EmptyStatePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Empty State</h1>
          <p className="text-muted-foreground">
            Placeholder pattern for empty lists, search results, and error states. Centered layout with optional icon, title, description, and action.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/design-system", "Pattern", "Maia dashed border"].map((label) => (
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
            Default — No Data
          </h2>
          <EmptyState
            icon={<Inbox className="size-10" />}
            title="No items yet"
            description="Create your first item to get started with your collection."
            action={<Button intent="primary" size="sm">Create Item</Button>}
          />
        </section>

        {/* ── Search ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Search — No Results
          </h2>
          <EmptyState
            icon={<Search className="size-10" />}
            title="No results found"
            description="Try adjusting your search or filter to find what you're looking for."
            action={<Button intent="ghost" size="sm">Clear Filters</Button>}
          />
        </section>

        {/* ── Error ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Error — Not Found
          </h2>
          <EmptyState
            icon={<FileX className="size-10" />}
            title="Page not found"
            description="The resource you're looking for doesn't exist or has been moved."
          />
        </section>

        {/* ── Offline ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Offline
          </h2>
          <EmptyState
            icon={<WifiOff className="size-10" />}
            title="You're offline"
            description="Check your internet connection and try again."
            action={<Button intent="outline" size="sm">Retry</Button>}
          />
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
{`import { EmptyState, Button } from "@/components/design-system";
import { Inbox } from "lucide-react";

<EmptyState
  icon={<Inbox className="size-10" />}
  title="No items yet"
  description="Create your first item to get started."
  action={<Button intent="primary" size="sm">Create</Button>}
/>`}
            </pre>
          </div>
        </section>

        {/* ── Guidelines ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Always provide a clear title explaining what&apos;s missing and why.</li>
            <li>Include an action when the user can resolve the empty state (e.g., &quot;Create&quot;, &quot;Retry&quot;, &quot;Clear Filters&quot;).</li>
            <li>Use Maia dashed border style for visual distinction from content containers.</li>
            <li>On TV, the action button receives <code className="text-foreground">focus-visible:ring-4</code> for clear D-pad navigation.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
