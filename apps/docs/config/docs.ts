/**
 * VIDI Design System — Docs Navigation Config
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all sidebar nav groups and links.
 * Edit this file to add pages, reorder sections, or mark items
 * as disabled (shows greyed out + "Soon" label).
 */

export type NavItem = {
  title: string;
  href: string;
  /** Badge label shown next to the item (e.g. "Soon", "New") */
  label?: string;
  /** Greys out the item and disables navigation */
  disabled?: boolean;
  /** Opens in a new tab */
  external?: boolean;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
  /** Whether this group starts expanded (default: auto based on active item) */
  defaultOpen?: boolean;
};

/** External links used in the TopNav and sidebar */
export const docsLinks = {
  github: "https://github.com",
  figma:  "https://figma.com",
};

export const docsNav: NavGroup[] = [
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { title: "Introduction",  href: "/" },
      { title: "Installation",  href: "/getting-started/installation", disabled: true },
      { title: "Principles",    href: "/#principles" },
      { title: "Brand",         href: "/getting-started/brand",        disabled: true },
      { title: "Figma Library", href: docsLinks.figma,  label: "External", external: true },
      { title: "GitHub",        href: docsLinks.github, label: "External", external: true },
      { title: "Release Notes", href: "/resources/releases",           disabled: true },
    ],
  },
  {
    title: "Foundation",
    items: [
      { title: "Color",       href: "/foundations/colors" },
      { title: "Semantics",   href: "/foundations/semantics" },
      { title: "Typography",  href: "/foundations/typography" },
      { title: "Spacing",     href: "/foundations/spacing" },
      { title: "Shapes",      href: "/foundations/shapes" },
      { title: "Icons",       href: "/foundations/icons" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button",        href: "/components/button" },
      { title: "Button Group",  href: "/components/button-group",  label: "New" },
      { title: "Avatar",        href: "/components/avatar" },
      { title: "Badge",         href: "/components/badge" },
      { title: "Card",          href: "/components/card" },
      { title: "Checkbox",      href: "/components/checkbox" },
      { title: "Chips",         href: "/components/chips" },
      { title: "Input",         href: "/components/input" },
      { title: "Input Group",   href: "/components/input-group" },
      { title: "Input OTP",     href: "/components/input-otp" },
      { title: "Radio Group",   href: "/components/radio-group" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Select",        href: "/components/select",        label: "New" },
      { title: "Separator",     href: "/components/separator",     label: "New" },
      { title: "Scroll Area",   href: "/components/scroll-area",   label: "New" },
      { title: "Sheet",         href: "/components/sheet",         label: "New" },
      { title: "Skeleton",      href: "/components/skeleton",      label: "New" },
      { title: "Slider",        href: "/components/slider",        label: "New" },
      { title: "Switch",        href: "/components/switch",        label: "New" },
      { title: "Tabs",          href: "/components/tabs",          label: "New" },
      { title: "Textarea",      href: "/components/textarea",      label: "New" },
      { title: "Toast",         href: "/components/toast",         label: "New" },
      { title: "Tooltip",       href: "/components/tooltip",       label: "New" },
      { title: "Calendar",      href: "/components/calendar",      label: "New" },
      { title: "Carousel",      href: "/components/carousel",      label: "New" },
      { title: "Chart",         href: "/components/chart",         label: "New" },
      { title: "Command",       href: "/components/command",       label: "New" },
      { title: "Context Menu",  href: "/components/context-menu",  label: "New" },
      { title: "Dialog",        href: "/components/dialog" },
      { title: "Empty State",   href: "/components/empty-state",   label: "New" },
      { title: "Item",          href: "/components/item",          label: "New" },
      { title: "Modals",        href: "/components/modals",        disabled: true },
      { title: "Navigation",    href: "/components/navigation",    disabled: true },
    ],
  },
  {
    title: "Patterns",
    items: [
      { title: "Forms",          href: "/patterns/forms",          disabled: true },
      { title: "Empty States",   href: "/patterns/empty-states",   disabled: true },
      { title: "Error Handling", href: "/patterns/error-handling",  disabled: true },
    ],
  },
  {
    title: "Tokens",
    items: [
      { title: "Design Tokens",      href: "/foundations/semantics" },
      { title: "Breakpoints",        href: "/tokens/breakpoints" },
      { title: "Aspect Ratios",      href: "/tokens/ratio" },
      { title: "Token Export (JSON)", href: "/api/tokens",         label: "API" },
      { title: "Android Tokens",     href: "/api/tokens/android",  label: "XML" },
      { title: "iOS Tokens",         href: "/api/tokens/ios",      label: "Swift" },
    ],
  },
];
