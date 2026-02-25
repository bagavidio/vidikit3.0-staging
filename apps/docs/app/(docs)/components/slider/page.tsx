/**
 * VIDI Docs — Slider Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/slider
 */

"use client";

import { Suspense, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import {
  sliderSnippets,
  sliderProps,
} from "@/lib/docs/components/slider";

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

// ── Slider with label helper (needs state) ─────────────────────────────────

function SliderWithLabel() {
  const [value, setValue] = useState([50]);

  return (
    <div className="space-y-2 max-w-sm">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground">{value[0]}%</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
      />
    </div>
  );
}

// ── React platform content ─────────────────────────────────────────────────

function ReactContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock code={sliderSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section
        title="Basic"
        description="Single-thumb slider with default value."
      >
        <ComponentPreview>
          <div className="max-w-sm w-full">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </ComponentPreview>
        <CodeBlock code={sliderSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="Range"
        description="Two thumbs to select a range of values."
      >
        <ComponentPreview>
          <div className="max-w-sm w-full">
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </ComponentPreview>
        <CodeBlock code={sliderSnippets.React.range} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Steps"
        description="Thumb snaps to multiples of the step value."
      >
        <ComponentPreview>
          <div className="max-w-sm w-full">
            <Slider defaultValue={[50]} max={100} step={25} />
          </div>
        </ComponentPreview>
        <CodeBlock code={sliderSnippets.React.step} language="tsx" platform="React" />
      </Section>

      <Section
        title="Disabled"
        description="Non-interactive slider with reduced opacity."
      >
        <ComponentPreview>
          <div className="max-w-sm w-full">
            <Slider defaultValue={[50]} disabled />
          </div>
        </ComponentPreview>
        <CodeBlock code={sliderSnippets.React.states} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Label"
        description="Label and live value display paired with the slider."
      >
        <ComponentPreview>
          <SliderWithLabel />
        </ComponentPreview>
        <CodeBlock code={sliderSnippets.React.withLabel} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={sliderProps} />
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
        description="Same component as React — increase thumb size for remote focus."
      >
        <CodeBlock code={sliderSnippets.TV.installation} language="ts" platform="TV" />
      </Section>

      <Section
        title="Basic Usage"
        description="Larger thumb and track for D-pad navigation on TV."
      >
        <CodeBlock code={sliderSnippets.TV.basic} language="tsx" platform="TV" />
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
        <CodeBlock code={sliderSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="Increase thumb size for better touch targets on mobile."
      >
        <CodeBlock code={sliderSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
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
        <CodeBlock code={sliderSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={sliderSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={sliderSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Props">
        <PropsTable props={sliderProps} />
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
        <CodeBlock code={sliderSnippets.iOS.installation} language="swift" platform="iOS" filename="Xcode setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={sliderSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={sliderSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Props">
        <PropsTable props={sliderProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SliderPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Slider</h1>
          <p className="text-base text-muted-foreground">
            An input for selecting a value or range from a continuous track. Uses Brand Red for the active fill.
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
