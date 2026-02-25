/**
 * VIDI Docs — Checkbox Component
 * ─────────────────────────────────────────────────────────────
 * Multi-platform documentation with live preview + code tabs.
 * Route: /components/checkbox
 */

"use client";

import { Suspense } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { checkboxSnippets, checkboxProps } from "@/lib/docs/components/checkbox";

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
          code={checkboxSnippets.React.installation}
          language="ts"
          platform="React"
        />
      </Section>

      {/* States */}
      <Section title="Preview — States" description="All interactive states available out of the box.">
        <ComponentPreview center={false}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Checkbox />
              <Label>Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label>Checked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox checked="indeterminate" />
              <Label>Indeterminate</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox disabled />
              <Label className="opacity-50">Disabled</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox disabled defaultChecked />
              <Label className="opacity-50">Disabled checked</Label>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={checkboxSnippets.React.states}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* With Label & Description */}
      <Section
        title="With Label & Description"
        description="Pair with a Label and helper text for accessible form checkboxes."
      >
        <ComponentPreview center={false}>
          <div className="flex items-start gap-3">
            <Checkbox id="newsletter" className="mt-0.5" />
            <div>
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              <p className="text-sm text-muted-foreground">
                Get weekly updates about new components and tokens.
              </p>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={checkboxSnippets.React.withLabel}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Checkbox Group */}
      <Section
        title="Checkbox Group"
        description="Multiple checkboxes for selecting several options from a list."
      >
        <ComponentPreview center={false}>
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-foreground">Notifications</legend>
            <div className="flex items-center gap-2">
              <Checkbox id="c-email" defaultChecked />
              <Label htmlFor="c-email">Email</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="c-sms" />
              <Label htmlFor="c-sms">SMS</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="c-push" defaultChecked />
              <Label htmlFor="c-push">Push</Label>
            </div>
          </fieldset>
        </ComponentPreview>
        <CodeBlock
          code={checkboxSnippets.React.group}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Error State */}
      <Section
        title="Error State"
        description="Set aria-invalid to trigger the destructive ring."
      >
        <ComponentPreview center={false}>
          <div>
            <div className="flex items-center gap-2">
              <Checkbox id="c-agree" aria-invalid="true" />
              <Label htmlFor="c-agree">I agree to the terms</Label>
            </div>
            <p className="text-xs text-destructive mt-1">You must agree to continue.</p>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={checkboxSnippets.React.error}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={checkboxProps} />
      </Section>
    </div>
  );
}

function TVContent() {
  return (
    <div className="space-y-8">
      <Section title="Installation">
        <CodeBlock
          code={checkboxSnippets.TV.installation}
          language="ts"
          platform="TV"
        />
      </Section>
      <Section title="Basic Usage" description="Larger tap targets and D-pad focus for TV.">
        <CodeBlock
          code={checkboxSnippets.TV.basic}
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
          code={checkboxSnippets["Mobile Web"].installation}
          language="ts"
          platform="Mobile Web"
        />
      </Section>
      <Section title="Basic Usage" description="Ensure 44px minimum touch target for mobile.">
        <CodeBlock
          code={checkboxSnippets["Mobile Web"].basic}
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
          code={checkboxSnippets.Android.installation}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Basic Usage" description="Compose checkbox with controlled state.">
        <CodeBlock
          code={checkboxSnippets.Android.basic}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for checkbox colors.">
        <CodeBlock
          code={checkboxSnippets.Android.colors}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={checkboxProps} />
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
          code={checkboxSnippets.iOS.installation}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Basic Usage" description="SwiftUI toggle with checkbox style.">
        <CodeBlock
          code={checkboxSnippets.iOS.basic}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for checkbox colors.">
        <CodeBlock
          code={checkboxSnippets.iOS.colors}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={checkboxProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CheckboxPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-10">

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Checkbox</h1>
          <p className="text-base text-muted-foreground">
            A control for toggling boolean or indeterminate states.
            Supports labels, groups, and error states across all VIDI platforms.
          </p>
        </header>

        {/* ── Platform Code Tabs ───────────────────────────────── */}
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
