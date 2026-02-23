/**
 * VIDI Docs — Button Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/button/page.tsx
 */

export const buttonSnippets = {
  React: {
    installation: `import { Button } from "@vidikit/ui-react";`,

    basic: `<Button>Save</Button>
<Button intent="extended">Watch Now</Button>
<Button intent="neutral">Settings</Button>`,

    intents: `// All available intents
<Button intent="primary">Primary</Button>
<Button intent="extended">Extended</Button>
<Button intent="neutral">Neutral</Button>
<Button intent="secondary">Secondary</Button>
<Button intent="ghost">Ghost</Button>
<Button intent="outline">Outline</Button>
<Button intent="destructive">Destructive</Button>
<Button intent="link">Link</Button>`,

    sizes: `<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

// Icon-only
<Button size="icon" aria-label="Add"><PlusIcon /></Button>
<Button size="icon-sm" aria-label="Menu"><MenuIcon /></Button>`,

    withIcons: `import { ArrowRightIcon, PlusCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

<Button
  intent="primary"
  leftIcon={<HugeiconsIcon icon={PlusCircleIcon} />}
>
  Add Item
</Button>

<Button
  intent="extended"
  rightIcon={<HugeiconsIcon icon={ArrowRightIcon} />}
>
  Continue
</Button>`,

    loading: `<Button loading>Saving…</Button>
<Button intent="extended" loading>Loading…</Button>
<Button intent="neutral" size="lg" loading>Processing…</Button>`,

    asLink: `import Link from "next/link";
import { Button } from "@vidikit/ui-react";

<Button asChild intent="primary">
  <Link href="/signup">Get Started</Link>
</Button>`,
  },

  TV: {
    installation: `// TV app: import TVButton instead of Button
import { TVButton } from "@vidikit/ui-react/tv";`,

    basic: `// TVButton locks in platform="tv" automatically.
// 3px red focus ring + scale-[1.02] on D-pad focus.
<TVButton intent="primary">Play</TVButton>
<TVButton intent="extended">Add to List</TVButton>
<TVButton intent="ghost">More Info</TVButton>`,

    intents: `// All intents — same API as Button, TV focus ring auto-applied
<TVButton intent="primary">Play Now</TVButton>
<TVButton intent="extended">Add to Watchlist</TVButton>
<TVButton intent="neutral">Settings</TVButton>
<TVButton intent="ghost">More Info</TVButton>
<TVButton intent="outline">Browse</TVButton>
<TVButton intent="secondary">Trailers</TVButton>`,

    sizes: `// TV: prefer default and lg for 10-foot readability
<TVButton size="default">Play</TVButton>
<TVButton size="lg">Watch Episode 1</TVButton>

// Icon-only — use lg for remote control hit targets
<TVButton size="icon-lg" aria-label="Play">▶</TVButton>`,

    focusVariant: `// Under the hood — what platform="tv" adds:
// focus-visible:ring-[3px] focus-visible:ring-red-30 focus-visible:scale-[1.02]

// You can also pass it directly on Button:
import { Button } from "@vidikit/ui-react";
<Button platform="tv" intent="primary">Play</Button>`,
  },

  "Mobile Web": {
    installation: `import { Button } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed for Mobile Web.`,

    basic: `// Mobile Web uses the same Button component.
// Touch targets are naturally sized by the h-9/h-10 size scale.
<Button intent="primary" size="default">Save</Button>
<Button intent="extended" size="lg">Watch Now</Button>`,

    touchTargets: `// Prefer 'default' (h-9, 36px) or 'lg' (h-10, 40px) for mobile touch
// xs and sm are better suited for desktop-density UIs

// Full-width CTA pattern
<Button intent="primary" size="lg" className="w-full">
  Start Watching
</Button>`,
  },

  Android: {
    installation: `// In your Android module's build.gradle:
// (No Gradle dependency — copy tokens/colors.xml from @vidikit/ui-android)

// Import in Compose:
import com.vidi.designsystem.components.VidiButton
import com.vidi.designsystem.components.ButtonIntent
import com.vidi.designsystem.components.ButtonSize`,

    basic: `VidiButton(
    text = "Save",
    intent = ButtonIntent.Primary,
    onClick = { /* handle click */ }
)

VidiButton(
    text = "Watch Now",
    intent = ButtonIntent.Extended,
    size = ButtonSize.Lg,
    onClick = { /* handle click */ }
)`,

    intents: `// All available intents
VidiButton(text = "Primary",     intent = ButtonIntent.Primary,     onClick = {})
VidiButton(text = "Extended",    intent = ButtonIntent.Extended,    onClick = {})
VidiButton(text = "Neutral",     intent = ButtonIntent.Neutral,     onClick = {})
VidiButton(text = "Ghost",       intent = ButtonIntent.Ghost,       onClick = {})
VidiButton(text = "Outline",     intent = ButtonIntent.Outline,     onClick = {})
VidiButton(text = "Destructive", intent = ButtonIntent.Destructive, onClick = {})`,

    colors: `// Token references from res/values/colors.xml
// Primary:     @color/vidi_red_30    (#FD1B44)
// Extended:    @color/vidi_blue_30   (#0074FF)
// Neutral:     @color/vidi_gray_70   (#0C0D0F)
// Destructive: @color/vidi_state_error (#CA0528)`,
  },

  iOS: {
    installation: `// Copy Sources/VidiKit/ from @vidikit/ui-ios into your Xcode project.
// No SPM dependency required for V1.

import SwiftUI
// VidiButton and Colors.swift are available after copying.`,

    basic: `VidiButton("Save", intent: .primary) {
    // handle tap
}

VidiButton("Watch Now", intent: .extended, size: .lg) {
    // handle tap
}`,

    intents: `// All available intents
VidiButton("Primary",     intent: .primary)     { }
VidiButton("Extended",    intent: .extended)    { }
VidiButton("Neutral",     intent: .neutral)     { }
VidiButton("Ghost",       intent: .ghost)       { }
VidiButton("Outline",     intent: .outline)     { }
VidiButton("Destructive", intent: .destructive) { }`,

    loading: `// Loading state
VidiButton("Saving", isLoading: true) { }

// Disabled state
VidiButton("Locked", isDisabled: true) { }`,

    colors: `// Token references from Colors.swift
Color.vidiRed30   // #FD1B44 — primary
Color.vidiBlue30  // #0074FF — extended
Color.vidiGray70  // #0C0D0F — neutral`,
  },
} as const;

export type ButtonPlatform = keyof typeof buttonSnippets;

/** Button component props for the PropsTable */
export const buttonProps = [
  {
    name: "intent",
    type: '"primary" | "extended" | "neutral" | "secondary" | "ghost" | "outline" | "destructive" | "link"',
    default: '"primary"',
    description: "Controls the visual style and brand color of the button.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "default" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"default"',
    description: "Controls the height and padding. Icon sizes render as a square.",
  },
  {
    name: "platform",
    type: '"default" | "tv"',
    default: '"default"',
    description: 'Platform variant. "tv" applies a 3px focus ring and scale for D-pad navigation.',
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Shows a spinner in the left-icon slot and disables interaction.",
  },
  {
    name: "leftIcon",
    type: "React.ReactNode",
    default: "—",
    description: "Element rendered before the label. Applies adaptive start padding.",
  },
  {
    name: "rightIcon",
    type: "React.ReactNode",
    default: "—",
    description: "Element rendered after the label. Applies adaptive end padding.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders button styles on the child element (e.g. Next.js Link).",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the button. Combined with loading when loading=true.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes merged via cn().",
  },
];
