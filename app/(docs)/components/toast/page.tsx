/**
 * VIDI Docs — Toast Component (Sonner)
 * Route: /components/toast
 */

"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SPEC = [
  { prop: "toast()",          type: "function",  default: "—", description: "Default toast notification" },
  { prop: "toast.success()",  type: "function",  default: "—", description: "Success toast with checkmark icon" },
  { prop: "toast.error()",    type: "function",  default: "—", description: "Error toast with X icon" },
  { prop: "toast.warning()",  type: "function",  default: "—", description: "Warning toast with alert icon" },
  { prop: "toast.info()",     type: "function",  default: "—", description: "Informational toast with info icon" },
  { prop: "toast.loading()",  type: "function",  default: "—", description: "Loading toast with spinner" },
  { prop: "toast.promise()",  type: "function",  default: "—", description: "Auto-resolves with loading → success/error" },
];

export default function ToastPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Toast</h1>
          <p className="text-muted-foreground">
            Toast notifications powered by Sonner with custom HugeIcons. Renders via the global <code className="text-foreground">&lt;Toaster /&gt;</code> mounted in root layout.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["sonner", "@/components/ui/sonner", "HugeIcons", "Global Toaster"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* All Toast Types */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Toast Types</h2>
          <div className="flex flex-wrap gap-3 rounded-xl border border-border bg-card/40 p-5">
            <Button
              variant="outline"
              onClick={() => toast("Default toast", { description: "This is a default notification." })}
            >
              Default
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Success!", { description: "Your changes have been saved." })}
            >
              Success
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("Error", { description: "Something went wrong. Please try again." })}
            >
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("Warning", { description: "This action cannot be undone." })}
            >
              Warning
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("Info", { description: "A new version is available." })}
            >
              Info
            </Button>
          </div>
        </section>

        {/* Loading + Promise */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Loading &amp; Promise</h2>
          <div className="flex flex-wrap gap-3 rounded-xl border border-border bg-card/40 p-5">
            <Button
              variant="outline"
              onClick={() => {
                toast.loading("Uploading file…");
              }}
            >
              Loading Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast.promise(
                  new Promise<{ name: string }>((resolve) =>
                    setTimeout(() => resolve({ name: "report.pdf" }), 2000)
                  ),
                  {
                    loading: "Saving file…",
                    success: (data) => `${data.name} saved successfully!`,
                    error: "Failed to save file.",
                  }
                );
              }}
            >
              Promise Toast
            </Button>
          </div>
        </section>

        {/* With Action */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">With Action</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Button
              variant="outline"
              onClick={() =>
                toast("File deleted", {
                  description: "report.pdf was moved to trash.",
                  action: {
                    label: "Undo",
                    onClick: () => toast.success("File restored!"),
                  },
                })
              }
            >
              Toast with Undo Action
            </Button>
          </div>
        </section>

        {/* Custom Duration */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Custom Duration</h2>
          <div className="flex flex-wrap gap-3 rounded-xl border border-border bg-card/40 p-5">
            <Button
              variant="outline"
              onClick={() => toast.info("Quick toast", { duration: 1500 })}
            >
              1.5s Duration
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("Persistent toast", { duration: 10000 })}
            >
              10s Duration
            </Button>
          </div>
        </section>

        {/* API Reference */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">API Reference</h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/30">
                {["Method","Type","Default","Description"].map((h) => (<th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{h}</th>))}
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`import { toast } from "sonner";

toast.success("Saved!");
toast.error("Failed!");
toast.promise(fetchData(), {
  loading: "Loading…",
  success: "Done!",
  error: "Error!",
});`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`// SPAlert or custom overlay
SPAlertView(
  title: "Saved!",
  preset: .done
).present()`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Snackbar.make(
  view, "Saved!",
  Snackbar.LENGTH_SHORT
).setAction("Undo") {
  /* undo logic */
}.show()`}</pre>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Usage</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`// 1. <Toaster /> is already mounted in app/layout.tsx
// 2. Import toast from sonner in any client component:

import { toast } from "sonner";

// Basic
toast("Hello world");

// Typed
toast.success("Changes saved!");
toast.error("Something went wrong");
toast.warning("Careful!");
toast.info("FYI…");

// With description and action
toast("File deleted", {
  description: "Moved to trash.",
  action: { label: "Undo", onClick: () => {} },
});

// Promise-based (auto loading → success/error)
toast.promise(saveToDB(), {
  loading: "Saving…",
  success: "Saved!",
  error: "Failed!",
});`}</pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>The <code className="text-foreground">&lt;Toaster /&gt;</code> is mounted once in <code className="text-foreground">app/layout.tsx</code> — call <code className="text-foreground">toast()</code> from any client component.</li>
            <li>Icons are custom HugeIcons (CheckmarkCircle02, Alert02, MultiplicationSignCircle, InformationCircle, Loading03).</li>
            <li>Toast container uses popover colors: <code className="text-foreground">bg-popover</code>, <code className="text-foreground">text-popover-foreground</code>, <code className="text-foreground">border-border</code>.</li>
            <li>Use <code className="text-foreground">toast.promise()</code> for async operations — it automatically transitions from loading to success or error.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
