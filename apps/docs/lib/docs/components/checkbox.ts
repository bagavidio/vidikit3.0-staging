/**
 * VIDI Docs — Checkbox Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const checkboxSnippets = {
  React: {
    installation: `import { Checkbox } from "@vidikit/ui-react";
import { Label } from "@vidikit/ui-react";`,

    basic: `<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms and conditions</Label>`,

    states: `// Unchecked (default)
<Checkbox />

// Checked
<Checkbox defaultChecked />

// Indeterminate (tri-state)
<Checkbox checked="indeterminate" />

// Disabled
<Checkbox disabled />

// Disabled + Checked
<Checkbox disabled defaultChecked />`,

    withLabel: `<div className="flex items-start gap-3">
  <Checkbox id="newsletter" className="mt-0.5" />
  <div>
    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
    <p className="text-sm text-muted-foreground">
      Get weekly updates about new components and tokens.
    </p>
  </div>
</div>`,

    group: `<fieldset className="space-y-3">
  <legend className="text-sm font-medium">Notifications</legend>
  <div className="flex items-center gap-2">
    <Checkbox id="email" defaultChecked />
    <Label htmlFor="email">Email</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="sms" />
    <Label htmlFor="sms">SMS</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="push" defaultChecked />
    <Label htmlFor="push">Push notifications</Label>
  </div>
</fieldset>`,

    error: `<div className="flex items-center gap-2">
  <Checkbox id="agree" aria-invalid="true" />
  <Label htmlFor="agree">I agree to the terms</Label>
</div>
<p className="text-xs text-destructive mt-1">
  You must agree to continue.
</p>`,
  },

  TV: {
    installation: `import { Checkbox } from "@vidikit/ui-react";
// Same component — D-pad focusable with 3px ring.`,

    basic: `// TV: checkboxes should have larger tap targets
// Use in settings screens or preference panels
<div className="flex items-center gap-4 rounded-lg p-3 focus-within:ring-2 focus-within:ring-red-30">
  <Checkbox id="subtitles" className="size-6" />
  <Label htmlFor="subtitles" className="text-base">
    Enable subtitles
  </Label>
</div>

// Note: checkbox is focusable via D-pad.
// Toggle with Enter/Select button.`,
  },

  "Mobile Web": {
    installation: `import { Checkbox } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: ensure 44px minimum touch target
<div className="flex items-center gap-3 py-2">
  <Checkbox id="remember" />
  <Label htmlFor="remember">Remember me</Label>
</div>

// The default Checkbox is 16px but the touch target
// extends via padding on the parent container.`,
  },

  Android: {
    installation: `// Import in Compose:
import com.vidi.designsystem.components.VidiCheckbox`,

    basic: `var checked by remember { mutableStateOf(false) }

VidiCheckbox(
    checked = checked,
    onCheckedChange = { checked = it },
    label = "Accept terms"
)

// Indeterminate state
VidiCheckbox(
    checked = null, // null = indeterminate
    onCheckedChange = { },
    label = "Select all"
)`,

    colors: `// Token references from res/values/colors.xml
// Checked:       @color/vidi_red_30    (#FD1B44)
// Unchecked:     @color/vidi_gray_30   (#A1A1AA)
// Indeterminate: @color/vidi_red_30    (#FD1B44)
// Disabled:      @color/vidi_gray_20   (#E4E4E7)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var isChecked = false

Toggle(isOn: $isChecked) {
    Text("Accept terms")
}
.toggleStyle(.checkbox)

// Indeterminate not natively supported in SwiftUI.
// Use a custom VidiCheckbox view from @vidikit/ui-ios:
VidiCheckbox(
    state: .indeterminate,
    label: "Select all"
) { newState in
    // handle change
}`,

    colors: `// Token references from Colors.swift
Color.vidiRed30   // #FD1B44 — checked tint
Color.vidiGray30  // #A1A1AA — unchecked border
Color.vidiGray20  // #E4E4E7 — disabled`,
  },
} as const;

export const checkboxProps = [
  {
    name: "checked",
    type: 'boolean | "indeterminate"',
    default: "false",
    description: "Controlled checked state. Pass \"indeterminate\" for tri-state.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Uncontrolled initial checked state.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Callback when the checked state changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the checkbox.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    default: "false",
    description: "Triggers destructive error ring styling.",
  },
  {
    name: "id",
    type: "string",
    description: "Associates the checkbox with a Label via htmlFor.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes merged via cn().",
  },
];
