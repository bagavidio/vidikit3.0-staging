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
      { title: "Color",       href: "/colors" },
      { title: "Typography",  href: "/foundations/typography",  disabled: true },
      { title: "Shapes",      href: "/foundations/shapes",      disabled: true },
      { title: "Grid",        href: "/foundations/grid",        disabled: true },
      { title: "Icons",       href: "/foundations/icons",       disabled: true },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button",        href: "/components/button" },
      { title: "Avatar",        href: "/components/avatar" },
      { title: "Badge",         href: "/components/badge" },
      { title: "Input",         href: "/components/input" },
      { title: "Input Group",   href: "/components/input-group" },
      { title: "Input OTP",     href: "/components/input-otp" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Checkbox",      href: "/components/checkbox" },
      { title: "Radio Group",   href: "/components/radio-group" },
      { title: "Aspect Ratio",  href: "/components/aspect-ratio" },
      { title: "Chips",         href: "/components/chips",       disabled: true },
      { title: "Modals",        href: "/components/modals",      disabled: true },
      { title: "Navigation",    href: "/components/navigation",  disabled: true },
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
      { title: "Design Tokens",  href: "/tokens",      disabled: true },
      { title: "JSON Exports",   href: "/tokens/json", disabled: true },
    ],
  },
];
