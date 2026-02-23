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

