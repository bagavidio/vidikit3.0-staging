/**
 * VIDI Docs — Skeleton Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/skeleton/page.tsx
 */

export const skeletonSnippets = {
  React: {
    installation: `import { Skeleton } from "@vidikit/ui-react";`,

    basic: `// Rectangle shape (default)
<Skeleton className="h-4 w-[250px]" />

// Circle shape
<Skeleton className="size-12 rounded-full" />

// Shorter line
<Skeleton className="h-4 w-[200px]" />`,

    card: `// Compose skeletons to mimic a card layout
<div className="flex flex-col gap-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>`,

    list: `// List rows — avatar + text lines
<div className="space-y-4">
  <div className="flex items-center gap-4">
    <Skeleton className="size-10 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  </div>
  <div className="flex items-center gap-4">
    <Skeleton className="size-10 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  </div>
  <div className="flex items-center gap-4">
    <Skeleton className="size-10 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  </div>
</div>`,

    avatar: `// Avatar placeholder — circle + text lines
<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[160px]" />
    <Skeleton className="h-4 w-[120px]" />
  </div>
</div>`,
  },

  TV: {
    installation: `import { Skeleton } from "@vidikit/ui-react";
// TV: use larger dimensions for 10-foot readability.`,

    basic: `// TV skeleton placeholders — use larger sizing
<Skeleton className="h-[200px] w-[350px] rounded-xl" />
<Skeleton className="h-6 w-[300px]" />
<Skeleton className="h-6 w-[220px]" />`,
  },

  "Mobile Web": {
    installation: `import { Skeleton } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed.`,

    basic: `// Mobile Web: full-width skeletons for content loading
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />
<Skeleton className="size-10 rounded-full" />`,
  },

  Android: {
    installation: `// Compose shimmer placeholder
// Copy tokens from @vidikit/ui-android

import com.vidi.designsystem.components.VidiSkeleton
import com.vidi.designsystem.foundation.ShimmerEffect`,

    basic: `// Rectangle shimmer
VidiSkeleton(
    modifier = Modifier
        .fillMaxWidth()
        .height(16.dp)
        .clip(RoundedCornerShape(12.dp))
)

// Circle shimmer
VidiSkeleton(
    modifier = Modifier
        .size(48.dp)
        .clip(CircleShape)
)`,
  },

  iOS: {
    installation: `import SwiftUI
// Use .redacted(reason: .placeholder) for skeleton states.
// Or copy VidiSkeleton from @vidikit/ui-ios.`,

    basic: `// SwiftUI redacted modifier
VStack(alignment: .leading, spacing: 8) {
    RoundedRectangle(cornerRadius: 12)
        .fill(Color.gray.opacity(0.2))
        .frame(height: 125)

    RoundedRectangle(cornerRadius: 8)
        .fill(Color.gray.opacity(0.2))
        .frame(width: 250, height: 16)

    RoundedRectangle(cornerRadius: 8)
        .fill(Color.gray.opacity(0.2))
        .frame(width: 200, height: 16)
}
.redacted(reason: .placeholder)`,
  },
} as const;

export type SkeletonPlatform = keyof typeof skeletonSnippets;

/** Skeleton component props for the PropsTable */
export const skeletonProps = [
  {
    name: "className",
    type: "string",
    default: "\u2014",
    description: "Controls dimensions and shape. Use Tailwind utilities like h-4, w-[250px], rounded-full, etc.",
  },
];
