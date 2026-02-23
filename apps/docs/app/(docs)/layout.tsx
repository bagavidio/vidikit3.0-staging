/**
 * VIDI Docs — Shell Layout
 * ─────────────────────────────────────────────────────────────
 * Wraps all docs pages with:
 *   · SidebarProvider (manages open/collapsed state)
 *   · DocsSidebar (collapsible nav)
 *   · TopNav (sticky header with logo, search, links)
 *   · Scrollable main content area
 */

import { SidebarProvider } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/docs/Sidebar";
import { TopNav } from "@/components/docs/TopNav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <div className="flex min-h-screen flex-1 flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
}
