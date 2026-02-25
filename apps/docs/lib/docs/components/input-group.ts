/**
 * VIDI Docs — Input Group Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const inputGroupSnippets = {
  React: {
    installation: `import {
  InputGroup, InputGroupAddon, InputGroupInput,
  InputGroupButton, InputGroupText, InputGroupTextarea,
} from "@vidikit/ui-react";`,

    inlineStart: `// Search with leading icon
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>

// @ prefix
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>@</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="username" />
</InputGroup>`,

    inlineEnd: `// With trailing button
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`,

    bothInline: `// Leading icon + trailing button
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search components..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>
      <kbd className="text-[10px]">⌘K</kbd>
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>

// Currency input
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput type="number" placeholder="0.00" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>USD</InputGroupText>
  </InputGroupAddon>
</InputGroup>`,

    blockStart: `// Label above input
<InputGroup>
  <InputGroupAddon align="block-start">
    <InputGroupText>app.vidi.id /</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="your-page" />
</InputGroup>`,

    withTextarea: `<InputGroup>
  <InputGroupAddon align="inline-start">
    <NoteIcon className="size-4" />
  </InputGroupAddon>
  <InputGroupTextarea rows={3} placeholder="Write a message..." />
</InputGroup>`,

    error: `<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>@</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="username" aria-invalid="true" />
</InputGroup>
<p className="text-xs text-destructive mt-1">Username is already taken.</p>`,
  },

  TV: {
    installation: `import { InputGroup, InputGroupAddon, InputGroupInput } from "@vidikit/ui-react";
// Same component — use larger sizing for TV.`,

    basic: `// TV: input groups are used in search and settings
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon className="size-5" />
  </InputGroupAddon>
  <InputGroupInput
    placeholder="Search movies, shows..."
    className="h-12 text-base"
  />
</InputGroup>`,
  },

  "Mobile Web": {
    installation: `import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: search with submit button pattern
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon className="size-4" />
  </InputGroupAddon>
  <InputGroupInput
    type="search"
    placeholder="Search..."
    enterKeyHint="search"
  />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Go</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`,
  },

  Android: {
    installation: `// Import in Compose:
import com.vidi.designsystem.components.VidiTextField`,

    basic: `var text by remember { mutableStateOf("") }

// With leading icon
VidiTextField(
    value = text,
    onValueChange = { text = it },
    placeholder = "Search...",
    leadingIcon = { Icon(Icons.Filled.Search, "Search") }
)

// With leading text and trailing text
VidiTextField(
    value = text,
    onValueChange = { text = it },
    prefix = "$",
    suffix = "USD",
    placeholder = "0.00",
    keyboardType = KeyboardType.Number
)`,

    colors: `// Token references from res/values/colors.xml
// Addon bg:    @color/vidi_gray_10   (#F4F4F5)
// Addon text:  @color/vidi_gray_40   (#71717A)
// Border:      @color/vidi_gray_20   (#E4E4E7)
// Focus ring:  @color/vidi_red_30    (#FD1B44)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var text = ""

// With leading icon
HStack {
    Image(systemName: "magnifyingglass")
        .foregroundStyle(.secondary)
    TextField("Search...", text: $text)
}
.padding(.horizontal, 12)
.padding(.vertical, 8)
.background(Color.vidiGray10)
.clipShape(RoundedRectangle(cornerRadius: 8))

// Or use VidiInputGroup from @vidikit/ui-ios:
VidiInputGroup {
    VidiInputGroupAddon(.inlineStart) {
        Image(systemName: "magnifyingglass")
    }
    VidiInputGroupField("Search...", text: $text)
}`,

    colors: `// Token references from Colors.swift
Color.vidiGray10  // #F4F4F5 — addon bg
Color.vidiGray40  // #71717A — addon text
Color.vidiGray20  // #E4E4E7 — border
Color.vidiRed30   // #FD1B44 — focus ring`,
  },
} as const;

export const inputGroupProps = [
  {
    name: "children",
    type: "React.ReactNode",
    required: true,
    description: "InputGroupAddon, InputGroupInput, InputGroupButton, etc.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes for the group container.",
  },
];
