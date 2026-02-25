/**
 * VIDI Docs — Avatar Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const avatarSnippets = {
  React: {
    installation: `import {
  Avatar, AvatarImage, AvatarFallback,
  AvatarBadge, AvatarGroup, AvatarGroupCount,
} from "@vidikit/ui-react";`,

    basic: `// Sizes: sm (24px), default (32px), lg (40px)
<Avatar size="sm">
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>VD</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>VD</AvatarFallback>
</Avatar>

<Avatar size="lg">
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>VD</AvatarFallback>
</Avatar>`,

    fallback: `// Fallback shows when image fails to load
<Avatar>
  <AvatarImage src="/broken-link.jpg" alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>

// Recommended: max 2 characters for fallback
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,

    withBadge: `// Status badge colors
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="Online user" />
  <AvatarFallback>ON</AvatarFallback>
  <AvatarBadge className="bg-green-30" />    {/* Online */}
</Avatar>

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="Busy user" />
  <AvatarFallback>BY</AvatarFallback>
  <AvatarBadge className="bg-yellow-30" />   {/* Busy */}
</Avatar>

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="DND user" />
  <AvatarFallback>DN</AvatarFallback>
  <AvatarBadge className="bg-red-30" />      {/* Do Not Disturb */}
</Avatar>`,

    avatarGroup: `<AvatarGroup>
  <Avatar><AvatarImage src="/u1.jpg" alt="User 1" /><AvatarFallback>U1</AvatarFallback></Avatar>
  <Avatar><AvatarImage src="/u2.jpg" alt="User 2" /><AvatarFallback>U2</AvatarFallback></Avatar>
  <Avatar><AvatarImage src="/u3.jpg" alt="User 3" /><AvatarFallback>U3</AvatarFallback></Avatar>
  <AvatarGroupCount>+5</AvatarGroupCount>
</AvatarGroup>`,
  },

  TV: {
    installation: `import { Avatar, AvatarImage, AvatarFallback } from "@vidikit/ui-react";
// TV: use lg size for 10-foot readability.`,

    basic: `// TV: prefer lg size avatars for profile screens
<Avatar size="lg">
  <AvatarImage src="/profile.jpg" alt="Profile" />
  <AvatarFallback>VD</AvatarFallback>
</Avatar>

// Avatar groups on TV: use larger spacing
// and ensure each avatar is D-pad focusable
// for profile switching.`,
  },

  "Mobile Web": {
    installation: `import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: avatars are typically non-interactive
// Use in headers, comments, and contact lists
<Avatar size="sm">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>U</AvatarFallback>
</Avatar>

// For tap-to-view-profile, wrap in a button:
<button onClick={openProfile}>
  <Avatar>
    <AvatarImage src="/user.jpg" alt="User" />
    <AvatarFallback>JD</AvatarFallback>
    <AvatarBadge className="bg-green-30" />
  </Avatar>
</button>`,
  },

  Android: {
    installation: `// Import in Compose:
import com.vidi.designsystem.components.VidiAvatar
import com.vidi.designsystem.components.AvatarSize`,

    basic: `VidiAvatar(
    imageUrl = "https://example.com/avatar.jpg",
    fallback = "VD",
    size = AvatarSize.Default // sm, default, lg
)

// With status badge
VidiAvatar(
    imageUrl = "https://example.com/avatar.jpg",
    fallback = "VD",
    badgeColor = Color.VidiGreen30 // online
)

// Avatar group
VidiAvatarGroup(
    avatars = listOf(avatar1, avatar2, avatar3),
    overflowCount = 5
)`,

    colors: `// Token references from res/values/colors.xml
// Fallback bg:    @color/vidi_gray_10   (#F4F4F5)
// Fallback text:  @color/vidi_gray_40   (#71717A)
// Badge online:   @color/vidi_green_30  (#10B981)
// Badge busy:     @color/vidi_yellow_30 (#F59E0B)
// Badge dnd:      @color/vidi_red_30    (#FD1B44)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `// Using AsyncImage for network avatars
AsyncImage(url: URL(string: "https://example.com/avatar.jpg")) { image in
    image.resizable().scaledToFill()
} placeholder: {
    Text("VD")
        .font(.caption)
        .foregroundStyle(.secondary)
}
.frame(width: 32, height: 32)
.clipShape(Circle())

// Or use VidiAvatar from @vidikit/ui-ios:
VidiAvatar(
    url: "https://example.com/avatar.jpg",
    fallback: "VD",
    size: .default,
    badge: .online
)`,

    colors: `// Token references from Colors.swift
Color.vidiGray10   // #F4F4F5 — fallback bg
Color.vidiGray40   // #71717A — fallback text
Color.vidiGreen30  // #10B981 — online badge
Color.vidiYellow30 // #F59E0B — busy badge
Color.vidiRed30    // #FD1B44 — dnd badge`,
  },
} as const;

export const avatarProps = [
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "Avatar size: sm (24px), default (32px), lg (40px).",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes merged via cn().",
  },
];
