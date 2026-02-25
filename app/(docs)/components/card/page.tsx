/**
 * VIDI Docs — Card Component
 * Route: /components/card
 */

"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MediaCard } from "@/components/vidi/media-card";
import { Button } from "@/components/design-system";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartIncreaseIcon, StarIcon, Notification01Icon, PlayIcon, CrownIcon, Tick01Icon,
} from "@hugeicons/core-free-icons";

// ── Spec data ─────────────────────────────────────────────────────────────────

const CARD_SPEC = [
  { prop: "size",      type: '"default" | "sm"', default: '"default"', description: "Controls internal padding density" },
  { prop: "className", type: "string",           default: "—",         description: "Merge additional Tailwind classes" },
  { prop: "children",  type: "React.ReactNode",  default: "—",         description: "CardHeader, CardContent, CardFooter etc." },
];

const MEDIA_CARD_SPEC = [
  { prop: "variant",      type: '"horizontal" | "list"', default: '"horizontal"', description: "Layout direction — stacked or side-by-side" },
  { prop: "size",          type: '"sm" | "md" | "lg"',   default: '"md"',         description: "Card width (horizontal) or thumbnail width (list)" },
  { prop: "src",           type: "string",                default: "—",            description: "Thumbnail image source URL" },
  { prop: "alt",           type: "string",                default: '""',           description: "Alt text for accessibility" },
  { prop: "title",         type: "string",                default: "—",            description: "Video/content title (required)" },
  { prop: "subtitle",      type: "string",                default: "—",            description: "Channel name, metadata, or subtitle" },
  { prop: "badgeLabel",    type: "string",                default: '"LIVE"',       description: "Badge text (top-left of thumbnail)" },
  { prop: "hideBadge",     type: "boolean",               default: "false",        description: "Hide the badge entirely" },
  { prop: "timestamp",     type: "string",                default: "—",            description: "Duration text (bottom-right, e.g. '12:34')" },
  { prop: "topLeftIcon",   type: "ReactNode",             default: "—",            description: "Icon overlay (top-left, shown when badge is hidden)" },
  { prop: "progress",      type: "number (0-100)",        default: "—",            description: "Playback progress bar (brand-red)" },
  { prop: "children",      type: "ReactNode",             default: "—",            description: "Extra content below title/subtitle" },
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

// ── Helpers ───────────────────────────────────────────────────────────────────

function PropsTable({ spec, title }: { spec: typeof CARD_SPEC; title: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {["Prop", "Type", "Default", "Description"].map((h) => (
                <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {spec.map((row, i) => (
              <tr key={row.prop} className={i % 2 === 0 ? "bg-card/40" : ""}>
                <td className="px-4 py-3"><code className="font-mono text-xs font-semibold text-foreground">{row.prop}</code></td>
                <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{row.type}</code></td>
                <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{row.default}</code></td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Tab: Card Landscape ───────────────────────────────────────────────────────

function CardLandscapeTab() {
  return (
    <div className="space-y-12">
      {/* Horizontal variants — sm / md / lg */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Horizontal — Size Variants
        </h2>
        <div className="rounded-xl border border-border bg-card/40 p-5">
          <div className="flex flex-wrap items-start gap-4">
            <MediaCard
              size="sm"
              title="Morning Highlights"
              subtitle="VIDI Sports"
              timestamp="3:22"
              hideBadge
            />
            <MediaCard
              size="md"
              title="Breaking News: Tech Innovation Summit 2026"
              subtitle="VIDI News · 12K views"
              timestamp="45:10"
              badgeLabel="LIVE"
              progress={35}
            />
            <MediaCard
              size="lg"
              title="Documentary: The Future of Indonesian Cinema"
              subtitle="VIDI Original · Premiered 2 hours ago"
              timestamp="1:28:04"
              hideBadge
              topLeftIcon={<HugeiconsIcon icon={PlayIcon} />}
              progress={72}
            />
          </div>
        </div>
      </section>

      {/* List variant */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          List Variant — Side by Side
        </h2>
        <div className="rounded-xl border border-border bg-card/40 p-5">
          <div className="flex flex-col gap-3 max-w-xl">
            <MediaCard
              variant="list"
              size="sm"
              title="Quick Update: Match Results"
              subtitle="VIDI Sports · 5 min ago"
              timestamp="1:20"
              hideBadge
            />
            <MediaCard
              variant="list"
              size="md"
              title="Interview with Director Joko Anwar — Exclusive Behind the Scenes"
              subtitle="VIDI Entertainment · 42K views"
              timestamp="18:45"
              hideBadge
              progress={60}
            />
            <MediaCard
              variant="list"
              size="lg"
              title="Live Concert: Jakarta Music Festival 2026"
              subtitle="VIDI Music"
              badgeLabel="LIVE"
            />
          </div>
        </div>
      </section>

      {/* Badge + Overlays */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Badge &amp; Overlay Variants
        </h2>
        <div className="rounded-xl border border-border bg-card/40 p-5">
          <div className="flex flex-wrap items-start gap-4">
            <MediaCard
              size="md"
              title="Live: Premier League"
              subtitle="VIDI Sports"
              badgeLabel="LIVE"
            />
            <MediaCard
              size="md"
              title="Premiere: Episode 8"
              subtitle="VIDI Originals"
              badgeLabel="NEW"
            />
            <MediaCard
              size="md"
              title="Rewind: Best of 2025"
              subtitle="VIDI Highlights"
              hideBadge
              topLeftIcon={<HugeiconsIcon icon={CrownIcon} className="size-4" />}
              timestamp="2:14:30"
              progress={100}
            />
          </div>
        </div>
      </section>

      {/* MediaCard Props */}
      <PropsTable spec={MEDIA_CARD_SPEC} title="Props Specification — MediaCard" />
    </div>
  );
}

// ── Tab: Card Portrait ────────────────────────────────────────────────────────

function CardPortraitTab() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Portrait Cards (2:3 Ratio)
        </h2>
        <div className="rounded-xl border border-border bg-card/40 p-5">
          <div className="flex flex-wrap items-start gap-4">
            {[
              { title: "Midnight Drama", genre: "Thriller · 8 Episodes", badge: "NEW" },
              { title: "Island Paradise", genre: "Travel · Documentary", badge: "EXCL" },
              { title: "Comedy Night", genre: "Stand-up · Live", badge: null },
            ].map((item) => (
              <Card key={item.title} className="w-[160px] overflow-hidden">
                <div className="relative aspect-[2/3] bg-gradient-to-br from-primary-30/20 via-pink-30/10 to-blue-30/20">
                  {item.badge && (
                    <span className="absolute left-2 top-2 z-10 inline-flex items-center rounded bg-[var(--red-50)] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HugeiconsIcon icon={PlayIcon} className="size-8 text-foreground/20" />
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="line-clamp-2 text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.genre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Portrait Cards (9:16 Ratio) — Stories / Shorts
        </h2>
        <div className="rounded-xl border border-border bg-card/40 p-5">
          <div className="flex flex-wrap items-start gap-4">
            {[
              { title: "Trending #1", views: "1.2M views" },
              { title: "Behind the Scenes", views: "340K views" },
              { title: "Fan Reaction", views: "890K views" },
            ].map((item) => (
              <Card key={item.title} className="w-[120px] overflow-hidden">
                <div className="relative aspect-[9/16] bg-gradient-to-b from-purple-30/20 via-pink-30/10 to-primary-30/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HugeiconsIcon icon={PlayIcon} className="size-6 text-foreground/20" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <p className="text-[10px] font-medium text-white">{item.title}</p>
                    <p className="text-[9px] text-white/60">{item.views}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Use <code className="text-foreground">aspect-[2/3]</code> for movie posters and show thumbnails.</li>
          <li>Use <code className="text-foreground">aspect-[9/16]</code> for short-form vertical content (Stories, Shorts).</li>
          <li>Badges inherit the same Brand Red (<code className="text-foreground">#CA0528</code>) as MediaCard.</li>
          <li>Overlay gradients from bottom (<code className="text-foreground">from-black/60 to-transparent</code>) for text legibility.</li>
        </ul>
      </section>
    </div>
  );
}

// ── Tab: Card Subscription ────────────────────────────────────────────────────

function CardSubscriptionTab() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Pricing / Plan Cards
        </h2>
        <div className="rounded-xl border border-border bg-card/40 p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Free */}
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Basic access with ads</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">Rp 0</p>
                <p className="text-xs text-muted-foreground mt-1">Forever free</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> SD quality streaming</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> Ad-supported</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> 1 device</li>
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4">
                <Button intent="outline" size="sm" className="w-full">Current Plan</Button>
              </CardFooter>
            </Card>

            {/* Premium */}
            <Card className="ring-2 ring-[var(--red-50)]">
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Most popular plan</CardDescription>
                <CardAction>
                  <span className="rounded-full bg-[var(--red-50)] px-2 py-0.5 text-[10px] font-bold text-white">BEST</span>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">Rp 59K</p>
                <p className="text-xs text-muted-foreground mt-1">per month</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> Full HD streaming</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> No ads</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> 2 devices</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> Download offline</li>
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4">
                <Button intent="primary" size="sm" className="w-full">Upgrade</Button>
              </CardFooter>
            </Card>

            {/* Platinum */}
            <Card>
              <CardHeader>
                <CardTitle>Platinum</CardTitle>
                <CardDescription>For the whole family</CardDescription>
                <CardAction>
                  <HugeiconsIcon icon={CrownIcon} className="size-4 text-yellow-50" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">Rp 99K</p>
                <p className="text-xs text-muted-foreground mt-1">per month</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> 4K Ultra HD</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> No ads</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> 5 devices</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> Download offline</li>
                  <li className="flex items-center gap-2"><HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-green-50" /> Exclusive content</li>
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4">
                <Button intent="outline" size="sm" className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Highlight the recommended plan with <code className="text-foreground">ring-2 ring-[var(--red-50)]</code> border accent.</li>
          <li>Use <code className="text-foreground">CardAction</code> for badges (BEST, POPULAR) or icons (Crown).</li>
          <li>CTA buttons span full width inside <code className="text-foreground">CardFooter</code>.</li>
          <li>Keep pricing in local currency (Rp) for Indonesian market context.</li>
        </ul>
      </section>
    </div>
  );
}

// ── Tab: Card Dashboard ───────────────────────────────────────────────────────

function CardDashboardTab() {
  return (
    <div className="space-y-12">
      {/* Default Card */}
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
                <HugeiconsIcon icon={ChartIncreaseIcon} className="size-4 text-muted-foreground" />
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

      {/* Size: sm */}
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
                <HugeiconsIcon icon={Notification01Icon} className="size-4 text-red-50" />
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

      {/* Stats Grid */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Grid Layout
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "Followers",  value: "48.2K", delta: "+12%",  icon: <HugeiconsIcon icon={StarIcon} className="size-4 text-yellow-50" /> },
            { title: "Engagement", value: "6.8%",  delta: "+0.4%", icon: <HugeiconsIcon icon={ChartIncreaseIcon} className="size-4 text-green-50" /> },
            { title: "Reach",      value: "2.1M",  delta: "+32%",  icon: <HugeiconsIcon icon={Notification01Icon} className="size-4 text-blue-50" /> },
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
    </div>
  );
}

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
            Elevated surface container with composable slots — header, content, footer, and action. Includes MediaCard for video/content thumbnails.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/card", "@/components/vidi/media-card", "shadcn/ui", "CVA variants"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="landscape">
          <TabsList variant="line">
            <TabsTrigger value="landscape">Card Landscape</TabsTrigger>
            <TabsTrigger value="portrait">Card Portrait</TabsTrigger>
            <TabsTrigger value="subscription">Card Subscription</TabsTrigger>
            <TabsTrigger value="dashboard">Card Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="landscape" className="pt-8">
            <CardLandscapeTab />
          </TabsContent>

          <TabsContent value="portrait" className="pt-8">
            <CardPortraitTab />
          </TabsContent>

          <TabsContent value="subscription" className="pt-8">
            <CardSubscriptionTab />
          </TabsContent>

          <TabsContent value="dashboard" className="pt-8">
            <CardDashboardTab />
          </TabsContent>
        </Tabs>

        {/* ── Shared sections below tabs ── */}

        {/* Anatomy */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Anatomy
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Slot", "Usage"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {ANATOMY.map((row, i) => (
                  <tr key={row.slot} className={i % 2 === 0 ? "bg-card/40" : ""}>
                    <td className="px-4 py-3"><code className="font-mono text-xs font-semibold text-foreground">{row.slot}</code></td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Card Props */}
        <PropsTable spec={CARD_SPEC} title="Props Specification — Card (root)" />

        {/* Cross-Platform */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cross-Platform Specs</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Web (React)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>…</CardDescription>
    <CardAction><Icon /></CardAction>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter>
    <Button>CTA</Button>
  </CardFooter>
</Card>

<MediaCard
  title="Video Title"
  timestamp="12:34"
  progress={50}
/>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`GroupBox {
  VStack(alignment: .leading) {
    Text("Title").font(.headline)
    Text("Description")
      .foregroundStyle(.secondary)
  }
} label: {
  Label("Section", systemImage: "star")
}
.groupBoxStyle(.material)`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Card(
  modifier = Modifier.fillMaxWidth(),
  shape = RoundedCornerShape(16.dp),
  colors = CardDefaults.cardColors(
    containerColor = MaterialTheme
      .colorScheme.surface
  )
) {
  Column(Modifier.padding(16.dp)) {
    Text("Title", style = h6)
    Text("Description", style = body2)
  }
}`}</pre>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Usage</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, CardAction,
} from "@/components/ui/card";
import { MediaCard } from "@/components/vidi/media-card";

// Base Card
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
</Card>

// MediaCard — Horizontal (default)
<MediaCard
  title="Breaking News"
  subtitle="VIDI News · 12K views"
  timestamp="45:10"
  progress={35}
  badgeLabel="LIVE"
/>

// MediaCard — List variant
<MediaCard
  variant="list"
  size="md"
  title="Interview Clip"
  subtitle="VIDI Entertainment"
  timestamp="18:45"
  hideBadge
/>`}
            </pre>
          </div>
        </section>

        {/* Guidelines */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Guidelines</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Use <code className="text-foreground">Card</code> for dashboard widgets, settings panels, and content containers.</li>
            <li>Use <code className="text-foreground">MediaCard</code> for video thumbnails, live streams, and content feeds.</li>
            <li><code className="text-foreground">variant=&quot;horizontal&quot;</code> stacks thumbnail on top — ideal for grids. <code className="text-foreground">variant=&quot;list&quot;</code> places thumbnail left — ideal for feeds.</li>
            <li>MediaCard sizes control width: <code className="text-foreground">sm</code> (180px), <code className="text-foreground">md</code> (280px), <code className="text-foreground">lg</code> (380px).</li>
            <li>Badge defaults to &quot;LIVE&quot; with Brand Red (<code className="text-foreground">#CA0528</code>). Use <code className="text-foreground">badgeLabel</code> to customize or <code className="text-foreground">hideBadge</code> to remove.</li>
            <li>Progress bar appears at the thumbnail bottom — pass <code className="text-foreground">progress</code> (0-100) for playback position.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
