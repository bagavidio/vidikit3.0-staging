/**
 * VIDI Docs — Input Group Component
 * Route: /components/input-group
 */

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

const SPEC = [
  { prop: "className", type: "string",    default: "\u2014", description: "Merge additional Tailwind classes on root" },
  { prop: "children",  type: "ReactNode", default: "\u2014", description: "InputGroupAddon, InputGroupInput, InputGroupButton, InputGroupText" },
];

const TAGS = ["@/components/ui/input-group", "Composition pattern", "Addon variants"];

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

// Simple inline SVGs to avoid icon package dependency in docs
function SearchSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <circle cx="6.5" cy="6.5" r="4.5" />
      <path d="M10.5 10.5L14 14" />
    </svg>
  );
}

function AtSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <circle cx="8" cy="8" r="3" />
      <path d="M11 8c0 2.5 3 2.5 3 0A6 6 0 1 0 8 14" />
    </svg>
  );
}

function LinkSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <path d="M6 10.5a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5L6.5 5" />
      <path d="M10 5.5a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5L9.5 11" />
    </svg>
  );
}

function SendSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <path d="M14 2L9 14l-2-5-5-2 12-5z" />
    </svg>
  );
}

export default function InputGroupPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Input Group</h1>
          <p className="text-muted-foreground">
            Composed input field with inline and block addons — icons, text, buttons, and labels.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {TAGS.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* ── Inline Start ── */}
        <Section
          title="Inline Start Addon"
          description="Icon or text placed at the left of the input field."
        >
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchSvg />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search…" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon align="inline-start">
              <AtSvg />
            </InputGroupAddon>
            <InputGroupInput type="email" placeholder="your@email.com" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput type="url" placeholder="your-domain.com" />
          </InputGroup>
        </Section>

        {/* ── Inline End ── */}
        <Section
          title="Inline End Addon"
          description="Button or icon placed at the right of the input field."
        >
          <InputGroup>
            <InputGroupInput placeholder="Search documentation…" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <SearchSvg />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder="Paste or enter a URL…" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <LinkSvg />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput type="text" placeholder="Message…" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <SendSvg />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Section>

        {/* ── Both ── */}
        <Section
          title="Both Inline Addons"
          description="Combine a leading icon with a trailing action button."
        >
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchSvg />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search…" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <span className="text-xs">⌘K</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput type="number" placeholder="0.00" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Section>

        {/* ── Block Start ── */}
        <Section
          title="Block Start (Label Above)"
          description="Use block-start to place a floating label or category prefix above the input."
        >
          <div className="space-y-1.5">
            <Label>Workspace name</Label>
            <InputGroup>
              <InputGroupAddon align="block-start">
                <InputGroupText className="text-xs text-muted-foreground">app.vidi.id /</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="my-workspace" />
            </InputGroup>
          </div>
        </Section>

        {/* ── With Textarea ── */}
        <Section
          title="With Textarea"
          description="InputGroupTextarea expands vertically while keeping the same styled border."
        >
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <span className="text-xs text-muted-foreground pt-0.5">✏️</span>
            </InputGroupAddon>
            <InputGroupTextarea placeholder="Write a comment…" rows={3} />
          </InputGroup>

          <InputGroup>
            <InputGroupTextarea placeholder="Enter a long description for this component…" rows={4} />
            <InputGroupAddon align="block-end">
              <InputGroupButton size="xs">
                <SendSvg />
                <span>Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Section>

        {/* ── Error State ── */}
        <Section
          title="Error State"
          description="Set aria-invalid on InputGroupInput to trigger the destructive ring on the group."
        >
          <div className="space-y-1.5">
            <Label className="text-destructive">Email address</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <AtSvg />
              </InputGroupAddon>
              <InputGroupInput
                type="email"
                defaultValue="invalid-email"
                aria-invalid="true"
              />
            </InputGroup>
            <p className="text-xs text-destructive">Please enter a valid email address.</p>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<InputGroup>
  <InputGroupAddon align="inline-start">
    @
  </InputGroupAddon>
  <InputGroupInput
    placeholder="username"
  />
</InputGroup>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`HStack {
  Text("@")
    .foregroundColor(.secondary)
  TextField("username", text: $val)
}
.padding()
.overlay(
  RoundedRectangle(cornerRadius: 999)
    .stroke(Color.border)
)`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`OutlinedTextField(
  value = val,
  onValueChange = { val = it },
  leadingIcon = { Text("@") },
  shape = RoundedCornerShape(999.dp)
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
            <li>Use <strong>inline-start</strong> for contextual icons (search, @, $) that clarify input purpose.</li>
            <li>Use <strong>inline-end</strong> for action buttons (send, copy, clear) or trailing units (USD, px).</li>
            <li>Use <strong>block-start</strong> for URL prefixes or namespace prefixes above the field.</li>
            <li>The focus ring applies to the whole group — ensure only one <code className="font-mono text-xs bg-muted px-1 rounded">InputGroupInput</code> per group.</li>
            <li>For multi-line input with an action, combine <strong>InputGroupTextarea</strong> with a <strong>block-end</strong> button.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
