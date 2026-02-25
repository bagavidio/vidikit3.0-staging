/**
 * VIDI Docs — Radio Group Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const radioGroupSnippets = {
  React: {
    installation: `import { RadioGroup, RadioGroupItem } from "@vidikit/ui-react";
import { Label } from "@vidikit/ui-react";`,

    basic: `<RadioGroup defaultValue="option-1" className="gap-3">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-3" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`,

    withDescription: `<fieldset className="space-y-4">
  <legend className="text-sm font-medium">Notification frequency</legend>
  <RadioGroup defaultValue="realtime" className="gap-4">
    {[
      { value: "realtime", label: "Real-time", desc: "Instant push for every event" },
      { value: "daily", label: "Daily digest", desc: "Summary once per day" },
      { value: "weekly", label: "Weekly digest", desc: "Summary once per week" },
    ].map((opt) => (
      <div key={opt.value} className="flex items-start gap-3">
        <RadioGroupItem value={opt.value} id={opt.value} className="mt-0.5" />
        <div>
          <Label htmlFor={opt.value}>{opt.label}</Label>
          <p className="text-sm text-muted-foreground">{opt.desc}</p>
        </div>
      </div>
    ))}
  </RadioGroup>
</fieldset>`,

    planSelector: `// Radio card pattern
<RadioGroup defaultValue="premium" className="grid grid-cols-3 gap-3">
  {["Free", "Premium", "Platinum"].map((plan) => (
    <label
      key={plan}
      className="cursor-pointer rounded-xl border border-border p-4
        has-[[data-state=checked]]:border-red-30 has-[[data-state=checked]]:bg-red-30/5"
    >
      <RadioGroupItem value={plan.toLowerCase()} className="sr-only" />
      <p className="font-semibold">{plan}</p>
    </label>
  ))}
</RadioGroup>`,

    error: `<RadioGroup aria-invalid="true">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="yes" id="yes" aria-invalid="true" />
    <Label htmlFor="yes">Yes</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="no" id="no" aria-invalid="true" />
    <Label htmlFor="no">No</Label>
  </div>
</RadioGroup>
<p className="text-xs text-destructive mt-1">Please select an option.</p>`,
  },

  TV: {
    installation: `import { RadioGroup, RadioGroupItem } from "@vidikit/ui-react";
// Same component — D-pad navigates between options.`,

    basic: `// TV: use larger items for D-pad navigation
// Each radio item gets focus ring on D-pad focus
<RadioGroup defaultValue="hd" className="gap-4">
  <div className="flex items-center gap-4 rounded-lg p-3">
    <RadioGroupItem value="sd" id="sd" className="size-6" />
    <Label htmlFor="sd" className="text-base">SD (480p)</Label>
  </div>
  <div className="flex items-center gap-4 rounded-lg p-3">
    <RadioGroupItem value="hd" id="hd" className="size-6" />
    <Label htmlFor="hd" className="text-base">HD (1080p)</Label>
  </div>
  <div className="flex items-center gap-4 rounded-lg p-3">
    <RadioGroupItem value="4k" id="4k" className="size-6" />
    <Label htmlFor="4k" className="text-base">4K Ultra HD</Label>
  </div>
</RadioGroup>`,
  },

  "Mobile Web": {
    installation: `import { RadioGroup, RadioGroupItem } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: use card-style radios for better touch targets
<RadioGroup defaultValue="monthly" className="gap-3">
  {["Monthly", "Yearly"].map((option) => (
    <label
      key={option}
      className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4
        has-[[data-state=checked]]:border-red-30"
    >
      <RadioGroupItem value={option.toLowerCase()} />
      <span className="text-sm font-medium">{option}</span>
    </label>
  ))}
</RadioGroup>`,
  },

  Android: {
    installation: `// Import in Compose:
import com.vidi.designsystem.components.VidiRadioGroup
import com.vidi.designsystem.components.VidiRadioButton`,

    basic: `var selected by remember { mutableStateOf("option1") }

VidiRadioGroup(
    selected = selected,
    onSelectedChange = { selected = it }
) {
    VidiRadioButton(value = "option1", label = "Default")
    VidiRadioButton(value = "option2", label = "Comfortable")
    VidiRadioButton(value = "option3", label = "Compact")
}`,

    colors: `// Token references from res/values/colors.xml
// Selected:   @color/vidi_red_30    (#FD1B44)
// Unselected: @color/vidi_gray_30   (#A1A1AA)
// Disabled:   @color/vidi_gray_20   (#E4E4E7)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var selection = "option1"

Picker("Display", selection: $selection) {
    Text("Default").tag("option1")
    Text("Comfortable").tag("option2")
    Text("Compact").tag("option3")
}
.pickerStyle(.radioGroup)

// Or use VidiRadioGroup from @vidikit/ui-ios:
VidiRadioGroup(
    selection: $selection,
    options: [
        .init(value: "option1", label: "Default"),
        .init(value: "option2", label: "Comfortable"),
        .init(value: "option3", label: "Compact"),
    ]
)`,

    colors: `// Token references from Colors.swift
Color.vidiRed30   // #FD1B44 — selected
Color.vidiGray30  // #A1A1AA — unselected
Color.vidiGray20  // #E4E4E7 — disabled`,
  },
} as const;

export const radioGroupProps = [
  {
    name: "defaultValue",
    type: "string",
    description: "The value of the initially selected radio item.",
  },
  {
    name: "value",
    type: "string",
    description: "Controlled selected value.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Callback when the selected value changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the entire radio group.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    default: "false",
    description: "Triggers destructive error ring on radio items.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes for the group container.",
  },
];
