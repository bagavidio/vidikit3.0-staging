#!/usr/bin/env node
/**
 * VIDI Token Generator
 * ─────────────────────────────────────────────────────────────
 * Reads packages/tokens/src/palette.ts and outputs:
 *   1. packages/tokens/dist/tokens.json        — flat JSON (platform-agnostic)
 *   2. packages/ui-android/tokens/colors.xml   — Android Compose XML
 *   3. packages/ui-ios/Sources/VidiKit/Tokens/Colors.swift — Swift Color extension
 *
 * Run:
 *   pnpm run tokens:sync
 *
 * Token sync workflow (V1 — manual):
 *   1. Update packages/tokens/src/palette.ts
 *   2. Run this script
 *   3. Commit both source and generated files
 *   4. Android/iOS teams git pull → updated immediately
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Color data (duplicated here to avoid TS compilation) ──────────────────────
// Keep in sync with packages/tokens/src/palette.ts

const palette = {
  red:    { 70: "#7D0017", 60: "#B00423", 50: "#CA0528", 40: "#E3052D", 30: "#FD1B44", 20: "#FE5070", 10: "#F8C8D1" },
  blue:   { 70: "#004496", 60: "#0153B6", 50: "#005DCC", 40: "#0067E2", 30: "#0074FF", 20: "#348BF4", 10: "#CAE2FF" },
  tosca:  { 70: "#07575C", 60: "#0A747A", 50: "#0C9199", 40: "#0D9AA3", 30: "#10C1CC", 20: "#1CCEDA", 10: "#BDF2F5" },
  green:  { 70: "#09782E", 60: "#078E45", 50: "#10AD58", 40: "#0ABA5B", 30: "#22DA76", 20: "#25E57E", 10: "#C4FBDD" },
  purple: { 70: "#2D075D", 60: "#3C0A7C", 50: "#4B0C9B", 40: "#500DA6", 30: "#6410CF", 20: "#7318E7", 10: "#D8BFF8" },
  pink:   { 70: "#5C0A54", 60: "#7A0D70", 50: "#99118C", 40: "#A31296", 30: "#CC16BB", 20: "#E124CF", 10: "#FFC6FA" },
  yellow: { 70: "#956010", 60: "#BB7814", 50: "#C78015", 40: "#E09017", 30: "#F9A01A", 20: "#FFB23E", 10: "#FFEACA" },
  gray:   { 70: "#0C0D0F", 60: "#18191C", 50: "#26292E", 40: "#525861", 30: "#9498A1", 20: "#C7CBD4", 10: "#F5F8FF" },
};

const shades = [10, 20, 30, 40, 50, 60, 70];

// ── Helper: camelCase ─────────────────────────────────────────────────────────
function toCamelCase(family, shade) {
  return `vidi${capitalize(family)}${shade}`;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ── 1. tokens.json ────────────────────────────────────────────────────────────
function generateTokensJson() {
  const out = {};
  for (const [family, shadeMap] of Object.entries(palette)) {
    out[family] = {};
    for (const shade of shades) {
      out[family][shade] = shadeMap[shade];
    }
  }
  const dir = join(ROOT, "packages/tokens/dist");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "tokens.json"), JSON.stringify(out, null, 2) + "\n");
  console.log("✓  packages/tokens/dist/tokens.json");
}

// ── 2. colors.xml ─────────────────────────────────────────────────────────────
function generateAndroidXml() {
  const lines = [
    '<?xml version="1.0" encoding="utf-8"?>',
    "<!--",
    "  VIDI Design System — Android Color Tokens",
    `  Generated: ${new Date().toISOString()}`,
    "  Source: packages/tokens/src/palette.ts",
    "-->",
    "<resources>",
  ];

  for (const [family, shadeMap] of Object.entries(palette)) {
    lines.push(`    <!-- ${capitalize(family)} -->`);
    for (const shade of shades) {
      lines.push(`    <color name="vidi_${family}_${shade}">${shadeMap[shade]}</color>`);
    }
    lines.push("");
  }

  lines.push("</resources>");

  const path = join(ROOT, "packages/ui-android/tokens/colors.xml");
  writeFileSync(path, lines.join("\n") + "\n");
  console.log("✓  packages/ui-android/tokens/colors.xml");
}

// ── 3. Colors.swift ───────────────────────────────────────────────────────────
function generateSwift() {
  const lines = [
    "/**",
    " * VIDI Design System — iOS Color Tokens (SwiftUI)",
    ` * Generated: ${new Date().toISOString()}`,
    " * Source: packages/tokens/src/palette.ts",
    " */",
    "",
    "import SwiftUI",
    "",
    "public extension Color {",
  ];

  for (const [family, shadeMap] of Object.entries(palette)) {
    lines.push(`    // MARK: — ${capitalize(family)}`);
    for (const shade of shades) {
      const name = toCamelCase(family, shade);
      const isCore = shade === 30 || (family === "gray" && shade === 70);
      const comment = isCore ? "  // brand core" : "";
      lines.push(`    static let ${name} = Color(hex: "${shadeMap[shade]}")${comment}`);
    }
    lines.push("");
  }

  lines.push(
    "    // MARK: — Hex initialiser (private)",
    "    private init(hex: String) {",
    '        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)',
    "        var int: UInt64 = 0",
    '        Scanner(string: hex).scanHexInt64(&int)',
    "        let r = Double((int >> 16) & 0xFF) / 255",
    "        let g = Double((int >> 8)  & 0xFF) / 255",
    "        let b = Double(int         & 0xFF) / 255",
    "        self.init(.sRGB, red: r, green: g, blue: b, opacity: 1)",
    "    }",
    "}"
  );

  const path = join(ROOT, "packages/ui-ios/Sources/VidiKit/Tokens/Colors.swift");
  writeFileSync(path, lines.join("\n") + "\n");
  console.log("✓  packages/ui-ios/Sources/VidiKit/Tokens/Colors.swift");
}

// ── Run ───────────────────────────────────────────────────────────────────────
console.log("VIDI token sync starting…\n");
generateTokensJson();
generateAndroidXml();
generateSwift();
console.log("\nToken sync complete.");
