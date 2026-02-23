"use client";

import { Home, Search, Library, User } from "lucide-react";
import { Tabbar, type TabbarItem } from "@/components/vidi/tabbar";

const items: TabbarItem[] = [
  { label: "Home",    href: "/",                   icon: <Home /> },
  { label: "Search",  href: "/components/command",  icon: <Search /> },
  { label: "Library", href: "/components/button",   icon: <Library />, notify: true },
  { label: "Profile", href: "/components/avatar",   icon: <User /> },
];

export function MobileTabbar() {
  return <Tabbar items={items} />;
}
