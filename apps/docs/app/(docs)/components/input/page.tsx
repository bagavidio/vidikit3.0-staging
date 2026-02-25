/**
 * VIDI Docs — Input Component
 * ─────────────────────────────────────────────────────────────
 * Multi-platform documentation with live preview + code tabs.
 * Route: /components/input
 */

"use client";

import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { inputSnippets, inputProps } from "@/lib/docs/components/input";

// ── Section wrapper ───────────────────────────────────────────────────────────

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

// ── NativeNote helper ─────────────────────────────────────────────────────────

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

// ── Platform content ──────────────────────────────────────────────────────────

function ReactContent() {
  return (
    <div className="space-y-12">
      {/* Installation */}
      <Section title="Installation">
        <CodeBlock
          code={inputSnippets.React.installation}
          language="ts"
          platform="React"
        />
      </Section>

      {/* Preview — Default */}
      <Section title="Preview — Default" description="Basic text input with placeholder and default value.">
        <ComponentPreview center={false}>
          <div className="flex flex-col gap-3 w-full max-w-sm">
            <Input placeholder="Enter your name" />
            <Input defaultValue="vidio@example.com" />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={inputSnippets.React.basic}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Input Types */}
      <Section title="Input Types" description="Native HTML input types for appropriate virtual keyboards and browser behavior.">
        <ComponentPreview center={false}>
          <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
            <Input type="text" placeholder="Full name" />
            <Input type="email" placeholder="you@example.com" />
            <Input type="password" placeholder="Password" />
            <Input type="search" placeholder="Search..." />
            <Input type="number" placeholder="0" />
            <Input type="url" placeholder="https://" />
            <Input type="tel" placeholder="+62" />
            <Input type="date" />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={inputSnippets.React.types}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* File Input */}
      <Section title="File Input" description="File inputs use a compact internal button style.">
        <ComponentPreview center={false}>
          <Input type="file" className="max-w-sm" />
        </ComponentPreview>
        <CodeBlock
          code={inputSnippets.React.file}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* States */}
      <Section title="States" description="All interactive states supported out of the box.">
        <ComponentPreview center={false}>
          <div className="flex flex-col gap-3 w-full max-w-sm">
            <Input placeholder="Normal" />
            <Input placeholder="Disabled" disabled />
            <Input placeholder="Error" aria-invalid="true" />
            <Input defaultValue="Read only" readOnly />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={inputSnippets.React.states}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* With Label + Helper */}
      <Section
        title="With Label + Helper"
        description="Pair with a Label and helper text for accessible form fields."
      >
        <ComponentPreview center={false}>
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="inp-email">Email address</Label>
            <Input id="inp-email" type="email" placeholder="you@example.com" />
            <p className="text-xs text-muted-foreground">We'll never share your email.</p>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={inputSnippets.React.withLabel}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={inputProps} />
      </Section>
    </div>
  );
}

function TVContent() {
  return (
    <div className="space-y-8">
      <Section title="Installation">
        <CodeBlock
          code={inputSnippets.TV.installation}
          language="ts"
          platform="TV"
        />
      </Section>
      <Section title="Basic Usage" description="Text input triggers on-screen keyboard on TV platforms.">
        <CodeBlock
          code={inputSnippets.TV.basic}
          language="tsx"
          platform="TV"
        />
      </Section>
    </div>
  );
}

function MobileWebContent() {
  return (
    <div className="space-y-8">
      <Section title="Installation">
        <CodeBlock
          code={inputSnippets["Mobile Web"].installation}
          language="ts"
          platform="Mobile Web"
        />
      </Section>
      <Section title="Basic Usage" description="Use appropriate input types for optimal virtual keyboards.">
        <CodeBlock
          code={inputSnippets["Mobile Web"].basic}
          language="tsx"
          platform="Mobile Web"
        />
      </Section>
    </div>
  );
}

function AndroidContent() {
  return (
    <div className="space-y-8">
      <NativeNote platform="Android" />
      <Section title="Installation">
        <CodeBlock
          code={inputSnippets.Android.installation}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Basic Usage" description="Compose text field with controlled state.">
        <CodeBlock
          code={inputSnippets.Android.basic}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for input colors.">
        <CodeBlock
          code={inputSnippets.Android.colors}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={inputProps} />
      </Section>
    </div>
  );
}

function IOSContent() {
  return (
    <div className="space-y-8">
      <NativeNote platform="iOS" />
      <Section title="Installation">
        <CodeBlock
          code={inputSnippets.iOS.installation}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Basic Usage" description="SwiftUI text field with VidiTextField wrapper.">
        <CodeBlock
          code={inputSnippets.iOS.basic}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for input colors.">
        <CodeBlock
          code={inputSnippets.iOS.colors}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={inputProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function InputPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Input</h1>
          <p className="text-base text-muted-foreground">
            A single-line text field supporting multiple types, validation states, and labels. Available across all VIDI platforms.
          </p>
        </header>

        <Suspense>
          <PlatformTabs
            platforms={["React", "TV", "Mobile Web", "Android", "iOS"]}
            snippets={{
              React: <ReactContent />,
              TV: <TVContent />,
              "Mobile Web": <MobileWebContent />,
              Android: <AndroidContent />,
              iOS: <IOSContent />,
            }}
          />
        </Suspense>
      </div>
    </main>
  );
}
