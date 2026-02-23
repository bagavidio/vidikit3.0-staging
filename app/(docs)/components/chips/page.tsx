/**
 * VIDI Docs — Components / Chips
 * Route: /components/chips
 * "use client" — filter demo uses useState.
 */

"use client";

import { useState } from "react";
import { Chip } from "@/components/design-system";

// ── Types ─────────────────────────────────────────────────────────────────────

const SPEC_PROPS = [
  { prop: "variant",     type: '"filled" | "outline" | "interactive" | "brand"', default: '"filled"',  description: "Visual surface style" },
  { prop: "size",        type: '"sm" | "default" | "lg" | "xl"',                 default: '"default"', description: '"xl" recommended for TV / 10-foot UI' },
  { prop: "selected",    type: "boolean",                                         default: "false",     description: "Active state — highlights chip and sets data-selected" },
  { prop: "dismissible", type: "boolean",                                         default: "false",     description: "Shows × dismiss button inside the chip" },
  { prop: "onDismiss",   type: "() => void",                                      default: "—",         description: "Called when × is clicked (dismissible only)" },
  { prop: "onClick",     type: "MouseEventHandler<button>",                       default: "—",         description: "Renders as <button> when provided — for toggle/filter chips" },
  { prop: "tabIndex",    type: "number",                                          default: "0 (auto)",  description: "Override focus order — set to -1 to exclude from tab sequence" },
];

// ── Live demos ────────────────────────────────────────────────────────────────

function FilledVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip>Default</Chip>
      <Chip variant="filled" size="sm">Small</Chip>
      <Chip variant="filled" size="lg">Large</Chip>
      <Chip variant="filled" size="xl">XL (TV)</Chip>
      <Chip variant="filled" selected>Selected</Chip>
    </div>
  );
}

function OutlineVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip variant="outline">Default</Chip>
      <Chip variant="outline" size="sm">Small</Chip>
      <Chip variant="outline" size="lg">Large</Chip>
      <Chip variant="outline" selected>Selected</Chip>
    </div>
  );
}

function BrandVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip variant="brand">VIDI Original</Chip>
      <Chip variant="brand" size="sm">New</Chip>
      <Chip variant="brand" size="lg">Exclusive</Chip>
    </div>
  );
}

function DismissibleDemo() {
  const [tags, setTags] = useState(["Action", "Drama", "Sci-Fi", "Thriller", "Comedy"]);

  const remove = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Chip
            key={tag}
            variant="interactive"
            dismissible
            onDismiss={() => remove(tag)}
          >
            {tag}
          </Chip>
        ))}
        {tags.length === 0 && (
          <p className="text-xs text-muted-foreground">All tags removed.</p>
        )}
      </div>
      {tags.length < 5 && (
        <button
          type="button"
          onClick={() => setTags(["Action", "Drama", "Sci-Fi", "Thriller", "Comedy"])}
          className="text-xs text-red-30 hover:underline focus-visible:outline-none"
        >
          Reset tags
        </button>
      )}
    </div>
  );
}

function FilterDemo() {
  const genres = ["All", "Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance", "Thriller"];
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Chip
          key={genre}
          variant="interactive"
          selected={active === genre}
          onClick={() => setActive(genre)}
        >
          {genre}
        </Chip>
      ))}
    </div>
  );
}

