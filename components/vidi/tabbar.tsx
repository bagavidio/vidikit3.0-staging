"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { tabbarVariants, tabbarItemVariants } from "./tabbar.variants";

export interface TabbarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  /** Show red dot notification indicator */
  notify?: boolean;
}

export interface TabbarProps
  extends React.ComponentProps<"nav">,
    VariantProps<typeof tabbarVariants> {
  items: TabbarItem[];
}

function NotifyDot() {
  return (
    <span
      data-slot="tabbar-notify"
      className="absolute -top-0.5 -right-1.5 size-2 rounded-full bg-[var(--red-50)]"
      aria-label="notification"
    />
  );
}

function Tabbar({ items, size, className, ...props }: TabbarProps) {
  const pathname = usePathname();

  return (
    <nav
      data-slot="tabbar"
      data-size={size ?? "default"}
      className={cn(tabbarVariants({ size }), className)}
      {...props}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            data-slot="tabbar-item"
            data-active={isActive || undefined}
            className={cn(tabbarItemVariants({ active: isActive }))}
          >
            <span className="relative inline-flex [&_svg:not([class*='size-'])]:size-5">
              {item.icon}
              {item.notify && <NotifyDot />}
            </span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

Tabbar.displayName = "Tabbar";

export { Tabbar };
