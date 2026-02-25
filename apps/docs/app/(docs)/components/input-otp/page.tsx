/**
 * VIDI Docs — Input OTP Component
 * ─────────────────────────────────────────────────────────────
 * Multi-platform documentation with live preview + code tabs.
 * Route: /components/input-otp
 */

"use client";

import { Suspense } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { inputOtpSnippets, inputOtpProps } from "@/lib/docs/components/input-otp";

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

// ── NativeNote helper ─────────────────────────────────────────────────────────

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

// ── Platform content ──────────────────────────────────────────────────────────

function ReactContent() {
  return (
    <div className="space-y-12">
      {/* Installation */}
      <Section title="Installation">
        <CodeBlock
          code={inputOtpSnippets.React.installation}
          language="ts"
          platform="React"
        />
      </Section>

      {/* 4-Digit OTP */}
      <Section title="4-Digit OTP" description="Compact code for shorter verification codes such as PINs.">
        <ComponentPreview>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </ComponentPreview>
        <CodeBlock
          code={inputOtpSnippets.React.fourDigit}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* 6-Digit OTP */}
      <Section title="6-Digit OTP" description="Standard verification code length for SMS or email authentication. Continuous and separated variants.">
        <ComponentPreview>
          <div className="flex flex-col gap-4">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={inputOtpSnippets.React.sixDigit}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Numeric Pattern */}
      <Section title="Numeric Pattern" description="Restrict input to digits only using the pattern prop for mobile-friendly numeric keyboards.">
        <ComponentPreview>
          <InputOTP maxLength={6} pattern="[0-9]*">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </ComponentPreview>
        <CodeBlock
          code={inputOtpSnippets.React.numeric}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Disabled */}
      <Section title="Disabled" description="Non-interactive state for read-only or loading contexts.">
        <ComponentPreview>
          <InputOTP maxLength={4} disabled>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </ComponentPreview>
        <CodeBlock
          code={inputOtpSnippets.React.disabled}
          language="tsx"
          platform="React"
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={inputOtpProps} />
      </Section>
    </div>
  );
}

function TVContent() {
  return (
    <div className="space-y-8">
      <Section title="Installation">
        <CodeBlock
          code={inputOtpSnippets.TV.installation}
          language="ts"
          platform="TV"
        />
      </Section>
      <Section title="Basic Usage" description="OTP input with D-pad navigation between slots for TV platforms.">
        <CodeBlock
          code={inputOtpSnippets.TV.basic}
          language="tsx"
          platform="TV"
        />
      </Section>
    </div>
  );
}

function MobileWebContent() {
  return (
    <div className="space-y-8">
      <Section title="Installation">
        <CodeBlock
          code={inputOtpSnippets["Mobile Web"].installation}
          language="ts"
          platform="Mobile Web"
        />
      </Section>
      <Section title="Basic Usage" description="OTP input optimized for touch with numeric keyboard hints.">
        <CodeBlock
          code={inputOtpSnippets["Mobile Web"].basic}
          language="tsx"
          platform="Mobile Web"
        />
      </Section>
    </div>
  );
}

function AndroidContent() {
  return (
    <div className="space-y-8">
      <NativeNote platform="Android" />
      <Section title="Installation">
        <CodeBlock
          code={inputOtpSnippets.Android.installation}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Basic Usage" description="Compose OTP input with individual slot fields.">
        <CodeBlock
          code={inputOtpSnippets.Android.basic}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for OTP input colors.">
        <CodeBlock
          code={inputOtpSnippets.Android.colors}
          language="kotlin"
          platform="Android"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={inputOtpProps} />
      </Section>
    </div>
  );
}

function IOSContent() {
  return (
    <div className="space-y-8">
      <NativeNote platform="iOS" />
      <Section title="Installation">
        <CodeBlock
          code={inputOtpSnippets.iOS.installation}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Basic Usage" description="SwiftUI OTP input with individual digit fields.">
        <CodeBlock
          code={inputOtpSnippets.iOS.basic}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Color Tokens" description="Token references for OTP input colors.">
        <CodeBlock
          code={inputOtpSnippets.iOS.colors}
          language="swift"
          platform="iOS"
        />
      </Section>
      <Section title="Props">
        <PropsTable props={inputOtpProps} />
      </Section>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function InputOtpPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-10">

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Input OTP</h1>
          <p className="text-base text-muted-foreground">
            One-time password input with individual slot fields, separator support, and numeric patterns. Available across all VIDI platforms.
          </p>
        </header>

        {/* ── Platform Code Tabs ───────────────────────────────── */}
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
