/**
 * VIDI Docs — Item Component
 * Route: /components/item
 */

import { Item } from "@vidikit/ui-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayCircleIcon, ChevronRight, Setting06Icon, User02Icon, Notification01Icon, FavouriteIcon, WifiConnected01Icon, Shield01Icon } from "@hugeicons/core-free-icons";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "icon",        type: "React.ReactNode",        default: "—",         description: "Leading icon or avatar" },
  { prop: "title",       type: "string",                  default: "—",         description: "Primary label (required)" },
  { prop: "description", type: "string",                  default: "—",         description: "Secondary text line" },
  { prop: "trailing",    type: "React.ReactNode",         default: "—",         description: "Trailing element — chevron, badge, switch" },
  { prop: "variant",     type: '"default" | "active" | "muted"', default: '"default"', description: "Visual state variant" },
  { prop: "size",        type: '"default" | "sm" | "lg"', default: '"default"', description: "Row height and spacing" },
  { prop: "onClick",     type: "MouseEventHandler",       default: "—",         description: "Makes item interactive (role=button)" },
  { prop: "className",   type: "string",                  default: "—",         description: "Merge additional Tailwind classes" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ItemPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Item</h1>
          <p className="text-muted-foreground">
            Flexible list-item primitive for navigation lists, search results, settings rows, and any repeated row-based layout. Maia pill hover with TV/D-pad focus scale.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/design-system", "CVA", "D-pad optimized"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Default List ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Default — Navigation List
          </h2>
          <div className="max-w-md space-y-1 rounded-xl border border-border bg-card p-2">
            <Item
              icon={<HugeiconsIcon icon={PlayCircleIcon} className="size-4" />}
              title="Episode 1"
              description="The Beginning"
              trailing={<HugeiconsIcon icon={ChevronRight} className="size-4" />}
            />
            <Item
              icon={<HugeiconsIcon icon={PlayCircleIcon} className="size-4" />}
              title="Episode 2"
              description="The Journey"
              trailing={<HugeiconsIcon icon={ChevronRight} className="size-4" />}
            />
            <Item
              icon={<HugeiconsIcon icon={PlayCircleIcon} className="size-4" />}
              title="Episode 3"
              description="The Finale"
              trailing={<HugeiconsIcon icon={ChevronRight} className="size-4" />}
            />
          </div>
        </section>

        {/* ── Active Variant ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Active Variant
          </h2>
          <div className="max-w-md space-y-1 rounded-xl border border-border bg-card p-2">
            <Item
              icon={<HugeiconsIcon icon={FavouriteIcon} className="size-4" />}
              title="Favorites"
              variant="active"
              trailing={<span className="text-xs text-red-30 font-medium">12</span>}
            />
            <Item
              icon={<HugeiconsIcon icon={Notification01Icon} className="size-4" />}
              title="Notifications"
              trailing={<span className="text-xs text-muted-foreground font-medium">3</span>}
            />
            <Item
              icon={<HugeiconsIcon icon={User02Icon} className="size-4" />}
              title="Profile"
              variant="muted"
              trailing={<HugeiconsIcon icon={ChevronRight} className="size-4" />}
            />
          </div>
        </section>

        {/* ── Size Variants ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Size Variants
          </h2>
          <div className="max-w-md space-y-3">
            <div className="space-y-1 rounded-xl border border-border bg-card p-2">
              <p className="px-3 pt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">sm</p>
              <Item size="sm" icon={<HugeiconsIcon icon={WifiConnected01Icon} className="size-3" />} title="Wi-Fi" description="Connected" />
            </div>
            <div className="space-y-1 rounded-xl border border-border bg-card p-2">
              <p className="px-3 pt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">default</p>
              <Item icon={<HugeiconsIcon icon={Setting06Icon} className="size-4" />} title="Settings" description="Manage preferences" />
            </div>
            <div className="space-y-1 rounded-xl border border-border bg-card p-2">
              <p className="px-3 pt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">lg</p>
              <Item size="lg" icon={<HugeiconsIcon icon={Shield01Icon} className="size-5" />} title="Security" description="Two-factor authentication enabled" />
            </div>
          </div>
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
{`import { Item } from "@vidikit/ui-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayCircleIcon, ChevronRight, Setting06Icon } from "@hugeicons/core-free-icons";

<Item
  icon={<HugeiconsIcon icon={PlayCircleIcon} className="size-4" />}
  title="Episode 1"
  description="The Beginning"
  trailing={<HugeiconsIcon icon={ChevronRight} className="size-4" />}
  onClick={() => navigate("/ep/1")}
/>

{/* Active state */}
<Item variant="active" title="Current Page" />

{/* Large for TV */}
<Item size="lg" title="Settings" icon={<HugeiconsIcon icon={Setting06Icon} />} />`}
            </pre>
          </div>
        </section>

        {/* ── Guidelines ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>When <code className="text-foreground">onClick</code> is provided, the item renders as interactive with <code className="text-foreground">role=&quot;button&quot;</code> and keyboard support (Enter/Space).</li>
            <li>Use <code className="text-foreground">variant=&quot;active&quot;</code> to highlight the current selection (red-30 tint).</li>
            <li>Use <code className="text-foreground">size=&quot;lg&quot;</code> for 10-foot TV interfaces — larger touch targets and text.</li>
            <li>TV/D-pad: <code className="text-foreground">focus-visible:ring-4 focus-visible:scale-[1.01]</code> provides clear focus indication.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
