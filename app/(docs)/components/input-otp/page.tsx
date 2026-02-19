/**
 * VIDI Docs — Input OTP Component
 * Route: /components/input-otp
 *
 * Needs "use client" — OTPInput uses browser APIs internally.
 */

"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

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
      <div className="space-y-0.5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground/70">{description}</p>
        )}
      </div>
      <div className="flex flex-col gap-6 max-w-sm">{children}</div>
    </section>
  );
}

function Demo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{label}</p>
      {children}
    </div>
  );
}

export default function InputOTPPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Input OTP</h1>
        <p className="text-muted-foreground">
          One-time password input with individual slots, separators, and pattern validation.
        </p>
      </header>

      <div className="max-w-4xl space-y-12">

        {/* ── 4-digit ── */}
        <Section title="4-Digit OTP" description="Compact code for shorter verification codes.">
          <Demo label="Default">
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </Demo>
        </Section>

        {/* ── 6-digit ── */}
        <Section title="6-Digit OTP" description="Standard verification code length for SMS / email auth.">
          <Demo label="Continuous">
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
          </Demo>

          <Demo label="With Separator (3 + 3)">
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
          </Demo>
        </Section>

        {/* ── 8-digit ── */}
        <Section
          title="8-Digit Code"
          description="Longer backup code split into two groups of 4."
        >
          <Demo label="4 + separator + 4">
            <InputOTP maxLength={8}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
              </InputOTPGroup>
            </InputOTP>
          </Demo>
        </Section>

        {/* ── Numeric pattern ── */}
        <Section
          title="Numeric Pattern"
          description="Restrict input to digits only using the pattern prop."
        >
          <Demo label="Numbers only">
            <InputOTP maxLength={6} pattern="[0-9]*">
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
          </Demo>
        </Section>

        {/* ── Disabled ── */}
        <Section title="Disabled">
          <Demo label="Cannot interact">
            <InputOTP maxLength={6} disabled>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Demo>
        </Section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Use <strong>4 digits</strong> for PIN-style verification, <strong>6 digits</strong> for SMS/email OTP.</li>
            <li>Add <code className="font-mono text-xs bg-muted px-1 rounded">pattern=&quot;[0-9]*&quot;</code> to prevent non-numeric input on mobile keyboards.</li>
            <li>Use <strong>InputOTPSeparator</strong> to group digits visually — typically split at the midpoint.</li>
            <li>Auto-submit the form when all slots are filled for a smooth UX — wire <code className="font-mono text-xs bg-muted px-1 rounded">onChange</code> to check <code className="font-mono text-xs bg-muted px-1 rounded">value.length === maxLength</code>.</li>
            <li>Always pair with a &quot;Resend code&quot; action with a countdown timer.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
