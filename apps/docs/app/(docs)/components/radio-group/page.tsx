/**
 * VIDI Docs — Radio Group Component
 * Route: /components/radio-group
 */

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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

export default function RadioGroupPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Radio Group</h1>
        <p className="text-muted-foreground">
          Mutually exclusive selection. Only one option can be active at a time within a group.
        </p>
      </header>

      <div className="max-w-4xl space-y-12">

        {/* ── Basic ── */}
        <Section
          title="Basic"
          description="Default vertical layout with label pairs."
        >
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1-1" />
              <Label htmlFor="r1-1">Option One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r1-2" />
              <Label htmlFor="r1-2">Option Two</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="r1-3" />
              <Label htmlFor="r1-3">Option Three</Label>
            </div>
          </RadioGroup>
        </Section>

        {/* ── With Description ── */}
        <Section
          title="With Description"
          description="Describe each option for clarity, especially for consequential choices."
        >
          <fieldset className="space-y-1 border-0 p-0">
            <legend className="text-sm font-medium text-foreground mb-4">
              Notification frequency
            </legend>
            <RadioGroup defaultValue="realtime" className="gap-4">
              <div className="flex items-start gap-2">
                <RadioGroupItem value="realtime" id="freq-rt" className="mt-0.5" />
                <div className="space-y-0.5">
                  <Label htmlFor="freq-rt" className="leading-none">Real-time</Label>
                  <p className="text-xs text-muted-foreground">
                    Get notified immediately when something happens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RadioGroupItem value="daily" id="freq-daily" className="mt-0.5" />
                <div className="space-y-0.5">
                  <Label htmlFor="freq-daily" className="leading-none">Daily digest</Label>
                  <p className="text-xs text-muted-foreground">
                    A single email summary at 8:00 AM each morning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RadioGroupItem value="weekly" id="freq-weekly" className="mt-0.5" />
                <div className="space-y-0.5">
                  <Label htmlFor="freq-weekly" className="leading-none">Weekly summary</Label>
                  <p className="text-xs text-muted-foreground">
                    A full weekly report every Monday morning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RadioGroupItem value="never" id="freq-never" className="mt-0.5" />
                <div className="space-y-0.5">
                  <Label htmlFor="freq-never" className="leading-none">Never</Label>
                  <p className="text-xs text-muted-foreground">
                    Turn off all email notifications for this workspace.
                  </p>
                </div>
              </div>
            </RadioGroup>
          </fieldset>
        </Section>

        {/* ── Plan picker ── */}
        <Section
          title="Plan Selector"
          description="Styled radio cards using custom className for richer visual selection."
        >
          <RadioGroup defaultValue="pro" className="gap-3">
            {[
              { value: "free",  label: "Free",       price: "Rp 0",       desc: "1 workspace, 5 members" },
              { value: "pro",   label: "Pro",         price: "Rp 150k/mo", desc: "Unlimited workspaces" },
              { value: "team",  label: "Team",        price: "Rp 400k/mo", desc: "SSO, audit logs, priority support" },
            ].map((plan) => (
              <label
                key={plan.value}
                htmlFor={`plan-${plan.value}`}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-muted/20 p-4 hover:bg-muted/40 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 transition-colors"
              >
                <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-medium text-foreground">{plan.label}</span>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{plan.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{plan.desc}</p>
                </div>
              </label>
            ))}
          </RadioGroup>
        </Section>

        {/* ── Disabled ── */}
        <Section title="Disabled" description="Individual items or the entire group can be disabled.">
          <RadioGroup defaultValue="b">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="dis-a" disabled />
              <Label htmlFor="dis-a" className="opacity-50">Unavailable option</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="dis-b" />
              <Label htmlFor="dis-b">Available option</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="c" id="dis-c" disabled />
              <Label htmlFor="dis-c" className="opacity-50">Unavailable option</Label>
            </div>
          </RadioGroup>
        </Section>

        {/* ── Error ── */}
        <Section
          title="Error State"
          description="Apply aria-invalid to each RadioGroupItem to show the destructive ring."
        >
          <fieldset className="space-y-1 border-0 p-0">
            <legend className="text-sm font-medium text-destructive mb-3">
              Payment method (required)
            </legend>
            <RadioGroup>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="card" id="err-card" aria-invalid="true" />
                <Label htmlFor="err-card">Credit / Debit card</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="bank" id="err-bank" aria-invalid="true" />
                <Label htmlFor="err-bank">Bank transfer</Label>
              </div>
            </RadioGroup>
            <p className="text-xs text-destructive mt-2">Please select a payment method.</p>
          </fieldset>
        </Section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Use <strong>Radio Group</strong> for mutually exclusive choices (single-select). Use <strong>Checkbox</strong> for multi-select.</li>
            <li>Always set a <code className="font-mono text-xs bg-muted px-1 rounded">defaultValue</code> so a sane option is pre-selected in non-required contexts.</li>
            <li>Wrap in a <code className="font-mono text-xs bg-muted px-1 rounded">&lt;fieldset&gt;</code> with a <code className="font-mono text-xs bg-muted px-1 rounded">&lt;legend&gt;</code> for screen reader accessibility.</li>
            <li>Show 2–6 options inline. More than 6 options → consider a Select dropdown instead.</li>
            <li>Radio cards (custom styled labels) work well for consequential settings like plan or role selection.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
