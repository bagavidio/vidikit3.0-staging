/**
 * VIDI Docs — Input Component
 * Route: /components/input
 */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Section({
  title,
  description,
  children,
  grid = false,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  grid?: boolean;
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
      <div
        className={
          grid
            ? "grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl"
            : "flex flex-col gap-4 max-w-sm"
        }
      >
        {children}
      </div>
    </section>
  );
}

export default function InputPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Input</h1>
        <p className="text-muted-foreground">
          Single-line text field with pill shape, focus ring, and full state support.
        </p>
      </header>

      <div className="max-w-4xl space-y-12">

        {/* ── Default ── */}
        <Section title="Default">
          <Input placeholder="Placeholder text…" />
          <Input defaultValue="With a default value" />
        </Section>

        {/* ── Types ── */}
        <Section title="Input Types" description="Native HTML input types." grid>
          <div className="space-y-1.5">
            <Label htmlFor="ex-text">Text</Label>
            <Input id="ex-text" type="text" placeholder="Enter text…" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-email">Email</Label>
            <Input id="ex-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-password">Password</Label>
            <Input id="ex-password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-search">Search</Label>
            <Input id="ex-search" type="search" placeholder="Search…" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-number">Number</Label>
            <Input id="ex-number" type="number" placeholder="0" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-url">URL</Label>
            <Input id="ex-url" type="url" placeholder="https://" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-tel">Phone</Label>
            <Input id="ex-tel" type="tel" placeholder="+62 8xx xxxx xxxx" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-date">Date</Label>
            <Input id="ex-date" type="date" />
          </div>
        </Section>

        {/* ── File ── */}
        <Section title="File Input" description="File inputs use a compact internal button style.">
          <Input type="file" />
        </Section>

        {/* ── States ── */}
        <Section title="States" description="All interactive states supported out of the box.">
          <div className="space-y-1.5">
            <Label htmlFor="state-normal">Normal</Label>
            <Input id="state-normal" placeholder="Normal state" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="state-disabled" className="opacity-50">Disabled</Label>
            <Input id="state-disabled" placeholder="Cannot edit" disabled />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="state-invalid" className="text-destructive">
              Error — Required field
            </Label>
            <Input
              id="state-invalid"
              placeholder="Missing value"
              aria-invalid="true"
              defaultValue=""
            />
            <p className="text-xs text-destructive">This field is required.</p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="state-readonly">Read-only</Label>
            <Input id="state-readonly" readOnly defaultValue="Cannot be changed" />
          </div>
        </Section>

        {/* ── With Label ── */}
        <Section title="With Label + Helper Text" description="Pair with Label and helper text for accessible form fields.">
          <div className="space-y-1.5">
            <Label htmlFor="ex-username">Username</Label>
            <Input id="ex-username" placeholder="e.g. johndoe" />
            <p className="text-xs text-muted-foreground">
              Must be 3–20 characters. Letters, numbers, and underscores only.
            </p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-bio">Bio</Label>
            <Input id="ex-bio" placeholder="Tell us about yourself…" />
          </div>
        </Section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Always associate inputs with a <code className="font-mono text-xs bg-muted px-1 rounded">Label</code> using matching <code className="font-mono text-xs bg-muted px-1 rounded">htmlFor</code> / <code className="font-mono text-xs bg-muted px-1 rounded">id</code>.</li>
            <li>Set <code className="font-mono text-xs bg-muted px-1 rounded">aria-invalid=&quot;true&quot;</code> on validation errors — the red ring applies automatically.</li>
            <li>Use <strong>placeholder</strong> only for hints about format, not as a label substitute.</li>
            <li>For compound inputs (icon, button, prefix), use <strong>Input Group</strong> instead.</li>
            <li>Prefer <code className="font-mono text-xs bg-muted px-1 rounded">type=&quot;email&quot;</code> / <code className="font-mono text-xs bg-muted px-1 rounded">type=&quot;tel&quot;</code> for correct mobile keyboards.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
