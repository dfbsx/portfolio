import { HeroPortrait } from "@/components/HeroPortrait";

const pills = ["React", "TypeScript", "UX/UI", "Next.js"] as const;

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[min(60vw,268px)] sm:max-w-[min(58vw,294px)] md:mx-0 md:ml-auto md:max-w-[308px] lg:max-w-[334px] xl:max-w-[360px]">
      <div
        className="absolute -right-1 -z-10 hidden h-[90%] w-[94%] translate-x-4 translate-y-6 rounded-[1.75rem] border border-[var(--ink)]/[0.06] bg-[var(--accent-soft)]/55 sm:block lg:translate-x-6 lg:translate-y-8"
        aria-hidden
      />

      <span
        className="absolute -right-1 top-[18%] z-20 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-xs font-semibold text-[var(--accent)] shadow-md sm:right-0 sm:px-3 sm:py-1.5 sm:text-sm"
        aria-hidden
      >
        {pills[0]}
      </span>
      <span
        className="absolute -left-3 top-[11%] z-20 hidden rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-md sm:block sm:text-sm"
        aria-hidden
      >
        {pills[3]}
      </span>
      <span
        className="absolute -left-4 bottom-[32%] z-20 hidden rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)] shadow-md sm:block sm:text-sm"
        aria-hidden
      >
        {pills[1]}
      </span>
      <span
        className="absolute -right-2 bottom-[14%] z-20 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-xs font-semibold text-[var(--muted)] shadow-md sm:-right-3 sm:px-3 sm:py-1.5 sm:text-sm"
        aria-hidden
      >
        {pills[2]}
      </span>

      <div
        className="relative z-10 overflow-hidden rounded-2xl border-2 border-[var(--ink)]/[0.09] bg-[var(--surface)] shadow-[0_28px_70px_-24px_rgba(10,10,10,0.18),0_0_0_1px_rgba(10,10,10,0.04)] sm:rounded-3xl"
        style={{
          boxShadow:
            "0 28px 70px -24px rgba(10,10,10,0.16), 0 0 0 1px rgba(10,10,10,0.05), 0 0 80px -20px rgba(225, 29, 116, 0.12)",
        }}
      >
        <div className="flex items-center gap-2 border-b border-[var(--ink)]/[0.07] bg-[var(--elevated)]/95 px-3 py-2 sm:gap-2 sm:px-4 sm:py-2.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5f57]/90 sm:h-3 sm:w-3" aria-hidden />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#febc2e]/90 sm:h-3 sm:w-3" aria-hidden />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28c840]/90 sm:h-3 sm:w-3" aria-hidden />
          <span className="ml-1.5 min-w-0 truncate font-mono text-[11px] text-[var(--muted)] sm:ml-2 sm:text-xs">
            portfolio<span className="font-semibold text-[var(--accent)]">.tsx</span>
          </span>
        </div>
        <HeroPortrait />
      </div>
    </div>
  );
}
