/**
 * VIDI Docs — Scroll Area Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/scroll-area/page.tsx
 */

export const scrollAreaSnippets = {
  React: {
    installation: `import { ScrollArea, ScrollBar } from "@vidikit/ui-react";`,

    basic: `<ScrollArea className="h-72 w-48 rounded-xl border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag, i) => (
      <div key={tag}>
        <div className="text-sm">{tag}</div>
        {i < tags.length - 1 && <Separator className="my-2" />}
      </div>
    ))}
  </div>
</ScrollArea>`,

    horizontal: `<ScrollArea className="w-96 whitespace-nowrap rounded-xl border">
  <div className="flex w-max gap-4 p-4">
    {items.map((_, i) => (
      <div
        key={i}
        className="size-36 shrink-0 rounded-xl bg-muted"
      />
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`,

    both: `{/* Constrained grid with both scrollbars */}
<ScrollArea className="h-72 w-96 rounded-xl border">
  <div className="grid w-max grid-cols-6 gap-4 p-4">
    {Array.from({ length: 60 }, (_, i) => (
      <div
        key={i}
        className="size-24 rounded-xl bg-muted"
      />
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`,
  },

  TV: {
    installation: `// TV app: same ScrollArea — D-pad scrolls content automatically.
import { ScrollArea, ScrollBar } from "@vidikit/ui-react/tv";`,

    basic: `// TV: use larger items for 10-foot readability
<ScrollArea className="h-80 w-full rounded-xl border">
  <div className="p-6 space-y-4">
    {items.map((item) => (
      <div key={item} className="text-base">{item}</div>
    ))}
  </div>
</ScrollArea>`,
  },

  "Mobile Web": {
    installation: `import { ScrollArea, ScrollBar } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed.`,

    basic: `// Mobile Web: ScrollArea provides custom scrollbar overlay.
// On touch devices the native momentum scroll is preserved.
<ScrollArea className="h-64 w-full rounded-xl border">
  <div className="p-4 space-y-3">
    {items.map((item) => (
      <div key={item} className="text-sm">{item}</div>
    ))}
  </div>
</ScrollArea>`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items`,

    basic: `// Vertical scrollable list
LazyColumn(
    modifier = Modifier
        .height(256.dp)
        .fillMaxWidth()
) {
    items(tags) { tag ->
        Text(
            text = tag,
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
        )
        Divider()
    }
}

// Horizontal scrollable row
LazyRow(
    horizontalArrangement = Arrangement.spacedBy(16.dp),
    contentPadding = PaddingValues(horizontal = 16.dp)
) {
    items(thumbnails) { thumb ->
        Box(
            modifier = Modifier
                .size(144.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(MaterialTheme.colorScheme.surfaceVariant)
        )
    }
}`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `// Vertical scroll
ScrollView {
    LazyVStack(alignment: .leading, spacing: 8) {
        ForEach(tags, id: \\.self) { tag in
            Text(tag)
                .padding(.horizontal, 16)
            Divider()
        }
    }
}
.frame(height: 256)

// Horizontal scroll
ScrollView(.horizontal, showsIndicators: false) {
    LazyHStack(spacing: 16) {
        ForEach(0..<20, id: \\.self) { _ in
            RoundedRectangle(cornerRadius: 12)
                .fill(Color.gray.opacity(0.2))
                .frame(width: 144, height: 144)
        }
    }
    .padding(.horizontal, 16)
}`,
  },
} as const;

export type ScrollAreaPlatform = keyof typeof scrollAreaSnippets;

/** ScrollArea component props for the PropsTable */
export const scrollAreaProps = [
  {
    name: "className",
    type: "string",
    default: "\u2014",
    description:
      "Additional Tailwind classes merged via cn(). Set a fixed height (e.g. h-72) to enable vertical scrolling.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "\u2014",
    description: "Content to render inside the scrollable viewport.",
  },
];

/** ScrollBar component props for the PropsTable */
export const scrollBarProps = [
  {
    name: "orientation",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description:
      'Direction of the scrollbar. Only vertical is rendered by default \u2014 add <ScrollBar orientation="horizontal" /> explicitly for horizontal scrolling.',
  },
];
