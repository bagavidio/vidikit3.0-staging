/**
 * VIDI Docs — Foundations / Icons
 * Route: /foundations/icons
 *
 * "use client" — search filter uses useState.
 */

"use client";

import { useState } from "react";
import {
  Search,
  Home,
  Settings,
  User,
  Bell,
  Mail,
  Star,
  Heart,
  Bookmark,
  Share2,
  Download,
  Upload,
  Edit3,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Link,
  Copy,
  Clipboard,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  AlertCircle,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Loader2,
  RefreshCw,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Grid3X3,
  List,
  Layers,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Wifi,
  Bluetooth,
  Battery,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Image,
  Film,
  Music,
  Mic,
  Camera,
  Video,
  Phone,
  PhoneOff,
  MessageSquare,
  MessageCircle,
  Send,
  Inbox,
  Archive,
  Folder,
  File,
  FileText,
  Database,
  Server,
  Cloud,
  CloudUpload,
  CloudDownload,
  Package,
  Box,
  Tag,
  Filter,
  SortAsc,
  SortDesc,
  Calendar,
  Clock,
  Map,
  MapPin,
  Navigation,
  Compass,
  TrendingUp,
  TrendingDown,
  BarChart2,
  PieChart,
  Activity,
  Zap,
  Sun,
  Moon,
  Sparkles,
  Github,
  Twitter,
} from "lucide-react";

// ── Icon registry ──────────────────────────────────────────────────────────────

interface IconEntry {
  name: string;
  component: React.ReactNode;
}

