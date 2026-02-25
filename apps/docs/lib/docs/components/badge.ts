/**
 * VIDI Docs — Badge Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const badgeSnippets = {
  React: {
    installation: `import { Badge } from "@vidikit/ui-react";`,

    basic: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="link">Link</Badge>`,

    withIcon: `// Leading icon via data-icon pattern
<Badge>
  <span data-icon="inline-start" className="size-1.5 rounded-full bg-green-30" />
  Online
</Badge>
<Badge variant="outline">
  <span data-icon="inline-start" className="size-1.5 rounded-full bg-yellow-30" />
  Away
</Badge>`,

    statusSemantics: `// Override colors for semantic meaning
<Badge className="bg-green-30/15 text-green-30 hover:bg-green-30/20">Online</Badge>
<Badge className="bg-yellow-30/15 text-yellow-30 hover:bg-yellow-30/20">Away</Badge>
<Badge className="bg-red-30/15 text-red-30 hover:bg-red-30/20">Critical</Badge>
<Badge className="bg-blue-30/15 text-blue-30 hover:bg-blue-30/20">Info</Badge>
<Badge className="bg-tosca-30/15 text-tosca-30 hover:bg-tosca-30/20">Success</Badge>`,

    count: `// Numeric count badges
<Badge>3</Badge>
<Badge variant="destructive">99+</Badge>
<Badge variant="outline">12</Badge>`,

    asChild: `import Link from "next/link";

<Badge asChild>
  <a href="/notifications">View All (5)</a>
</Badge>`,
  },

  TV: {
    installation: `import { Badge } from "@vidikit/ui-react";
// Same component — use larger text for 10-foot readability.`,

    basic: `// TV: prefer default or secondary for contrast on dark backgrounds
<Badge className="text-sm px-3 py-1">LIVE</Badge>
<Badge variant="destructive" className="text-sm px-3 py-1">NEW</Badge>

// For content badges, ensure minimum 14px font for 10-foot UI
<Badge className="text-sm">HD</Badge>
<Badge className="text-sm">4K</Badge>`,
  },

  "Mobile Web": {
    installation: `import { Badge } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed.`,

    basic: `// Mobile Web: badges are typically non-interactive indicators
<Badge>New</Badge>
<Badge variant="destructive">3</Badge>

// For notification counts on icons, use absolute positioning:
<div className="relative">
  <IconButton />
  <Badge className="absolute -right-1 -top-1 size-5 justify-center p-0">
    3
  </Badge>
</div>`,
  },

  Android: {
    installation: `// Import in Compose:
import com.vidi.designsystem.components.VidiBadge
import com.vidi.designsystem.components.BadgeVariant`,

    basic: `VidiBadge(
    text = "Default",
    variant = BadgeVariant.Default
)

VidiBadge(
    text = "Destructive",
    variant = BadgeVariant.Destructive
)

// Count badge
VidiBadge(text = "99+", variant = BadgeVariant.Destructive)`,

    colors: `// Token references from res/values/colors.xml
// Default bg:     @color/vidi_primary_10  (#FFEAEF)
// Default text:   @color/vidi_red_30      (#FD1B44)
// Destructive bg: @color/vidi_red_30      (#FD1B44)
// Secondary bg:   @color/vidi_gray_10     (#F4F4F5)
// Outline border: @color/vidi_gray_20     (#E4E4E7)`,
  },

  iOS: {
    installation: `// Copy Sources/VidiKit/ from @vidikit/ui-ios into your Xcode project.
import SwiftUI`,

    basic: `VidiBadge("Default", variant: .default)
VidiBadge("Secondary", variant: .secondary)
VidiBadge("Destructive", variant: .destructive)
VidiBadge("Outline", variant: .outline)

// Count badge
VidiBadge("99+", variant: .destructive)`,

    colors: `// Token references from Colors.swift
Color.vidiRed30       // #FD1B44 — default badge
Color.vidiRed10       // #FFEAEF — default bg
Color.vidiGray10      // #F4F4F5 — secondary bg`,
  },
} as const;

export const badgeProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
    default: '"default"',
    description: "Controls the visual style of the badge.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders badge styles on the child element (e.g. anchor tag).",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes merged via cn(). Use for semantic color overrides.",
  },
];
