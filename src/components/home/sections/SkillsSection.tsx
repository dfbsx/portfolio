import { skillGroups } from "@/components/home/sections/homeData";
import { SectionShell } from "@/components/home/sections/shared";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      className="scroll-mt-[4.75rem] border-t border-stone-200/60 sm:scroll-mt-20 dark:border-stone-200/60"
    >
      <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.12em] text-rose-700 dark:text-rose-700">
        skills &amp; tools
      </p>
      <h3 className="mt-2 text-center text-xl font-extrabold tracking-tight text-stone-900 sm:text-2xl dark:text-stone-900">
        What I bring to a team
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-stone-600 dark:text-stone-600">
        Grouped by craft - happy to go deeper on any of this in conversation.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-7">
        {skillGroups.map((group) => (
          <li
            key={group.title}
            className="flex flex-col rounded-2xl border border-white/70 bg-white/45 p-5 shadow-[0_10px_36px_-18px_rgba(28,25,23,0.1)] backdrop-blur-md sm:p-6 dark:border-white/70 dark:bg-white/45"
          >
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-900">{group.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-600">
              {group.blurb}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm font-semibold text-rose-700 dark:text-rose-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
