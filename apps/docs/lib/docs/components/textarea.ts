/**
 * VIDI Docs — Textarea Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/textarea/page.tsx
 */

export const textareaSnippets = {
  React: {
    installation: `import { Textarea } from "@vidikit/ui-react";`,

    basic: `<Textarea placeholder="Type your message here..." />`,

    states: `// Normal
<Textarea placeholder="Normal" />

// Disabled
<Textarea placeholder="Disabled" disabled />

// Error (aria-invalid)
<Textarea placeholder="Error" aria-invalid="true" />

// Read-only
<Textarea defaultValue="This content is read-only and cannot be edited." readOnly />`,

    withLabel: `<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
  <p className="text-xs text-muted-foreground">
    Max 500 characters.
  </p>
</div>`,

    autoResize: `{/* The textarea grows automatically as you type.
   Uses CSS field-sizing: content — no JS required. */}
<Textarea placeholder="Start typing... the textarea grows automatically." />`,
  },

  TV: {
    installation: `import { Textarea } from "@vidikit/ui-react";
// TV: multi-line text input triggers on-screen keyboard.`,

    basic: `// TV: prefer larger text areas for 10-foot readability
// On-screen keyboard opens when textarea is focused via D-pad
<Textarea
  placeholder="Leave a comment..."
  className="min-h-24 text-base"
/>`,
  },

  "Mobile Web": {
    installation: `import { Textarea } from "@vidikit/ui-react";
// Same import as React — no platform-specific build needed.`,

    basic: `// Mobile Web uses the same Textarea component.
// Auto-resize via field-sizing-content works on supported browsers.
<Textarea placeholder="Write your review..." />

// Fixed height fallback
<Textarea placeholder="Your message..." rows={4} />`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.material3.OutlinedTextField
import com.vidi.designsystem.theme.VidiTheme`,

    basic: `var text by remember { mutableStateOf("") }

OutlinedTextField(
    value = text,
    onValueChange = { text = it },
    placeholder = { Text("Type your message here...") },
    modifier = Modifier
        .fillMaxWidth()
        .heightIn(min = 120.dp),
    maxLines = Int.MAX_VALUE
)`,

    colors: `// Token references from res/values/colors.xml
// Border:      @color/vidi_gray_20   (#E4E4E7)
// Focus ring:  @color/vidi_red_30    (#FD1B44)
// Error ring:  @color/vidi_state_error (#CA0528)
// Placeholder: @color/vidi_gray_30   (#A1A1AA)
// Text:        @color/vidi_gray_70   (#0C0D0F)`,
  },

  iOS: {
    installation: `import SwiftUI
// TextEditor is the native SwiftUI multi-line text input.`,

    basic: `@State private var text = ""

TextEditor(text: $text)
    .frame(minHeight: 120)
    .overlay(
        RoundedRectangle(cornerRadius: 12)
            .stroke(Color.vidiGray20, lineWidth: 1)
    )
    .padding(4)

// Or use VidiTextArea from @vidikit/ui-ios:
VidiTextArea(
    "Bio",
    text: $text,
    placeholder: "Tell us about yourself..."
)`,

    colors: `// Token references from Colors.swift
Color.vidiGray20  // #E4E4E7 — border
Color.vidiRed30   // #FD1B44 — focus ring
Color.vidiGray30  // #A1A1AA — placeholder
Color.vidiGray70  // #0C0D0F — text`,
  },
} as const;

export type TextareaPlatform = keyof typeof textareaSnippets;

/** Textarea component props for the PropsTable */
export const textareaProps = [
  {
    name: "placeholder",
    type: "string",
    description: "Hint text shown when the textarea is empty.",
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
    description: "Disables the textarea.",
  },
  {
    name: "readOnly",
    type: "boolean",
    default: "false",
    description: "Makes the textarea non-editable but still selectable.",
  },
  {
    name: "rows",
    type: "number",
    description: "Number of visible text lines. Overridden by field-sizing-content auto-resize.",
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
    default: "\u2014",
    description: "Additional Tailwind classes merged via cn().",
  },
];
