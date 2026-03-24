import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Background, approach, and what drives my work as a developer and designer.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">About</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
        About me
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
        I care about clarity — in code, in layout, and in how products communicate with people. My
        path blends visual design with frontend engineering so ideas move from Figma to the browser
        without losing intent.
      </p>
      <div className="mt-10 space-y-6 text-[var(--muted)] leading-relaxed">
        <p>
          I&apos;ve spent years shipping marketing sites, dashboards, and design systems alongside
          cross-functional teams. I enjoy the overlap where typography, motion, and accessibility
          meet TypeScript and component APIs.
        </p>
        <p>
          Outside of client work, I sketch interfaces, contribute to open source when I can, and
          keep experimenting with CSS, canvas, and Web APIs.
        </p>
      </div>
      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[var(--ink)]">
          Currently
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--muted)]">
          <li>Building accessible, theme-aware UIs with Next.js and Tailwind CSS</li>
          <li>Exploring variable fonts and scroll-driven animation on the web</li>
          <li>Open to selective freelance and full-time frontend roles</li>
        </ul>
      </div>
      <p className="mt-10">
        <Link
          href="/projects"
          className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
        >
          See selected work →
        </Link>
      </p>
    </main>
  );
}
