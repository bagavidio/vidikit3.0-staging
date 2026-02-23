/**
 * VIDI Docs — Scroll Area Component
 * Route: /components/scroll-area
 */

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const SPEC = [
  { prop: "className",    type: "string",                          default: "—",          description: "Merge additional Tailwind classes (set height)" },
  { prop: "orientation",  type: '"vertical" | "horizontal"',       default: '"vertical"', description: "ScrollBar direction" },
];

const TAGS = Array.from({ length: 30 }, (_, i) => `Tag ${i + 1}`);

const THUMBNAILS = [
  { label: "Landscape",   bg: "bg-blue-50/20" },
  { label: "Portrait",    bg: "bg-primary-50/20" },
  { label: "Macro",       bg: "bg-tosca-50/20" },
  { label: "Street",      bg: "bg-green-50/20" },
  { label: "Abstract",    bg: "bg-purple-50/20" },
  { label: "Aerial",      bg: "bg-pink-50/20" },
  { label: "Night",       bg: "bg-yellow-50/20" },
  { label: "Underwater",  bg: "bg-blue-30/20" },
];

export default function ScrollAreaPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Scroll Area</h1>
          <p className="text-muted-foreground">
            Custom scrollbar overlay for vertical and horizontal overflow. Built on Radix UI with native-like scrollbar styling.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/scroll-area", "radix-ui", "Custom scrollbar"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Vertical List */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Vertical List</h2>
          <div className="max-w-sm rounded-xl border border-border bg-card/40">
            <ScrollArea className="h-64 px-4">
              <div className="py-4">
                <h4 className="mb-3 text-sm font-semibold text-foreground">Tags</h4>
                {TAGS.map((tag, i) => (
                  <div key={tag}>
                    <p className="py-2 text-sm text-foreground/80">{tag}</p>
                    {i < TAGS.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* Horizontal Thumbnails */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Horizontal Thumbnails</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-3 pb-3">
                {THUMBNAILS.map((thumb) => (
                  <div key={thumb.label} className="shrink-0">
                    <div className={`flex h-28 w-40 items-center justify-center rounded-lg ${thumb.bg}`}>
                      <span className="text-xs font-medium text-foreground/60">{thumb.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<ScrollArea className="h-64">
  {/* content */}
</ScrollArea>

{/* Horizontal */}
<ScrollArea className="w-full">
  <div className="flex gap-3">…</div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`ScrollView {
  LazyVStack { /* content */ }
}
.scrollIndicators(.hidden)

ScrollView(.horizontal) {
  LazyHStack { /* thumbnails */ }
}`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`LazyColumn(
  modifier = Modifier.height(256.dp)
) { items(tags) { /* item */ } }

LazyRow(
  horizontalArrangement = spacedBy(12.dp)
) { items(thumbnails) { /* thumb */ } }`}</pre>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Usage</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

{/* Vertical — set a fixed height */}
<ScrollArea className="h-64">
  <div>{/* tall content */}</div>
</ScrollArea>

{/* Horizontal — add horizontal ScrollBar */}
<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex gap-3">{/* wide content */}</div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Always set a fixed <code className="text-foreground">height</code> (or <code className="text-foreground">max-h-*</code>) for vertical scroll areas — content must overflow to show scrollbar.</li>
            <li>Add <code className="text-foreground">&lt;ScrollBar orientation=&quot;horizontal&quot; /&gt;</code> explicitly for horizontal scrolling — only vertical is included by default.</li>
            <li>Scrollbar thumb uses <code className="text-foreground">bg-border</code> for a subtle, non-distracting appearance.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