function TVFocusDemo() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Tab to focus — ring scales up to indicate position for 10-foot viewing distance.
      </p>
      <div className="flex flex-wrap gap-3">
        {["News", "Sports", "Movies", "Series", "Kids"].map((label) => (
          <Chip
            key={label}
            variant="interactive"
            size="xl"
            tabIndex={0}
          >
            {label}
          </Chip>
        ))}
      </div>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div className="rounded-xl border border-border bg-card/40 p-5">{children}</div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ChipsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Chip</h1>
          <p className="text-muted-foreground">
            Compact tokens for genres, tags, filters, and selection states. Built with CVA — 4 variants,
            4 sizes, D-pad focus ready.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["@/components/design-system", "CVA", "10-foot UI", "D-pad ready"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Variants ── */}
        <Section title="Filled (Default)">
          <FilledVariantDemo />
        </Section>

        <Section title="Outline">
          <OutlineVariantDemo />
        </Section>

        <Section title="Brand">
          <BrandVariantDemo />
        </Section>

        {/* ── Interactive — dismissible ── */}
        <Section title="Interactive — Dismissible (Tag Input)">
          <DismissibleDemo />
        </Section>

        {/* ── Interactive — filter bar ── */}
        <Section title="Interactive — Filter Bar">
          <FilterDemo />
        </Section>

        {/* ── TV / 10-foot ── */}
        <Section title="10-Foot UI — D-Pad Navigation (size=xl)">
          <TVFocusDemo />
        </Section>

        {/* ── Mobile vs Desktop ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Mobile vs Desktop Behaviour
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                label: "Mobile",
                icon: "📱",
                points: [
                  'Size: "default" (h-6)',
                  "Touch target wraps ≥ 44px via row padding",
                  "Horizontally scrollable rows (overflow-x-auto)",
                  "Tap to select/deselect",
                ],
              },
              {
                label: "Desktop",
                icon: "🖥",
                points: [
                  "Mouse hover state visible (hover:bg-*)",
                  "Tab key navigates chip groups",
                  "Focus ring: ring-4 (visible, not intrusive)",
                  "Keyboard: Space/Enter to activate",
                ],
              },
              {
                label: "Smart TV / D-Pad",
                icon: "📺",
                points: [
                  'Size: "xl" (h-9) for 10-foot viewing',
                  "Focus ring: ring-4 + scale-105",
                  "D-pad left/right moves focus between chips",
                  "Select button (OK/Enter) activates chip",
                ],
              },
            ].map(({ label, icon, points }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card/60 p-5 space-y-3"
              >
                <p className="text-sm font-semibold text-foreground">
                  {icon} {label}
                </p>
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

        {/* ── Props spec ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Props Specification
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
                {SPEC_PROPS.map((row, i) => (
                  <tr key={row.prop} className={i % 2 === 0 ? "bg-card/40" : "bg-transparent"}>
                    <td className="px-4 py-3"><code className="font-mono text-xs font-semibold text-foreground">{row.prop}</code></td>
                    <td className="px-4 py-3"><code className="font-mono text-[10px] text-muted-foreground">{row.type}</code></td>
                    <td className="px-4 py-3"><code className="font-mono text-xs text-muted-foreground">{row.default}</code></td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Copy code — Web / iOS / Android ── */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Copy Code
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Web (React)
              </p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-foreground/80 leading-relaxed whitespace-pre-wrap">
{`import { Chip } from "@/components/design-system";

// Filter chip
<Chip
  variant="interactive"
  selected={isActive}
  onClick={() => toggle(id)}
>
  Drama
</Chip>

// Dismissible tag
<Chip
  variant="interactive"
  dismissible
  onDismiss={() => remove(id)}
>
  Action
</Chip>`}
              </pre>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                iOS (SwiftUI)
              </p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-foreground/80 leading-relaxed whitespace-pre-wrap">
{`// VIDIChip.swift
struct VIDIChip: View {
  let label: String
  var isSelected: Bool = false
  var onDismiss: (() -> Void)? = nil

  var body: some View {
    HStack(spacing: 4) {
      Text(label)
        .font(.caption)
      if let dismiss = onDismiss {
        Button(action: dismiss) {
          Image(systemName: "xmark")
            .font(.system(size: 8))
        }
      }
    }
    .padding(.horizontal, 10)
    .padding(.vertical, 4)
    .background(isSelected
      ? Color("red30").opacity(0.15)
      : Color("gray50"))
    .foregroundColor(isSelected
      ? Color("red30")
      : Color("gray10"))
    .clipShape(Capsule())
  }
}`}
              </pre>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-4 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Android (Compose)
              </p>
              <pre className="overflow-x-auto rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-foreground/80 leading-relaxed whitespace-pre-wrap">
{`// VIDIChip.kt
@Composable
fun VIDIChip(
  label: String,
  selected: Boolean = false,
  onDismiss: (() -> Unit)? = null,
  onClick: (() -> Unit)? = null,
) {
  FilterChip(
    selected = selected,
    onClick = { onClick?.invoke() },
    label = { Text(label, fontSize = 11.sp) },
    trailingIcon = onDismiss?.let {{
      IconButton(onClick = it) {
        Icon(Icons.Default.Close,
          contentDescription = "Remove",
          modifier = Modifier.size(10.dp))
      }
    }},
    shape = RoundedCornerShape(50),
    colors = FilterChipDefaults.filterChipColors(
      selectedContainerColor = Color(0x26FD1B44),
      selectedLabelColor = Color(0xFFFD1B44),
      containerColor = Color(0xFF26292E),
      labelColor = Color(0xFFF5F8FF),
    ),
    border = null,
  )
}`}
              </pre>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
