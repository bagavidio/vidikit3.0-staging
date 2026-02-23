/**
 * VIDI Docs — Button Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/button
 */

import { Suspense } from "react";
import { Button } from "@vidikit/ui-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { buttonSnippets, buttonProps } from "@/lib/docs/components/button";

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
        <CodeBlock code={buttonSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section title="Preview" description="All 8 button intents at default size.">
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
        <CodeBlock code={buttonSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="Intent"
        description="Semantic color roles. primary = VIDI Red, extended = VIDI Blue, neutral = Dark."
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
        <CodeBlock code={buttonSnippets.React.intents} language="tsx" platform="React" />
      </Section>

      <Section title="Size" description="8 size options including icon-only square variants.">
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
        <CodeBlock code={buttonSnippets.React.sizes} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Icons"
        description="leftIcon and rightIcon slots apply adaptive padding automatically."
      >
        <ComponentPreview>
          <Button intent="primary" leftIcon={<span>←</span>}>Back</Button>
          <Button intent="extended" rightIcon={<span>→</span>}>Continue</Button>
          <Button intent="neutral" leftIcon={<span>↑</span>} rightIcon={<span>↓</span>}>Both Icons</Button>
          <Button intent="outline" leftIcon={<span>⊕</span>}>Add Item</Button>
        </ComponentPreview>
        <CodeBlock code={buttonSnippets.React.withIcons} language="tsx" platform="React" />
      </Section>

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
        <CodeBlock code={buttonSnippets.React.loading} language="tsx" platform="React" />
      </Section>

      <Section title="Disabled State">
        <ComponentPreview>
          <Button intent="primary" disabled>Primary</Button>
          <Button intent="extended" disabled>Extended</Button>
          <Button intent="outline" disabled>Outline</Button>
          <Button intent="ghost" disabled>Ghost</Button>
        </ComponentPreview>
      </Section>

      <Section
        title="As Link"
        description="Use asChild to render button styles on a Next.js Link or anchor."
      >
        <CodeBlock code={buttonSnippets.React.asLink} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={buttonProps} />
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
        description="Use TVButton instead of Button in your TV app. It locks in the TV focus ring automatically."
      >
        <CodeBlock code={buttonSnippets.TV.installation} language="ts" platform="TV" filename="TV app import" />
      </Section>

      <Section
        title="Preview"
        description="Tab to focus a button and see the 3px red ring + scale-[1.02] D-pad focus state."
      >
        <ComponentPreview label="TV focus ring — tab to preview">
          <Button intent="primary" platform="tv" tabIndex={0}>Play Now</Button>
          <Button intent="extended" platform="tv" tabIndex={0}>Add to List</Button>
          <Button intent="ghost" platform="tv" tabIndex={0}>More Info</Button>
          <Button intent="outline" platform="tv" tabIndex={0}>Browse</Button>
        </ComponentPreview>
        <CodeBlock code={buttonSnippets.TV.basic} language="tsx" platform="TV" />
      </Section>

      <Section title="All Intents">
        <ComponentPreview>
          <Button intent="primary" platform="tv">Play Now</Button>
          <Button intent="extended" platform="tv">Add to Watchlist</Button>
          <Button intent="neutral" platform="tv">Settings</Button>
          <Button intent="ghost" platform="tv">More Info</Button>
          <Button intent="outline" platform="tv">Browse</Button>
          <Button intent="secondary" platform="tv">Trailers</Button>
        </ComponentPreview>
        <CodeBlock code={buttonSnippets.TV.intents} language="tsx" platform="TV" />
      </Section>

      <Section
        title="Size — 10-Foot Recommendations"
        description='Prefer "default" and "lg" for 10-foot readability. Icon-only: use icon-lg for remote control hit targets.'
      >
        <ComponentPreview>
          <Button size="default" platform="tv">Play</Button>
          <Button size="lg" platform="tv">Watch Episode 1</Button>
          <Button size="icon-lg" platform="tv" aria-label="Play">▶</Button>
        </ComponentPreview>
        <CodeBlock code={buttonSnippets.TV.sizes} language="tsx" platform="TV" />
      </Section>

      <Section
        title="Focus Variant — How It Works"
        description='Under the hood: platform="tv" adds focus-visible:ring-[3px] focus-visible:ring-red-30 focus-visible:scale-[1.02]. Web and Mobile Web never see these styles.'
      >
        <CodeBlock code={buttonSnippets.TV.focusVariant} language="tsx" platform="TV" />
      </Section>

      <Section title="Props">
        <PropsTable props={buttonProps} />
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
        description="Same Button component as React — no platform-specific build needed for Mobile Web."
      >
        <CodeBlock code={buttonSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section title="Preview" description="All intents — same visual output as desktop.">
        <ComponentPreview>
          <Button intent="primary">Primary</Button>
          <Button intent="extended">Extended</Button>
          <Button intent="neutral">Neutral</Button>
          <Button intent="ghost">Ghost</Button>
          <Button intent="outline">Outline</Button>
          <Button intent="destructive">Destructive</Button>
        </ComponentPreview>
        <CodeBlock code={buttonSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
      </Section>

      <Section
        title="Touch Targets"
        description='Use "default" (h-9, 36px) or "lg" (h-10, 40px) for mobile. xs and sm are better for desktop-density UIs.'
      >
        <ComponentPreview>
          <Button size="default" intent="primary">Default (36px)</Button>
          <Button size="lg" intent="primary">Large (40px)</Button>
        </ComponentPreview>
        <CodeBlock code={buttonSnippets["Mobile Web"].touchTargets} language="tsx" platform="Mobile Web" />
      </Section>

      <Section
        title="Full-Width CTA"
        description="Common mobile pattern — full-width primary CTA at the bottom of a screen or modal."
      >
        <ComponentPreview>
          <Button intent="primary" size="lg" className="w-full max-w-xs">
            Start Watching
          </Button>
        </ComponentPreview>
      </Section>

      <Section title="Props">
        <PropsTable props={buttonProps} />
      </Section>
    </div>
  );
}

// ── Android platform content ───────────────────────────────────────────────

const androidParams = [
  { name: "text",     type: "String",        default: "—",             description: "Button label" },
  { name: "intent",   type: "ButtonIntent",  default: "Primary",       description: "Semantic color variant" },
  { name: "size",     type: "ButtonSize",    default: "Default",       description: "Height and padding" },
  { name: "loading",  type: "Boolean",       default: "false",         description: "Shows CircularProgressIndicator" },
  { name: "enabled",  type: "Boolean",       default: "true",          description: "Disabled when false" },
  { name: "onClick",  type: "() -> Unit",    default: "—",             description: "Click / tap handler" },
  { name: "modifier", type: "Modifier",      default: "Modifier",      description: "Compose modifier chain" },
  { name: "leadingIcon", type: "ImageVector?", default: "null",        description: "Optional icon before label" },
];

function AndroidContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock code={buttonSnippets.Android.installation} language="kotlin" platform="Android" filename="build.gradle + imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={buttonSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="All Intents">
        <CodeBlock code={buttonSnippets.Android.intents} language="kotlin" platform="Android" />
      </Section>

      <Section
        title="Loading & Disabled"
        description="Loading shows CircularProgressIndicator. Disabled greys out the button and blocks events."
      >
        <CodeBlock
          code={`// Loading state
VidiButton(
    text = "Saving…",
    intent = ButtonIntent.Primary,
    loading = true,
    onClick = {}
)

// Disabled state
VidiButton(
    text = "Locked",
    intent = ButtonIntent.Primary,
    enabled = false,
    onClick = {}
)`}
          language="kotlin"
          platform="Android"
        />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={buttonSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Params">
        <PropsTable props={androidParams} />
      </Section>
    </div>
  );
}

// ── iOS platform content ───────────────────────────────────────────────────

const iosParams = [
  { name: "label",       type: "String",         default: "—",       description: "Button label text" },
  { name: "intent",      type: "VidiButtonIntent", default: ".primary", description: "Semantic color variant" },
  { name: "size",        type: "VidiButtonSize",  default: ".default", description: "Height and padding" },
  { name: "isLoading",   type: "Bool",            default: "false",   description: "Shows ProgressView spinner" },
  { name: "isDisabled",  type: "Bool",            default: "false",   description: "Disabled state" },
  { name: "action",      type: "() -> Void",      default: "—",       description: "Tap handler (trailing closure)" },
  { name: "leadingIcon", type: "Image?",          default: "nil",     description: "Optional SF Symbol before label" },
];

function IOSContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock code={buttonSnippets.iOS.installation} language="swift" platform="iOS" filename="Xcode setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={buttonSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="All Intents">
        <CodeBlock code={buttonSnippets.iOS.intents} language="swift" platform="iOS" />
      </Section>

      <Section title="Loading & Disabled">
        <CodeBlock code={buttonSnippets.iOS.loading} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={buttonSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Params">
        <PropsTable props={iosParams} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ButtonPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Button</h1>
          <p className="text-base text-muted-foreground">
            The foundational interactive element. Supports 8 intents, 8 sizes, icons, loading
            states, and a TV/10-foot focus variant. Available across all VIDI platforms.
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
