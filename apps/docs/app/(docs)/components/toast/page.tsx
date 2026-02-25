/**
 * VIDI Docs — Toast Component Page
 * ---------------------------------------------------------
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/toast
 */

"use client";

import { Suspense } from "react";
import { toast } from "sonner";
import { Button } from "@vidikit/ui-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { toastSnippets, toastProps } from "@/lib/docs/components/toast";

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
        <CodeBlock code={toastSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section
        title="Basic"
        description="Trigger a simple toast notification with a single function call."
      >
        <ComponentPreview>
          <Button
            intent="outline"
            onClick={() => toast("Event has been created")}
          >
            Show Toast
          </Button>
        </ComponentPreview>
        <CodeBlock code={toastSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="Types"
        description="Semantic toast variants for success, error, info, warning, and loading states."
      >
        <ComponentPreview>
          <div className="flex flex-wrap gap-2">
            <Button
              intent="outline"
              size="sm"
              onClick={() => toast.success("Changes saved successfully")}
            >
              Success
            </Button>
            <Button
              intent="outline"
              size="sm"
              onClick={() => toast.error("Something went wrong")}
            >
              Error
            </Button>
            <Button
              intent="outline"
              size="sm"
              onClick={() => toast.info("New update available")}
            >
              Info
            </Button>
            <Button
              intent="outline"
              size="sm"
              onClick={() => toast.warning("Your session is about to expire")}
            >
              Warning
            </Button>
            <Button
              intent="outline"
              size="sm"
              onClick={() => toast.loading("Uploading file...")}
            >
              Loading
            </Button>
          </div>
        </ComponentPreview>
        <CodeBlock code={toastSnippets.React.types} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Action"
        description="Attach an action button to the toast for undo or follow-up actions."
      >
        <ComponentPreview>
          <Button
            intent="outline"
            onClick={() =>
              toast("File deleted", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("File restored"),
                },
              })
            }
          >
            Delete File
          </Button>
        </ComponentPreview>
        <CodeBlock code={toastSnippets.React.withAction} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Description"
        description="Add a secondary line of text below the main message."
      >
        <ComponentPreview>
          <Button
            intent="outline"
            onClick={() =>
              toast("Event created", {
                description: "Monday, January 3rd at 6:00pm",
              })
            }
          >
            Create Event
          </Button>
        </ComponentPreview>
        <CodeBlock code={toastSnippets.React.withDescription} language="tsx" platform="React" />
      </Section>

      <Section
        title="Promise"
        description="Automatically transitions through loading, success, and error states based on a promise."
      >
        <CodeBlock code={toastSnippets.React.promise} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={toastProps} />
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
        description="TV apps may use Sonner in web-based TV apps, or prefer inline banners for better readability at distance."
      >
        <CodeBlock code={toastSnippets.TV.installation} language="ts" platform="TV" />
      </Section>

      <Section
        title="Basic Usage"
        description="Configure the Toaster with larger text and longer duration for the lean-back experience."
      >
        <CodeBlock code={toastSnippets.TV.basic} language="tsx" platform="TV" />
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
        <CodeBlock code={toastSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="Position the Toaster so it does not overlap with mobile bottom navigation."
      >
        <CodeBlock code={toastSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
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
        <CodeBlock code={toastSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={toastSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={toastSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Props">
        <PropsTable props={toastProps} />
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
        <CodeBlock code={toastSnippets.iOS.installation} language="swift" platform="iOS" filename="Xcode setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={toastSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={toastSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Props">
        <PropsTable props={toastProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ToastPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Toast</h1>
          <p className="text-base text-muted-foreground">
            Non-intrusive notifications powered by Sonner. Supports success, error, info, warning, loading, and action states.
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
