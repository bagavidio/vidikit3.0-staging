"use client";

/**
 * VIDI Docs — Skeleton Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/skeleton
 */

import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { skeletonSnippets, skeletonProps } from "@/lib/docs/components/skeleton";

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
        <CodeBlock code={skeletonSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section title="Basic Shapes" description="Rectangle and circle shapes composed with className.">
        <ComponentPreview>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="size-12 rounded-full" />
          <Skeleton className="h-4 w-[200px]" />
        </ComponentPreview>
        <CodeBlock code={skeletonSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="Card Skeleton"
        description="Compose multiple skeletons to mimic a card layout."
      >
        <ComponentPreview>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </ComponentPreview>
        <CodeBlock code={skeletonSnippets.React.card} language="tsx" platform="React" />
      </Section>

      <Section
        title="List Skeleton"
        description="Repeated rows with avatar circles and text lines."
      >
        <ComponentPreview>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="size-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="size-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="size-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock code={skeletonSnippets.React.list} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={skeletonProps} />
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
        description="Use the same Skeleton component. Apply larger dimensions for 10-foot layouts."
      >
        <CodeBlock code={skeletonSnippets.TV.installation} language="ts" platform="TV" filename="TV app import" />
      </Section>

      <Section title="Basic Usage" description="Larger skeletons for TV content placeholders.">
        <CodeBlock code={skeletonSnippets.TV.basic} language="tsx" platform="TV" />
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
        description="Same Skeleton component as React — no platform-specific build needed for Mobile Web."
      >
        <CodeBlock code={skeletonSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section title="Basic Usage" description="Full-width skeletons for mobile content loading.">
        <CodeBlock code={skeletonSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
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
        <CodeBlock code={skeletonSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={skeletonSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Props">
        <PropsTable props={skeletonProps} />
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
        <CodeBlock code={skeletonSnippets.iOS.installation} language="swift" platform="iOS" filename="SwiftUI setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={skeletonSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Props">
        <PropsTable props={skeletonProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SkeletonPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Skeleton</h1>
          <p className="text-base text-muted-foreground">
            Animated placeholder for loading states. Compose multiple skeletons to match your content layout.
          </p>
        </header>

        {/* ── Platform tabs control the ENTIRE page content ──────── */}
        <Suspense>
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
