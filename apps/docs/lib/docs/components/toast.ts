/**
 * VIDI Docs — Toast Component Snippets
 * ---------------------------------------------------------
 * Hand-curated code snippets for all 5 platforms.
 * Imported by apps/docs/app/(docs)/components/toast/page.tsx
 *
 * Toast uses the Sonner library. The <Toaster /> component is
 * already mounted in the root layout with custom HugeIcons.
 */

export const toastSnippets = {
  React: {
    installation: `import { toast } from "sonner";

// The <Toaster /> component is already mounted in the root layout.
// No additional setup is needed — just call toast() anywhere.`,

    basic: `toast("Event has been created")`,

    types: `// Success
toast.success("Changes saved successfully")

// Error
toast.error("Something went wrong")

// Info
toast.info("New update available")

// Warning
toast.warning("Your session is about to expire")

// Loading
toast.loading("Uploading file...")`,

    withAction: `toast("File deleted", {
  action: {
    label: "Undo",
    onClick: () => {
      // Restore the file
    },
  },
})`,

    withDescription: `toast("Event created", {
  description: "Monday, January 3rd at 6:00pm",
})`,

    promise: `const fetchData = async () => {
  // your async operation
};

toast.promise(fetchData(), {
  loading: "Loading...",
  success: "Done!",
  error: "Error",
})`,
  },

  TV: {
    installation: `// TV: toast notifications are less common on TV platforms.
// Consider using an inline banner or modal confirmation instead.
// If using a web-based TV app, Sonner can still be used:
import { toast } from "sonner";`,

    basic: `// On TV, toasts should be large enough to read from a distance.
// Use the Toaster with a longer duration and larger text:
//
// <Toaster
//   position="top-center"
//   duration={6000}
//   style={{ fontSize: "1.25rem" }}
// />
//
toast("Event has been created")`,
  },

  "Mobile Web": {
    installation: `import { toast } from "sonner";
// Same import as React — no platform-specific build needed.`,

    basic: `// On mobile, toasts appear at the bottom by default.
// Ensure the position does not overlap with bottom navigation.
//
// <Toaster position="top-center" />
//
toast("Event has been created")`,
  },

  Android: {
    installation: `// Android: use Snackbar from Material 3 for toast-like notifications.
import com.google.android.material.snackbar.Snackbar
import com.vidi.designsystem.theme.VidiTheme`,

    basic: `Snackbar.make(
    view,
    "Event has been created",
    Snackbar.LENGTH_SHORT
).setAction("Undo") {
    // Restore action
}.show()

// Compose alternative:
val snackbarHostState = remember { SnackbarHostState() }

LaunchedEffect(Unit) {
    snackbarHostState.showSnackbar(
        message = "Event has been created",
        actionLabel = "Undo",
        duration = SnackbarDuration.Short
    )
}

SnackbarHost(hostState = snackbarHostState)`,

    colors: `// Token references from res/values/colors.xml
// Toast bg:       @color/vidi_gray_60   (#27272A)
// Toast text:     @color/vidi_gray_10   (#F4F4F5)
// Action text:    @color/vidi_primary_30 (#FD1B44)
// Success icon:   @color/vidi_green_30  (#22C55E)
// Error icon:     @color/vidi_state_error (#CA0528)
// Warning icon:   @color/vidi_yellow_30 (#F59E0B)
// Info icon:      @color/vidi_blue_30   (#0074FF)`,
  },

  iOS: {
    installation: `import SwiftUI
// iOS does not have a built-in toast. Use a custom overlay
// or SPAlertController for a native-feeling notification.`,

    basic: `// Custom toast overlay in SwiftUI:
struct ToastView: View {
    let message: String
    @Binding var isPresented: Bool

    var body: some View {
        if isPresented {
            Text(message)
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(.ultraThinMaterial)
                .clipShape(RoundedRectangle(cornerRadius: 12))
                .transition(.move(edge: .top).combined(with: .opacity))
                .onAppear {
                    DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                        withAnimation { isPresented = false }
                    }
                }
        }
    }
}

// Usage:
@State private var showToast = false

Button("Create Event") {
    withAnimation { showToast = true }
}
.overlay(alignment: .top) {
    ToastView(message: "Event has been created", isPresented: $showToast)
}`,

    colors: `// Token references from Colors.swift
Color.vidiGray60   // #27272A — toast bg (dark mode)
Color.vidiGray10   // #F4F4F5 — toast text
Color.vidiRed30    // #FD1B44 — action text
Color.vidiGreen30  // #22C55E — success icon
Color.vidiBlue30   // #0074FF — info icon
Color.vidiYellow30 // #F59E0B — warning icon`,
  },
} as const;

export type ToastPlatform = keyof typeof toastSnippets;

/** Toaster component props for the PropsTable */
export const toastProps = [
  {
    name: "theme",
    type: '"light" | "dark" | "system"',
    default: '"system"',
    description:
      "The color scheme for the toasts. Automatically syncs with next-themes.",
  },
  {
    name: "position",
    type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
    default: '"bottom-right"',
    description: "Where the toasts appear on screen.",
  },
  {
    name: "duration",
    type: "number",
    default: "4000",
    description:
      "Default duration in milliseconds before a toast auto-dismisses.",
  },
  {
    name: "richColors",
    type: "boolean",
    default: "false",
    description:
      "Enables richer, more colorful backgrounds for success, error, info, and warning toasts.",
  },
];
