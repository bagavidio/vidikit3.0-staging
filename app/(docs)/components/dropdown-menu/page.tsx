/**
 * VIDI Docs — Dropdown Menu Component
 * Route: /components/dropdown-menu
 */

import { Button } from "@/components/design-system";
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

const SPEC = [
  { prop: "open",          type: "boolean",          default: "—",     description: "Controlled open state" },
  { prop: "onOpenChange",  type: "(open) => void",   default: "—",     description: "Called when open state changes" },
  { prop: "modal",         type: "boolean",          default: "true",  description: "Whether to render as modal" },
  { prop: "side",          type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "Preferred side (Content)" },
  { prop: "align",         type: '"start" | "center" | "end"',          default: '"start"',  description: "Content alignment (Content)" },
  { prop: "sideOffset",    type: "number",           default: "4",     description: "Pixel offset from trigger (Content)" },
];

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
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </section>
  );
}

export default function DropdownMenuPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">vidikit · components</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Dropdown Menu</h1>
          <p className="text-muted-foreground">
            Contextual menu with items, groups, labels, shortcuts, checkboxes, radio items, and submenus.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/dropdown-menu", "radix-ui", "Checkbox + Radio items"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </header>

        {/* ── Basic ── */}
        <Section
          title="Basic"
          description="Simple dropdown with icon shortcuts and a destructive action."
        >
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
        </Section>

        {/* ── With Groups & Labels ── */}
        <Section
          title="With Groups & Labels"
          description="Group related actions under a DropdownMenuLabel header."
        >
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
        </Section>

        {/* ── Checkbox Items ── */}
        <Section
          title="Checkbox Items"
          description="Toggleable options with checkmark indicators."
        >
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
        </Section>

        {/* ── Radio Items ── */}
        <Section
          title="Radio Items"
          description="Mutually exclusive selection within a group."
        >
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
        </Section>

        {/* ── Submenu ── */}
        <Section
          title="With Submenu"
          description="Nested menu using DropdownMenuSub + SubTrigger + SubContent."
        >
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
        </Section>

        {/* ── Icon items ── */}
        <Section
          title="With Icons"
          description="Place a small SVG icon before the label. It auto-sizes to size-4."
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button intent="outline">File</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6L9 2z" />
                  <path d="M9 2v4h4" />
                </svg>
                New file
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 2h12v8H2z" /><path d="M8 10v4M5 14h6" />
                </svg>
                Open
                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v9M5 8l3 3 3-3" /><path d="M3 12v2h10v-2" />
                </svg>
                Download
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-9" />
                </svg>
                Move to trash
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      Edit
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`Menu {
  Button("Edit") { /* action */ }
} label: {
  Image(systemName:
    "ellipsis.circle")
}`}</pre>
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground/80">{`DropdownMenu(
  expanded = open,
  onDismissRequest = {
    open = false
  }
) {
  DropdownMenuItem(
    text = { Text("Edit") },
    onClick = {}
  )
}`}</pre>
            </div>
          </div>
        </section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Use <code className="font-mono text-xs bg-muted px-1 rounded">asChild</code> on <strong>DropdownMenuTrigger</strong> to style any element as the trigger.</li>
            <li>Place <strong>destructive</strong> actions at the bottom, always separated by a DropdownMenuSeparator.</li>
            <li>Use <strong>DropdownMenuShortcut</strong> for discoverable keyboard shortcuts — don&apos;t rely solely on them.</li>
            <li>Limit to 2 levels of nesting (sub → sub). Deeper nesting is hard to navigate.</li>
            <li>Group related items with <strong>DropdownMenuLabel</strong> — keep labels concise and sentence-case.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
