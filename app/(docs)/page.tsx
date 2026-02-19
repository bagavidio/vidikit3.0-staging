/**
 * VIDI Design System — Landing Page
 * ─────────────────────────────────────────────────────────────
 * Introduction · Quick Shortcuts · Design System Principles
 * Route: / (wrapped by (docs)/layout for sidebar + topnav)
 */

import Link from "next/link";
import {
  Layers,
  Code2,
  Grid3X3,
  ArrowRight,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/design-system";
import { docsLinks } from "@/config/docs";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ShortcutCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

interface Principle {
  icon: React.ReactNode;
  title: string;
  body: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const shortcuts: ShortcutCard[] = [
  {
    icon: <Layers className="size-5" />,
    title: "Foundations",
    description: "Color tokens, typography scale, spacing, radius, and design language documentation.",
    href: "/colors",
  },
  {
    icon: <Code2 className="size-5" />,
    title: "Source Code",
    description: "Browse the GitHub repository, contribute, and explore the full codebase.",
    href: docsLinks.github,
    external: true,
  },
  {
    icon: <Grid3X3 className="size-5" />,
    title: "Components",
    description: "UI components built with shadcn/ui, CVA variants, and VIDI design tokens.",
    href: "/components/button",
  },
];

const principles: Principle[] = [
  {
    icon: <Shield className="size-5" />,
    title: "Reliable",
    body: "Consistently has the most complete and updated information. Such as detailed explanations, experiences, and behaviors that are well structured so that they can be understood by all teams.",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Delightful",
    body: "Together we design experiences to encourage critical thinking and self-confidence as creatives who can provide the right solutions. Produce components that have impact and appropriate for the needs of all teams.",
  },
  {
    icon: <TrendingUp className="size-5" />,
    title: "Evolving",
    body: "Room to grow with a clear foundation. Gradually, especially from simple forms to more complex forms. Have a strong basis for developing functions such as research results, data, and technological developments.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-16 px-6 py-14">

      {/* ── Section 1: Introduction ──────────────────────────────── */}
      <section className="space-y-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          VIDI Design System
        </p>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            The{" "}
            <span className="text-primary-50">VIDI</span>
            {" "}Design System
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            The VIDI Design System is an essential part of the design process, maintaining a strong
            and consistent brand identity across the product. By creating a unified visual language,
            it helps the product and engineering teams collaborate more effectively. With a
            data-driven approach, research, and teamwork, VIDI will helps the product grow and adapt
            while staying true to the brand.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button intent="primary" size="default" asChild>
            <Link href="/components/button">Explore Components</Link>
          </Button>
          <Button intent="outline" size="default" asChild>
            <a href={docsLinks.github} target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
          </Button>
        </div>
      </section>

      {/* ── Section 2: Quick Shortcuts ───────────────────────────── */}
      <section className="space-y-5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {shortcuts.map((card) => {
            const inner = (
              <div className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary-50/40 hover:bg-card/80">
                <div className="flex items-center justify-between">
                  <span className="text-primary-50">{card.icon}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm font-semibold text-foreground">{card.title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            );

            return card.external ? (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {inner}
              </a>
            ) : (
              <Link key={card.title} href={card.href} className="block h-full">
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Section 3: Design System Principles ─────────────────── */}
      <section className="space-y-5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Design System Principles
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border/50 bg-muted/30 p-5 space-y-3"
            >
              <span className="text-primary-50">{p.icon}</span>
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-foreground">{p.title}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
