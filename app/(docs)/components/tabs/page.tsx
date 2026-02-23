/**
 * VIDI Docs — Tabs Component
 * Route: /components/tabs
 */

"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const SPEC = [
  { prop: "defaultValue",     type: "string",                       default: "—",            description: "Initial active tab (uncontrolled)" },
  { prop: "value",            type: "string",                       default: "—",            description: "Controlled active tab" },
  { prop: "onValueChange",    type: "(value) => void",              default: "—",            description: "Called when active tab changes" },
  { prop: "orientation",      type: '"horizontal" | "vertical"',    default: '"horizontal"', description: "Tabs layout direction" },
  { prop: "variant (TabsList)", type: '"default" | "line"',         default: '"default"',    description: "Visual style — pill background or underline" },
];

export default function TabsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Tabs</h1>
          <p className="text-muted-foreground">
            Tab navigation with two visual variants: pill (default) and line. Supports horizontal and vertical orientations via CVA.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/tabs", "radix-ui", "CVA variants", "pill + line"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Default (Pill) */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Default — Pill</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4 text-sm text-muted-foreground">
                Overview tab content. The pill variant uses <code className="text-foreground">bg-muted</code> track with <code className="text-foreground">rounded-4xl</code>.
              </TabsContent>
              <TabsContent value="analytics" className="mt-4 text-sm text-muted-foreground">
                Analytics tab content with charts and metrics.
              </TabsContent>
              <TabsContent value="settings" className="mt-4 text-sm text-muted-foreground">
                Settings tab content with configuration options.
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Line Variant */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Line Variant</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Tabs defaultValue="general">
              <TabsList variant="line">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-4 text-sm text-muted-foreground">
                General settings. The line variant shows a bottom border indicator on the active tab.
              </TabsContent>
              <TabsContent value="security" className="mt-4 text-sm text-muted-foreground">
                Security settings — password, 2FA, sessions.
              </TabsContent>
              <TabsContent value="notifications" className="mt-4 text-sm text-muted-foreground">
                Notification preferences and alert configuration.
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Vertical */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Vertical Orientation</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Tabs defaultValue="profile" orientation="vertical">
              <TabsList variant="line">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="text-sm text-muted-foreground">
                Profile settings — avatar, display name, bio.
              </TabsContent>
              <TabsContent value="account" className="text-sm text-muted-foreground">
                Account settings — email, password, linked accounts.
              </TabsContent>
              <TabsContent value="billing" className="text-sm text-muted-foreground">
                Billing settings — plans, payment methods, invoices.
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Disabled Tab */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Disabled Tab</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="coming" disabled>Coming Soon</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="mt-4 text-sm text-muted-foreground">
                Active tab content. The &ldquo;Coming Soon&rdquo; tab is disabled.
              </TabsContent>
            </Tabs>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Tabs defaultValue="tab1">
  <TabsList variant="line">
    <TabsTrigger value="tab1">…</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">…</TabsContent>
</Tabs>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`TabView {
  Tab("Overview", systemImage: "house") {
    OverviewView()
  }
  Tab("Settings", systemImage: "gear") {
    SettingsView()
  }
}`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`TabRow(selectedTabIndex = idx) {
  Tab(
    selected = idx == 0,
    text = { Text("Tab 1") },
    onClick = { idx = 0 }
  )
}`}</pre>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Use <code className="text-foreground">variant=&quot;default&quot;</code> (pill) for primary navigation within a card or panel.</li>
            <li>Use <code className="text-foreground">variant=&quot;line&quot;</code> for settings pages and secondary navigation — shows underline indicator.</li>
            <li>Vertical tabs work best for settings with 4+ sections. Combine with <code className="text-foreground">variant=&quot;line&quot;</code> for a sidebar-like pattern.</li>
            <li>Focus ring uses Maia pattern: <code className="text-foreground">focus-visible:ring-[3px] ring-ring/50</code>.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
