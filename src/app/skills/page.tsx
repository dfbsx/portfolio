import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Tools, technologies, and design capabilities.",
};

const groups = [
  {
    title: "Frontend",
    items: ["React", "Gatsby", "Next.js", "TypeScript", "HTML & semantic markup", "CSS / Tailwind", "Motion / CSS animations"],
  },
  {
    title: "Design",
    items: [
      "UI design",
      "Figma",
      "Canva",
      "Infographics & posters",
      "Design tokens",
      "Prototyping",
      "Accessibility (WCAG mindset)",
      "Brand systems",
    ],
  },
  {
    title: "Workflow",
    items: ["Git / GitHub", "Component libraries", "Storybook", "Jest", "Vite", "ESLint & testing basics", "Vercel / CI"],
  },
];

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Skills</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
        Skills & tools
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
        A snapshot of what I use day to day. Swap in your own stack — this page is structured for
        easy edits.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {groups.map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
          >
            <h2 className="text-xl font-bold text-[var(--ink)]">
              {group.title}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm font-semibold text-rose-700 dark:text-rose-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
