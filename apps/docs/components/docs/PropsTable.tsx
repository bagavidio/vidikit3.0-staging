/**
 * VIDI Docs — PropsTable
 * ─────────────────────────────────────────────────────────────
 * Reusable component props reference table.
 */

interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropRow[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Prop</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Type</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Default</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              className={i % 2 === 0 ? "bg-transparent" : "bg-muted/10"}
            >
              <td className="px-4 py-2.5 align-top">
                <span className="font-mono text-[12px] font-semibold text-foreground">
                  {prop.name}
                </span>
                {prop.required && (
                  <span className="ml-1 text-[10px] text-red-30">*</span>
                )}
              </td>
              <td className="px-4 py-2.5 align-top">
                <span className="font-mono text-[11px] text-blue-20">{prop.type}</span>
              </td>
              <td className="px-4 py-2.5 align-top">
                {prop.default ? (
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {prop.default}
                  </span>
                ) : (
                  <span className="text-[11px] text-muted-foreground/40">—</span>
                )}
              </td>
              <td className="px-4 py-2.5 align-top text-[12px] text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
