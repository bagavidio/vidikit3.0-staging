/**
 * VIDI Docs — Sidebar Navigation
 * ─────────────────────────────────────────────────────────────
 * Client component — needs usePathname for active state.
 * Nav data is sourced from config/docs.ts.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { docsNav } from "@/config/docs";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="offcanvas">
      {/* Sidebar header */}
      <SidebarHeader className="border-b border-sidebar-border px-3 py-2.5">
        <div className="flex items-center gap-2">
          <VidiMark className="size-5 shrink-0" />
          <span className="text-sm font-semibold text-sidebar-foreground tracking-tight">
            VIDI Design System
          </span>
          <span className="ml-auto font-mono text-[10px] text-muted-foreground">
            v0.1
          </span>
        </div>
      </SidebarHeader>

      {/* Nav groups */}
      <SidebarContent>
        {docsNav.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = !item.disabled && pathname === item.href;

                  return (
                    <SidebarMenuItem key={item.title}>
                      {item.disabled ? (
                        <SidebarMenuButton disabled>
                          <span>{item.title}</span>
                          {item.label && (
                            <SidebarMenuBadge className="opacity-50">
                              {item.label}
                            </SidebarMenuBadge>
                          )}
                        </SidebarMenuButton>
                      ) : (
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link href={item.href}>
                            <span>{item.title}</span>
                            {item.label && (
                              <SidebarMenuBadge>{item.label}</SidebarMenuBadge>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

// ── VIDI mark ─────────────────────────────────────────────────────────────────

function VidiMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="var(--primary-50)" />
      <polyline
        points="6,7 12,17 18,7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
