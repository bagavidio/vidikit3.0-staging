/**
 * VIDI Docs — Floating Sidebar Navigation
 * ─────────────────────────────────────────────────────────────
 * Client component — needs usePathname for active state.
 * Nav data sourced from config/docs.ts.
 * Floating variant with collapsible menu groups.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
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
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarContent>
        {docsNav.map((group) => {
          const hasActiveChild = group.items.some(
            (item) => !item.disabled && pathname === item.href
          );

          return (
            <Collapsible
              key={group.title}
              defaultOpen={group.defaultOpen || hasActiveChild}
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center">
                    <span className="flex-1 text-left">{group.title}</span>
                    <ChevronRight className="size-3.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => {
                        const isActive =
                          !item.disabled && pathname === item.href;

                        return (
                          <SidebarMenuItem key={item.title}>
                            {item.disabled ? (
                              <SidebarMenuButton disabled size="sm">
                                <span>{item.title}</span>
                                {item.label && (
                                  <SidebarMenuBadge className="opacity-50">
                                    {item.label}
                                  </SidebarMenuBadge>
                                )}
                              </SidebarMenuButton>
                            ) : (
                              <SidebarMenuButton
                                asChild
                                isActive={isActive}
                                size="sm"
                              >
                                <Link href={item.href}>
                                  <span>{item.title}</span>
                                  {item.label && (
                                    <SidebarMenuBadge>
                                      {item.label}
                                    </SidebarMenuBadge>
                                  )}
                                </Link>
                              </SidebarMenuButton>
                            )}
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
