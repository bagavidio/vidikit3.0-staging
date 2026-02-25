/**
 * VIDI Docs — Separator Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/separator
 */

"use client";

import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { separatorSnippets, separatorProps } from "@/lib/docs/components/separator";

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
        <CodeBlock code={separatorSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section
        title="Horizontal (Default)"
        description="A full-width horizontal line separating content blocks."
      >
        <ComponentPreview>
          <div className="w-full max-w-sm space-y-3">
            <p className="text-sm text-foreground">Content above the separator</p>
            <Separator />
            <p className="text-sm text-foreground">Content below the separator</p>
          </div>
        </ComponentPreview>
        <CodeBlock code={separatorSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="Vertical"
        description="A vertical line separating inline items. The separator stretches to the height of its flex container."
      >
        <ComponentPreview>
          <div className="flex h-5 items-center space-x-4">
            <span className="text-sm text-foreground">Blog</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-foreground">Docs</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-foreground">Source</span>
          </div>
        </ComponentPreview>
        <CodeBlock code={separatorSnippets.React.vertical} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Label"
        description="Two separators flanking a centered text label, commonly used for 'or' dividers in auth flows."
      >
        <ComponentPreview>
          <div className="flex w-full max-w-sm items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>
        </ComponentPreview>
        <CodeBlock code={separatorSnippets.React.withLabel} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={separatorProps} />
      </Section>
    </div>
  );
}

// ── TV platform content ────────────────────────────────────────────────────

function TVContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock code={separatorSnippets.TV.installation} language="ts" platform="TV" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={separatorSnippets.TV.basic} language="tsx" platform="TV" />
      </Section>
    </div>
  );
}

// ── Mobile Web platform content ────────────────────────────────────────────

function MobileWebContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock code={separatorSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={separatorSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
      </Section>
    </div>
  );
}

// ── Android platform content ───────────────────────────────────────────────

const androidParams = [
  { name: "orientation", type: "DividerOrientation", default: "Horizontal", description: "Direction of the divider line." },
  { name: "modifier",    type: "Modifier",           default: "Modifier",   description: "Compose modifier chain." },
  { name: "color",       type: "Color",              default: "vidi_border", description: "Divider color token." },
];

function AndroidContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock code={separatorSnippets.Android.installation} language="kotlin" platform="Android" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={separatorSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={separatorSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Params">
        <PropsTable props={androidParams} />
      </Section>
    </div>
  );
}

// ── iOS platform content ───────────────────────────────────────────────────

const iosParams = [
  { name: "Divider()", type: "View",  default: "\u2014", description: "SwiftUI built-in divider. Uses system default color unless overridden." },
  { name: ".overlay()", type: "Color", default: "\u2014", description: "Apply a Color overlay to customise the divider color with VIDI tokens." },
];

function IOSContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock code={separatorSnippets.iOS.installation} language="swift" platform="iOS" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={separatorSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={separatorSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Params">
        <PropsTable props={iosParams} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SeparatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Separator</h1>
          <p className="text-base text-muted-foreground">
            A visual divider for grouping content. Supports horizontal and vertical orientations.
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
