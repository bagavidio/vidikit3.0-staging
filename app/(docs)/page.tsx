/**
 * VIDI Design System — Landing Page
 * ─────────────────────────────────────────────────────────────
 * Interactive hero with full-page cursor-following glow +
 * Framer Motion entrance animations. Four content sections.
 * Route: / (wrapped by (docs)/layout for sidebar + topnav)
 */

"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Layers01Icon, Shield01Icon, SparklesIcon, ChartIncreaseIcon,
  GridIcon, RulerIcon, SourceCodeIcon, ArrowRight01Icon, MessageMultiple01Icon,
} from "@hugeicons/core-free-icons";
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
    icon: <HugeiconsIcon icon={Layers01Icon} className="size-5" />,
    title: "Foundations",
    description: "Color tokens, typography scale, spacing, radius, and design language documentation.",
    href: "/foundations/colors",
  },
  {
    icon: <HugeiconsIcon icon={GridIcon} className="size-5" />,
    title: "Components",
    description: "UI components built with shadcn/ui, CVA variants, and VIDI design tokens.",
    href: "/components/button",
  },
  {
    icon: <HugeiconsIcon icon={RulerIcon} className="size-5" />,
    title: "Tokens",
    description: "Design tokens for breakpoints, aspect ratios, and cross-platform consistency.",
    href: "/tokens/ratio",
  },
  {
    icon: <HugeiconsIcon icon={SourceCodeIcon} className="size-5" />,
    title: "Source Code",
    description: "Browse the GitHub repository, contribute, and explore the full codebase.",
    href: docsLinks.github,
    external: true,
  },
];

const principles: Principle[] = [
  {
    icon: <HugeiconsIcon icon={Shield01Icon} className="size-5" />,
    title: "Reliable",
    body: "Consistently has the most complete and updated information. Such as detailed explanations, experiences, and behaviors that are well structured so that they can be understood by all teams.",
  },
  {
    icon: <HugeiconsIcon icon={SparklesIcon} className="size-5" />,
    title: "Delightful",
    body: "Together we design experiences to encourage critical thinking and self-confidence as creatives who can provide the right solutions. Produce components that have impact and appropriate for the needs of all teams.",
  },
  {
    icon: <HugeiconsIcon icon={ChartIncreaseIcon} className="size-5" />,
    title: "Evolving",
    body: "Room to grow with a clear foundation. Gradually, especially from simple forms to more complex forms. Have a strong basis for developing functions such as research results, data, and technological developments.",
  },
];

// ── Animation variants ─────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// ── Hero Section (content only — glow is page-level) ──────────────────────────

function HeroSection() {
  return (
    <div className="relative px-8 py-14 sm:px-14 sm:py-20">
      <div className="relative space-y-6">
        <motion.p
          className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          VIDI Design System
        </motion.p>

        <motion.h1
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.08}
        >
          <span
            style={{
              background: "linear-gradient(135deg, var(--red-40) 0%, var(--red-50) 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VIDI
          </span>{" "}
          Design System
        </motion.h1>

        <motion.p
          className="max-w-xl text-base leading-relaxed text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.16}
        >
          The VIDI Design System is an essential part of the design process, maintaining a strong
          and consistent brand identity across the product. By creating a unified visual language,
          it helps the product and engineering teams collaborate more effectively.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.24}
        >
          <Button intent="primary" size="default" asChild>
            <Link href="/components/button">Explore Components</Link>
          </Button>
          <Button intent="outline" size="default" asChild>
            <a href={docsLinks.github} target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 20 });

  const glowX = useTransform(springX, (v) => `calc(${v}px - 240px)`);
  const glowY = useTransform(springY, (v) => `calc(${v}px - 240px)`);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    rawX.set(e.clientX);
    rawY.set(e.clientY);
  }

  function handleMouseLeave() {
    rawX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    rawY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  }

  return (
    <div
      ref={pageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative space-y-14 py-10"
    >
      {/* ── Full-page cursor-following ambient glow ── */}
      <motion.div
        className="pointer-events-none fixed z-0 size-[480px] rounded-full opacity-20"
        style={{
          left: glowX,
          top: glowY,
          background: "radial-gradient(circle, var(--red-50) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Static corner glow for depth */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, var(--red-30) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Section 1: Interactive Hero (full-width) ──────────────── */}
      <HeroSection />

      <div className="relative mx-auto max-w-4xl space-y-14 px-6">

      {/* ── Section 2: Short Cut ──────────────────────────────────── */}
      <section className="space-y-5">
        <motion.h2
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          Short Cut
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {shortcuts.map((card) => {
            const inner = (
              <motion.div
                variants={cardVariant}
                className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-red-50/40 hover:bg-card/80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-red-50/10">
                    <span className="text-red-50">{card.icon}</span>
                  </div>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm font-semibold text-foreground">{card.title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </motion.div>
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
        </motion.div>
      </section>

      {/* ── Section 3: Design System Principles ─────────────────── */}
      <section id="principles" className="space-y-5 scroll-mt-20">
        <motion.h2
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          Design System Principles
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {principles.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              className="space-y-3 rounded-xl border border-border/50 bg-muted/30 p-5"
            >
              <span className="text-red-50">{p.icon}</span>
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-foreground">{p.title}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Section 4: Contact Us ──────────────────────────────── */}
      <section className="space-y-5">
        <motion.h2
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          Contact Us
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.08}
        >
          <a
            href="https://chat.google.com/room/AAAAhjgpvX8?cls=7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-red-50/40 hover:bg-card/80"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-red-50/10">
              <HugeiconsIcon icon={MessageMultiple01Icon} className="size-5 text-red-50" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-semibold text-foreground">Google Chat</p>
              <p className="text-xs text-muted-foreground">
                Have questions or feedback? Reach out to the design system team for improvements and collaboration.
              </p>
            </div>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </section>

      </div>
    </div>
  );
}
