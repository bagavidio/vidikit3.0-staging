/**
 * VIDI Docs — Dropdown Menu Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/dropdown-menu
 */

"use client";

import { Suspense } from "react";
import { Button } from "@vidikit/ui-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import {
  dropdownMenuSnippets,
  dropdownMenuProps,
} from "@/lib/docs/components/dropdown-menu";

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
        <CodeBlock code={dropdownMenuSnippets.React.installation} language="ts" platform="React" />
      </Section>

      <Section
        title="Basic"
        description="Simple dropdown with icon shortcuts and a destructive action."
      >
        <ComponentPreview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button intent="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘?</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
        <CodeBlock code={dropdownMenuSnippets.React.basic} language="tsx" platform="React" />
      </Section>

      <Section
        title="With Groups & Labels"
        description="Group related actions under a DropdownMenuLabel header."
      >
        <ComponentPreview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button intent="outline">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Team</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Invite members</DropdownMenuItem>
                <DropdownMenuItem>Manage roles</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Delete team</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
        <CodeBlock code={dropdownMenuSnippets.React.withGroups} language="tsx" platform="React" />
      </Section>

      <Section
        title="Checkbox Items"
        description="Toggleable options with checkmark indicators."
      >
        <ComponentPreview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button intent="outline">View options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Show toolbar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Show sidebar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Show status bar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Compact mode</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
        <CodeBlock code={dropdownMenuSnippets.React.checkboxItems} language="tsx" platform="React" />
      </Section>

      <Section
        title="Radio Items"
        description="Mutually exclusive selection within a group."
      >
        <ComponentPreview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button intent="outline">Sort by</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="newest">
                <DropdownMenuRadioItem value="newest">Newest first</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="oldest">Oldest first</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name">Name (A–Z)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name-desc">Name (Z–A)</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
        <CodeBlock code={dropdownMenuSnippets.React.radioItems} language="tsx" platform="React" />
      </Section>

      <Section
        title="Submenu"
        description="Nested menu using DropdownMenuSub + SubTrigger + SubContent."
      >
        <ComponentPreview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button intent="outline">More actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New tab</DropdownMenuItem>
              <DropdownMenuItem>New window</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                  <DropdownMenuItem>Share via email</DropdownMenuItem>
                  <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More tools</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Save to collection</DropdownMenuItem>
                  <DropdownMenuItem>Add to workspace</DropdownMenuItem>
                  <DropdownMenuItem>Create template</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
        <CodeBlock code={dropdownMenuSnippets.React.submenu} language="tsx" platform="React" />
      </Section>

      <Section title="Props">
        <PropsTable props={dropdownMenuProps} />
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
        description="TV apps typically use a focus-managed menu or dialog instead of a pointer-based dropdown."
      >
        <CodeBlock code={dropdownMenuSnippets.TV.installation} language="ts" platform="TV" />
      </Section>

      <Section
        title="Basic Usage"
        description="Recommended TV alternative pattern using D-pad navigable items."
      >
        <CodeBlock code={dropdownMenuSnippets.TV.basic} language="tsx" platform="TV" />
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
        <CodeBlock code={dropdownMenuSnippets["Mobile Web"].installation} language="ts" platform="Mobile Web" />
      </Section>

      <Section
        title="Basic Usage"
        description="For small option sets (3-5 items), dropdown is acceptable. Consider Sheet for larger lists."
      >
        <CodeBlock code={dropdownMenuSnippets["Mobile Web"].basic} language="tsx" platform="Mobile Web" />
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
        <CodeBlock code={dropdownMenuSnippets.Android.installation} language="kotlin" platform="Android" filename="Compose imports" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={dropdownMenuSnippets.Android.basic} language="kotlin" platform="Android" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={dropdownMenuSnippets.Android.colors} language="kotlin" platform="Android" filename="res/values/colors.xml" />
      </Section>

      <Section title="Props">
        <PropsTable props={dropdownMenuProps} />
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
        <CodeBlock code={dropdownMenuSnippets.iOS.installation} language="swift" platform="iOS" filename="Xcode setup" />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock code={dropdownMenuSnippets.iOS.basic} language="swift" platform="iOS" />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock code={dropdownMenuSnippets.iOS.colors} language="swift" platform="iOS" filename="Colors.swift" />
      </Section>

      <Section title="Props">
        <PropsTable props={dropdownMenuProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DropdownMenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10">

        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Dropdown Menu</h1>
          <p className="text-base text-muted-foreground">
            Contextual menu with items, groups, labels, shortcuts, checkboxes, radio items, and submenus.
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
