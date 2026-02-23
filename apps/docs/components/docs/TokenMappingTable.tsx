/**
 * VIDI Docs — TokenMappingTable
 * ─────────────────────────────────────────────────────────────
 * Displays token → CSS var / Compose / Swift mappings side by side.
 */

interface TokenRow {
  name: string;
  value: string;
  cssVar?: string;
  compose?: string;
  swift?: string;
  description?: string;
}

interface TokenMappingTableProps {
  tokens: TokenRow[];
  /** Columns to show (default: all) */
  columns?: ("value" | "css" | "compose" | "swift" | "description")[];
}

export function TokenMappingTable({
  tokens,
  columns = ["value", "css", "compose", "swift"],
}: TokenMappingTableProps) {
  const showValue = columns.includes("value");
  const showCss = columns.includes("css");
  const showCompose = columns.includes("compose");
  const showSwift = columns.includes("swift");
  const showDesc = columns.includes("description");

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Token</th>
            {showValue && (
              <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Value</th>
            )}
            {showCss && (
              <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">CSS Var</th>
            )}
            {showCompose && (
              <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Compose</th>
            )}
            {showSwift && (
              <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">SwiftUI</th>
            )}
            {showDesc && (
              <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Usage</th>
            )}
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, i) => (
            <tr
              key={token.name}
              className={i % 2 === 0 ? "bg-transparent" : "bg-muted/10"}
            >
              <td className="px-4 py-2.5 align-middle">
                <div className="flex items-center gap-2">
                  {/* Color swatch */}
                  {/^#[0-9a-fA-F]{3,8}$/.test(token.value) && (
                    <span
                      className="inline-block size-3.5 shrink-0 rounded-full border border-white/10"
                      style={{ backgroundColor: token.value }}
                    />
                  )}
                  <span className="font-mono text-[12px] font-semibold text-foreground">
                    {token.name}
                  </span>
                </div>
              </td>
              {showValue && (
                <td className="px-4 py-2.5 align-middle">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {token.value}
                  </span>
                </td>
              )}
              {showCss && (
                <td className="px-4 py-2.5 align-middle">
                  {token.cssVar ? (
                    <span className="font-mono text-[11px] text-tosca-20">
                      {token.cssVar}
                    </span>
                  ) : (
                    <span className="text-[11px] text-muted-foreground/30">—</span>
                  )}
                </td>
              )}
              {showCompose && (
                <td className="px-4 py-2.5 align-middle">
                  {token.compose ? (
                    <span className="font-mono text-[11px] text-green-20">
                      {token.compose}
                    </span>
                  ) : (
                    <span className="text-[11px] text-muted-foreground/30">—</span>
                  )}
                </td>
              )}
              {showSwift && (
                <td className="px-4 py-2.5 align-middle">
                  {token.swift ? (
                    <span className="font-mono text-[11px] text-blue-20">
                      {token.swift}
                    </span>
                  ) : (
                    <span className="text-[11px] text-muted-foreground/30">—</span>
                  )}
                </td>
              )}
              {showDesc && (
                <td className="px-4 py-2.5 align-middle text-[12px] text-muted-foreground">
                  {token.description ?? "—"}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
