/**
 * VIDI Docs — Scroll Area Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/scroll-area
 */

"use client";

import { Suspense } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import {
  scrollAreaSnippets,
  scrollAreaProps,
  scrollBarProps,
} from "@/lib/docs/components/scroll-area";

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

// ── Data ────────────────────────────────────────────────────────────────────

const tags = Array.from({ length: 50 }, (_, i) => "Tag " + (i + 1));

// ── React platform content ─────────────────────────────────────────────────

function ReactContent() {
  return (
    <div className="space-y-10 pt-6">
      {/* Installation */}
      <Section title="Installation">
        <CodeBlock
          code={scrollAreaSnippets.React.installation}
          language="ts"
          platform="React"
        />
      </Section>

      {/* Vertical Scroll */}
      <Section
        title="Vertical Scroll"
        description="Set a fixed height on ScrollArea to enable vertical overflow with a custom scrollbar."
      >
        <ComponentPreview>
          <ScrollArea className="h-72 w-48 rounded-xl border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag, i) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  {i < tags.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
        <CodeBlock
          code={scrollAreaSnippets.React.basic}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Horizontal Scroll */}
      <Section
        title="Horizontal Scroll"
        description="Add a horizontal ScrollBar and whitespace-nowrap for side-scrolling content."
      >
        <ComponentPreview>
          <ScrollArea className="w-96 whitespace-nowrap rounded-xl border">
            <div className="flex w-max gap-4 p-4">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="size-36 shrink-0 rounded-xl bg-muted"
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ComponentPreview>
        <CodeBlock
          code={scrollAreaSnippets.React.horizontal}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Props */}
      <Section title="ScrollArea Props">
        <PropsTable props={scrollAreaProps} />
      </Section>

      <Section title="ScrollBar Props">
        <PropsTable props={scrollBarProps} />
      </Section>
    </div>
  );
}

// ── TV platform content ────────────────────────────────────────────────────

function TVContent() {
  return (
    <div className="space-y-8 pt-6">
      <Section title="Installation">
        <CodeBlock
          code={scrollAreaSnippets.TV.installation}
          language="ts"
          platform="TV"
        />
      </Section>
      <Section title="Basic Usage" description="D-pad scrolls content automatically on TV.">
        <CodeBlock
          code={scrollAreaSnippets.TV.basic}
          language="tsx"
          platform="TV"
        />
      </Section>
    </div>
  );
}

// ── Mobile Web platform content ────────────────────────────────────────────

function MobileWebContent() {
  return (
    <div className="space-y-8 pt-6">
      <Section title="Installation">
        <CodeBlock
          code={scrollAreaSnippets["Mobile Web"].installation}
          language="ts"
          platform="Mobile Web"
        />
      </Section>
      <Section title="Basic Usage" description="Native momentum scroll is preserved on touch devices.">
        <CodeBlock
          code={scrollAreaSnippets["Mobile Web"].basic}
          language="tsx"
          platform="Mobile Web"
        />
      </Section>
    </div>
  );
}

// ── Android platform content ───────────────────────────────────────────────

const androidParams = [
  { name: "modifier",               type: "Modifier",          default: "Modifier",  description: "Compose modifier chain for sizing and layout." },
  { name: "content (LazyColumn)",    type: "LazyListScope",     default: "\u2014",    description: "Builder scope for vertical scrollable items." },
  { name: "content (LazyRow)",       type: "LazyListScope",     default: "\u2014",    description: "Builder scope for horizontal scrollable items." },
  { name: "contentPadding",          type: "PaddingValues",     default: "0.dp",      description: "Padding around the scrollable content." },
  { name: "horizontalArrangement",   type: "Arrangement.Horizontal", default: "Start", description: "Horizontal spacing between items in LazyRow." },
];

function AndroidContent() {
  return (
    <div className="space-y-8 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock
          code={scrollAreaSnippets.Android.installation}
          language="kotlin"
          platform="Android"
          filename="Compose imports"
        />
      </Section>

      <Section title="Basic Usage" description="LazyColumn for vertical, LazyRow for horizontal scrolling.">
        <CodeBlock
          code={scrollAreaSnippets.Android.basic}
          language="kotlin"
          platform="Android"
        />
      </Section>

      <Section title="Params">
        <PropsTable props={androidParams} />
      </Section>
    </div>
  );
}

// ── iOS platform content ───────────────────────────────────────────────────

const iosParams = [
  { name: "axes",              type: "Axis.Set",   default: ".vertical", description: "Scroll direction: .vertical, .horizontal, or both." },
  { name: "showsIndicators",   type: "Bool",       default: "true",      description: "Whether to show scroll indicators." },
  { name: "content",           type: "() -> View", default: "\u2014",    description: "ViewBuilder closure for scrollable content." },
];

function IOSContent() {
  return (
    <div className="space-y-8 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock
          code={scrollAreaSnippets.iOS.installation}
          language="swift"
          platform="iOS"
          filename="SwiftUI import"
        />
      </Section>

      <Section title="Basic Usage" description="ScrollView with LazyVStack / LazyHStack for performant lists.">
        <CodeBlock
          code={scrollAreaSnippets.iOS.basic}
          language="swift"
          platform="iOS"
        />
      </Section>

      <Section title="Params">
        <PropsTable props={iosParams} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ScrollAreaPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Scroll Area</h1>
          <p className="text-base text-muted-foreground">
            Custom scrollbar wrapper with consistent cross-browser styling.
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
