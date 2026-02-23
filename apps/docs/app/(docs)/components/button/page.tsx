/**
 * VIDI Docs — Button Component Page
 * ─────────────────────────────────────────────────────────────
 * Multi-platform documentation with live preview + code tabs.
 * Route: /components/button
 */

import { Suspense } from "react";
import { Button } from "@vidikit/ui-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { buttonSnippets, buttonProps } from "@/lib/docs/components/button";

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

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ButtonPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-10">

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Button
          </h1>
          <p className="text-base text-muted-foreground">
            The foundational interactive element of the VIDI design system.
            Supports 8 intents, 8 sizes, icons, loading states, and platform variants for TV/10-foot UIs.
          </p>

          {/* Quick install */}
          <div className="pt-2">
            <CodeBlock
              code={buttonSnippets.React.installation}
              language="ts"
              platform="React"
            />
          </div>
        </header>

        {/* ── Live Preview ─────────────────────────────────────── */}
        <Section title="Preview" description="All button intents at default size.">
          <ComponentPreview>
            <Button intent="primary">Primary</Button>
            <Button intent="extended">Extended</Button>
            <Button intent="neutral">Neutral</Button>
            <Button intent="secondary">Secondary</Button>
            <Button intent="ghost">Ghost</Button>
            <Button intent="outline">Outline</Button>
            <Button intent="destructive">Destructive</Button>
            <Button intent="link">Link</Button>
          </ComponentPreview>
        </Section>

        {/* ── Platform Code Tabs ───────────────────────────────── */}
        <Section
          title="Usage"
          description="Platform-specific implementation. Switch tabs to see code for each platform."
        >
          <Suspense>
            <PlatformTabs
              platforms={["React", "TV", "Mobile Web", "Android", "iOS"]}
              snippets={{
                React: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={buttonSnippets.React.basic}
                      language="tsx"
                      platform="React"
                    />
                    <p className="text-xs text-muted-foreground">
                      See all intents and sizes below.
                    </p>
                  </div>
                ),
                TV: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={buttonSnippets.TV.installation}
                      language="ts"
                      platform="TV"
                      filename="TV app import"
                    />
                    <CodeBlock
                      code={buttonSnippets.TV.basic}
                      language="tsx"
                      platform="TV"
                    />
                  </div>
                ),
                "Mobile Web": (
                  <div className="space-y-3">
                    <CodeBlock
                      code={buttonSnippets["Mobile Web"].installation}
                      language="ts"
                      platform="Mobile Web"
                    />
                    <CodeBlock
                      code={buttonSnippets["Mobile Web"].touchTargets}
                      language="tsx"
                      platform="Mobile Web"
                    />
                  </div>
                ),
                Android: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={buttonSnippets.Android.installation}
                      language="kotlin"
                      platform="Android"
                      filename="build.gradle + imports"
                    />
                    <CodeBlock
                      code={buttonSnippets.Android.basic}
                      language="kotlin"
                      platform="Android"
                    />
                  </div>
                ),
                iOS: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={buttonSnippets.iOS.installation}
                      language="swift"
                      platform="iOS"
                      filename="Xcode setup"
                    />
                    <CodeBlock
                      code={buttonSnippets.iOS.basic}
                      language="swift"
                      platform="iOS"
                    />
                  </div>
                ),
              }}
            />
          </Suspense>
        </Section>

        {/* ── Intent ───────────────────────────────────────────── */}
        <Section
          title="Intent"
          description="Semantic color roles. primary=VIDI Red, extended=VIDI Blue, neutral=VIDI Dark."
        >
          <ComponentPreview>
            <Button intent="primary">Primary</Button>
            <Button intent="extended">Extended</Button>
            <Button intent="neutral">Neutral</Button>
            <Button intent="secondary">Secondary</Button>
            <Button intent="ghost">Ghost</Button>
            <Button intent="outline">Outline</Button>
            <Button intent="destructive">Destructive</Button>
            <Button intent="link">Link</Button>
          </ComponentPreview>
          <CodeBlock
            code={buttonSnippets.React.intents}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── Size ─────────────────────────────────────────────── */}
        <Section
          title="Size"
          description="8 size options including icon-only variants."
        >
          <ComponentPreview>
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon-xs" aria-label="xs icon">☰</Button>
            <Button size="icon-sm" aria-label="sm icon">☰</Button>
            <Button size="icon" aria-label="icon">☰</Button>
            <Button size="icon-lg" aria-label="lg icon">☰</Button>
          </ComponentPreview>
          <CodeBlock
            code={buttonSnippets.React.sizes}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── With Icons ───────────────────────────────────────── */}
        <Section
          title="With Icons"
          description="leftIcon and rightIcon slots apply adaptive padding automatically."
        >
          <ComponentPreview>
            <Button intent="primary" leftIcon={<span>←</span>}>Back</Button>
            <Button intent="extended" rightIcon={<span>→</span>}>Continue</Button>
            <Button
              intent="neutral"
              leftIcon={<span>↑</span>}
              rightIcon={<span>↓</span>}
            >
              Both Icons
            </Button>
            <Button intent="outline" leftIcon={<span>⊕</span>}>Add Item</Button>
          </ComponentPreview>
          <CodeBlock
            code={buttonSnippets.React.withIcons}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── Loading ──────────────────────────────────────────── */}
        <Section
          title="Loading State"
          description="Replaces leftIcon with a spinner and disables interaction."
        >
          <ComponentPreview>
            <Button intent="primary" loading>Saving…</Button>
            <Button intent="extended" loading>Loading</Button>
            <Button intent="neutral" loading size="lg">Processing</Button>
            <Button intent="outline" loading size="sm">Fetching</Button>
          </ComponentPreview>
          <CodeBlock
            code={buttonSnippets.React.loading}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── Disabled ─────────────────────────────────────────── */}
        <Section title="Disabled State">
          <ComponentPreview>
            <Button intent="primary" disabled>Primary</Button>
            <Button intent="extended" disabled>Extended</Button>
            <Button intent="outline" disabled>Outline</Button>
            <Button intent="ghost" disabled>Ghost</Button>
          </ComponentPreview>
        </Section>

        {/* ── TV Platform ──────────────────────────────────────── */}
        <Section
          title="TV / 10-Foot Platform"
          description={`Use platform="tv" or TVButton for React TV apps. Applies a 3px red focus ring and scale-[1.02] on D-pad focus. Web and Mobile Web never see these styles.`}
        >
          <ComponentPreview label="TV focus ring (tab to preview)">
            <Button intent="primary" platform="tv">Play Now</Button>
            <Button intent="extended" platform="tv">Add to List</Button>
            <Button intent="ghost" platform="tv">More Info</Button>
          </ComponentPreview>
          <CodeBlock
            code={buttonSnippets.TV.focusVariant}
            language="tsx"
            platform="TV"
          />
        </Section>

        {/* ── asChild (Link) ───────────────────────────────────── */}
        <Section
          title="As Link"
          description="Use asChild to render button styles on a Next.js Link or anchor."
        >
          <CodeBlock
            code={buttonSnippets.React.asLink}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── Props ────────────────────────────────────────────── */}
        <Section title="Props">
          <PropsTable props={buttonProps} />
        </Section>

      </div>
    </main>
  );
}
