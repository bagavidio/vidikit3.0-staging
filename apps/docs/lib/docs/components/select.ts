/**
 * VIDI Docs — Select Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const selectSnippets = {
  React: {
    installation: `import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem,
  SelectGroup, SelectLabel, SelectSeparator,
} from "@vidikit/ui-react";`,

    basic: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="strawberry">Strawberry</SelectItem>
  </SelectContent>
</Select>`,

    groups: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select food..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="grape">Grape</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="spinach">Spinach</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,

    sizes: `{/* Default size (h-9) */}
<Select>
  <SelectTrigger size="default">
    <SelectValue placeholder="Default size" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>

{/* Small size (h-8) */}
<Select>
  <SelectTrigger size="sm">
    <SelectValue placeholder="Small size" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`,

    states: `{/* Disabled select */}
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`,

    form: `{/* Select with Label */}
<div className="space-y-2">
  <Label htmlFor="fruit">Fruit</Label>
  <Select>
    <SelectTrigger id="fruit">
      <SelectValue placeholder="Pick a fruit..." />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="grape">Grape</SelectItem>
    </SelectContent>
  </Select>
</div>`,
  },

  TV: {
    installation: `// TV: select dropdowns are not recommended for D-pad navigation.
// Use a focus-managed list or dialog picker instead.`,

    basic: `// Alternative pattern for TV: use a Dialog with selectable list
// Select dropdowns rely on pointer interaction unavailable on TV.
//
// Recommended TV alternatives:
// 1. Full-screen picker list
// 2. Dialog with radio-style options
// 3. Inline expandable section with D-pad focus
//
// import { Dialog, DialogContent, DialogTrigger } from "@vidikit/ui-react";
// <Dialog>
//   <DialogTrigger asChild>
//     <Button intent="outline">Choose fruit</Button>
//   </DialogTrigger>
//   <DialogContent>
//     {/* Focusable list of selectable items */}
//   </DialogContent>
// </Dialog>`,
  },

  "Mobile Web": {
    installation: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: custom select works well for short lists.
// For very long option lists, consider a Sheet or native <select>.
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="strawberry">Strawberry</SelectItem>
  </SelectContent>
</Select>`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuBoxScope
import androidx.compose.material3.DropdownMenuItem
import com.vidi.designsystem.theme.VidiTheme`,

    basic: `var expanded by remember { mutableStateOf(false) }
var selectedOption by remember { mutableStateOf("") }

ExposedDropdownMenuBox(
    expanded = expanded,
    onExpandedChange = { expanded = it }
) {
    OutlinedTextField(
        value = selectedOption,
        onValueChange = {},
        readOnly = true,
        placeholder = { Text("Select a fruit...") },
        trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded) },
        modifier = Modifier.menuAnchor(),
        shape = RoundedCornerShape(50)
    )
    ExposedDropdownMenu(
        expanded = expanded,
        onDismissRequest = { expanded = false }
    ) {
        DropdownMenuItem(
            text = { Text("Apple") },
            onClick = { selectedOption = "Apple"; expanded = false }
        )
        DropdownMenuItem(
            text = { Text("Banana") },
            onClick = { selectedOption = "Banana"; expanded = false }
        )
        DropdownMenuItem(
            text = { Text("Grape") },
            onClick = { selectedOption = "Grape"; expanded = false }
        )
    }
}`,

    colors: `// Token references from res/values/colors.xml
// Trigger bg:     @color/vidi_gray_60   (#27272A)
// Trigger text:   @color/vidi_gray_10   (#F4F4F5)
// Placeholder:    @color/vidi_gray_40   (#52525B)
// Dropdown bg:    @color/vidi_gray_60   (#27272A)
// Item text:      @color/vidi_gray_10   (#F4F4F5)
// Selected check: @color/vidi_primary   (#FD1B44)
// Border:         @color/vidi_gray_50   (#3F3F46)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var selectedFruit: String = ""

Picker("Select a fruit", selection: $selectedFruit) {
    Text("Apple").tag("apple")
    Text("Banana").tag("banana")
    Text("Grape").tag("grape")
    Text("Orange").tag("orange")
    Text("Strawberry").tag("strawberry")
}
.pickerStyle(.menu)

// Grouped picker with sections
Picker("Select food", selection: $selectedFood) {
    Section("Fruits") {
        Text("Apple").tag("apple")
        Text("Banana").tag("banana")
    }
    Section("Vegetables") {
        Text("Carrot").tag("carrot")
        Text("Broccoli").tag("broccoli")
    }
}
.pickerStyle(.menu)`,

    colors: `// Token references from Colors.swift
Color.vidiGray60  // #27272A — trigger bg (dark mode)
Color.vidiGray10  // #F4F4F5 — trigger text
Color.vidiGray40  // #52525B — placeholder text
Color.vidiPrimary // #FD1B44 — selected indicator`,
  },
} as const;

export const selectProps = [
  {
    name: "defaultValue",
    type: "string",
    description: "The initial value when uncontrolled.",
  },
  {
    name: "value",
    type: "string",
    description: "The controlled value of the select.",
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
    description: "Prevents user interaction with the select.",
  },
  {
    name: "open",
    type: "boolean",
    description: "Controlled open state of the dropdown.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback when the dropdown open state changes.",
  },
  {
    name: "SelectTrigger.size",
    type: '"sm" | "default"',
    default: '"default"',
    description: "Controls the height of the trigger. Default is h-9, sm is h-8.",
  },
  {
    name: "SelectTrigger.className",
    type: "string",
    description: "Additional CSS classes to apply to the trigger element.",
  },
];
