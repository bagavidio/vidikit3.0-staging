/**
 * VIDI Docs — Sheet Component
 * Route: /components/sheet
 */

"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

const SPEC = [
  { prop: "side",            type: '"top" | "right" | "bottom" | "left"', default: '"right"', description: "Edge the sheet slides from" },
  { prop: "open",            type: "boolean",                              default: "—",       description: "Controlled open state" },
  { prop: "onOpenChange",    type: "(open) => void",                       default: "—",       description: "Called when open state changes" },
  { prop: "showCloseButton", type: "boolean",                              default: "true",    description: "Show built-in close button" },
];

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function SheetPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Sheet</h1>
          <p className="text-muted-foreground">
            Sliding panel overlay from any edge. Built on Radix Dialog with backdrop blur, animated transitions, and accessible focus management.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/sheet", "radix-ui", "Slide from 4 sides"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* All 4 Sides */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">All Sides</h2>
          <div className="flex flex-wrap gap-3 rounded-xl border border-border bg-card/40 p-5">
            {SIDES.map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="capitalize">{side}</Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle className="capitalize">{side} Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the {side}. It uses <code className="text-foreground">bg-black/80</code> overlay with backdrop blur.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex-1 p-6">
                    <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </SheetClose>
                    <Button>Save</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </section>

        {/* Navigation Example */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mobile Navigation</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 p-6">
                  {["Home", "Components", "Colors", "Tokens", "Settings"].map((item) => (
                    <div key={item} className="rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted/50 transition-colors cursor-pointer">
                      {item}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Sheet>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
    {/* content */}
  </SheetContent>
</Sheet>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`.sheet(isPresented: $show) {
  NavigationStack {
    VStack { /* content */ }
      .navigationTitle("Title")
  }
  .presentationDetents([.medium])
}`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`ModalBottomSheet(
  onDismissRequest = { show = false },
  sheetState = rememberModalBottomSheetState()
) {
  Column { /* content */ }
}`}</pre>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Use <code className="text-foreground">side=&quot;right&quot;</code> for detail panels, forms, and settings drawers.</li>
            <li>Use <code className="text-foreground">side=&quot;left&quot;</code> for mobile navigation menus.</li>
            <li>Use <code className="text-foreground">side=&quot;bottom&quot;</code> for mobile action sheets and confirmations.</li>
            <li>Left/right sheets cap at <code className="text-foreground">sm:max-w-sm</code> — content beyond this uses scroll.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
