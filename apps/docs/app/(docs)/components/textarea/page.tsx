/**
 * VIDI Docs — Textarea Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/textarea
 */

"use client";

import { Suspense } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { textareaSnippets, textareaProps } from "@/lib/docs/components/textarea";

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
        <CodeBlock code={textareaSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section title="Default" description="A basic multi-line text input with placeholder.">
        <ComponentPreview center={false}>
          <div className="w-full max-w-sm">
            <Textarea placeholder="Type your message here..." />
          </div>
        </ComponentPreview>
        <CodeBlock code={textareaSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section title="States" description="All interactive states supported out of the box.">
        <ComponentPreview center={false}>
          <div className="flex flex-col gap-3 w-full max-w-sm">
            <Textarea placeholder="Normal" />
            <Textarea placeholder="Disabled" disabled />
            <Textarea placeholder="Error" aria-invalid="true" />
            <Textarea defaultValue="This content is read-only and cannot be edited." readOnly />
          </div>
        </ComponentPreview>
        <CodeBlock code={textareaSnippets.React.states} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Label + Helper"
        description="Pair with a Label and helper text for accessible form fields."
      >
        <ComponentPreview center={false}>
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="ta-bio">Bio</Label>
            <Textarea id="ta-bio" placeholder="Tell us about yourself..." />
            <p className="text-xs text-muted-foreground">Max 500 characters.</p>
          </div>
        </ComponentPreview>
        <CodeBlock code={textareaSnippets.React.withLabel} language="tsx" platform="React" />
      </Section>

      <Section
        title="Auto-resize"
        description="The textarea grows automatically as content is added. Uses CSS field-sizing: content — no JavaScript required."
      >
        <ComponentPreview center={false}>
          <div className="w-full max-w-sm">
            <Textarea placeholder="Start typing... the textarea grows automatically." />
          </div>
        </ComponentPreview>
        <CodeBlock code={textareaSnippets.React.autoResize} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={textareaProps} />
      </Section>
    </div>
  );
}

// ── TV platform content ────────────────────────────────────────────────────

function TVContent() {
  return (
    <div className="space-y-8 pt-6">
      <Section title="Installation">
        <CodeBlock code={textareaSnippets.TV.installation} language="ts" platform="TV" />
      </Section>
      <Section title="Basic Usage" description="Multi-line text input triggers on-screen keyboard on TV platforms.">
        <CodeBlock code={textareaSnippets.TV.basic} language="tsx" platform="TV" />
      </Section>
    </div>
  );
}

// ── Mobile Web platform content ────────────────────────────────────────────

function MobileWebContent() {
  return (
    <div className="space-y-8 pt-6">
      <Section title="Installation">
        <CodeBlock code={textareaSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>
      <Section title="Basic Usage" description="Same Textarea component as React with auto-resize support.">
        <CodeBlock code={textareaSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
      </Section>
    </div>
  );
}

// ── Android platform content ───────────────────────────────────────────────

const androidParams = [
  { name: "value",         type: "String",   default: '""',       description: "Current text content" },
  { name: "onValueChange", type: "(String) -> Unit", default: "\u2014", description: "Called when text changes" },
  { name: "placeholder",   type: "String",   default: '""',       description: "Hint text when empty" },
  { name: "enabled",       type: "Boolean",  default: "true",     description: "Disabled when false" },
  { name: "readOnly",      type: "Boolean",  default: "false",    description: "Non-editable when true" },
  { name: "maxLines",      type: "Int",      default: "Int.MAX_VALUE", description: "Maximum visible lines" },
  { name: "modifier",      type: "Modifier", default: "Modifier", description: "Compose modifier chain" },
];

function AndroidContent() {
  return (
    <div className="space-y-8 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock code={textareaSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage" description="Compose OutlinedTextField configured for multi-line input.">
        <CodeBlock code={textareaSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens" description="Token references for textarea colors.">
        <CodeBlock code={textareaSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Params">
        <PropsTable props={androidParams} />
      </Section>
    </div>
  );
}

// ── iOS platform content ───────────────────────────────────────────────────

const iosParams = [
  { name: "text",        type: "Binding<String>", default: '""',    description: "Two-way text binding" },
  { name: "placeholder", type: "String",          default: '""',    description: "Hint text when empty" },
  { name: "minHeight",   type: "CGFloat?",        default: "120",   description: "Minimum frame height" },
  { name: "isDisabled",  type: "Bool",            default: "false", description: "Disabled state" },
];

function IOSContent() {
  return (
    <div className="space-y-8 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock code={textareaSnippets.iOS.installation} language="swift" platform="iOS" filename="SwiftUI setup" />
      </Section>

      <Section title="Basic Usage" description="SwiftUI TextEditor with VidiTextArea wrapper.">
        <CodeBlock code={textareaSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens" description="Token references for textarea colors.">
        <CodeBlock code={textareaSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Params">
        <PropsTable props={iosParams} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TextareaPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Textarea</h1>
          <p className="text-base text-muted-foreground">
            A multi-line text input with auto-resize, validation states, and label support.
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
