"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon, Search01Icon, BookOpen01Icon, User02Icon } from "@hugeicons/core-free-icons";
import { Tabbar, type TabbarItem } from "@/components/vidi/tabbar";

const items: TabbarItem[] = [
  { label: "Home",    href: "/",                   icon: <HugeiconsIcon icon={Home01Icon} /> },
  { label: "Search",  href: "/components/command",  icon: <HugeiconsIcon icon={Search01Icon} /> },
  { label: "Library", href: "/components/button",   icon: <HugeiconsIcon icon={BookOpen01Icon} />, notify: true },
  { label: "Profile", href: "/components/avatar",   icon: <HugeiconsIcon icon={User02Icon} /> },
];

export function MobileTabbar() {
  return <Tabbar items={items} />;
}
