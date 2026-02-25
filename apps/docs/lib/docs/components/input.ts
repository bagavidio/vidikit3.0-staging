/**
 * VIDI Docs — Input Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const inputSnippets = {
  React: {
    installation: `import { Input } from "@vidikit/ui-react";
import { Label } from "@vidikit/ui-react";`,

    basic: `<Input placeholder="Enter your name" />
<Input defaultValue="vidio@example.com" />`,

    types: `<Input type="text" placeholder="Full name" />
<Input type="email" placeholder="you@example.com" />
<Input type="password" placeholder="Password" />
<Input type="search" placeholder="Search..." />
<Input type="number" placeholder="0" />
<Input type="url" placeholder="https://" />
<Input type="tel" placeholder="+62" />
<Input type="date" />`,

    states: `// Normal
<Input placeholder="Normal" />

// Disabled
<Input placeholder="Disabled" disabled />

// Error (aria-invalid)
<Input placeholder="Error" aria-invalid="true" />

// Read-only
<Input defaultValue="Read only" readOnly />`,

    withLabel: `<div className="space-y-2">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <p className="text-xs text-muted-foreground">
    We'll never share your email.
  </p>
</div>`,

    file: `<Input type="file" />`,
  },

  TV: {
    installation: `import { Input } from "@vidikit/ui-react";
// TV: text input triggers on-screen keyboard.`,

    basic: `// TV: prefer large size inputs for readability
// On-screen keyboard opens when input is focused via D-pad
<Input
  placeholder="Search movies..."
  className="h-12 text-base"
/>

// Consider voice search as primary input method on TV
// Text input should be a fallback option.`,
  },

  "Mobile Web": {
    installation: `import { Input } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: use appropriate type for virtual keyboard
<Input type="email" placeholder="Email" />    {/* @ key visible */}
<Input type="tel" placeholder="Phone" />      {/* numeric keypad */}
<Input type="url" placeholder="Website" />    {/* .com key visible */}
<Input type="search" placeholder="Search" />  {/* search action key */}

// Use inputMode for more keyboard control:
<Input inputMode="numeric" placeholder="Amount" />`,
  },

  Android: {
    installation: `// Import in Compose:
import com.vidi.designsystem.components.VidiTextField
import com.vidi.designsystem.components.TextFieldState`,

    basic: `var text by remember { mutableStateOf("") }

VidiTextField(
    value = text,
    onValueChange = { text = it },
    placeholder = "Enter your name",
    label = "Full name"
)

// Error state
VidiTextField(
    value = text,
    onValueChange = { text = it },
    state = TextFieldState.Error,
    errorMessage = "This field is required"
)

// Disabled
VidiTextField(
    value = text,
    onValueChange = {},
    enabled = false,
    placeholder = "Disabled"
)`,

    colors: `// Token references from res/values/colors.xml
// Border:      @color/vidi_gray_20   (#E4E4E7)
// Focus ring:  @color/vidi_red_30    (#FD1B44)
// Error ring:  @color/vidi_state_error (#CA0528)
// Placeholder: @color/vidi_gray_30   (#A1A1AA)
// Text:        @color/vidi_gray_70   (#0C0D0F)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var text = ""

TextField("Enter your name", text: $text)
    .textFieldStyle(.roundedBorder)

// Or use VidiTextField from @vidikit/ui-ios:
VidiTextField(
    "Full name",
    text: $text,
    placeholder: "Enter your name"
)

// Error state
VidiTextField(
    "Email",
    text: $email,
    state: .error,
    errorMessage: "Invalid email"
)

// Disabled
VidiTextField(
    "Disabled",
    text: $text
)
.disabled(true)`,

    colors: `// Token references from Colors.swift
Color.vidiGray20  // #E4E4E7 — border
Color.vidiRed30   // #FD1B44 — focus ring
Color.vidiGray30  // #A1A1AA — placeholder
Color.vidiGray70  // #0C0D0F — text`,
  },
} as const;

export const inputProps = [
  {
    name: "type",
    type: '"text" | "email" | "password" | "search" | "number" | "url" | "tel" | "date" | "file"',
    default: '"text"',
    description: "HTML input type. Affects virtual keyboard on mobile.",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Hint text shown when the input is empty.",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "Uncontrolled initial value.",
  },
  {
    name: "value",
    type: "string",
    description: "Controlled value.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input.",
  },
  {
    name: "readOnly",
    type: "boolean",
    default: "false",
    description: "Makes the input non-editable but still selectable.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    default: "false",
    description: "Triggers destructive error ring styling.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes merged via cn().",
  },
];
