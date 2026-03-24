import { SectionShell } from "@/components/home/sections/shared";

export function AboutSection() {
  return (
    <SectionShell
      id="about-me"
      className="scroll-mt-[4.75rem] sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-rose-700 dark:text-rose-700">
            about me
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-900">
            <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent dark:from-rose-700 dark:to-pink-600">
              Design-minded
            </span>{" "}
            front-end engineering
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600 dark:text-stone-600">
            <p>
              I turn product and brand intent into interfaces that feel intentional: clear hierarchy,
              readable type, and motion that supports the story instead of distracting from it. Most
              of my work lives in React and Next.js, with a tight loop between Figma exploration and
              production code.
            </p>
            <p>
              Accessibility and performance are part of the craft, not a late audit - semantic
              structure, keyboard flows, and Core Web Vitals matter as much as the visual polish.
              I&apos;m happiest collaborating with designers and PMs who care about the same
              details, whether we&apos;re shipping a marketing site, a dashboard, or a design
              system.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
