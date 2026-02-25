/**
 * VIDI Docs — Avatar Component Page
 * ─────────────────────────────────────────────────────────────
 * Platform-aware docs: switching the tab changes the ENTIRE page
 * content — preview, usage, props — for the selected platform.
 * Route: /components/avatar
 */

"use client";

import { Suspense } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { avatarSnippets, avatarProps } from "@/lib/docs/components/avatar";

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
        Live preview is available for web platforms only. The specs below are
        reference implementations for{" "}
        <strong className="text-foreground">{platform}</strong>. Copy the source
        files from{" "}
        <code className="font-mono text-foreground">
          packages/ui-{platform.toLowerCase()}/
        </code>{" "}
        into your project.
      </p>
    </div>
  );
}

// ── React platform content ─────────────────────────────────────────────────

function ReactContent() {
  return (
    <div className="space-y-10 pt-6">
      <Section title="Installation">
        <CodeBlock
          code={avatarSnippets.React.installation}
          language="ts"
          platform="React"
        />
      </Section>

      <Section
        title="Preview"
        description="Three sizes: sm (24px), default (32px), lg (40px)."
      >
        <ComponentPreview>
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </ComponentPreview>
        <CodeBlock
          code={avatarSnippets.React.basic}
          language="tsx"
          platform="React"
        />
      </Section>

      <Section
        title="Fallback"
        description="Shown when the image is missing or still loading."
      >
        <ComponentPreview>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>VD</AvatarFallback>
          </Avatar>
        </ComponentPreview>
        <CodeBlock
          code={avatarSnippets.React.fallback}
          language="tsx"
          platform="React"
        />
      </Section>

      <Section
        title="With Badge"
        description="AvatarBadge overlays the bottom-right corner to show status."
      >
        <ComponentPreview>
          <Avatar>
            <AvatarFallback>ON</AvatarFallback>
            <AvatarBadge className="bg-green-30" />
          </Avatar>
          <Avatar>
            <AvatarFallback>BY</AvatarFallback>
            <AvatarBadge className="bg-yellow-30" />
          </Avatar>
          <Avatar>
            <AvatarFallback>OF</AvatarFallback>
            <AvatarBadge className="bg-gray-40" />
          </Avatar>
          <Avatar>
            <AvatarFallback>DN</AvatarFallback>
            <AvatarBadge className="bg-red-30" />
          </Avatar>
        </ComponentPreview>
        <CodeBlock
          code={avatarSnippets.React.withBadge}
          language="tsx"
          platform="React"
        />
      </Section>

      <Section
        title="Avatar Group"
        description="Stacked avatars with overlap and overflow count."
      >
        <ComponentPreview>
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
        </ComponentPreview>
        <CodeBlock
          code={avatarSnippets.React.avatarGroup}
          language="tsx"
          platform="React"
        />
      </Section>

      <Section title="Props">
        <PropsTable props={avatarProps} />
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
        description="Same Avatar component — use lg size for 10-foot readability."
      >
        <CodeBlock
          code={avatarSnippets.TV.installation}
          language="ts"
          platform="TV"
          filename="TV app import"
        />
      </Section>

      <Section
        title="Preview"
        description="TV avatars with larger sizing for 10-foot UI."
      >
        <CodeBlock
          code={avatarSnippets.TV.basic}
          language="tsx"
          platform="TV"
        />
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
        description="Same Avatar component as React — no platform-specific build needed for Mobile Web."
      >
        <CodeBlock
          code={avatarSnippets["Mobile Web"].installation}
          language="ts"
          platform="Mobile Web"
        />
      </Section>

      <Section
        title="Preview"
        description="Avatars in headers, comment threads, and contact lists."
      >
        <CodeBlock
          code={avatarSnippets["Mobile Web"].basic}
          language="tsx"
          platform="Mobile Web"
        />
      </Section>
    </div>
  );
}

// ── Android platform content ───────────────────────────────────────────────

const androidParams = [
  {
    name: "imageUrl",
    type: "String?",
    default: "null",
    description: "URL of the avatar image.",
  },
  {
    name: "fallback",
    type: "String",
    default: "—",
    description: "Initials shown when image is unavailable (max 2 chars).",
  },
  {
    name: "size",
    type: "AvatarSize",
    default: "Default",
    description: "Avatar size: sm, default, lg.",
  },
  {
    name: "badgeColor",
    type: "Color?",
    default: "null",
    description: "Optional status badge color.",
  },
];

function AndroidContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="Android" />

      <Section title="Installation">
        <CodeBlock
          code={avatarSnippets.Android.installation}
          language="kotlin"
          platform="Android"
          filename="Compose imports"
        />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={avatarSnippets.Android.basic}
          language="kotlin"
          platform="Android"
        />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock
          code={avatarSnippets.Android.colors}
          language="kotlin"
          platform="Android"
          filename="res/values/colors.xml"
        />
      </Section>

      <Section title="Params">
        <PropsTable props={androidParams} />
      </Section>
    </div>
  );
}

// ── iOS platform content ───────────────────────────────────────────────────

const iosParams = [
  {
    name: "url",
    type: "String?",
    default: "nil",
    description: "URL of the avatar image.",
  },
  {
    name: "fallback",
    type: "String",
    default: "—",
    description: "Initials shown when image is unavailable (max 2 chars).",
  },
  {
    name: "size",
    type: ".sm | .default | .lg",
    default: ".default",
    description: "Avatar size.",
  },
  {
    name: "badge",
    type: "VidiBadgeStatus?",
    default: "nil",
    description: "Optional status badge (online, busy, dnd).",
  },
];

function IOSContent() {
  return (
    <div className="space-y-10 pt-6">
      <NativeNote platform="iOS" />

      <Section title="Installation">
        <CodeBlock
          code={avatarSnippets.iOS.installation}
          language="swift"
          platform="iOS"
          filename="Xcode setup"
        />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={avatarSnippets.iOS.basic}
          language="swift"
          platform="iOS"
        />
      </Section>

      <Section title="Color Tokens">
        <CodeBlock
          code={avatarSnippets.iOS.colors}
          language="swift"
          platform="iOS"
          filename="Colors.swift"
        />
      </Section>

      <Section title="Params">
        <PropsTable props={iosParams} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AvatarPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">
        {/* ── Static header ──────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Avatar
          </h1>
          <p className="text-base text-muted-foreground">
            A circular user representation with image, fallback initials, status
            badges, and group stacking. Available across all VIDI platforms.
          </p>
        </header>

        {/* ── Platform tabs control the ENTIRE page content ──────── */}
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
