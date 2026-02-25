/**
 * VIDI Docs — Separator Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/separator/page.tsx
 */

export const separatorSnippets = {
  React: {
    installation: `import { Separator } from "@vidikit/ui-react";`,

    basic: `<p>Content above</p>
<Separator />
<p>Content below</p>`,

    vertical: `<div className="flex h-5 items-center space-x-4">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>`,

    withLabel: `<div className="flex items-center gap-4">
  <Separator className="flex-1" />
  <span className="text-xs text-muted-foreground">or</span>
  <Separator className="flex-1" />
</div>`,
  },

  TV: {
    installation: `import { Separator } from "@vidikit/ui-react/tv";`,

    basic: `<Separator />
<Separator orientation="vertical" />`,
  },

  "Mobile Web": {
    installation: `import { Separator } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed for Mobile Web.`,

    basic: `// Mobile Web uses the same Separator component.
<Separator />
<Separator orientation="vertical" />`,
  },

  Android: {
    installation: `import com.vidi.designsystem.components.VidiDivider`,

    basic: `VidiDivider()

VidiDivider(
    orientation = DividerOrientation.Vertical,
    modifier = Modifier.height(24.dp)
)`,

    colors: `// Token references from res/values/colors.xml
// Default divider: @color/vidi_border (#27272A)
// Subtle divider: @color/vidi_border_muted (#3F3F46)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `Divider()`,

    colors: `// Token references from Colors.swift
Color.vidiBorder   // default divider color
Color.vidiBorderMuted  // subtle divider color`,
  },
} as const;

export type SeparatorPlatform = keyof typeof separatorSnippets;

/** Separator component props for the PropsTable */
export const separatorProps = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description:
      "Controls the direction of the separator. Horizontal renders a full-width line; vertical renders a self-stretching vertical line.",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "true",
    description:
      'When true, the separator is purely visual and hidden from screen readers (role="none"). Set to false if it semantically divides content.',
  },
  {
    name: "className",
    type: "string",
    default: "\u2014",
    description: "Additional Tailwind classes merged via cn().",
  },
];
