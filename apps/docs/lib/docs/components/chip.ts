/**
 * VIDI Docs — Chip Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/chips/page.tsx
 */

export const chipSnippets = {
  React: {
    installation: `import { Chip } from "@vidikit/ui-react";`,

    basic: `<Chip>Genre</Chip>
<Chip variant="outline">Drama</Chip>
<Chip variant="brand">VIDI Original</Chip>`,

    filter: `// Interactive filter chip
<Chip
  variant="interactive"
  selected={isActive}
  onClick={() => toggle(genre)}
>
  Drama
</Chip>`,

    dismissible: `// Dismissible tag chip
<Chip
  variant="interactive"
  dismissible
  onDismiss={() => removeTag(id)}
>
  Action
</Chip>`,

    variants: `// All variants
<Chip variant="filled">Filled</Chip>
<Chip variant="outline">Outline</Chip>
<Chip variant="interactive">Interactive</Chip>
<Chip variant="brand">Brand</Chip>`,

    sizes: `<Chip size="sm">Small</Chip>
<Chip size="default">Default</Chip>
<Chip size="lg">Large</Chip>
<Chip size="xl">XL (TV)</Chip>`,
  },

  TV: {
    installation: `import { Chip } from "@vidikit/ui-react";
// Use size="xl" for 10-foot viewing distance.`,

    basic: `// TV: use size="xl" for D-pad navigation
// Focus ring: ring-4 + scale-105 auto-applied at xl size
<Chip variant="interactive" size="xl" tabIndex={0}>
  News
</Chip>
<Chip variant="interactive" size="xl" tabIndex={0}>
  Movies
</Chip>`,

    filterBar: `// TV genre filter bar — navigable with D-pad
{genres.map((genre) => (
  <Chip
    key={genre}
    variant="interactive"
    size="xl"
    selected={active === genre}
    onClick={() => setActive(genre)}
  >
    {genre}
  </Chip>
))}`,
  },

  "Mobile Web": {
    installation: `import { Chip } from "@vidikit/ui-react";
// Same import — no platform-specific build needed.`,

    basic: `// Mobile: default size (h-6 = 24px token height)
// The wrapping row provides safe touch-target height via padding
<div className="flex flex-wrap gap-2 py-2">
  <Chip variant="interactive" selected={isActive} onClick={...}>
    Drama
  </Chip>
</div>`,

    scrollable: `// Horizontally scrollable chip row (common on mobile)
<div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
  {genres.map((g) => (
    <Chip key={g} variant="interactive" className="shrink-0">
      {g}
    </Chip>
  ))}
</div>`,
  },

  Android: {
    installation: `// Jetpack Compose — reference implementation
import com.vidi.designsystem.components.VIDIChip`,

    basic: `@Composable
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
        shape = RoundedCornerShape(50),
        colors = FilterChipDefaults.filterChipColors(
            selectedContainerColor = Color(0x26FD1B44),
            selectedLabelColor = Color(0xFFFD1B44),
            containerColor = Color(0xFF26292E),
            labelColor = Color(0xFFF5F8FF),
        ),
        border = null,
    )
}`,
  },

  iOS: {
    installation: `// Copy Sources/VidiKit/ from @vidikit/ui-ios
import SwiftUI`,

    basic: `struct VIDIChip: View {
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
            ? Color.vidiRed30.opacity(0.15)
            : Color.vidiGray50)
        .foregroundColor(isSelected
            ? Color.vidiRed30
            : Color.vidiGray10)
        .clipShape(Capsule())
    }
}`,
  },
} as const;

/** Chip component props for PropsTable */
export const chipProps = [
  {
    name: "variant",
    type: '"filled" | "outline" | "interactive" | "brand"',
    default: '"filled"',
    description: "Visual surface style.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg" | "xl"',
    default: '"default"',
    description: '"xl" is recommended for TV / 10-foot UI.',
  },
  {
    name: "selected",
    type: "boolean",
    default: "false",
    description: "Active state — highlights chip and sets data-selected attribute.",
  },
  {
    name: "dismissible",
    type: "boolean",
    default: "false",
    description: "Shows × dismiss button inside the chip.",
  },
  {
    name: "onDismiss",
    type: "() => void",
    default: "—",
    description: "Called when × is clicked (dismissible only).",
  },
  {
    name: "onClick",
    type: "MouseEventHandler<button>",
    default: "—",
    description: "Renders as <button> when provided — for toggle/filter chips.",
  },
  {
    name: "tabIndex",
    type: "number",
    default: "0 (auto)",
    description: "Override focus order — set to -1 to exclude from tab sequence.",
  },
];
