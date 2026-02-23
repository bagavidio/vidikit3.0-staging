/**
 * VIDI Docs — Input Component
 * Route: /components/input
 */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SPEC = [
  { prop: "type",        type: "string",  default: '"text"', description: "HTML input type" },
  { prop: "placeholder", type: "string",  default: "—",      description: "Placeholder text" },
  { prop: "disabled",    type: "boolean", default: "false",  description: "Disabled state" },
  { prop: "className",   type: "string",  default: "—",      description: "Merge additional Tailwind classes" },
];

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
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Input</h1>
          <p className="text-muted-foreground">
            Single-line text field with pill shape, focus ring, and full state support.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/input", "Native HTML", "Maia pill (rounded-4xl)"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<Input
  type="email"
  placeholder="Email address"
/>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`TextField("Email address",
  text: $email)
  .textFieldStyle(
    .roundedBorder
  )`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`OutlinedTextField(
  value = email,
  onValueChange = {
    email = it
  },
  label = { Text("Email") },
  shape = RoundedCornerShape(
    999.dp
  )
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
