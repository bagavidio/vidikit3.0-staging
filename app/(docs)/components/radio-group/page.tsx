/**
 * VIDI Docs — Radio Group Component
 * Route: /components/radio-group
 */

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SPEC = [
  { prop: "value",          type: "string",          default: "\u2014",     description: "Controlled selected value" },
  { prop: "defaultValue",   type: "string",          default: "\u2014",     description: "Initial value (uncontrolled)" },
  { prop: "onValueChange",  type: "(value) => void", default: "\u2014",     description: "Called when selection changes" },
  { prop: "disabled",       type: "boolean",         default: "false", description: "Disabled state for all items" },
  { prop: "orientation",    type: '"horizontal" | "vertical"', default: '"vertical"', description: "Layout direction" },
];

const TAGS = ["@/components/ui/radio-group", "radix-ui", "Brand Red checked"];

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
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Radio Group</h1>
          <p className="text-muted-foreground">
            Mutually exclusive selection. Only one option can be active at a time within a group.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {TAGS.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </header>

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

        {/* ── Props Specification ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Props Specification</h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/30">
                {["Prop","Type","Default","Description"].map((h) => (<th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{h}</th>))}
              </tr></thead>
              <tbody className="divide-y divide-border/50">
                {SPEC.map((r, i) => (<tr key={r.prop} className={i % 2 === 0 ? "bg-card/40" : ""}>
                  <td className="px-4 py-3"><code className="font-mono text-xs font-semibold text-foreground">{r.prop}</code></td>
                  <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{r.type}</code></td>
                  <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{r.default}</code></td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{r.description}</td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Cross-Platform Specs ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cross-Platform Specs</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Web (React)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<RadioGroup
  value={plan}
  onValueChange={setPlan}
>
  <RadioGroupItem value="free" />
  <Label>Free</Label>
</RadioGroup>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Picker("Plan", selection: $plan) {
  Text("Free").tag("free")
  Text("Pro").tag("pro")
}
.pickerStyle(.radioGroup)`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`RadioButton(
  selected = plan == "free",
  onClick = { plan = "free" },
  colors = RadioButtonDefaults
    .colors(selectedColor = VidiRed)
)`}</pre>
            </div>
          </div>
        </section>

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
