import { education } from "@/components/home/sections/homeData";
import { IconCalendar, IconExternalLink, IconMapPin, SectionShell } from "@/components/home/sections/shared";

export function EducationSection() {
  return (
    <SectionShell className="border-t border-white/40">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-rose-700 dark:text-rose-700">
        education
      </p>
      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-900">
        Education
      </h3>
      <ul className="mt-8 flex max-w-3xl flex-col gap-8">
        {education.map((ed) => (
          <li
            key={ed.degree + ed.range}
            className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/65 shadow-[0_12px_40px_-20px_rgba(28,25,23,0.12)] backdrop-blur-md dark:border-white/80 dark:bg-white/65"
          >
            <div className="p-6 sm:p-7">
              <div className="flex gap-4 sm:gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-rose-200/60 bg-gradient-to-br from-rose-50 to-amber-50 text-sm font-extrabold tracking-tight text-rose-800 shadow-sm dark:border-rose-200/60 dark:from-rose-50 dark:to-amber-50 dark:text-rose-900"
                  aria-hidden
                >
                  {ed.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-bold leading-snug text-stone-900 sm:text-xl dark:text-stone-900">
                    {ed.degree}
                  </h4>
                  <div className="mt-1">
                    {ed.schoolUrl ? (
                      <a
                        href={ed.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-700 transition hover:text-rose-800 hover:underline dark:text-rose-700 dark:hover:text-rose-800"
                      >
                        {ed.school}
                        <IconExternalLink />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-rose-700 dark:text-rose-700">{ed.school}</span>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs leading-none text-stone-500 dark:text-stone-500">
                    <span className="inline-flex items-center gap-1.5">
                      <IconCalendar />
                      <span className="font-medium">{ed.range}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <IconMapPin />
                      <span className="font-medium">{ed.location}</span>
                    </span>
                  </div>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 border-t border-stone-200/50 pt-5 text-sm leading-relaxed text-stone-600 dark:border-stone-200/50 dark:text-stone-600">
                {ed.highlights.map((line, i) => (
                  <li key={`${ed.degree}-edu-${i}`} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
