/**
 * VIDI Docs — Input Group Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/input-group
 */

"use client";

import { Suspense } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import {
  inputGroupSnippets,
  inputGroupProps,
} from "@/lib/docs/components/input-group";

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

// ── Simple inline SVGs to avoid icon package dependency in docs ─────────────

function SearchSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <circle cx="6.5" cy="6.5" r="4.5" />
      <path d="M10.5 10.5L14 14" />
    </svg>
  );
}

function AtSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <circle cx="8" cy="8" r="3" />
      <path d="M11 8c0 2.5 3 2.5 3 0A6 6 0 1 0 8 14" />
    </svg>
  );
}

function LinkSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <path d="M6 10.5a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5L6.5 5" />
      <path d="M10 5.5a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5L9.5 11" />
    </svg>
  );
}

function SendSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <path d="M14 2L9 14l-2-5-5-2 12-5z" />
    </svg>
  );
}

// ── React platform content ─────────────────────────────────────────────────

function ReactContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock code={inputGroupSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section
        title="Inline Start Addon"
        description="Icon or text placed at the left of the input field."
      >
        <ComponentPreview>
          <div className="flex flex-col gap-4 max-w-sm">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchSvg />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search…" />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon align="inline-start">
                <AtSvg />
              </InputGroupAddon>
              <InputGroupInput type="email" placeholder="your@email.com" />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput type="url" placeholder="your-domain.com" />
            </InputGroup>
          </div>
        </ComponentPreview>
        <CodeBlock code={inputGroupSnippets.React.inlineStart} language="tsx" platform="React" />
      </Section>

      <Section
        title="Inline End Addon"
        description="Button or icon placed at the right of the input field."
      >
        <ComponentPreview>
          <div className="flex flex-col gap-4 max-w-sm">
            <InputGroup>
              <InputGroupInput placeholder="Search documentation…" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <SearchSvg />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupInput placeholder="Paste or enter a URL…" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <LinkSvg />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupInput type="text" placeholder="Message…" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <SendSvg />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </ComponentPreview>
        <CodeBlock code={inputGroupSnippets.React.inlineEnd} language="tsx" platform="React" />
      </Section>

      <Section
        title="Both Inline Addons"
        description="Combine a leading icon with a trailing action button."
      >
        <ComponentPreview>
          <div className="flex flex-col gap-4 max-w-sm">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchSvg />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search…" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <span className="text-xs">⌘K</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput type="number" placeholder="0.00" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </ComponentPreview>
        <CodeBlock code={inputGroupSnippets.React.bothInline} language="tsx" platform="React" />
      </Section>

      <Section
        title="Block Start (Label Above)"
        description="Use block-start to place a floating label or category prefix above the input."
      >
        <ComponentPreview>
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="space-y-1.5">
              <Label>Workspace name</Label>
              <InputGroup>
                <InputGroupAddon align="block-start">
                  <InputGroupText className="text-xs text-muted-foreground">app.vidi.id /</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="my-workspace" />
              </InputGroup>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock code={inputGroupSnippets.React.blockStart} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Textarea"
        description="InputGroupTextarea expands vertically while keeping the same styled border."
      >
        <ComponentPreview>
          <div className="flex flex-col gap-4 max-w-sm">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <span className="text-xs text-muted-foreground pt-0.5">✏️</span>
              </InputGroupAddon>
              <InputGroupTextarea placeholder="Write a comment…" rows={3} />
            </InputGroup>

            <InputGroup>
              <InputGroupTextarea placeholder="Enter a long description for this component…" rows={4} />
              <InputGroupAddon align="block-end">
                <InputGroupButton size="xs">
                  <SendSvg />
                  <span>Send</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </ComponentPreview>
        <CodeBlock code={inputGroupSnippets.React.withTextarea} language="tsx" platform="React" />
      </Section>

      <Section
        title="Error State"
        description="Set aria-invalid on InputGroupInput to trigger the destructive ring on the group."
      >
        <ComponentPreview>
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="space-y-1.5">
              <Label className="text-destructive">Email address</Label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <AtSvg />
                </InputGroupAddon>
                <InputGroupInput
                  type="email"
                  defaultValue="invalid-email"
                  aria-invalid="true"
                />
              </InputGroup>
              <p className="text-xs text-destructive">Please enter a valid email address.</p>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock code={inputGroupSnippets.React.error} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={inputGroupProps} />
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
        description="Same component as React — use larger sizing for TV input fields."
      >
        <CodeBlock code={inputGroupSnippets.TV.installation} language="ts" platform="TV" filename="TV app import" />
      </Section>

      <Section
        title="Basic Usage"
        description="Input groups on TV are typically used for search and settings screens."
      >
        <CodeBlock code={inputGroupSnippets.TV.basic} language="tsx" platform="TV" />
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
        <CodeBlock code={inputGroupSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="Search with submit button pattern optimized for touch."
      >
        <CodeBlock code={inputGroupSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
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
        <CodeBlock code={inputGroupSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose import" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={inputGroupSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={inputGroupSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Props">
        <PropsTable props={inputGroupProps} />
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
        <CodeBlock code={inputGroupSnippets.iOS.installation} language="swift" platform="iOS" filename="SwiftUI import" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={inputGroupSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={inputGroupSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Props">
        <PropsTable props={inputGroupProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function InputGroupPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Input Group</h1>
          <p className="text-base text-muted-foreground">
            Composed input field with inline and block addons — icons, text, buttons, and labels.
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
