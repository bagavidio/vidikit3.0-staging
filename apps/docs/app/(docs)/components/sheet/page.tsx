/**
 * VIDI Docs — Sheet Component Page
 * ---------------------------------------------------------
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/sheet
 */

"use client";

import { Suspense } from "react";
import { Button } from "@vidikit/ui-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import {
  sheetSnippets,
  sheetProps,
} from "@/lib/docs/components/sheet";

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

const SIDES = ["top", "right", "bottom", "left"] as const;

function ReactContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock code={sheetSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section
        title="Right Side (Default)"
        description="A sheet that slides in from the right edge with a title and description."
      >
        <ComponentPreview>
          <Sheet>
            <SheetTrigger asChild>
              <Button intent="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  This is a description of the sheet content.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
        <CodeBlock code={sheetSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="All Sides"
        description="Sheets can slide in from any edge: top, right, bottom, or left."
      >
        <ComponentPreview>
          <div className="flex flex-wrap gap-2">
            {SIDES.map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button intent="outline" className="capitalize">{side}</Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle className="capitalize">{side} sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the {side}.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </ComponentPreview>
        <CodeBlock code={sheetSnippets.React.sides} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Form"
        description="Sheets are great for inline forms. Use SheetFooter for action buttons."
      >
        <ComponentPreview>
          <Sheet>
            <SheetTrigger asChild>
              <Button intent="outline">Edit Profile</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Update your profile information below.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 px-6 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button intent="outline">Cancel</Button>
                </SheetClose>
                <Button>Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
        <CodeBlock code={sheetSnippets.React.withForm} language="tsx" platform="React" />
      </Section>

      <Section
        title="Custom Close"
        description="Hide the default close button and provide your own using SheetClose."
      >
        <CodeBlock code={sheetSnippets.React.customClose} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={sheetProps} />
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
        description="Sheets work well on TV for side panels and settings drawers."
      >
        <CodeBlock code={sheetSnippets.TV.installation} language="ts" platform="TV" />
      </Section>

      <Section
        title="Basic Usage"
        description="Recommended TV pattern using side sheets with focus-trapped navigation."
      >
        <CodeBlock code={sheetSnippets.TV.basic} language="tsx" platform="TV" />
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
        description="Same import as React — no platform-specific build needed for Mobile Web."
      >
        <CodeBlock code={sheetSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="On mobile, prefer bottom sheets for action menus and quick selections."
      >
        <CodeBlock code={sheetSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
      </Section>
    </div>
  );
}

// -- Android platform content -------------------------------------------------

function AndroidContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock code={sheetSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={sheetSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={sheetSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Props">
        <PropsTable props={sheetProps} />
      </Section>
    </div>
  );
}

// -- iOS platform content -----------------------------------------------------

function IOSContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock code={sheetSnippets.iOS.installation} language="swift" platform="iOS" filename="Xcode setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={sheetSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={sheetSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Props">
        <PropsTable props={sheetProps} />
      </Section>
    </div>
  );
}

// -- Page ---------------------------------------------------------------------

export default function SheetPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* -- Static header ------------------------------------------------ */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Sheet</h1>
          <p className="text-base text-muted-foreground">
            A panel that slides in from the edge of the screen. Use for secondary content, forms, and detail views.
          </p>
        </header>

        {/* -- Platform tabs control the ENTIRE page content ---------------- */}
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
