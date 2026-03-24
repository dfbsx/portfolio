import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Design-minded front-end engineering — background at Bayer, design roots, and how I work.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">About</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
        About me
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
        <span className="font-semibold text-[var(--ink)]">Design-minded front-end engineering</span>{" "}
        is how I describe what I do: I want the UI to look and feel considered, and I want the
        implementation to hold up — semantics, accessibility, and maintainable components.
      </p>
      <div className="mt-10 space-y-6 text-[var(--muted)] leading-relaxed">
        <p>
          I&apos;m a Junior Software Engineer at Bayer, on the same web team where I interned
          before. Day to day that means React and Next.js, Storybook and Chromatic, Jest, and
          partnering with design on WCAG-oriented improvements — not only pixels, but how we specify
          and ship them.
        </p>
        <p>
          Before that I studied computer engineering at Politechnika Rzeszowska (bachelor and
          master&apos;s in cybersecurity) and worked as a web designer on a full product design
          engagement. I still use Figma for UI work and Canva for graphics when that&apos;s the right
          tool. Side projects and courses (like UX in Figma and cloud/DevOps programs) keep me
          stretching beyond the day job.
        </p>
      </div>
      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[var(--ink)]">
          Currently
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--muted)]">
          <li>Shipping and maintaining UI on Bayer&apos;s web stack with strong Storybook practice</li>
          <li>Building this portfolio with Next.js and Tailwind to showcase code, Figma, and Canva work</li>
          <li>Open to conversations about frontend roles that value craft and design collaboration</li>
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
