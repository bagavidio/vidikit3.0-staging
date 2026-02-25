/**
 * VIDI Docs — Sheet Component Snippets
 * ---------------------------------------------------------
 * Hand-curated code snippets for all 5 platforms.
 */

export const sheetSnippets = {
  React: {
    installation: `import {
  Sheet, SheetTrigger, SheetContent,
  SheetHeader, SheetFooter, SheetTitle, SheetDescription,
  SheetClose,
} from "@vidikit/ui-react";
import { Button } from "@vidikit/ui-react";`,

    basic: `<Sheet>
  <SheetTrigger asChild>
    <Button intent="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        This is a description of the sheet content.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,

    sides: `const sides = ["top", "right", "bottom", "left"] as const;

{sides.map((side) => (
  <Sheet key={side}>
    <SheetTrigger asChild>
      <Button intent="outline">{side}</Button>
    </SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>{side} sheet</SheetTitle>
        <SheetDescription>
          This sheet slides in from the {side}.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
))}`,

    withForm: `<Sheet>
  <SheetTrigger asChild>
    <Button intent="outline">Edit Profile</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Update your profile information below.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 px-6 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button intent="outline">Cancel</Button>
      </SheetClose>
      <Button>Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,

    customClose: `// Hide the default close button and provide your own
<Sheet>
  <SheetTrigger asChild>
    <Button intent="outline">Open</Button>
  </SheetTrigger>
  <SheetContent showCloseButton={false}>
    <SheetHeader>
      <SheetTitle>Custom Close</SheetTitle>
      <SheetDescription>
        The default X button is hidden.
        Use SheetClose to create your own.
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose asChild>
        <Button intent="outline">Done</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
  },

  TV: {
    installation: `// TV: use Sheet for contextual panels or settings.
// Ensure focus is trapped inside the sheet for D-pad navigation.
import { Sheet, SheetContent, SheetTrigger } from "@vidikit/ui-react";`,

    basic: `// Sheet works well on TV for side panels and settings.
// Always open from "right" or "left" to preserve spatial context.
//
// <Sheet>
//   <SheetTrigger asChild>
//     <Button intent="outline">Settings</Button>
//   </SheetTrigger>
//   <SheetContent side="right">
//     <SheetHeader>
//       <SheetTitle>Settings</SheetTitle>
//     </SheetHeader>
//     {/* Focus-navigable list items */}
//   </SheetContent>
// </Sheet>`,
  },

  "Mobile Web": {
    installation: `import {
  Sheet, SheetTrigger, SheetContent,
  SheetHeader, SheetTitle, SheetDescription,
} from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: prefer side="bottom" for action sheets
// Bottom sheets provide better thumb reachability on mobile.
<Sheet>
  <SheetTrigger asChild>
    <Button intent="outline">Actions</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Actions</SheetTitle>
      <SheetDescription>Choose an action below.</SheetDescription>
    </SheetHeader>
    <div className="grid gap-2 p-6">
      <Button intent="ghost" className="justify-start">Edit</Button>
      <Button intent="ghost" className="justify-start">Duplicate</Button>
      <Button intent="ghost" className="justify-start text-destructive">Delete</Button>
    </div>
  </SheetContent>
</Sheet>`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.rememberModalBottomSheetState
import com.vidi.designsystem.theme.VidiTheme`,

    basic: `var showSheet by remember { mutableStateOf(false) }
val sheetState = rememberModalBottomSheetState()

Button(onClick = { showSheet = true }) {
    Text("Open Sheet")
}

if (showSheet) {
    ModalBottomSheet(
        onDismissRequest = { showSheet = false },
        sheetState = sheetState,
        containerColor = VidiTheme.colors.surface,
    ) {
        Column(modifier = Modifier.padding(24.dp)) {
            Text(
                text = "Sheet Title",
                style = VidiTheme.typography.titleMedium
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Sheet description goes here.",
                style = VidiTheme.typography.bodyMedium,
                color = VidiTheme.colors.onSurfaceVariant
            )
        }
    }
}`,

    colors: `// Token references from res/values/colors.xml
// Sheet bg:       @color/vidi_gray_60   (#27272A)
// Title text:     @color/vidi_gray_10   (#F4F4F5)
// Description:    @color/vidi_gray_30   (#A1A1AA)
// Scrim:          @color/vidi_black_80  (#000000CC)
// Handle:         @color/vidi_gray_40   (#71717A)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var showSheet = false

Button("Open Sheet") {
    showSheet = true
}
.sheet(isPresented: $showSheet) {
    VStack(alignment: .leading, spacing: 8) {
        Text("Sheet Title")
            .font(.title3.bold())
        Text("Sheet description goes here.")
            .font(.subheadline)
            .foregroundStyle(.secondary)
    }
    .padding(24)
    .presentationDetents([.medium, .large])
    .presentationDragIndicator(.visible)
}`,

    colors: `// Token references from Colors.swift
Color.vidiGray60  // #27272A — sheet bg (dark mode)
Color.vidiGray10  // #F4F4F5 — title text
Color.vidiGray30  // #A1A1AA — description text
Color.vidiGray40  // #71717A — drag indicator`,
  },
} as const;

export const sheetProps = [
  {
    name: "open",
    type: "boolean",
    description: "Controlled open state of the sheet.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback fired when the open state changes.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    required: true,
    description: "SheetTrigger + SheetContent.",
  },
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"right"',
    description: "The edge of the viewport the sheet slides in from. Applied to SheetContent.",
  },
  {
    name: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "Whether to render the default close button in the top-right corner. Applied to SheetContent.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes merged onto SheetContent.",
  },
];
