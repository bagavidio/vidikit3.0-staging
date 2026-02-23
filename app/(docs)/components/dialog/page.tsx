/**
 * VIDI Docs — Dialog Component
 * Route: /components/dialog
 *
 * "use client" — Dialog uses controlled open state for demos.
 */

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/design-system";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete01Icon, Setting06Icon } from "@hugeicons/core-free-icons";

// ── Spec data ─────────────────────────────────────────────────────────────────

const SPEC = [
  { prop: "open",          type: "boolean",        default: "—",     description: "Controlled open state" },
  { prop: "onOpenChange",  type: "(open: boolean) => void", default: "—", description: "Callback when open state changes" },
  { prop: "defaultOpen",   type: "boolean",        default: "false", description: "Uncontrolled initial open state" },
  { prop: "modal",         type: "boolean",        default: "true",  description: "When true, interaction outside is blocked" },
];

const ANATOMY = [
  { slot: "Dialog",            usage: "Root — manages open/close state via Radix DialogPrimitive.Root" },
  { slot: "DialogTrigger",     usage: "Element that opens the dialog on click" },
  { slot: "DialogContent",     usage: "Overlay + panel — animated slide-in with backdrop blur" },
  { slot: "DialogHeader",      usage: "Top section — contains title and description" },
  { slot: "DialogTitle",       usage: "Accessible dialog heading (required for a11y)" },
  { slot: "DialogDescription", usage: "Supporting text beneath the title" },
  { slot: "DialogFooter",      usage: "Bottom action row — flex justify-end gap-2" },
  { slot: "DialogClose",       usage: "Renders the × close button — also accepts asChild" },
];

// ── Demo: Confirmation dialog ─────────────────────────────────────────────────

function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button intent="destructive" size="sm">
          <HugeiconsIcon icon={Delete01Icon} className="size-4" />
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete your account?</DialogTitle>
          <DialogDescription>
            This action is permanent. All your data, watch history, and preferences will be deleted
            and cannot be recovered.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button intent="ghost" size="sm">Cancel</Button>
          </DialogClose>
          <Button
            intent="destructive"
            size="sm"
            onClick={() => setOpen(false)}
          >
            Yes, delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Demo: Settings dialog ─────────────────────────────────────────────────────

function SettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button intent="outline" size="sm">
          <HugeiconsIcon icon={Setting06Icon} className="size-4" />
          Open Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Preferences</DialogTitle>
          <DialogDescription>
            Manage your notification and privacy settings.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          {["Email notifications", "Push notifications", "Marketing emails", "Weekly digest"].map(
            (label) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-2.5"
              >
                <span className="text-sm text-foreground">{label}</span>
                <div className="size-4 rounded-full border border-border bg-muted" />
              </div>
            )
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button intent="ghost" size="sm">Cancel</Button>
          </DialogClose>
          <Button intent="primary" size="sm">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DialogPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Dialog</h1>
          <p className="text-muted-foreground">
            Modal overlay panel — accessible, animated, and focus-trapped via Radix UI.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/ui/dialog", "radix-ui/dialog", "WAI-ARIA Dialog"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Demos ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Variants
          </h2>
          <div className="flex flex-wrap gap-3">
            <ConfirmDialog />
            <SettingsDialog />
          </div>
        </section>

        {/* ── States ── */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            States
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: "Closed",  bg: "bg-card/40",  desc: "Default hidden state — not in the DOM until triggered" },
              { label: "Opening", bg: "bg-card/60",  desc: "Fade-in overlay + slide-up panel animation (150ms)" },
              { label: "Open",    bg: "bg-card/80",  desc: "Focus-trapped. ESC or backdrop click closes. Scroll locked." },
            ].map((state) => (
              <div
                key={state.label}
                className={`rounded-xl border border-border p-4 space-y-2 ${state.bg}`}
              >
                <p className="text-xs font-semibold text-foreground">{state.label}</p>
                <p className="text-[10px] leading-relaxed text-muted-foreground">{state.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Anatomy ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Anatomy
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Slot", "Usage"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {ANATOMY.map((row, i) => (
                  <tr key={row.slot} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground">{row.slot}</code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Props Spec ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Props Specification (Dialog root)
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Prop", "Type", "Default", "Description"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {SPEC.map((row, i) => (
                  <tr key={row.prop} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground">{row.prop}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs text-muted-foreground">{row.type}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs text-muted-foreground">{row.default}</code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Overlay token ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Backdrop — overlay-dark Token
          </h2>
          <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
            <p className="text-sm font-semibold text-foreground">
              <code className="rounded bg-muted px-1.5 font-mono text-xs">--overlay-dark</code> — rgba(12,13,15,0.85)
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The Dialog overlay uses the VIDI{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">--overlay-dark</code> token
              (gray-70 at 85% opacity) for the modal backdrop. This ensures content behind the modal
              is dimmed enough to focus attention without completely obscuring context. Never use
              a pure black backdrop — it breaks the depth hierarchy.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "CSS: background: var(--overlay-dark)",
                "Value: rgba(12,13,15,0.85)",
                "Token: bg-overlay-dark",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mobile vs Desktop vs TV ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Mobile · Desktop · TV Behaviour
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                label: "📱 Mobile",
                points: [
                  "Dialog slides up from bottom (sheet pattern)",
                  "Full-width, max-height 90vh",
                  "Swipe down to dismiss (future enhancement)",
                  "Touch-friendly: buttons ≥ 44px height",
                  "Focus trapped; virtual keyboard aware",
                ],
              },
              {
                label: "🖥 Desktop",
                points: [
                  "Centered overlay with max-width 32rem",
                  "Click outside backdrop to close",
                  "Keyboard: Tab cycles through actions",
                  "ESC key dismisses immediately",
                  "Focus returns to trigger on close",
                ],
              },
              {
                label: "📺 Smart TV / D-Pad",
                points: [
                  "Dialog must be triggered by D-pad OK",
                  "Focus trapped — D-pad cycles: Cancel → Confirm → ×",
                  "Actions use size='lg' for 10-foot readability",
                  "Back button (← or ESC) = Cancel action",
                  "No backdrop click-to-dismiss (no mouse)",
                ],
              },
            ].map(({ label, points }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card/60 p-5 space-y-3"
              >
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <ul className="space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="text-xs text-muted-foreground before:mr-2 before:content-['·']">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── D-Pad keyboard map ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            D-Pad / Keyboard Navigation Map
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Key / Input", "Action"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { key: "D-pad Left / Right  ·  Tab / Shift+Tab", action: "Cycle focus between dialog action buttons" },
                  { key: "D-pad OK  ·  Enter / Space",             action: "Activate focused button (Confirm or Cancel)" },
                  { key: "Back button  ·  ESC",                    action: "Close dialog — equivalent to clicking Cancel" },
                  { key: "D-pad Up / Down",                        action: "Scroll dialog content if it overflows" },
                  { key: "Home / End",                             action: "Jump to first / last focusable element in dialog" },
                ].map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3">
                      <code className="font-mono text-xs font-semibold text-foreground whitespace-nowrap">{row.key}</code>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Copy Code — Web / iOS / Android ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Copy Code
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Web (React)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-foreground/80 leading-relaxed whitespace-pre-wrap">
{`<Dialog>
  <DialogTrigger asChild>
    <Button intent="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>
        Supporting text here.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button intent="ghost" size="sm">Cancel</Button>
      </DialogClose>
      <Button intent="primary" size="sm">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
              </pre>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">iOS (SwiftUI)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-foreground/80 leading-relaxed whitespace-pre-wrap">
{`// VIDIDialog.swift
.sheet(isPresented: $isPresented) {
  VStack(spacing: 16) {
    Text("Title")
      .font(.headline)
    Text("Description")
      .font(.subheadline)
      .foregroundStyle(.secondary)
    HStack {
      Button("Cancel") {
        isPresented = false
      }
      .buttonStyle(.bordered)
      Button("Confirm") { ... }
        .buttonStyle(.borderedProminent)
        .tint(Color("red30"))
    }
  }
  .padding(24)
  .background(Color("bgSurface"))
  .presentationDetents([.medium])
}`}
              </pre>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Android (Compose)</p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-foreground/80 leading-relaxed whitespace-pre-wrap">
{`// VIDIDialog.kt
@Composable
fun VIDIDialog(
  onDismiss: () -> Unit,
  onConfirm: () -> Unit,
) {
  AlertDialog(
    onDismissRequest = onDismiss,
    title = { Text("Title") },
    text = { Text("Description") },
    confirmButton = {
      Button(
        onClick = onConfirm,
        colors = ButtonDefaults.buttonColors(
          containerColor = Color(0xFFFD1B44)
        )
      ) { Text("Confirm") }
    },
    dismissButton = {
      TextButton(onClick = onDismiss) {
        Text("Cancel")
      }
    },
    containerColor = Color(0xFF18191C),
    scrimColor = Color(0xD90C0D0F),
  )
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* ── Usage ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Full Usage Reference
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
{`import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/design-system";

<Dialog>
  <DialogTrigger asChild>
    <Button intent="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button intent="ghost" size="sm">Cancel</Button>
      </DialogClose>
      <Button intent="primary" size="sm">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            </pre>
          </div>
        </section>

      </div>
    </main>
  );
}