const ALL_ICONS: IconEntry[] = [
  // Navigation
  { name: "Home", component: <Home /> },
  { name: "ChevronDown", component: <ChevronDown /> },
  { name: "ChevronRight", component: <ChevronRight /> },
  { name: "ChevronLeft", component: <ChevronLeft /> },
  { name: "ChevronUp", component: <ChevronUp /> },
  { name: "ArrowRight", component: <ArrowRight /> },
  { name: "ArrowLeft", component: <ArrowLeft /> },
  { name: "ArrowUp", component: <ArrowUp /> },
  { name: "ArrowDown", component: <ArrowDown /> },
  { name: "ExternalLink", component: <ExternalLink /> },
  // Actions
  { name: "Search", component: <Search /> },
  { name: "Edit3", component: <Edit3 /> },
  { name: "Trash2", component: <Trash2 /> },
  { name: "Plus", component: <Plus /> },
  { name: "Minus", component: <Minus /> },
  { name: "X", component: <X /> },
  { name: "Check", component: <Check /> },
  { name: "Copy", component: <Copy /> },
  { name: "Clipboard", component: <Clipboard /> },
  { name: "Download", component: <Download /> },
  { name: "Upload", component: <Upload /> },
  { name: "Share2", component: <Share2 /> },
  { name: "Link", component: <Link /> },
  { name: "RefreshCw", component: <RefreshCw /> },
  { name: "RotateCcw", component: <RotateCcw /> },
  { name: "RotateCw", component: <RotateCw /> },
  // Communication
  { name: "Bell", component: <Bell /> },
  { name: "Mail", component: <Mail /> },
  { name: "MessageSquare", component: <MessageSquare /> },
  { name: "MessageCircle", component: <MessageCircle /> },
  { name: "Send", component: <Send /> },
  { name: "Inbox", component: <Inbox /> },
  { name: "Phone", component: <Phone /> },
  { name: "PhoneOff", component: <PhoneOff /> },
  // User & Security
  { name: "User", component: <User /> },
  { name: "Settings", component: <Settings /> },
  { name: "Eye", component: <Eye /> },
  { name: "EyeOff", component: <EyeOff /> },
  { name: "Lock", component: <Lock /> },
  { name: "Unlock", component: <Unlock /> },
  { name: "Shield", component: <Shield /> },
  // Status
  { name: "AlertCircle", component: <AlertCircle /> },
  { name: "AlertTriangle", component: <AlertTriangle /> },
  { name: "Info", component: <Info /> },
  { name: "CheckCircle", component: <CheckCircle /> },
  { name: "XCircle", component: <XCircle /> },
  { name: "Loader2", component: <Loader2 /> },
  // Favorites
  { name: "Star", component: <Star /> },
  { name: "Heart", component: <Heart /> },
  { name: "Bookmark", component: <Bookmark /> },
  // View
  { name: "ZoomIn", component: <ZoomIn /> },
  { name: "ZoomOut", component: <ZoomOut /> },
  { name: "Maximize2", component: <Maximize2 /> },
  { name: "Minimize2", component: <Minimize2 /> },
  { name: "Grid3X3", component: <Grid3X3 /> },
  { name: "List", component: <List /> },
  { name: "Filter", component: <Filter /> },
  { name: "SortAsc", component: <SortAsc /> },
  { name: "SortDesc", component: <SortDesc /> },
  // Dev & Tech
  { name: "Layers", component: <Layers /> },
  { name: "Code2", component: <Code2 /> },
  { name: "Terminal", component: <Terminal /> },
  { name: "Cpu", component: <Cpu /> },
  { name: "Globe", component: <Globe /> },
  { name: "Wifi", component: <Wifi /> },
  { name: "Bluetooth", component: <Bluetooth /> },
  { name: "Database", component: <Database /> },
  { name: "Server", component: <Server /> },
  { name: "Cloud", component: <Cloud /> },
  { name: "CloudUpload", component: <CloudUpload /> },
  { name: "CloudDownload", component: <CloudDownload /> },
  { name: "Package", component: <Package /> },
  { name: "Box", component: <Box /> },
  // Media
  { name: "Image", component: <Image /> },
  { name: "Film", component: <Film /> },
  { name: "Music", component: <Music /> },
  { name: "Mic", component: <Mic /> },
  { name: "Camera", component: <Camera /> },
  { name: "Video", component: <Video /> },
  { name: "Play", component: <Play /> },
  { name: "Pause", component: <Pause /> },
  { name: "Square", component: <Square /> },
  { name: "SkipForward", component: <SkipForward /> },
  { name: "SkipBack", component: <SkipBack /> },
  { name: "Shuffle", component: <Shuffle /> },
  { name: "Repeat", component: <Repeat /> },
  { name: "Volume2", component: <Volume2 /> },
  { name: "VolumeX", component: <VolumeX /> },
  // Files
  { name: "Archive", component: <Archive /> },
  { name: "Folder", component: <Folder /> },
  { name: "File", component: <File /> },
  { name: "FileText", component: <FileText /> },
  { name: "Tag", component: <Tag /> },
  // Time & Place
  { name: "Calendar", component: <Calendar /> },
  { name: "Clock", component: <Clock /> },
  { name: "Map", component: <Map /> },
  { name: "MapPin", component: <MapPin /> },
  { name: "Navigation", component: <Navigation /> },
  { name: "Compass", component: <Compass /> },
  // Data
  { name: "TrendingUp", component: <TrendingUp /> },
  { name: "TrendingDown", component: <TrendingDown /> },
  { name: "BarChart2", component: <BarChart2 /> },
  { name: "PieChart", component: <PieChart /> },
  { name: "Activity", component: <Activity /> },
  // Misc
  { name: "Zap", component: <Zap /> },
  { name: "Sun", component: <Sun /> },
  { name: "Moon", component: <Moon /> },
  { name: "Sparkles", component: <Sparkles /> },
  { name: "Battery", component: <Battery /> },
  // Brands
  { name: "Github", component: <Github /> },
  { name: "Twitter", component: <Twitter /> },
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
            Lucide React — {ALL_ICONS.length} icons · consistent 2px stroke · 24×24 viewport
          </p>
        </header>

        {/* Library callout */}
        <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">Icon Library: Lucide React</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            VIDI uses <strong className="text-foreground">Lucide React</strong> for all product
            icons. Icons render at <code className="rounded bg-muted px-1 font-mono text-xs">size-4 (16px)</code> inline
            and <code className="rounded bg-muted px-1 font-mono text-xs">size-5 (20px)</code> in
            standalone contexts. Always import from{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">lucide-react</code>.
            Never use SVG sprite sheets or image files for UI icons.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "pnpm add lucide-react",
              'import { Search } from "lucide-react"',
              "<Search className=\"size-4\" />",
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
                  <Search
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
              <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
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
