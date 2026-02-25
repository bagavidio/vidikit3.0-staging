/**
 * VIDI Docs — Slider Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const sliderSnippets = {
  React: {
    installation: `import { Slider } from "@vidikit/ui-react";

// The Slider uses \`bg-primary\` for the active range fill
// and \`border-primary\` for the thumb indicator.
// In dark mode, --primary maps to Brand Red (#CA0528).`,

    basic: `<Slider defaultValue={[50]} max={100} step={1} />`,

    range: `// Range slider with two thumbs
<Slider defaultValue={[25, 75]} max={100} step={1} />`,

    step: `// Step slider — snaps to multiples of 25
<Slider defaultValue={[50]} max={100} step={25} />`,

    states: `// Disabled
<Slider defaultValue={[50]} max={100} step={1} disabled />`,

    withLabel: `// With label and live value display
const [value, setValue] = React.useState([50]);

<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>Volume</Label>
    <span className="text-sm text-muted-foreground">{value[0]}%</span>
  </div>
  <Slider
    value={value}
    onValueChange={setValue}
    max={100}
    step={1}
  />
</div>`,
  },

  TV: {
    installation: `import { Slider } from "@vidikit/ui-react";
// Same component — ensure thumb is large enough for D-pad focus.`,

    basic: `// TV: use larger thumb and track for remote navigation
<Slider
  defaultValue={[50]}
  max={100}
  step={5}
  className="h-6 [&_[data-slot=slider-thumb]]:size-6"
/>`,
  },

  "Mobile Web": {
    installation: `import { Slider } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed for Mobile Web.`,

    basic: `// Mobile Web: increase touch target for thumb
<Slider
  defaultValue={[50]}
  max={100}
  step={1}
  className="[&_[data-slot=slider-thumb]]:size-6"
/>`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.material3.Slider
import com.vidi.designsystem.theme.VidiTheme`,

    basic: `var sliderValue by remember { mutableFloatStateOf(0.5f) }

Slider(
    value = sliderValue,
    onValueChange = { sliderValue = it },
    valueRange = 0f..1f,
    steps = 0,
    colors = SliderDefaults.colors(
        thumbColor = VidiTheme.colors.primary,
        activeTrackColor = VidiTheme.colors.primary,
        inactiveTrackColor = VidiTheme.colors.surfaceVariant
    )
)`,

    colors: `// Token references from res/values/colors.xml
// Thumb:          @color/vidi_red_50   (#CA0528) — dark-mode primary
// Active track:   @color/vidi_red_50   (#CA0528)
// Inactive track: @color/vidi_gray_60  (#27272A)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var sliderValue: Double = 50

Slider(value: $sliderValue, in: 0...100, step: 1)
    .tint(Color.vidiPrimary)

// Or use VidiSlider from @vidikit/ui-ios:
VidiSlider(value: $sliderValue, range: 0...100, step: 1)`,

    colors: `// Token references from Colors.swift
Color.vidiPrimary  // #CA0528 — thumb & active track (dark mode)
Color.vidiGray60   // #27272A — inactive track bg`,
  },
} as const;

export const sliderProps = [
  {
    name: "defaultValue",
    type: "number[]",
    description:
      "Initial value(s). Pass a single-element array for a single thumb, or two elements for a range.",
  },
  {
    name: "value",
    type: "number[]",
    description:
      "Controlled value(s). Use with onValueChange for full control.",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    description: "Callback fired on every thumb movement with the new value(s).",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "Minimum allowed value.",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "Maximum allowed value.",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description:
      "Step increment. The thumb snaps to multiples of this value.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description:
      "Slider axis. Vertical orientation requires a fixed height on the container.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents interaction and dims the slider.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes for the root element.",
  },
];
