/**
 * VIDI Docs — Card Component
 * Route: /components/card
 */

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/design-system";
import { TrendingUp, Star, Bell } from "lucide-react";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "size",      type: '"default" | "sm"', default: '"default"', description: "Controls internal padding density" },
  { prop: "className", type: "string",           default: "—",         description: "Merge additional Tailwind classes" },
  { prop: "children",  type: "React.ReactNode",  default: "—",         description: "CardHeader, CardContent, CardFooter etc." },
];

const ANATOMY = [
  { slot: "Card",            usage: "Root wrapper — ring shadow, rounded-2xl, flex-col" },
  { slot: "CardHeader",      usage: "Top section with grid layout — auto-handles title + description + action" },
  { slot: "CardTitle",       usage: "Heading text — text-base font-medium" },
  { slot: "CardDescription", usage: "Subtitle/helper text — text-sm text-muted-foreground" },
  { slot: "CardAction",      usage: "Right-aligned action in header (icon button, badge, etc.)" },
  { slot: "CardContent",     usage: "Main content area with horizontal padding" },
  { slot: "CardFooter",      usage: "Bottom row — flex items-center, for CTAs and secondary actions" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CardPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Card</h1>
          <p className="text-muted-foreground">
            Elevated surface container with composable slots — header, content, footer, and action.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/card", "shadcn/ui", "Radix-free"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Default Card ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Default
          </h2>
          <div className="max-w-sm">
            <Card>
              <CardHeader>
                <CardTitle>Session Analytics</CardTitle>
                <CardDescription>Daily active users over the last 30 days.</CardDescription>
                <CardAction>
                  <TrendingUp className="size-4 text-muted-foreground" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">12,489</p>
                <p className="text-xs text-muted-foreground mt-1">+18.2% from last month</p>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4 gap-2">
                <Button intent="primary" size="sm">View Report</Button>
                <Button intent="ghost" size="sm">Export</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* ── Size: sm ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Size — sm
          </h2>
          <div className="max-w-xs">
            <Card size="sm">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>3 unread</CardDescription>
                <CardAction>
                  <Bell className="size-4 text-red-50" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Compact card with reduced internal padding. Ideal for sidebars and dense layouts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Card Grid ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Grid Layout
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: "Followers",  value: "48.2K", delta: "+12%",  icon: <Star className="size-4 text-yellow-50" /> },
              { title: "Engagement", value: "6.8%",  delta: "+0.4%", icon: <TrendingUp className="size-4 text-green-50" /> },
              { title: "Reach",      value: "2.1M",  delta: "+32%",  icon: <Bell className="size-4 text-blue-50" /> },
            ].map((item) => (
              <Card key={item.title} size="sm">
                <CardHeader>
                  <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.title}
                  </CardTitle>
                  <CardAction>{item.icon}</CardAction>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-green-50 mt-0.5">{item.delta} vs last period</p>
                </CardContent>
              </Card>
            ))}
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
            Props Specification (Card root)
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
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, CardAction,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Supporting text</CardDescription>
    <CardAction><IconButton /></CardAction>
  </CardHeader>
  <CardContent>…content…</CardContent>
  <CardFooter className="border-t border-border/50 pt-4 gap-2">
    <Button intent="primary" size="sm">Confirm</Button>
    <Button intent="ghost" size="sm">Cancel</Button>
  </CardFooter>
</Card>`}
            </pre>
          </div>
        </section>

      </div>
    </main>
  );
}
