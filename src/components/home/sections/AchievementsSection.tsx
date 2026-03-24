import { achievements } from "@/components/home/sections/homeData";
import { IconCalendar, IconMapPin, SectionShell } from "@/components/home/sections/shared";

export function AchievementsSection() {
  return (
    <SectionShell className="border-t border-white/40">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-rose-700 dark:text-rose-700">
        highlights
      </p>
      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-900">
        Achievements
      </h3>
      <ul className="mt-8 flex flex-col gap-8">
        {achievements.map((a) => (
          <li
            key={a.title}
            className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/65 shadow-[0_12px_40px_-20px_rgba(28,25,23,0.12)] backdrop-blur-md dark:border-white/80 dark:bg-white/65"
          >
            <div className="p-6 sm:p-7">
              <div className="flex gap-4 sm:gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-rose-50 text-sm font-extrabold tracking-tight text-amber-900 shadow-sm dark:border-amber-200/60 dark:from-amber-50 dark:to-rose-50 dark:text-amber-950"
                  aria-hidden
                >
                  {a.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-bold leading-snug text-stone-900 sm:text-xl dark:text-stone-900">
                    {a.title}
                  </h4>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs leading-none text-stone-500 dark:text-stone-500">
                    <span className="inline-flex items-center gap-1.5">
                      <IconCalendar />
                      <span className="font-medium">{a.range}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <IconMapPin />
                      <span className="font-medium">{a.location}</span>
                    </span>
                  </div>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 border-t border-stone-200/50 pt-5 text-sm leading-relaxed text-stone-600 dark:border-stone-200/50 dark:text-stone-600">
                {a.highlights.map((line, i) => (
                  <li key={`${a.title}-ach-${i}`} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-stone-200/50 pt-5 text-sm font-semibold text-rose-700 dark:border-stone-200/50 dark:text-rose-700">
                {a.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
