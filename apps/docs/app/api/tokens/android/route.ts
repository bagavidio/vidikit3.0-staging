/**
 * VIDI Design System — Android Token Export
 * ─────────────────────────────────────────────────────────────
 * GET /api/tokens/android
 *
 * Returns Android XML color resource file content as plain text.
 * Android engineers can download and drop into res/values/colors.xml.
 *
 * Response: text/xml
 */

import { NextResponse } from "next/server";
import {
  red, blue, tosca, green, purple, pink, yellow, gray,
} from "@vidikit/tokens";

const SHADES = [10, 20, 30, 40, 50, 60, 70] as const;

const families = { red, blue, tosca, green, purple, pink, yellow, gray } as const;

function buildXml(): string {
  const lines: string[] = [
    '<?xml version="1.0" encoding="utf-8"?>',
    "<!--",
    "  VIDI Design System — Android Color Tokens",
    `  Generated: ${new Date().toISOString()}`,
    "  Source: @vidikit/tokens",
    "",
    "  Usage:",
    "    @color/vidi_red_30         → #FD1B44 (VIDI brand core red)",
    "    @color/vidi_blue_30        → #0074FF (VIDI extended blue)",
    "",
    "  In Compose:",
    "    colorResource(id = R.color.vidi_red_30)",
    "-->",
    "<resources>",
  ];

  for (const [family, shadeMap] of Object.entries(families)) {
    lines.push(`    <!-- ${family.charAt(0).toUpperCase() + family.slice(1)} -->`);
    for (const shade of SHADES) {
      const value = (shadeMap as Record<number, string>)[shade];
      if (value) {
        lines.push(`    <color name="vidi_${family}_${shade}">${value}</color>`);
      }
    }
    lines.push("");
  }

  lines.push("    <!-- Special -->",
    '    <color name="vidi_black">#000000</color>',
    '    <color name="vidi_white">#FFFFFF</color>',
    "",
    "    <!-- Semantic -->",
    `    <color name="vidi_brand_primary">${red[50]}</color>`,
    `    <color name="vidi_state_info">${blue[50]}</color>`,
    `    <color name="vidi_state_success">${green[50]}</color>`,
    `    <color name="vidi_state_warning">${yellow[50]}</color>`,
    `    <color name="vidi_state_error">${red[50]}</color>`,
    "</resources>",
  );

  return lines.join("\n");
}

export function GET() {
  const xml = buildXml();
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Content-Disposition": 'attachment; filename="colors.xml"',
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
