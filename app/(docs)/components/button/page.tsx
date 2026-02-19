/**
 * VIDI Docs — Button Component Page
 * ─────────────────────────────────────────────────────────────
 * Interactive style guide for the vidikit Button component.
 * Route: /components/button
 */

import { Button } from "@/components/design-system";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {title}
    </h2>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </section>
);

export default function ButtonPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      {/* Header */}
      <header className="mb-12 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          vidikit · components
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Button
        </h1>
        <p className="text-muted-foreground">
          Master Button — all intents, sizes, and states.
        </p>
      </header>

      <div className="max-w-4xl space-y-10">
        {/* Intent */}
        <Section title="Intent">
          <Button intent="primary">Primary</Button>
          <Button intent="extended">Extended</Button>
          <Button intent="neutral">Neutral</Button>
          <Button intent="ghost">Ghost</Button>
          <Button intent="outline">Outline</Button>
          <Button intent="pink">Pink</Button>
          <Button intent="destructive">Destructive</Button>
          <Button intent="link">Link</Button>
        </Section>

        {/* Size */}
        <Section title="Size">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </Section>

        {/* Extended × All Sizes */}
        <Section title="Extended · All Sizes">
          <Button intent="extended" size="xs">Watch Now</Button>
          <Button intent="extended" size="sm">Watch Now</Button>
          <Button intent="extended" size="default">Watch Now</Button>
          <Button intent="extended" size="lg">Watch Now</Button>
        </Section>

        {/* Pink × All Sizes */}
        <Section title="Pink · All Sizes">
          <Button intent="pink" size="xs">Explore xs</Button>
          <Button intent="pink" size="sm">Explore sm</Button>
          <Button intent="pink" size="default">Explore</Button>
          <Button intent="pink" size="lg">Explore lg</Button>
        </Section>

        {/* Icon-only */}
        <Section title="Icon-Only">
          <Button size="icon-xs" intent="ghost" aria-label="Menu xs">☰</Button>
          <Button size="icon-sm" intent="ghost" aria-label="Menu sm">☰</Button>
          <Button size="icon"    intent="ghost" aria-label="Menu">☰</Button>
          <Button size="icon-lg" intent="ghost" aria-label="Menu lg">☰</Button>
          <Button size="icon"    intent="primary"     aria-label="Add">+</Button>
          <Button size="icon"    intent="pink"        aria-label="Star">★</Button>
          <Button size="icon"    intent="outline"     aria-label="Info">i</Button>
          <Button size="icon"    intent="destructive" aria-label="Delete">✕</Button>
        </Section>

        {/* Adaptive icon padding */}
        <Section title="With Icons (adaptive padding)">
          <Button intent="primary"  leftIcon={<span>←</span>}>Back</Button>
          <Button intent="extended" rightIcon={<span>→</span>}>Continue</Button>
          <Button
            intent="neutral"
            leftIcon={<span>↑</span>}
            rightIcon={<span>↓</span>}
          >
            Both Icons
          </Button>
          <Button intent="pink"    leftIcon={<span>★</span>}>Favourite</Button>
          <Button intent="outline" leftIcon={<span>⊕</span>}>Add Item</Button>
        </Section>

        {/* Loading */}
        <Section title="Loading State">
          <Button intent="primary"  loading>Saving…</Button>
          <Button intent="extended" loading>Loading</Button>
          <Button intent="neutral"  loading size="lg">Processing</Button>
          <Button intent="outline"  loading size="sm">Fetching</Button>
          <Button intent="pink"     loading>Uploading</Button>
        </Section>

        {/* Disabled */}
        <Section title="Disabled State">
          <Button intent="primary"  disabled>Primary</Button>
          <Button intent="extended" disabled>Extended</Button>
          <Button intent="outline"  disabled>Outline</Button>
          <Button intent="ghost"    disabled>Ghost</Button>
          <Button intent="pink"     disabled>Pink</Button>
        </Section>

        {/* Destructive */}
        <Section title="Destructive (soft — maia pattern)">
          <Button intent="destructive" size="xs">Delete xs</Button>
          <Button intent="destructive" size="sm">Delete sm</Button>
          <Button intent="destructive" size="default">Delete</Button>
          <Button intent="destructive" size="lg">Delete lg</Button>
          <Button intent="destructive" size="icon" aria-label="Delete">✕</Button>
        </Section>
      </div>
    </main>
  );
}
