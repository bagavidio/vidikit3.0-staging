/**
 * VIDI Design System — iOS Token Export
 * ─────────────────────────────────────────────────────────────
 * GET /api/tokens/ios
 *
 * Returns Swift Color extension file content as plain text.
 * iOS engineers can download and add to their Xcode project.
 *
 * Response: text/plain (Swift source)
 */

import { NextResponse } from "next/server";
import {
  red, blue, tosca, green, purple, pink, yellow, gray,
} from "@vidikit/tokens";

const SHADES = [10, 20, 30, 40, 50, 60, 70] as const;

const families = { red, blue, tosca, green, purple, pink, yellow, gray } as const;

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toCamelCase(family: string, shade: number): string {
  return `vidi${capitalize(family)}${shade}`;
}

function buildSwift(): string {
  const lines: string[] = [
    "/**",
    " * VIDI Design System — iOS Color Tokens (SwiftUI)",
    ` * Generated: ${new Date().toISOString()}`,
    " * Source: @vidikit/tokens",
    " *",
    " * Usage:",
    " *   Color.vidiRed30   // #FD1B44 — VIDI brand core red",
    " *   Color.vidiBlue30  // #0074FF — VIDI extended blue",
    " */",
    "",
    "import SwiftUI",
    "",
    "public extension Color {",
  ];

  for (const [family, shadeMap] of Object.entries(families)) {
    lines.push(`    // MARK: — ${capitalize(family)}`);
    for (const shade of SHADES) {
      const value = (shadeMap as Record<number, string>)[shade];
      if (value) {
        const name = toCamelCase(family, shade);
        const isCore = shade === 30 || (family === "gray" && shade === 70);
        const comment = isCore ? `  // ${value} — brand core` : `  // ${value}`;
        lines.push(`    static let ${name} = Color(hex: "${value}")${comment}`);
      }
    }
    lines.push("");
  }

  lines.push(
    "    // MARK: — Semantic",
    `    static let vidiBrandPrimary = Color(hex: "${red[50]}")`,
    `    static let vidiStateInfo    = Color(hex: "${blue[50]}")`,
    `    static let vidiStateSuccess = Color(hex: "${green[50]}")`,
    `    static let vidiStateWarning = Color(hex: "${yellow[50]}")`,
    `    static let vidiStateError   = Color(hex: "${red[50]}")`,
    "",
    "    // MARK: — Hex initialiser",
    "    private init(hex: String) {",
    '        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)',
    "        var int: UInt64 = 0",
    '        Scanner(string: hex).scanHexInt64(&int)',
    "        let r = Double((int >> 16) & 0xFF) / 255",
    "        let g = Double((int >> 8)  & 0xFF) / 255",
    "        let b = Double(int         & 0xFF) / 255",
    "        self.init(.sRGB, red: r, green: g, blue: b, opacity: 1)",
    "    }",
    "}",
  );

  return lines.join("\n");
}

export function GET() {
  const swift = buildSwift();
  return new NextResponse(swift, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Colors.swift"',
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
