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
              I care about interfaces that stay legible, on-brand, and pleasant to use — clear
              hierarchy, thoughtful type, and motion that supports the story. Today most of my
              shipping work is on a product web team (React, Next.js, TypeScript), with a strong
              loop between specs in Figma and components in Storybook.
            </p>
            <p>
              My path mixed engineering school at PRz with hands-on design: I&apos;ve designed a
              product end to end and now focus on frontend delivery, tests, and accessibility
              alongside design. I still reach for Canva for posters and infographics when the medium
              fits. I do my best work with people who sweat the same details in design reviews and
              code review.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
