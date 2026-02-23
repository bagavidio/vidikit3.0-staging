"use client";

/**
 * VIDI Docs — PlatformTabs
 * ─────────────────────────────────────────────────────────────
 * URL-param-aware platform tabs.
 * Reads/writes ?platform= search param so tabs survive navigation.
 *
 * Built on @/components/ui/tabs (Radix Tabs, "line" underline variant).
 *
 * Usage:
 *   <PlatformTabs
 *     platforms={["React", "TV", "Android", "iOS"]}
 *     snippets={{ React: <CodeBlock ... />, Android: <CodeBlock ... /> }}
 *   />
 */

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type Platform = "React" | "Web" | "Mobile Web" | "TV" | "Android" | "iOS";

const PLATFORM_ICONS: Record<Platform, string> = {
  React: "⚛",
  Web: "🌐",
  "Mobile Web": "📱",
  TV: "📺",
  Android: "🤖",
  iOS: "🍎",
};

interface PlatformTabsProps {
  /** Which platforms to show tabs for */
  platforms: Platform[];
  /** Map of platform → content to render inside that tab */
  snippets: Partial<Record<Platform, React.ReactNode>>;
  /** Default tab (defaults to first in platforms array) */
  defaultPlatform?: Platform;
  className?: string;
}

export function PlatformTabs({
  platforms,
  snippets,
  defaultPlatform,
  className,
}: PlatformTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramPlatform = searchParams.get("platform") as Platform | null;
  const initialPlatform =
    paramPlatform && platforms.includes(paramPlatform)
      ? paramPlatform
      : defaultPlatform ?? platforms[0];

  const [active, setActive] = React.useState<Platform>(initialPlatform);

  // Keep URL in sync
  function handleTabChange(value: string) {
    const platform = value as Platform;
    setActive(platform);
    const params = new URLSearchParams(searchParams.toString());
    params.set("platform", platform);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className={cn("space-y-4", className)}>
      <Tabs value={active} onValueChange={handleTabChange}>
        <TabsList className="h-9 rounded-none border-b border-border bg-transparent p-0">
          {platforms.map((platform) => (
            <TabsTrigger
              key={platform}
              value={platform}
              className={cn(
                "relative h-9 rounded-none border-b-2 border-transparent px-4 font-medium text-sm text-muted-foreground",
                "data-[state=active]:border-red-30 data-[state=active]:text-foreground",
                "hover:text-foreground transition-colors"
              )}
            >
              <span className="mr-1.5 text-base leading-none">
                {PLATFORM_ICONS[platform]}
              </span>
              {platform}
            </TabsTrigger>
          ))}
        </TabsList>

        {platforms.map((platform) => (
          <TabsContent key={platform} value={platform} className="mt-0">
            {snippets[platform] ?? (
              <div className="rounded-xl border border-dashed border-border bg-muted/10 px-6 py-10 text-center text-sm text-muted-foreground">
                Code snippet coming soon for {platform}.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
