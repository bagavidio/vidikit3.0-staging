/**
 * VIDI Design System — Cross-Platform Token Export
 * ─────────────────────────────────────────────────────────────
 * GET /api/tokens
 *
 * Returns all VIDI design tokens as structured JSON for cross-platform
 * consumption by Web, iOS, Android, React Native, and design tools.
 *
 * Response shape:
 * {
 *   meta:      { version, generated, description }
 *   primitive: { red, blue, tosca, green, purple, pink, yellow, gray, overlays, special }
 *   semantic:  { brand, surface, text, state }
 *   platform:  { web, ios, android }
 * }
 */

import { NextResponse } from "next/server";
import {
  red, blue, tosca, green, purple, pink, yellow, gray, overlays, special,
} from "@/lib/tokens/palette";

// ── Semantic token definitions ────────────────────────────────────────────────
// These must stay in sync with app/globals.css Layer 3 definitions.

const SEMANTIC = {
  brand: {
    primary:        { value: red[50],       cssVar: "--brand-primary",        usage: "Main CTA buttons, primary navigation links" },
    primaryHover:   { value: red[60],       cssVar: "--brand-primary-hover",  usage: "Hover state for primary brand actions" },
    primaryActive:  { value: red[70],       cssVar: "--brand-primary-active", usage: "Pressed / active state for primary brand actions" },
  },
  surface: {
    base:     { value: gray[70],            cssVar: "--bg-base",    usage: "Root page background — darkest canvas level" },
    surface:  { value: gray[60],            cssVar: "--bg-surface", usage: "Elevated surface for cards, modals, drawers" },
    overlay:  { value: overlays.dark,       cssVar: "--bg-overlay", usage: "Modal backdrops and dark overlay layers" },
  },
  text: {
    primary:   { value: gray[10],           cssVar: "--text-primary",   usage: "High-contrast body text, headings, labels" },
    secondary: { value: gray[30],           cssVar: "--text-secondary", usage: "Muted supporting text, captions, placeholders" },
    brand:     { value: red[40],            cssVar: "--text-brand",     usage: "Brand-coloured inline text and active labels" },
  },
  state: {
    info:    { value: blue[50],             cssVar: "--state-info",    usage: "Informational banners, tooltips, help indicators" },
    success: { value: green[50],            cssVar: "--state-success", usage: "Success confirmations and positive status indicators" },
    warning: { value: yellow[50],           cssVar: "--state-warning", usage: "Caution alerts, non-critical warnings, pending states" },
    error:   { value: red[50],              cssVar: "--state-error",   usage: "Error states, destructive actions, validation failures" },
  },
};

// ── Platform-specific token shapes ───────────────────────────────────────────

function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function toSnakeCase(str: string): string {
  return str.replace(/-/g, "_");
}

function buildPlatformTokens() {
  const allTokens: Array<{ name: string; value: string }> = [];

  // Primitives
  const families = { red, blue, tosca, green, purple, pink, yellow, gray } as const;
  for (const [family, shades] of Object.entries(families)) {
    for (const [shade, value] of Object.entries(shades as Record<string, string>)) {
      allTokens.push({ name: `${family}-${shade}`, value });
    }
  }
  allTokens.push({ name: "overlay-dark",  value: overlays.dark });
  allTokens.push({ name: "overlay-light", value: overlays.light });
  allTokens.push({ name: "black",         value: special.black });
  allTokens.push({ name: "white",         value: special.white });

  // Semantics
  const flatSemantic: Array<{ name: string; value: string }> = [];
  for (const [group, tokens] of Object.entries(SEMANTIC)) {
    for (const [key, token] of Object.entries(tokens as Record<string, { value: string; cssVar: string; usage: string }>)) {
      const name = token.cssVar.replace("--", "");
      flatSemantic.push({ name, value: token.value });
    }
  }

  return {
    web: {
      description: "CSS custom properties — use in globals.css or as var(--token-name)",
      primitives: allTokens.map(({ name, value }) => ({
        cssVar:   `--${name}`,
        value,
      })),
      semantic: flatSemantic.map(({ name, value }) => ({
        cssVar: `--${name}`,
        value,
      })),
    },
    ios: {
      description: "Swift UIColor / SwiftUI Color names (camelCase). Use with your token extension.",
      primitives: allTokens.map(({ name, value }) => ({
        swiftName: toCamelCase(name),
        hexValue:  value,
      })),
      semantic: flatSemantic.map(({ name, value }) => ({
        swiftName: toCamelCase(name),
        hexValue:  value,
      })),
    },
    android: {
      description: "Android XML color resource names (snake_case). Paste into res/values/colors.xml.",
      primitives: allTokens.map(({ name, value }) => ({
        xmlName: `color_${toSnakeCase(name)}`,
        hexValue: value.startsWith("rgba") ? value : value,
      })),
      semantic: flatSemantic.map(({ name, value }) => ({
        xmlName: `color_${toSnakeCase(name)}`,
        hexValue: value,
      })),
    },
  };
}

// ── Route handler ────────────────────────────────────────────────────────────

export function GET() {
  const payload = {
    meta: {
      version:     "0.1.0",
      generated:   new Date().toISOString(),
      description: "VIDI Design System — complete token export for all platforms",
      source:      "https://github.com/bagavidio/vidikit3.0-staging",
    },
    primitive: {
      red,
      blue,
      tosca,
      green,
      purple,
      pink,
      yellow,
      gray,
      overlays,
      special,
    },
    semantic: SEMANTIC,
    platform: buildPlatformTokens(),
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
