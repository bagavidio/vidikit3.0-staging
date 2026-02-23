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
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

/** External links used in the TopNav and sidebar */
export const docsLinks = {
  github: "https://github.com",
  figma:  "https://figma.com",
};

export const docsNav: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Installation",  href: "/getting-started/installation",  disabled: true },
      { title: "Principles",    href: "/getting-started/principles",    disabled: true },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Figma Library",  href: docsLinks.figma,  label: "External" },
      { title: "GitHub",         href: docsLinks.github, label: "External" },
      { title: "Release Notes",  href: "/resources/releases",           disabled: true },
    ],
  },
  {
    title: "Foundations",
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
      { title: "Button Group",  href: "/components/button-group", label: "New" },
      { title: "Avatar",        href: "/components/avatar" },
      { title: "Badge",         href: "/components/badge" },
      { title: "Input",         href: "/components/input" },
      { title: "Input Group",   href: "/components/input-group" },
      { title: "Input OTP",     href: "/components/input-otp" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Checkbox",      href: "/components/checkbox" },
      { title: "Radio Group",   href: "/components/radio-group" },
      { title: "Aspect Ratio",  href: "/components/aspect-ratio" },
      { title: "Card",          href: "/components/card" },
      { title: "Calendar",      href: "/components/calendar",     label: "New" },
      { title: "Carousel",      href: "/components/carousel",     label: "New" },
      { title: "Chart",         href: "/components/chart",        label: "New" },
      { title: "Command",       href: "/components/command",      label: "New" },
      { title: "Context Menu",  href: "/components/context-menu", label: "New" },
      { title: "Dialog",        href: "/components/dialog" },
      { title: "Chips",         href: "/components/chips" },
      { title: "Empty State",   href: "/components/empty-state",  label: "New" },
      { title: "Item",          href: "/components/item",         label: "New" },
      { title: "Modals",        href: "/components/modals",       disabled: true },
      { title: "Navigation",    href: "/components/navigation",   disabled: true },
    ],
  },
  {
    title: "Patterns",
    items: [
      { title: "Forms",           href: "/patterns/forms",           disabled: true },
      { title: "Empty States",    href: "/patterns/empty-states",    disabled: true },
      { title: "Error Handling",  href: "/patterns/error-handling",  disabled: true },
    ],
  },
  {
    title: "Tokens",
    items: [
      { title: "Design Tokens",   href: "/foundations/semantics" },
      { title: "Breakpoints",     href: "/tokens/breakpoints" },
      { title: "Aspect Ratios",   href: "/tokens/ratio" },
      { title: "Token Export API", href: "/api/tokens", label: "JSON" },
    ],
  },
];
