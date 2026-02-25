/**
 * VIDI Docs — Dropdown Menu Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const dropdownMenuSnippets = {
  React: {
    installation: `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuGroup, DropdownMenuShortcut,
  DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
} from "@vidikit/ui-react";
import { Button } from "@vidikit/ui-react";`,

    basic: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button intent="outline">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      Profile <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      Settings <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      Log out <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,

    withGroups: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button intent="outline">Account</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuGroup>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>Team</DropdownMenuLabel>
    <DropdownMenuGroup>
      <DropdownMenuItem>Members</DropdownMenuItem>
      <DropdownMenuItem>Invite</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,

    checkboxItems: `// Toggleable items with checkmarks
<DropdownMenuCheckboxItem checked={showStatus}>
  Show status bar
</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem checked={showActivity}>
  Show activity
</DropdownMenuCheckboxItem>`,

    radioItems: `// Mutually exclusive selection
<DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
  <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="name">Name A–Z</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`,

    submenu: `<DropdownMenuSub>
  <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Copy link</DropdownMenuItem>
    <DropdownMenuItem>Email</DropdownMenuItem>
    <DropdownMenuItem>Export PDF</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`,
  },

  TV: {
    installation: `// TV: dropdown menus are not recommended for D-pad navigation.
// Use a list/grid layout or a modal dialog instead.`,

    basic: `// Alternative pattern for TV: use a Dialog or Sheet
// Dropdown menus rely on pointer hover which is unavailable on TV.
//
// Recommended TV alternatives:
// 1. Full-screen selection list
// 2. Dialog with radio-style options
// 3. Inline expandable section
//
// import { Dialog, DialogContent, DialogTrigger } from "@vidikit/ui-react";
// <Dialog>
//   <DialogTrigger asChild>
//     <Button intent="outline">Options</Button>
//   </DialogTrigger>
//   <DialogContent>
//     {/* List of selectable items */}
//   </DialogContent>
// </Dialog>`,
  },

  "Mobile Web": {
    installation: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: dropdown menus work but consider Sheet for mobile
// Sheet provides better touch targets and is more mobile-native
//
// For small option sets (3-5 items), dropdown is acceptable:
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button intent="ghost" size="icon">
      <MoreHorizontalIcon />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import com.vidi.designsystem.theme.VidiTheme`,

    basic: `var expanded by remember { mutableStateOf(false) }

Box {
    Button(onClick = { expanded = true }) {
        Text("Options")
    }
    DropdownMenu(
        expanded = expanded,
        onDismissRequest = { expanded = false }
    ) {
        DropdownMenuItem(
            text = { Text("Profile") },
            onClick = { expanded = false }
        )
        DropdownMenuItem(
            text = { Text("Settings") },
            onClick = { expanded = false }
        )
        Divider()
        DropdownMenuItem(
            text = { Text("Log out", color = VidiTheme.colors.error) },
            onClick = { expanded = false }
        )
    }
}`,

    colors: `// Token references from res/values/colors.xml
// Menu bg:      @color/vidi_gray_60   (#27272A)
// Item text:    @color/vidi_gray_10   (#F4F4F5)
// Destructive:  @color/vidi_state_error (#CA0528)
// Separator:    @color/vidi_gray_50   (#3F3F46)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `Menu {
    Button("Profile") { openProfile() }
    Button("Settings") { openSettings() }
    Divider()
    Button("Log out", role: .destructive) { logout() }
} label: {
    Label("Options", systemImage: "ellipsis.circle")
}

// Context menu (long-press)
Text("Content")
    .contextMenu {
        Button("Copy") { copy() }
        Button("Share") { share() }
        Divider()
        Button("Delete", role: .destructive) { delete() }
    }`,

    colors: `// Token references from Colors.swift
Color.vidiGray60  // #27272A — menu bg (dark mode)
Color.vidiGray10  // #F4F4F5 — item text
Color.vidiRed30   // #FD1B44 — destructive`,
  },
} as const;

export const dropdownMenuProps = [
  {
    name: "children",
    type: "React.ReactNode",
    required: true,
    description: "DropdownMenuTrigger + DropdownMenuContent.",
  },
  {
    name: "open",
    type: "boolean",
    description: "Controlled open state.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback when open state changes.",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description: "Whether the menu should trap focus and block interaction outside.",
  },
];
