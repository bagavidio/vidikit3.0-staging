/**
 * VIDI Docs — Avatar Component
 * Route: /components/avatar
 */

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

// ── Shared helpers ─────────────────────────────────────────────────────────────

function Section({
  title,
  description,
  children,
  stack = false,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  stack?: boolean;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-0.5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground/70">{description}</p>
        )}
      </div>
      <div
        className={
          stack
            ? "flex flex-col gap-4"
            : "flex flex-wrap items-center gap-4"
        }
      >
        {children}
      </div>
    </section>
  );
}

function Demo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AvatarPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Avatar</h1>
        <p className="text-muted-foreground">
          Profile pictures with image, initials fallback, status badges, and stacked groups.
        </p>
      </header>

      <div className="max-w-4xl space-y-12">

        {/* ── Sizes ── */}
        <Section title="Sizes" description="Three sizes: sm (24px), default (32px), lg (40px).">
          <Demo label="sm">
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Demo>
          <Demo label="default">
            <Avatar size="default">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Demo>
          <Demo label="lg">
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Demo>
        </Section>

        {/* ── Fallback ── */}
        <Section title="Fallback" description="Shown when the image is missing or still loading.">
          {["AB", "VD", "YR", "NK", "PW"].map((initials) => (
            <Avatar key={initials}>
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          ))}
        </Section>

        {/* ── Status Badge ── */}
        <Section
          title="With Badge"
          description="AvatarBadge overlays the bottom-right corner to show status."
        >
          <Demo label="online">
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
              <AvatarBadge className="bg-green-30" />
            </Avatar>
          </Demo>
          <Demo label="busy">
            <Avatar size="lg">
              <AvatarFallback>VD</AvatarFallback>
              <AvatarBadge className="bg-yellow-30" />
            </Avatar>
          </Demo>
          <Demo label="offline">
            <Avatar size="lg">
              <AvatarFallback>NK</AvatarFallback>
              <AvatarBadge className="bg-gray-40" />
            </Avatar>
          </Demo>
          <Demo label="dnd">
            <Avatar size="lg">
              <AvatarFallback>YR</AvatarFallback>
              <AvatarBadge className="bg-red-30" />
            </Avatar>
          </Demo>
        </Section>

        {/* ── Badge sizes ── */}
        <Section title="Badge × Sizes" description="Badge scales automatically with the parent Avatar size.">
          <Demo label="sm">
            <Avatar size="sm">
              <AvatarFallback>AB</AvatarFallback>
              <AvatarBadge className="bg-green-30" />
            </Avatar>
          </Demo>
          <Demo label="default">
            <Avatar size="default">
              <AvatarFallback>AB</AvatarFallback>
              <AvatarBadge className="bg-green-30" />
            </Avatar>
          </Demo>
          <Demo label="lg">
            <Avatar size="lg">
              <AvatarFallback>AB</AvatarFallback>
              <AvatarBadge className="bg-green-30" />
            </Avatar>
          </Demo>
        </Section>

        {/* ── Avatar Group ── */}
        <Section
          title="Avatar Group"
          description="Stacked avatars with -space-x-2 overlap and ring separation."
        >
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>VD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>YR</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </Section>

        {/* ── Group + Count ── */}
        <Section
          title="Group with Overflow Count"
          description="AvatarGroupCount shows the number of hidden members."
        >
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>VD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <AvatarGroupCount className="text-xs font-medium text-muted-foreground">
              +12
            </AvatarGroupCount>
          </AvatarGroup>

          {/* Large */}
          <AvatarGroup>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>VD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <AvatarGroupCount className="text-sm font-medium text-muted-foreground">
              +5
            </AvatarGroupCount>
          </AvatarGroup>
        </Section>

        {/* ── Guideline ── */}
        <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Usage Guidelines
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
            <li>Always provide a meaningful <code className="font-mono text-xs bg-muted px-1 rounded">alt</code> text for AvatarImage.</li>
            <li>Use <strong>initials</strong> as fallback — maximum 2 characters.</li>
            <li>Reserve <strong>lg</strong> size for profile pages or detail views; use <strong>sm</strong> in dense lists.</li>
            <li>Status badge colors: green=online, yellow=busy/away, neutral=offline, primary=do-not-disturb.</li>
            <li>Use AvatarGroup for showing collaborators; cap visible avatars at 4–5 then use AvatarGroupCount.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
