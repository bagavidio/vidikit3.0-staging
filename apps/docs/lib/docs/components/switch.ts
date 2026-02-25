/**
 * VIDI Docs — Switch Component Snippets
 * ---------------------------------------------------------
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/switch/page.tsx
 */

export const switchSnippets = {
  React: {
    installation: `import { Switch } from "@vidikit/ui-react";

// The Switch uses data-checked:bg-primary which maps to
// Brand Red (#CA0528) in dark mode for the active track.`,

    basic: `<Switch />
<Switch defaultChecked />`,

    sizes: `// Default size (18.4px tall, 32px wide)
<Switch />

// Small size (14px tall, 24px wide)
<Switch size="sm" />`,

    states: `// Normal (unchecked)
<Switch />

// Checked
<Switch defaultChecked />

// Disabled
<Switch disabled />

// Disabled + Checked
<Switch disabled defaultChecked />`,

    withLabel: `<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`,

    form: `<div className="space-y-4 rounded-xl border border-border p-4">
  <h3 className="text-sm font-semibold">Settings</h3>

  <div className="flex items-center justify-between gap-4">
    <div>
      <Label htmlFor="s-notif" className="text-sm">Notifications</Label>
      <p className="text-xs text-muted-foreground">Receive push notifications</p>
    </div>
    <Switch id="s-notif" defaultChecked />
  </div>

  <div className="flex items-center justify-between gap-4">
    <div>
      <Label htmlFor="s-dark" className="text-sm">Dark Mode</Label>
      <p className="text-xs text-muted-foreground">Use dark theme across the app</p>
    </div>
    <Switch id="s-dark" defaultChecked />
  </div>

  <div className="flex items-center justify-between gap-4">
    <div>
      <Label htmlFor="s-auto" className="text-sm">Auto-play</Label>
      <p className="text-xs text-muted-foreground">Automatically play next episode</p>
    </div>
    <Switch id="s-auto" />
  </div>
</div>`,
  },

  TV: {
    installation: `import { Switch } from "@vidikit/ui-react";
// Same component — D-pad focusable with 3px ring.`,

    basic: `// TV: switches should have larger touch/focus targets
// Use in settings screens or preference panels
<div className="flex items-center gap-4 rounded-lg p-3 focus-within:ring-2 focus-within:ring-red-30">
  <Switch id="subtitles" />
  <Label htmlFor="subtitles" className="text-base">
    Enable subtitles
  </Label>
</div>

// Note: switch is focusable via D-pad.
// Toggle with Enter/Select button.`,
  },

  "Mobile Web": {
    installation: `import { Switch } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: ensure 44px minimum touch target
<div className="flex items-center gap-3 py-2">
  <Switch id="remember" />
  <Label htmlFor="remember">Remember me</Label>
</div>

// The Switch has an extended touch area via
// after:absolute after:-inset-x-3 after:-inset-y-2.`,
  },

  Android: {
    installation: `// Import in Compose (Material3 Switch):
import androidx.compose.material3.Switch
import com.vidi.designsystem.theme.VidiColors`,

    basic: `var checked by remember { mutableStateOf(false) }

Switch(
    checked = checked,
    onCheckedChange = { checked = it },
    colors = SwitchDefaults.colors(
        checkedTrackColor = VidiColors.Red50
    )
)`,

    colors: `// Token references from res/values/colors.xml
// Active track:   @color/vidi_red_50    (#CA0528)
// Inactive track: @color/vidi_gray_20   (#E4E4E7)
// Thumb:          @color/vidi_white      (#FFFFFF)
// Disabled:       @color/vidi_gray_20   (#E4E4E7)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var isOn = false

Toggle(isOn: $isOn) {
    Text("Enable notifications")
}
.tint(Color.vidiRed50)`,

    colors: `// Token references from Colors.swift
Color.vidiRed50   // #CA0528 — active track tint
Color.vidiGray20  // #E4E4E7 — inactive track
Color.vidiWhite   // #FFFFFF — thumb`,
  },
} as const;

export type SwitchPlatform = keyof typeof switchSnippets;

/** Switch component props for the PropsTable */
export const switchProps = [
  {
    name: "checked",
    type: "boolean",
    default: "false",
    description: "Controlled checked state of the switch.",
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
    default: "---",
    description: "Callback fired when the checked state changes.",
  },
  {
    name: "size",
    type: '"sm" | "default"',
    default: '"default"',
    description: "Controls the height and width of the switch track and thumb.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the switch. Reduces opacity and blocks interaction.",
  },
  {
    name: "className",
    type: "string",
    default: "---",
    description: "Additional Tailwind classes merged via cn().",
  },
];
