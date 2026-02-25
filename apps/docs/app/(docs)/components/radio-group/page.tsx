/**
 * VIDI Docs — Radio Group Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/radio-group
 */

"use client";

import { Suspense } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { radioGroupSnippets, radioGroupProps } from "@/lib/docs/components/radio-group";

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
        <CodeBlock code={radioGroupSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section title="Preview — Basic" description="Default vertical layout with label pairs.">
        <ComponentPreview>
          <RadioGroup defaultValue="option-1" className="gap-3">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
        <CodeBlock code={radioGroupSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section title="With Description" description="Describe each option for clarity, especially for consequential choices.">
        <ComponentPreview>
          <fieldset className="space-y-4">
            <legend className="text-sm font-medium text-foreground">Notification frequency</legend>
            <RadioGroup defaultValue="realtime" className="gap-4">
              <div className="flex items-start gap-3">
                <RadioGroupItem value="realtime" id="freq-rt" className="mt-0.5" />
                <div>
                  <Label htmlFor="freq-rt">Real-time</Label>
                  <p className="text-sm text-muted-foreground">Instant push for every event</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RadioGroupItem value="daily" id="freq-d" className="mt-0.5" />
                <div>
                  <Label htmlFor="freq-d">Daily digest</Label>
                  <p className="text-sm text-muted-foreground">Summary once per day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RadioGroupItem value="weekly" id="freq-w" className="mt-0.5" />
                <div>
                  <Label htmlFor="freq-w">Weekly digest</Label>
                  <p className="text-sm text-muted-foreground">Summary once per week</p>
                </div>
              </div>
            </RadioGroup>
          </fieldset>
        </ComponentPreview>
        <CodeBlock code={radioGroupSnippets.React.withDescription} language="tsx" platform="React" />
      </Section>

      <Section title="Plan Selector" description="Radio card pattern — hidden radio input with styled label containers.">
        <ComponentPreview>
          <RadioGroup defaultValue="premium" className="grid grid-cols-3 gap-3">
            {[
              { name: "Free", price: "Rp 0" },
              { name: "Premium", price: "Rp 59K" },
              { name: "Platinum", price: "Rp 99K" },
            ].map((plan) => (
              <label
                key={plan.name}
                className="cursor-pointer rounded-xl border border-border p-4 has-[[data-state=checked]]:border-red-30 has-[[data-state=checked]]:bg-red-30/5"
              >
                <RadioGroupItem value={plan.name.toLowerCase()} className="sr-only" />
                <p className="text-sm font-semibold text-foreground">{plan.name}</p>
                <p className="text-xs text-muted-foreground">{plan.price}/mo</p>
              </label>
            ))}
          </RadioGroup>
        </ComponentPreview>
        <CodeBlock code={radioGroupSnippets.React.planSelector} language="tsx" platform="React" />
      </Section>

      <Section title="Error State" description="Apply aria-invalid to each RadioGroupItem to show the destructive ring.">
        <ComponentPreview>
          <div>
            <RadioGroup aria-invalid="true" className="gap-3">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="rg-yes" aria-invalid="true" />
                <Label htmlFor="rg-yes">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="rg-no" aria-invalid="true" />
                <Label htmlFor="rg-no">No</Label>
              </div>
            </RadioGroup>
            <p className="text-xs text-destructive mt-1">Please select an option.</p>
          </div>
        </ComponentPreview>
        <CodeBlock code={radioGroupSnippets.React.error} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={radioGroupProps} />
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
        description="Same RadioGroup component — D-pad navigates between options."
      >
        <CodeBlock code={radioGroupSnippets.TV.installation} language="ts" platform="TV" />
      </Section>

      <Section
        title="Basic Usage"
        description="Use larger items for 10-foot readability. Each radio item gets focus ring on D-pad focus."
      >
        <CodeBlock code={radioGroupSnippets.TV.basic} language="tsx" platform="TV" />
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
        <CodeBlock code={radioGroupSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="Card-style radios for better touch targets on mobile."
      >
        <CodeBlock code={radioGroupSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
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
        <CodeBlock code={radioGroupSnippets.Android.installation} language="kotlin" platform="Android" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={radioGroupSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={radioGroupSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Props">
        <PropsTable props={radioGroupProps} />
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
        <CodeBlock code={radioGroupSnippets.iOS.installation} language="swift" platform="iOS" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={radioGroupSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={radioGroupSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Props">
        <PropsTable props={radioGroupProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function RadioGroupPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Radio Group</h1>
          <p className="text-base text-muted-foreground">
            A set of mutually exclusive options. Supports descriptions, card-style selectors,
            and error states across all VIDI platforms.
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
