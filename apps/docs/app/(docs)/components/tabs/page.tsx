/**
 * VIDI Docs — Tabs Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/tabs
 */

"use client";

import { Suspense } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import {
  tabsSnippets,
  tabsProps,
} from "@/lib/docs/components/tabs";

// ── Shared section wrapper ─────────────────────────────────────────────────

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

// ── Native platform notice (no live preview) ───────────────────────────────

function NativeNote({ platform }: { platform: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/20 px-4 py-3">
      <span className="mt-0.5 text-base">📦</span>
      <p className="text-xs text-muted-foreground">
        Live preview is available for web platforms only.
        The specs below are reference implementations for <strong className="text-foreground">{platform}</strong>.
        Copy the source files from <code className="font-mono text-foreground">packages/ui-{platform.toLowerCase()}/</code> into your project.
      </p>
    </div>
  );
}

// ── React platform content ─────────────────────────────────────────────────

function ReactContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock code={tabsSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section
        title="Default Variant"
        description="Pill-shaped tab bar with a muted background. The active tab is highlighted with a solid surface."
      >
        <ComponentPreview>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Overview</TabsTrigger>
              <TabsTrigger value="tab2">Analytics</TabsTrigger>
              <TabsTrigger value="tab3">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Overview content goes here.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Analytics content goes here.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Settings content goes here.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
        <CodeBlock code={tabsSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="Line Variant"
        description="Transparent background with an underline indicator on the active tab."
      >
        <ComponentPreview>
          <Tabs defaultValue="tab1">
            <TabsList variant="line">
              <TabsTrigger value="tab1">Overview</TabsTrigger>
              <TabsTrigger value="tab2">Analytics</TabsTrigger>
              <TabsTrigger value="tab3">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Overview content goes here.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Analytics content goes here.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Settings content goes here.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
        <CodeBlock code={tabsSnippets.React.lineVariant} language="tsx" platform="React" />
      </Section>

      <Section
        title="Vertical"
        description="Stack triggers vertically with content beside them. Useful for settings pages or sidebars."
      >
        <ComponentPreview>
          <Tabs defaultValue="tab1" orientation="vertical">
            <TabsList>
              <TabsTrigger value="tab1">Profile</TabsTrigger>
              <TabsTrigger value="tab2">Security</TabsTrigger>
              <TabsTrigger value="tab3">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Profile settings content.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Security settings content.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Notification preferences content.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
        <CodeBlock code={tabsSnippets.React.vertical} language="tsx" platform="React" />
      </Section>

      <Section
        title="Controlled"
        description="Manage the active tab with React state for programmatic switching."
      >
        <CodeBlock code={tabsSnippets.React.controlled} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={tabsProps} />
      </Section>
    </div>
  );
}

// ── TV platform content ────────────────────────────────────────────────────

function TVContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section
        title="Installation"
        description="Tabs work well for top-level navigation on TV with D-pad focus management."
      >
        <CodeBlock code={tabsSnippets.TV.installation} language="ts" platform="TV" />
      </Section>

      <Section
        title="Basic Usage"
        description="Horizontal tabs with focus-based navigation using arrow keys."
      >
        <CodeBlock code={tabsSnippets.TV.basic} language="tsx" platform="TV" />
      </Section>
    </div>
  );
}

// ── Mobile Web platform content ────────────────────────────────────────────

function MobileWebContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section
        title="Installation"
        description="Same import as React — no platform-specific build needed for Mobile Web."
      >
        <CodeBlock code={tabsSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="Use full-width tabs with equal flex for better touch targets on mobile."
      >
        <CodeBlock code={tabsSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
      </Section>
    </div>
  );
}

// ── Android platform content ───────────────────────────────────────────────

function AndroidContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock code={tabsSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={tabsSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={tabsSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Props">
        <PropsTable props={tabsProps} />
      </Section>
    </div>
  );
}

// ── iOS platform content ───────────────────────────────────────────────────

function IOSContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock code={tabsSnippets.iOS.installation} language="swift" platform="iOS" filename="Xcode setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={tabsSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={tabsSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Props">
        <PropsTable props={tabsProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TabsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Tabs</h1>
          <p className="text-base text-muted-foreground">
            Organize content into switchable panels with pill or line indicator styles.
          </p>
        </header>

        {/* ── Platform tabs control the ENTIRE page content ──────── */}
        <Suspense fallback={null}>
          <PlatformTabs
            platforms={["React", "TV", "Mobile Web", "Android", "iOS"]}
            snippets={{
              React:        <ReactContent />,
              TV:           <TVContent />,
              "Mobile Web": <MobileWebContent />,
              Android:      <AndroidContent />,
              iOS:          <IOSContent />,
            }}
          />
        </Suspense>

      </div>
    </main>
  );
}
