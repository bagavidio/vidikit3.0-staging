/**
 * VIDI Docs — Foundations / Icons
 * Route: /foundations/icons
 *
 * "use client" — search filter uses useState.
 */

"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Home01Icon,
  Setting06Icon,
  User02Icon,
  Notification01Icon,
  Mail01Icon,
  FavouriteIcon,
  Heart,
  Bookmark01Icon,
  Share01Icon,
  Download01Icon,
  Upload01Icon,
  Edit01Icon,
  Delete01Icon,
  PlusSignIcon,
  MinusSignIcon,
  Cancel01Icon,
  Tick01Icon,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ArrowRight01Icon,
  ArrowLeft01Icon,
  ArrowUp01Icon,
  ArrowDown01Icon,
  ExternalLink,
  Link01Icon,
  Copy01Icon,
  ClipboardIcon,
  EyeIcon,
  ViewOffIcon,
  LockIcon,
  SquareUnlock01Icon,
  Shield01Icon,
  AlertCircleIcon,
  Alert01Icon,
  InformationCircleIcon,
  CheckmarkCircle01Icon,
  MultiplicationSignCircleIcon,
  Loading01Icon,
  ArrowReloadHorizontalIcon,
  RotateLeft01Icon,
  RotateRight01Icon,
  ZoomInAreaIcon,
  ZoomOutAreaIcon,
  ArrowExpandDiagonal01Icon,
  ArrowShrinkIcon,
  GridViewIcon,
  ListViewIcon,
  FilterIcon,
  SortByDown01Icon,
  SortByUp01Icon,
  Layers01Icon,
  CodeIcon,
  ComputerTerminal01Icon,
  CpuIcon,
  Globe02Icon,
  WifiConnected01Icon,
  BluetoothIcon,
  DatabaseIcon,
  ServerStack01Icon,
  CloudIcon,
  CloudUploadIcon,
  CloudDownloadIcon,
  PackageIcon,
  Square01Icon,
  Image01Icon,
  Film01Icon,
  MusicNote01Icon,
  Mic01Icon,
  Camera01Icon,
  Video01Icon,
  PlayCircleIcon,
  PauseCircleIcon,
  Forward01Icon,
  Backward01Icon,
  ShuffleIcon,
  RepeatIcon,
  VolumeHighIcon,
  VolumeMute01Icon,
  ArchiveIcon,
  Folder01Icon,
  File01Icon,
  FileEditIcon,
  Tag01Icon,
  Calendar01Icon,
  Clock01Icon,
  MapsIcon,
  MapPinIcon,
  Navigation01Icon,
  CompassIcon,
  ChartIncreaseIcon,
  ChartDecreaseIcon,
  BarChartIcon,
  PieChartIcon,
  Activity01Icon,
  ZapIcon,
  Sun01Icon,
  Moon01Icon,
  SparklesIcon,
  BatteryFullIcon,
  GithubIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

// ── Icon registry ──────────────────────────────────────────────────────────────

interface IconEntry {
  name: string;
  component: React.ReactNode;
}

