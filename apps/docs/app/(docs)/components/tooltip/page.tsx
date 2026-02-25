/**
 * VIDI Docs — Tooltip Component Page
 * ---------------------------------------------------------
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/tooltip
 */

"use client";

import { Suspense } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@vidikit/ui-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { tooltipSnippets, tooltipProps } from "@/lib/docs/components/tooltip";

// -- Shared section wrapper ---------------------------------------------------

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

// -- Native platform notice (no live preview) ---------------------------------

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

// -- React platform content ---------------------------------------------------

function ReactContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock code={tooltipSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section title="Basic" description="Wrap any element with Tooltip, TooltipTrigger, and TooltipContent. TooltipProvider is already mounted at the app root.">
        <ComponentPreview>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button intent="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </ComponentPreview>
        <CodeBlock code={tooltipSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="Placement"
        description="Use the side prop to control which side the tooltip appears on."
      >
        <ComponentPreview>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button intent="outline" size="sm">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Top tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button intent="outline" size="sm">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Right tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button intent="outline" size="sm">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Bottom tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button intent="outline" size="sm">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Left tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ComponentPreview>
        <CodeBlock code={tooltipSnippets.React.sides} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Keyboard Shortcut"
        description="Pair tooltip text with a kbd element to surface keyboard shortcuts."
      >
        <ComponentPreview>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button intent="outline">Bold</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Bold
                <kbd className="ml-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                  ⌘B
                </kbd>
              </p>
            </TooltipContent>
          </Tooltip>
        </ComponentPreview>
        <CodeBlock code={tooltipSnippets.React.withKbd} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={tooltipProps} />
      </Section>
    </div>
  );
}

// -- TV platform content ------------------------------------------------------

function TVContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section
        title="Installation"
        description="On TV, tooltips are triggered on D-pad focus rather than hover."
      >
        <CodeBlock code={tooltipSnippets.TV.installation} language="ts" platform="TV" filename="TV app import" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={tooltipSnippets.TV.basic} language="tsx" platform="TV" />
      </Section>
    </div>
  );
}

// -- Mobile Web platform content ----------------------------------------------

function MobileWebContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section
        title="Installation"
        description="Same Tooltip component as React — no platform-specific build needed for Mobile Web."
      >
        <CodeBlock code={tooltipSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="Tooltips rely on hover and are unavailable on touch devices. Use them as progressive enhancement only — critical info should always be visible without hover."
      >
        <CodeBlock code={tooltipSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
      </Section>
    </div>
  );
}

// -- Android platform content -------------------------------------------------

const androidParams = [
  { name: "tooltip",           type: "@Composable () -> Unit", default: "\u2014", description: "Composable content rendered inside the tooltip bubble." },
  { name: "positionProvider",  type: "PopupPositionProvider",  default: "rememberPlainTooltipPositionProvider()", description: "Controls tooltip placement relative to the anchor." },
  { name: "state",             type: "TooltipState",           default: "rememberTooltipState()", description: "State object controlling visibility." },
  { name: "content",           type: "@Composable () -> Unit", default: "\u2014", description: "The anchor content (e.g. a Button) the tooltip attaches to." },
];

function AndroidContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock code={tooltipSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={tooltipSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Params">
        <PropsTable props={androidParams} />
      </Section>
    </div>
  );
}

// -- iOS platform content -----------------------------------------------------

const iosParams = [
  { name: ".help(_:)",     type: "String",    default: "\u2014", description: "Native tooltip modifier — displays text on pointer hover (iPadOS/macOS)." },
  { name: ".popover()",    type: "View",      default: "\u2014", description: "For richer content, use a popover anchored to the element." },
  { name: "isPresented",   type: "Binding<Bool>", default: "false", description: "Controls popover visibility." },
];

function IOSContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock code={tooltipSnippets.iOS.installation} language="swift" platform="iOS" filename="SwiftUI setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={tooltipSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Params">
        <PropsTable props={iosParams} />
      </Section>
    </div>
  );
}

// -- Page ---------------------------------------------------------------------

export default function TooltipPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* -- Static header ------------------------------------------------- */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Tooltip</h1>
          <p className="text-base text-muted-foreground">
            A popup that displays information related to an element on hover or keyboard focus.
          </p>
        </header>

        {/* -- Platform tabs control the ENTIRE page content ----------------- */}
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
