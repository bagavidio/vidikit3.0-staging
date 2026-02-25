/**
 * VIDI Docs — Sidebar Navigation
 * ─────────────────────────────────────────────────────────────
 * Floating variant with collapsible groups.
 * Client component — needs usePathname for active state.
 * Nav data is sourced from config/docs.ts.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { docsNav, type NavItem as NavItemType } from "@/config/docs";

// ── Helpers ───────────────────────────────────────────────────────────────────

function groupContainsActive(items: NavItemType[], pathname: string): boolean {
  return items.some(
    (item) =>
      !item.disabled &&
      !item.external &&
      !item.href.includes("#") &&
      pathname === item.href,
  );
}

// ── NavItem renderer ──────────────────────────────────────────────────────────

function NavItem({
  item,
  pathname,
}: {
  item: NavItemType;
  pathname: string;
}) {
  const isHash = item.href.includes("#");
  const isActive =
    !item.disabled && !item.external && !isHash && pathname === item.href;

  if (item.disabled) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton disabled size="sm">
          <span>{item.title}</span>
          {item.label && (
            <SidebarMenuBadge className="opacity-50">
              {item.label}
            </SidebarMenuBadge>
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  if (isHash) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={false} size="sm">
          <a
            href={item.href}
            onClick={(e) => {
              const hash = item.href.split("#")[1];
              const basePath = item.href.split("#")[0] || "/";
              if (pathname === basePath && hash) {
                e.preventDefault();
                document
                  .getElementById(hash)
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>{item.title}</span>
            {item.label && (
              <SidebarMenuBadge>{item.label}</SidebarMenuBadge>
            )}
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  if (item.external) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={false} size="sm">
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <span>{item.title}</span>
            {item.label && (
              <SidebarMenuBadge>{item.label}</SidebarMenuBadge>
            )}
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive} size="sm">
        <Link href={item.href}>
          <span>{item.title}</span>
          {item.label && (
            <SidebarMenuBadge>{item.label}</SidebarMenuBadge>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader className="px-4 pt-4 pb-2">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          VIDIKit 3.0
        </span>
      </SidebarHeader>

      <SidebarContent>
        {docsNav.map((group) => {
          const hasActive = groupContainsActive(group.items, pathname);
          const shouldOpen = group.defaultOpen || hasActive;

          return (
            <Collapsible
              key={group.title}
              defaultOpen={shouldOpen}
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center">
                    <span className="flex-1 text-left">{group.title}</span>
                    {group.title === "Components" && (
                      <span className="mr-1.5 text-[10px] tabular-nums text-sidebar-foreground/40">
                        {group.items.length}
                      </span>
                    )}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="size-3 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <NavItem
                        key={item.title}
                        item={item}
                        pathname={pathname}
                      />
                    ))}
                  </SidebarMenu>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