const ALL_ICONS: IconEntry[] = [
  // Navigation
  { name: "Home", component: <HugeiconsIcon icon={Home01Icon} /> },
  { name: "ChevronDown", component: <HugeiconsIcon icon={ChevronDown} /> },
  { name: "ChevronRight", component: <HugeiconsIcon icon={ChevronRight} /> },
  { name: "ChevronLeft", component: <HugeiconsIcon icon={ChevronLeft} /> },
  { name: "ChevronUp", component: <HugeiconsIcon icon={ChevronUp} /> },
  { name: "ArrowRight", component: <HugeiconsIcon icon={ArrowRight01Icon} /> },
  { name: "ArrowLeft", component: <HugeiconsIcon icon={ArrowLeft01Icon} /> },
  { name: "ArrowUp", component: <HugeiconsIcon icon={ArrowUp01Icon} /> },
  { name: "ArrowDown", component: <HugeiconsIcon icon={ArrowDown01Icon} /> },
  { name: "ExternalLink", component: <HugeiconsIcon icon={ExternalLink} /> },
  // Actions
  { name: "Search", component: <HugeiconsIcon icon={Search01Icon} /> },
  { name: "Edit", component: <HugeiconsIcon icon={Edit01Icon} /> },
  { name: "Delete", component: <HugeiconsIcon icon={Delete01Icon} /> },
  { name: "Plus", component: <HugeiconsIcon icon={PlusSignIcon} /> },
  { name: "Minus", component: <HugeiconsIcon icon={MinusSignIcon} /> },
  { name: "Cancel", component: <HugeiconsIcon icon={Cancel01Icon} /> },
  { name: "Tick", component: <HugeiconsIcon icon={Tick01Icon} /> },
  { name: "Copy", component: <HugeiconsIcon icon={Copy01Icon} /> },
  { name: "Clipboard", component: <HugeiconsIcon icon={ClipboardIcon} /> },
  { name: "Download", component: <HugeiconsIcon icon={Download01Icon} /> },
  { name: "Upload", component: <HugeiconsIcon icon={Upload01Icon} /> },
  { name: "Share", component: <HugeiconsIcon icon={Share01Icon} /> },
  { name: "Link", component: <HugeiconsIcon icon={Link01Icon} /> },
  { name: "Reload", component: <HugeiconsIcon icon={ArrowReloadHorizontalIcon} /> },
  { name: "RotateLeft", component: <HugeiconsIcon icon={RotateLeft01Icon} /> },
  { name: "RotateRight", component: <HugeiconsIcon icon={RotateRight01Icon} /> },
  // Communication
  { name: "Notification", component: <HugeiconsIcon icon={Notification01Icon} /> },
  { name: "Mail", component: <HugeiconsIcon icon={Mail01Icon} /> },
  { name: "BubbleChat", component: <HugeiconsIcon icon={Notification01Icon} /> },
  { name: "Inbox", component: <HugeiconsIcon icon={File01Icon} /> },
  { name: "Phone", component: <HugeiconsIcon icon={Navigation01Icon} /> },
  // User & Security
  { name: "User", component: <HugeiconsIcon icon={User02Icon} /> },
  { name: "Settings", component: <HugeiconsIcon icon={Setting06Icon} /> },
  { name: "Eye", component: <HugeiconsIcon icon={EyeIcon} /> },
  { name: "EyeOff", component: <HugeiconsIcon icon={ViewOffIcon} /> },
  { name: "Lock", component: <HugeiconsIcon icon={LockIcon} /> },
  { name: "Unlock", component: <HugeiconsIcon icon={SquareUnlock01Icon} /> },
  { name: "Shield", component: <HugeiconsIcon icon={Shield01Icon} /> },
  // Status
  { name: "AlertCircle", component: <HugeiconsIcon icon={AlertCircleIcon} /> },
  { name: "Alert", component: <HugeiconsIcon icon={Alert01Icon} /> },
  { name: "Info", component: <HugeiconsIcon icon={InformationCircleIcon} /> },
  { name: "CheckmarkCircle", component: <HugeiconsIcon icon={CheckmarkCircle01Icon} /> },
  { name: "CancelCircle", component: <HugeiconsIcon icon={MultiplicationSignCircleIcon} /> },
  { name: "Loading", component: <HugeiconsIcon icon={Loading01Icon} /> },
  // Favorites
  { name: "Favourite", component: <HugeiconsIcon icon={FavouriteIcon} /> },
  { name: "Heart", component: <HugeiconsIcon icon={Heart} /> },
  { name: "Bookmark", component: <HugeiconsIcon icon={Bookmark01Icon} /> },
  // View
  { name: "ZoomIn", component: <HugeiconsIcon icon={ZoomInAreaIcon} /> },
  { name: "ZoomOut", component: <HugeiconsIcon icon={ZoomOutAreaIcon} /> },
  { name: "Expand", component: <HugeiconsIcon icon={ArrowExpandDiagonal01Icon} /> },
  { name: "Shrink", component: <HugeiconsIcon icon={ArrowShrinkIcon} /> },
  { name: "GridView", component: <HugeiconsIcon icon={GridViewIcon} /> },
  { name: "ListView", component: <HugeiconsIcon icon={ListViewIcon} /> },
  { name: "Filter", component: <HugeiconsIcon icon={FilterIcon} /> },
  { name: "SortDown", component: <HugeiconsIcon icon={SortByDown01Icon} /> },
  { name: "SortUp", component: <HugeiconsIcon icon={SortByUp01Icon} /> },
  // Dev & Tech
  { name: "Layers", component: <HugeiconsIcon icon={Layers01Icon} /> },
  { name: "Code", component: <HugeiconsIcon icon={CodeIcon} /> },
  { name: "Terminal", component: <HugeiconsIcon icon={ComputerTerminal01Icon} /> },
  { name: "Cpu", component: <HugeiconsIcon icon={CpuIcon} /> },
  { name: "Globe", component: <HugeiconsIcon icon={Globe02Icon} /> },
  { name: "Wifi", component: <HugeiconsIcon icon={WifiConnected01Icon} /> },
  { name: "Bluetooth", component: <HugeiconsIcon icon={BluetoothIcon} /> },
  { name: "Database", component: <HugeiconsIcon icon={DatabaseIcon} /> },
  { name: "Server", component: <HugeiconsIcon icon={ServerStack01Icon} /> },
  { name: "Cloud", component: <HugeiconsIcon icon={CloudIcon} /> },
  { name: "CloudUpload", component: <HugeiconsIcon icon={CloudUploadIcon} /> },
  { name: "CloudDownload", component: <HugeiconsIcon icon={CloudDownloadIcon} /> },
  { name: "Package", component: <HugeiconsIcon icon={PackageIcon} /> },
  { name: "Square", component: <HugeiconsIcon icon={Square01Icon} /> },
  // Media
  { name: "Image", component: <HugeiconsIcon icon={Image01Icon} /> },
  { name: "Film", component: <HugeiconsIcon icon={Film01Icon} /> },
  { name: "Music", component: <HugeiconsIcon icon={MusicNote01Icon} /> },
  { name: "Mic", component: <HugeiconsIcon icon={Mic01Icon} /> },
  { name: "Camera", component: <HugeiconsIcon icon={Camera01Icon} /> },
  { name: "Video", component: <HugeiconsIcon icon={Video01Icon} /> },
  { name: "Play", component: <HugeiconsIcon icon={PlayCircleIcon} /> },
  { name: "Pause", component: <HugeiconsIcon icon={PauseCircleIcon} /> },
  { name: "Forward", component: <HugeiconsIcon icon={Forward01Icon} /> },
  { name: "Backward", component: <HugeiconsIcon icon={Backward01Icon} /> },
  { name: "Shuffle", component: <HugeiconsIcon icon={ShuffleIcon} /> },
  { name: "Repeat", component: <HugeiconsIcon icon={RepeatIcon} /> },
  { name: "VolumeHigh", component: <HugeiconsIcon icon={VolumeHighIcon} /> },
  { name: "VolumeMute", component: <HugeiconsIcon icon={VolumeMute01Icon} /> },
  // Files
  { name: "Archive", component: <HugeiconsIcon icon={ArchiveIcon} /> },
  { name: "Folder", component: <HugeiconsIcon icon={Folder01Icon} /> },
  { name: "File", component: <HugeiconsIcon icon={File01Icon} /> },
  { name: "FileEdit", component: <HugeiconsIcon icon={FileEditIcon} /> },
  { name: "Tag", component: <HugeiconsIcon icon={Tag01Icon} /> },
  // Time & Place
  { name: "Calendar", component: <HugeiconsIcon icon={Calendar01Icon} /> },
  { name: "Clock", component: <HugeiconsIcon icon={Clock01Icon} /> },
  { name: "Maps", component: <HugeiconsIcon icon={MapsIcon} /> },
  { name: "MapPin", component: <HugeiconsIcon icon={MapPinIcon} /> },
  { name: "Navigation", component: <HugeiconsIcon icon={Navigation01Icon} /> },
  { name: "Compass", component: <HugeiconsIcon icon={CompassIcon} /> },
  // Data
  { name: "ChartIncrease", component: <HugeiconsIcon icon={ChartIncreaseIcon} /> },
  { name: "ChartDecrease", component: <HugeiconsIcon icon={ChartDecreaseIcon} /> },
  { name: "BarChart", component: <HugeiconsIcon icon={BarChartIcon} /> },
  { name: "PieChart", component: <HugeiconsIcon icon={PieChartIcon} /> },
  { name: "Activity", component: <HugeiconsIcon icon={Activity01Icon} /> },
  // Misc
  { name: "Zap", component: <HugeiconsIcon icon={ZapIcon} /> },
  { name: "Sun", component: <HugeiconsIcon icon={Sun01Icon} /> },
  { name: "Moon", component: <HugeiconsIcon icon={Moon01Icon} /> },
  { name: "Sparkles", component: <HugeiconsIcon icon={SparklesIcon} /> },
  { name: "Battery", component: <HugeiconsIcon icon={BatteryFullIcon} /> },
  // Brands
  { name: "Github", component: <HugeiconsIcon icon={GithubIcon} /> },
  { name: "Twitter", component: <HugeiconsIcon icon={NewTwitterIcon} /> },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function IconsPage() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? ALL_ICONS.filter((icon) =>
        icon.name.toLowerCase().includes(query.toLowerCase())
      )
    : ALL_ICONS;

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · foundations
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Icons</h1>
          <p className="text-muted-foreground">
            Hugeicons — {ALL_ICONS.length} icons · consistent stroke · 24×24 viewport
          </p>
        </header>

        {/* Library callout */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">Icon Library: Hugeicons</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            VIDI uses <strong className="text-foreground">Hugeicons</strong> for all product
            icons. Icons render at <code className="rounded bg-muted px-1 font-mono text-xs">size-4 (16px)</code> inline
            and <code className="rounded bg-muted px-1 font-mono text-xs">size-5 (20px)</code> in
            standalone contexts. Always import from{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">@hugeicons/core-free-icons</code>{" "}
            and render via{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">{"<HugeiconsIcon />"}</code>.
            Never use SVG sprite sheets or image files for UI icons.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'import { HugeiconsIcon } from "@hugeicons/react"',
              'import { Search01Icon } from "@hugeicons/core-free-icons"',
              '<HugeiconsIcon icon={Search01Icon} className="size-4" />',
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Size guide */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
            Size Guide
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "XS", size: "size-3", px: "12px", usage: "Badges, kbd labels" },
              { label: "S",  size: "size-4", px: "16px", usage: "Inline, buttons (default)" },
              { label: "M",  size: "size-5", px: "20px", usage: "Standalone, nav items" },
              { label: "L",  size: "size-6", px: "24px", usage: "Feature icons, hero sections" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card/60 p-4 space-y-3">
                <div className="flex items-end gap-2">
                  <HugeiconsIcon
                    icon={Search01Icon}
                    className="text-red-50"
                    style={{ width: item.px, height: item.px }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{item.label} · {item.px}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{item.size}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{item.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Icon grid with search */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
              Icon Library ({filtered.length})
            </h2>
            <div className="relative">
              <HugeiconsIcon icon={Search01Icon} className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Filter icons…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-8 w-44 rounded-full border border-border bg-muted/40 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border py-16">
              <p className="text-sm text-muted-foreground">No icons match "{query}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8 md:grid-cols-10">
              {filtered.map(({ name, component }) => (
                <div
                  key={name}
                  title={name}
                  className="group flex flex-col items-center gap-1.5 rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-card/60"
                >
                  <span className="text-muted-foreground transition-colors group-hover:text-foreground [&_svg]:size-5">
                    {component}
                  </span>
                  <span className="text-center font-mono text-[8px] leading-tight text-muted-foreground/60 group-hover:text-muted-foreground">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
