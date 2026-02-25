/**
 * VIDI Docs — Tooltip Component Snippets
 * ---------------------------------------------------------
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/tooltip/page.tsx
 */

export const tooltipSnippets = {
  React: {
    installation: `import { Tooltip, TooltipContent, TooltipTrigger } from "@vidikit/ui-react";`,

    basic: `<Tooltip>
  <TooltipTrigger asChild>
    <Button intent="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>`,

    sides: `{/* Top (default) */}
<Tooltip>
  <TooltipTrigger asChild>
    <Button intent="outline" size="sm">Top</Button>
  </TooltipTrigger>
  <TooltipContent side="top">
    <p>Top tooltip</p>
  </TooltipContent>
</Tooltip>

{/* Right */}
<Tooltip>
  <TooltipTrigger asChild>
    <Button intent="outline" size="sm">Right</Button>
  </TooltipTrigger>
  <TooltipContent side="right">
    <p>Right tooltip</p>
  </TooltipContent>
</Tooltip>

{/* Bottom */}
<Tooltip>
  <TooltipTrigger asChild>
    <Button intent="outline" size="sm">Bottom</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom">
    <p>Bottom tooltip</p>
  </TooltipContent>
</Tooltip>

{/* Left */}
<Tooltip>
  <TooltipTrigger asChild>
    <Button intent="outline" size="sm">Left</Button>
  </TooltipTrigger>
  <TooltipContent side="left">
    <p>Left tooltip</p>
  </TooltipContent>
</Tooltip>`,

    withKbd: `<Tooltip>
  <TooltipTrigger asChild>
    <Button intent="outline">Bold</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>
      Bold
      <kbd className="ml-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">
        \u2318B
      </kbd>
    </p>
  </TooltipContent>
</Tooltip>`,
  },

  TV: {
    installation: `// TV: tooltips are triggered on D-pad focus instead of hover.
// Import from the TV-specific entry point:
import { Tooltip, TooltipContent, TooltipTrigger } from "@vidikit/ui-react/tv";`,

    basic: `// On TV, tooltips appear on focus (D-pad navigation).
<Tooltip>
  <TooltipTrigger asChild>
    <TVButton intent="outline">Info</TVButton>
  </TooltipTrigger>
  <TooltipContent>
    <p>More information</p>
  </TooltipContent>
</Tooltip>`,
  },

  "Mobile Web": {
    installation: `import { Tooltip, TooltipContent, TooltipTrigger } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed.`,

    basic: `// Note: tooltips rely on hover which is unavailable on touch devices.
// Use tooltips as progressive enhancement — critical info should
// always be visible without requiring a hover interaction.
//
// On mobile, consider using a Popover or inline helper text instead.
<Tooltip>
  <TooltipTrigger asChild>
    <Button intent="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This tooltip works on pointer devices only</p>
  </TooltipContent>
</Tooltip>`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.material3.PlainTooltip
import androidx.compose.material3.TooltipBox
import androidx.compose.material3.TooltipDefaults
import androidx.compose.material3.rememberTooltipState`,

    basic: `TooltipBox(
    positionProvider = TooltipDefaults.rememberPlainTooltipPositionProvider(),
    tooltip = {
        PlainTooltip {
            Text("This is a tooltip")
        }
    },
    state = rememberTooltipState()
) {
    Button(onClick = {}) {
        Text("Long press me")
    }
}`,
  },

  iOS: {
    installation: `import SwiftUI
// Use the .help() modifier for native tooltip behavior.`,

    basic: `Button("Hover me") {
    // handle tap
}
.help("This is a tooltip")

// For more complex tooltips, use a popover:
Button("Info") {
    showPopover = true
}
.popover(isPresented: $showPopover) {
    Text("Detailed information here")
        .padding()
}`,
  },
} as const;

export type TooltipPlatform = keyof typeof tooltipSnippets;

/** Tooltip component props for the PropsTable */
export const tooltipProps = [
  {
    name: "delayDuration",
    type: "number",
    default: "0",
    description:
      "Duration in milliseconds before the tooltip opens after the pointer enters the trigger.",
  },
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"top"',
    description: "The preferred side of the trigger to render the tooltip on.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "0",
    description: "Distance in pixels between the tooltip and the trigger.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "\u2014",
    description: "TooltipTrigger + TooltipContent.",
  },
];
