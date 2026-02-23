/**
 * VIDI Docs — Carousel Component
 * Route: /components/carousel
 */

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Scroll direction" },
  { prop: "opts",        type: "EmblaOptionsType",          default: "{}",           description: "Embla Carousel options (loop, align, etc.)" },
  { prop: "plugins",     type: "EmblaPluginType[]",         default: "[]",           description: "Embla plugins (autoplay, fade, etc.)" },
  { prop: "setApi",      type: "(api: CarouselApi) => void", default: "—",           description: "Callback to access the carousel API" },
];

const ANATOMY = [
  { slot: "Carousel",          usage: "Root wrapper — keyboard navigation, context provider" },
  { slot: "CarouselContent",   usage: "Scroll container — flex row/col with Embla ref" },
  { slot: "CarouselItem",      usage: "Individual slide — basis-full by default" },
  { slot: "CarouselPrevious",  usage: "Back button — absolute positioned, auto-disabled" },
  { slot: "CarouselNext",      usage: "Forward button — absolute positioned, auto-disabled" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CarouselPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Carousel</h1>
          <p className="text-muted-foreground">
            Touch-friendly, keyboard-navigable carousel built on Embla. Supports horizontal and vertical orientations with D-pad navigation for TV.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/carousel", "embla-carousel-react", "Keyboard + D-pad"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Default Carousel ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Default
          </h2>
          <div className="mx-auto max-w-sm">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i}>
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center">
                        <span className="text-4xl font-bold text-foreground">{i + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* ── Multi-slide ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Multi-Slide (basis-1/3)
          </h2>
          <div className="mx-auto max-w-lg">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 9 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <span className="text-2xl font-bold text-foreground">{i + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* ── Anatomy ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Anatomy
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Slot", "Usage"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {ANATOMY.map((row, i) => (
                  <tr key={row.slot} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground">{row.slot}</code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Props Spec ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Props Specification (Carousel root)
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
{`import {
  Carousel, CarouselContent, CarouselItem,
  CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel";

<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

{/* Multi-slide with basis */}
<CarouselItem className="basis-1/3">…</CarouselItem>`}
            </pre>
          </div>
        </section>

        {/* ── Guidelines ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Arrow keys navigate slides when the carousel has focus. On TV, D-pad left/right maps naturally.</li>
            <li>Use <code className="text-foreground">basis-1/3</code> or <code className="text-foreground">basis-1/2</code> on <code className="text-foreground">CarouselItem</code> for multi-slide layouts.</li>
            <li>Previous/Next buttons auto-disable at boundaries. Use <code className="text-foreground">opts=&#123;&#123; loop: true &#125;&#125;</code> for infinite scroll.</li>
            <li>For auto-play, add the <code className="text-foreground">embla-carousel-autoplay</code> plugin.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
