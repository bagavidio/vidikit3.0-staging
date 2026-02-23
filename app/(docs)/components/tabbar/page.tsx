/**
 * VIDI Docs — Tabbar Component
 * Route: /components/tabbar
 */

"use client";

import * as React from "react";
import { Home, Search, Library, User, Bell } from "lucide-react";
import { Tabbar, type TabbarItem } from "@/components/vidi/tabbar";

const SPEC = [
  { prop: "items",     type: "TabbarItem[]",              default: "—",         description: "Array of tab items (label, href, icon, notify?)" },
  { prop: "size",      type: '"default" | "compact"',     default: '"default"', description: "Tabbar height — default (h-14) or compact (h-12)" },
  { prop: "className", type: "string",                    default: "—",         description: "Merge additional Tailwind classes" },
];

const ITEM_SPEC = [
  { prop: "label",  type: "string",         default: "—",     description: "Display text below the icon" },
  { prop: "href",   type: "string",         default: "—",     description: "Navigation target" },
  { prop: "icon",   type: "React.ReactNode", default: "—",    description: "Icon element (auto-sized to 20px)" },
  { prop: "notify", type: "boolean",        default: "false", description: "Show red dot notification indicator" },
];

const demoItems: TabbarItem[] = [
  { label: "Home",    href: "/",                   icon: <Home /> },
  { label: "Search",  href: "/components/command",  icon: <Search /> },
  { label: "Library", href: "/components/button",   icon: <Library />, notify: true },
  { label: "Profile", href: "/components/avatar",   icon: <User /> },
];

const fiveItems: TabbarItem[] = [
  { label: "Home",    href: "/",                   icon: <Home /> },
  { label: "Search",  href: "/components/command",  icon: <Search /> },
  { label: "Library", href: "/components/button",   icon: <Library /> },
  { label: "Alerts",  href: "/components/toast",    icon: <Bell />, notify: true },
  { label: "Profile", href: "/components/avatar",   icon: <User /> },
];

export default function TabbarPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Tabbar</h1>
          <p className="text-muted-foreground">
            Mobile bottom navigation bar with icon slots and notification dot. Visible only on sm/md breakpoints, hidden on lg+.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/vidi/tabbar", "CVA variants", "Mobile-only (lg:hidden)", "Brand Red dot"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* Default (4 items) */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Default — 4 Items</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-background">
              <div className="h-40 flex items-center justify-center text-xs text-muted-foreground">
                Mobile viewport preview
              </div>
              <Tabbar
                items={demoItems}
                className="relative inset-auto border-t border-border lg:flex"
              />
            </div>
          </div>
        </section>

        {/* 5 Items */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">5 Items with Notification</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-background">
              <div className="h-40 flex items-center justify-center text-xs text-muted-foreground">
                Mobile viewport preview
              </div>
              <Tabbar
                items={fiveItems}
                className="relative inset-auto border-t border-border lg:flex"
              />
            </div>
          </div>
        </section>

        {/* Compact Size */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Size — Compact</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-background">
              <div className="h-40 flex items-center justify-center text-xs text-muted-foreground">
                Compact height (h-12)
              </div>
              <Tabbar
                items={demoItems}
                size="compact"
                className="relative inset-auto border-t border-border lg:flex"
              />
            </div>
          </div>
        </section>

        {/* Notification Dot */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Notification Dot</h2>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <pre className="font-mono text-xs leading-relaxed text-foreground/80">
{`Dot color: var(--red-50) = #CA0528 (Brand Red)
Size: 8px (size-2) rounded-full
Position: absolute -top-0.5 -right-1.5 relative to icon

Set notify: true on a TabbarItem to show the dot.`}</pre>
          </div>
        </section>

        {/* Tabbar Props */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Props Specification — Tabbar</h2>
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

        {/* TabbarItem Props */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Props Specification — TabbarItem</h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/30">
                {["Prop","Type","Default","Description"].map((h) => (<th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{h}</th>))}
              </tr></thead>
              <tbody className="divide-y divide-border/50">
                {ITEM_SPEC.map((r, i) => (<tr key={r.prop} className={i % 2 === 0 ? "bg-card/40" : ""}>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Tabbar items={[
  { label: "Home", href: "/",
    icon: <Home />, notify: false },
  { label: "Library", href: "/lib",
    icon: <Library />, notify: true },
]} />`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`TabView {
  HomeView()
    .tabItem {
      Image(systemName: "house")
      Text("Home")
    }
    .badge(3) // notification count
}`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`NavigationBar {
  NavigationBarItem(
    selected = idx == 0,
    icon = { Icon(Icons.Home, "Home") },
    label = { Text("Home") },
    onClick = { idx = 0 }
  )
}`}</pre>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Usage</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`import { Tabbar, type TabbarItem } from "@/components/vidi/tabbar";
import { Home, Search, Library, User } from "lucide-react";

const items: TabbarItem[] = [
  { label: "Home",    href: "/",          icon: <Home /> },
  { label: "Search",  href: "/search",    icon: <Search /> },
  { label: "Library", href: "/library",   icon: <Library />, notify: true },
  { label: "Profile", href: "/profile",   icon: <User /> },
];

// In your layout (visible on mobile, hidden on lg+):
<Tabbar items={items} />

// Compact variant:
<Tabbar items={items} size="compact" />`}</pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Tabbar is hidden on <code className="text-foreground">lg</code> breakpoint and above via <code className="text-foreground">lg:hidden</code>. Desktop uses the sidebar for navigation.</li>
            <li>Use 4-5 items maximum. More items create crowded tap targets on small screens.</li>
            <li>The red notification dot uses Brand Red (<code className="text-foreground">#CA0528</code>) — set <code className="text-foreground">notify: true</code> on the relevant item.</li>
            <li>Active state uses <code className="text-foreground">text-primary</code> (Brand Red in dark mode). Pathname matching is exact.</li>
            <li>Add <code className="text-foreground">pb-14 lg:pb-0</code> to your main content area to prevent content from hiding behind the fixed tabbar.</li>
            <li>Safe area inset is handled via <code className="text-foreground">pb-[env(safe-area-inset-bottom)]</code> for notched devices.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
