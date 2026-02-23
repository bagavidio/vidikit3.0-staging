/**
 * VIDI Docs — Components / Chips
 * ─────────────────────────────────────────────────────────────
 * Multi-platform documentation with live preview + code tabs.
 * Route: /components/chips
 */

"use client";

import { Suspense, useState } from "react";
import { Chip } from "@vidikit/ui-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PlatformTabs } from "@/components/docs/PlatformTabs";
import { chipSnippets, chipProps } from "@/lib/docs/components/chip";

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

// ── Live demos ────────────────────────────────────────────────────────────────

function DismissibleDemo() {
  const [tags, setTags] = useState(["Action", "Drama", "Sci-Fi", "Thriller", "Comedy"]);
  const remove = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Chip
            key={tag}
            variant="interactive"
            dismissible
            onDismiss={() => remove(tag)}
          >
            {tag}
          </Chip>
        ))}
        {tags.length === 0 && (
          <p className="text-xs text-muted-foreground">All tags removed.</p>
        )}
      </div>
      {tags.length < 5 && (
        <button
          type="button"
          onClick={() => setTags(["Action", "Drama", "Sci-Fi", "Thriller", "Comedy"])}
          className="text-xs text-red-30 hover:underline focus-visible:outline-none"
        >
          Reset tags
        </button>
      )}
    </div>
  );
}

function FilterDemo() {
  const genres = ["All", "Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"];
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Chip
          key={genre}
          variant="interactive"
          selected={active === genre}
          onClick={() => setActive(genre)}
        >
          {genre}
        </Chip>
      ))}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ChipsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-10">

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            vidikit · components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Chip</h1>
          <p className="text-base text-muted-foreground">
            Compact tokens for genres, tags, filters, and selection states.
            4 variants, 4 sizes, dismissible, and D-pad focus ready.
          </p>
          <div className="pt-2">
            <CodeBlock
              code={chipSnippets.React.installation}
              language="ts"
              platform="React"
            />
          </div>
        </header>

        {/* ── Live Preview ─────────────────────────────────────── */}
        <Section title="Preview" description="All chip variants.">
          <ComponentPreview>
            <Chip>Filled</Chip>
            <Chip variant="outline">Outline</Chip>
            <Chip variant="interactive" selected>Interactive</Chip>
            <Chip variant="brand">VIDI Original</Chip>
          </ComponentPreview>
        </Section>

        {/* ── Platform Code Tabs ───────────────────────────────── */}
        <Section
          title="Usage"
          description="Platform-specific implementation."
        >
          <Suspense>
            <PlatformTabs
              platforms={["React", "TV", "Mobile Web", "Android", "iOS"]}
              snippets={{
                React: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={chipSnippets.React.basic}
                      language="tsx"
                      platform="React"
                    />
                  </div>
                ),
                TV: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={chipSnippets.TV.basic}
                      language="tsx"
                      platform="TV"
                    />
                  </div>
                ),
                "Mobile Web": (
                  <div className="space-y-3">
                    <CodeBlock
                      code={chipSnippets["Mobile Web"].scrollable}
                      language="tsx"
                      platform="Mobile Web"
                    />
                  </div>
                ),
                Android: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={chipSnippets.Android.basic}
                      language="kotlin"
                      platform="Android"
                    />
                  </div>
                ),
                iOS: (
                  <div className="space-y-3">
                    <CodeBlock
                      code={chipSnippets.iOS.basic}
                      language="swift"
                      platform="iOS"
                    />
                  </div>
                ),
              }}
            />
          </Suspense>
        </Section>

        {/* ── Variants ─────────────────────────────────────────── */}
        <Section title="Variants">
          <ComponentPreview center={false}>
            <div className="space-y-4 w-full">
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">Filled (default)</p>
                <div className="flex flex-wrap gap-2">
                  <Chip>Default</Chip>
                  <Chip variant="filled" size="sm">Small</Chip>
                  <Chip variant="filled" size="lg">Large</Chip>
                  <Chip variant="filled" size="xl">XL (TV)</Chip>
                  <Chip variant="filled" selected>Selected</Chip>
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">Outline</p>
                <div className="flex flex-wrap gap-2">
                  <Chip variant="outline">Default</Chip>
                  <Chip variant="outline" size="sm">Small</Chip>
                  <Chip variant="outline" size="lg">Large</Chip>
                  <Chip variant="outline" selected>Selected</Chip>
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">Brand</p>
                <div className="flex flex-wrap gap-2">
                  <Chip variant="brand">VIDI Original</Chip>
                  <Chip variant="brand" size="sm">New</Chip>
                  <Chip variant="brand" size="lg">Exclusive</Chip>
                </div>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={chipSnippets.React.variants}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── Filter bar ───────────────────────────────────────── */}
        <Section
          title="Interactive — Filter Bar"
          description="Click a chip to select it. Renders as <button> when onClick is provided."
        >
          <ComponentPreview center={false} padding="sm">
            <FilterDemo />
          </ComponentPreview>
          <CodeBlock
            code={chipSnippets.React.filter}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── Dismissible ──────────────────────────────────────── */}
        <Section
          title="Interactive — Dismissible Tags"
          description="Click × to remove a tag. Chips with onDismiss show a dismiss button."
        >
          <ComponentPreview center={false} padding="sm">
            <DismissibleDemo />
          </ComponentPreview>
          <CodeBlock
            code={chipSnippets.React.dismissible}
            language="tsx"
            platform="React"
          />
        </Section>

        {/* ── TV focus ─────────────────────────────────────────── */}
        <Section
          title="TV / 10-Foot — D-Pad Navigation"
          description='Use size="xl" for 10-foot viewing. Focus ring scales to ring-4 + scale-105. Tab to preview.'
        >
          <ComponentPreview center={false} padding="sm">
            <div className="flex flex-wrap gap-3">
              {["News", "Sports", "Movies", "Series", "Kids"].map((label) => (
                <Chip
                  key={label}
                  variant="interactive"
                  size="xl"
                  tabIndex={0}
                >
                  {label}
                </Chip>
              ))}
            </div>
          </ComponentPreview>
          <CodeBlock
            code={chipSnippets.TV.filterBar}
            language="tsx"
            platform="TV"
          />
        </Section>

        {/* ── Props ────────────────────────────────────────────── */}
        <Section title="Props">
          <PropsTable props={chipProps} />
        </Section>

      </div>
    </main>
  );
}
