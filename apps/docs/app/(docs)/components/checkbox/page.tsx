/**
 * VIDI Docs — Checkbox Component
 * Route: /components/checkbox
 */

import { Checkbox } from "@/components/ui/checkbox";
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
      <div className="flex flex-col gap-4 max-w-sm">{children}</div>
    </section>
  );
}

export default function CheckboxPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Checkbox</h1>
        <p className="text-muted-foreground">
          Boolean toggle for forms. Supports checked, unchecked, indeterminate, and disabled states.
        </p>
      </header>

      <div className="max-w-4xl space-y-12">

        {/* ── States ── */}
        <Section
          title="States"
          description="All four interactive states available out of the box."
        >
          {/* Unchecked */}
          <div className="flex items-center gap-2">
            <Checkbox id="state-unchecked" />
            <Label htmlFor="state-unchecked">Unchecked (default)</Label>
          </div>

          {/* Checked */}
          <div className="flex items-center gap-2">
            <Checkbox id="state-checked" defaultChecked />
            <Label htmlFor="state-checked">Checked</Label>
          </div>

          {/* Indeterminate */}
          <div className="flex items-center gap-2">
            <Checkbox id="state-indeterminate" checked="indeterminate" />
            <Label htmlFor="state-indeterminate">Indeterminate (partial selection)</Label>
          </div>

          {/* Disabled unchecked */}
          <div className="flex items-center gap-2">
            <Checkbox id="state-disabled" disabled />
            <Label htmlFor="state-disabled" className="opacity-50">Disabled</Label>
          </div>

          {/* Disabled checked */}
          <div className="flex items-center gap-2">
            <Checkbox id="state-disabled-checked" disabled defaultChecked />
            <Label htmlFor="state-disabled-checked" className="opacity-50">Disabled + Checked</Label>
          </div>
        </Section>

        {/* ── With Description ── */}
        <Section
          title="With Label & Description"
          description="Pair with a Label and helper text for accessible form checkboxes."
        >
          <div className="flex items-start gap-2">
            <Checkbox id="cb-terms" defaultChecked className="mt-0.5" />
            <div className="space-y-1">
              <Label htmlFor="cb-terms" className="leading-none">
                I agree to the terms and conditions
              </Label>
              <p className="text-xs text-muted-foreground">
                You must accept the terms to continue creating your account.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="cb-newsletter" className="mt-0.5" />
            <div className="space-y-1">
              <Label htmlFor="cb-newsletter" className="leading-none">
                Subscribe to newsletter
              </Label>
              <p className="text-xs text-muted-foreground">
                Receive weekly product updates and design system releases.
              </p>
            </div>
          </div>
        </Section>

        {/* ── Checkbox Group ── */}
        <Section
          title="Checkbox Group"
          description="Multiple checkboxes for selecting several options from a list."
        >
          <fieldset className="space-y-3 border-0 p-0">
            <legend className="text-sm font-medium text-foreground mb-3">
              Notification preferences
            </legend>

            <div className="flex items-center gap-2">
              <Checkbox id="notif-email" defaultChecked />
              <Label htmlFor="notif-email">Email notifications</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="notif-push" defaultChecked />
              <Label htmlFor="notif-push">Push notifications</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="notif-sms" />
              <Label htmlFor="notif-sms">SMS notifications</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="notif-slack" />
              <Label htmlFor="notif-slack">Slack notifications</Label>
            </div>
          </fieldset>
        </Section>

        {/* ── Error State ── */}
        <Section
          title="Error State"
          description="Set aria-invalid to trigger the destructive ring."
        >
          <div className="flex items-start gap-2">
            <Checkbox id="cb-invalid" aria-invalid="true" className="mt-0.5" />
            <div className="space-y-1">
              <Label htmlFor="cb-invalid" className="text-destructive leading-none">
                Accept terms (required)
              </Label>
              <p className="text-xs text-destructive">
                You must accept the terms to continue.
              </p>
            </div>
          </div>
        </Section>

        {/* ── Select All Pattern ── */}
        <Section
          title="Select All Pattern"
          description="Use indeterminate state on a parent checkbox when only some children are selected."
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="select-all" checked="indeterminate" />
              <Label htmlFor="select-all" className="font-semibold">Select all components</Label>
            </div>
            <div className="ml-6 flex flex-col gap-2.5 border-l border-border pl-4">
              <div className="flex items-center gap-2">
                <Checkbox id="sel-button" defaultChecked />
                <Label htmlFor="sel-button">Button</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="sel-input" defaultChecked />
                <Label htmlFor="sel-input">Input</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="sel-badge" />
                <Label htmlFor="sel-badge">Badge</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="sel-avatar" />
                <Label htmlFor="sel-avatar">Avatar</Label>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Always pair with a <strong>Label</strong> — clicking the label should toggle the checkbox.</li>
            <li>Use <code className="font-mono text-xs bg-muted px-1 rounded">checked=&quot;indeterminate&quot;</code> for parent checkboxes in tree selections.</li>
            <li>Use <strong>Checkbox</strong> for independent multi-select; use <strong>Radio Group</strong> for mutually exclusive single-select.</li>
            <li>Place helper text <em>below</em> the label, not beside the checkbox.</li>
            <li>Wrap groups in a <code className="font-mono text-xs bg-muted px-1 rounded">&lt;fieldset&gt;</code> with a <code className="font-mono text-xs bg-muted px-1 rounded">&lt;legend&gt;</code> for screen reader accessibility.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
