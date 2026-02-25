/**
 * VIDI Docs — Tabs Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const tabsSnippets = {
  React: {
    installation: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@vidikit/ui-react";`,

    basic: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content goes here.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Analytics content goes here.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Settings content goes here.</p>
  </TabsContent>
</Tabs>`,

    lineVariant: `<Tabs defaultValue="tab1">
  <TabsList variant="line">
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content goes here.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Analytics content goes here.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Settings content goes here.</p>
  </TabsContent>
</Tabs>`,

    vertical: `<Tabs defaultValue="tab1" orientation="vertical">
  <TabsList>
    <TabsTrigger value="tab1">Profile</TabsTrigger>
    <TabsTrigger value="tab2">Security</TabsTrigger>
    <TabsTrigger value="tab3">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Profile settings content.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Security settings content.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Notification preferences content.</p>
  </TabsContent>
</Tabs>`,

    controlled: `const [activeTab, setActiveTab] = React.useState("tab1");

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content goes here.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Analytics content goes here.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Settings content goes here.</p>
  </TabsContent>
</Tabs>

// You can programmatically switch tabs:
<Button onClick={() => setActiveTab("tab2")}>Go to Analytics</Button>`,
  },

  TV: {
    installation: `// TV: Tabs work well for top-level navigation sections.
// Use focus-managed TabRow from Compose TV or equivalent.
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@vidikit/ui-react";`,

    basic: `// TV pattern: horizontal tabs with D-pad navigation
// Focus automatically moves between triggers with arrow keys.
<Tabs defaultValue="home">
  <TabsList>
    <TabsTrigger value="home">Home</TabsTrigger>
    <TabsTrigger value="search">Search</TabsTrigger>
    <TabsTrigger value="library">Library</TabsTrigger>
  </TabsList>
  <TabsContent value="home">
    {/* Home content */}
  </TabsContent>
  <TabsContent value="search">
    {/* Search content */}
  </TabsContent>
  <TabsContent value="library">
    {/* Library content */}
  </TabsContent>
</Tabs>`,
  },

  "Mobile Web": {
    installation: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: tabs work natively with touch.
// Use full-width TabsList for better touch targets.
<Tabs defaultValue="tab1">
  <TabsList className="w-full">
    <TabsTrigger value="tab1" className="flex-1">Overview</TabsTrigger>
    <TabsTrigger value="tab2" className="flex-1">Details</TabsTrigger>
    <TabsTrigger value="tab3" className="flex-1">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Details content.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Reviews content.</p>
  </TabsContent>
</Tabs>`,
  },

  Android: {
    installation: `// Import in Compose:
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
import androidx.compose.material3.Text
import com.vidi.designsystem.theme.VidiTheme`,

    basic: `var selectedTab by remember { mutableIntStateOf(0) }
val tabs = listOf("Overview", "Analytics", "Settings")

TabRow(
    selectedTabIndex = selectedTab,
    containerColor = VidiTheme.colors.surface,
    contentColor = VidiTheme.colors.onSurface,
    indicator = { tabPositions ->
        TabRowDefaults.PrimaryIndicator(
            modifier = Modifier.tabIndicatorOffset(tabPositions[selectedTab]),
            color = VidiTheme.colors.primary
        )
    }
) {
    tabs.forEachIndexed { index, title ->
        Tab(
            selected = selectedTab == index,
            onClick = { selectedTab = index },
            text = { Text(title) }
        )
    }
}

// Display content based on selectedTab
when (selectedTab) {
    0 -> OverviewContent()
    1 -> AnalyticsContent()
    2 -> SettingsContent()
}`,

    colors: `// Token references from res/values/colors.xml
// Tab bar bg:         @color/vidi_gray_60   (#27272A)
// Active tab text:    @color/vidi_gray_10   (#F4F4F5)
// Inactive tab text:  @color/vidi_gray_40   (#71717A)
// Indicator:          @color/vidi_primary_30 (#FD1B44)
// Pill bg (default):  @color/vidi_gray_50   (#3F3F46)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `// SwiftUI segmented picker (pill-style tabs)
@State private var selectedTab = 0
let tabs = ["Overview", "Analytics", "Settings"]

Picker("Section", selection: $selectedTab) {
    ForEach(0..<tabs.count, id: \\.self) { index in
        Text(tabs[index]).tag(index)
    }
}
.pickerStyle(.segmented)

// Display content based on selection
switch selectedTab {
case 0: OverviewView()
case 1: AnalyticsView()
case 2: SettingsView()
default: EmptyView()
}

// Alternative: TabView for full-screen page tabs
TabView(selection: $selectedTab) {
    OverviewView().tag(0).tabItem { Label("Overview", systemImage: "house") }
    AnalyticsView().tag(1).tabItem { Label("Analytics", systemImage: "chart.bar") }
    SettingsView().tag(2).tabItem { Label("Settings", systemImage: "gear") }
}`,

    colors: `// Token references from Colors.swift
Color.vidiGray60   // #27272A — tab bar background (dark)
Color.vidiGray10   // #F4F4F5 — active tab text
Color.vidiGray40   // #71717A — inactive tab text
Color.vidiPrimary30 // #FD1B44 — indicator / accent`,
  },
} as const;

export const tabsProps = [
  {
    name: "defaultValue",
    type: "string",
    description: "The value of the tab to activate by default (uncontrolled).",
  },
  {
    name: "value",
    type: "string",
    description: "The controlled active tab value.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Callback fired when the active tab changes.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "The orientation of the tabs layout.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the root Tabs container.",
  },
  {
    name: "variant",
    type: '"default" | "line"',
    default: '"default"',
    description: "TabsList variant. \"default\" renders a pill-shaped bar with muted background. \"line\" renders a transparent bar with an underline indicator on the active tab.",
  },
];
