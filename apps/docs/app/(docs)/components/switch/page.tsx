/**
 * VIDI Docs — Switch Component
 * ---------------------------------------------------------
 * Multi-platform documentation with live preview + code tabs.
 * Route: /components/switch
 */

"use client";

import { Suspense } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { switchSnippets, switchProps } from "@/lib/docs/components/switch";

// -- Section wrapper --------------------------------------------------------

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

// -- NativeNote helper ------------------------------------------------------

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

// -- React platform content -------------------------------------------------

function ReactContent() {
  return (
    <div className="space-y-12">
      {/* Installation */}
      <Section title="Installation">
        <CodeBlock
          code={switchSnippets.React.installation}
          language="ts"
          platform="React"
        />
      </Section>

      {/* Default */}
      <Section title="Default" description="Two switches side by side — one off, one on.">
        <ComponentPreview center={false}>
          <div className="flex items-center gap-6">
            <Switch />
            <Switch defaultChecked />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={switchSnippets.React.basic}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Default and small size variants.">
        <ComponentPreview center={false}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Switch defaultChecked />
              <Label className="text-xs text-muted-foreground">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch size="sm" defaultChecked />
              <Label className="text-xs text-muted-foreground">Small</Label>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={switchSnippets.React.sizes}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* States */}
      <Section title="States" description="All interactive states available out of the box.">
        <ComponentPreview center={false}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Switch />
              <Label>Normal</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked />
              <Label>Checked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch disabled />
              <Label className="opacity-50">Disabled</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch disabled defaultChecked />
              <Label className="opacity-50">Disabled + Checked</Label>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={switchSnippets.React.states}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* With Label */}
      <Section
        title="With Label"
        description="Pair with a Label for accessible form switches."
      >
        <ComponentPreview center={false}>
          <div className="flex items-center gap-2">
            <Switch id="notifications" />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={switchSnippets.React.withLabel}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Form Pattern */}
      <Section
        title="Form Pattern"
        description="A settings panel with multiple labeled switches stacked vertically."
      >
        <ComponentPreview center={false}>
          <div className="space-y-4 rounded-xl border border-border p-4">
            <h3 className="text-sm font-semibold text-foreground">Settings</h3>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label htmlFor="sp-notif" className="text-sm">Notifications</Label>
                <p className="text-xs text-muted-foreground">Receive push notifications</p>
              </div>
              <Switch id="sp-notif" defaultChecked />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label htmlFor="sp-dark" className="text-sm">Dark Mode</Label>
                <p className="text-xs text-muted-foreground">Use dark theme across the app</p>
              </div>
              <Switch id="sp-dark" defaultChecked />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label htmlFor="sp-auto" className="text-sm">Auto-play</Label>
                <p className="text-xs text-muted-foreground">Automatically play next episode</p>
              </div>
              <Switch id="sp-auto" />
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={switchSnippets.React.form}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={switchProps} />
      </Section>
    </div>
  );
}

// -- TV platform content ----------------------------------------------------

function TVContent() {
  return (
    <div className="space-y-8">
      <Section title="Installation">
        <CodeBlock
          code={switchSnippets.TV.installation}
          language="ts"
          platform="TV"
        />
      </Section>
      <Section title="Basic Usage" description="Larger focus targets and D-pad focus for TV.">
        <CodeBlock
          code={switchSnippets.TV.basic}
          language="tsx"
          platform="TV"
        />
      </Section>
    </div>
  );
}

// -- Mobile Web platform content --------------------------------------------

function MobileWebContent() {
  return (
    <div className="space-y-8">
      <Section title="Installation">
        <CodeBlock
          code={switchSnippets["Mobile Web"].installation}
          language="ts"
          platform="Mobile Web"
        />
      </Section>
      <Section title="Basic Usage" description="Extended touch area for mobile interactions.">
        <CodeBlock
          code={switchSnippets["Mobile Web"].basic}
          language="tsx"
          platform="Mobile Web"
        />
      </Section>
    </div>
  );
}

// -- Android platform content -----------------------------------------------

function AndroidContent() {
  return (
    <div className="space-y-8">
      <NativeNote platform="Android" />
      <Section title="Installation">
        <CodeBlock
          code={switchSnippets.Android.installation}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Basic Usage" description="Compose Switch with controlled state and VIDI brand color.">
        <CodeBlock
          code={switchSnippets.Android.basic}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for switch track and thumb colors.">
        <CodeBlock
          code={switchSnippets.Android.colors}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={switchProps} />
      </Section>
    </div>
  );
}

// -- iOS platform content ---------------------------------------------------

function IOSContent() {
  return (
    <div className="space-y-8">
      <NativeNote platform="iOS" />
      <Section title="Installation">
        <CodeBlock
          code={switchSnippets.iOS.installation}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Basic Usage" description="SwiftUI Toggle with VIDI brand tint.">
        <CodeBlock
          code={switchSnippets.iOS.basic}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for switch colors.">
        <CodeBlock
          code={switchSnippets.iOS.colors}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={switchProps} />
      </Section>
    </div>
  );
}

// -- Page -------------------------------------------------------------------

export default function SwitchPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-10">

        {/* -- Header ---------------------------------------------------- */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Switch</h1>
          <p className="text-base text-muted-foreground">
            A toggle control for binary on/off states.
            Uses Brand Red for the active track.
          </p>
        </header>

        {/* -- Platform Code Tabs ---------------------------------------- */}
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
