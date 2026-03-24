import Link from "next/link";
import { HeroParallax } from "@/components/home/hero/HeroParallax";
import { HeroSocial } from "@/components/home/hero/HeroSocial";
import { HeroVisual } from "@/components/home/hero/HeroVisual";
import { HomeAuroraLayer } from "@/components/home/sections/HomeAuroraLayer";
import { HomeBelowHero } from "@/components/home/sections/HomeBelowHero";
import { LandingHashScroll } from "@/components/home/sections/LandingHashScroll";

export default function Home() {
  return (
    <main className="relative bg-[#f4ebe3]">
      <LandingHashScroll />
      <HomeAuroraLayer />
      <div className="relative z-10">
        <HeroParallax>
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-14">
            <div className="rounded-3xl border border-white/70 bg-white/55 p-6 shadow-[0_16px_50px_-14px_rgba(28,25,23,0.16),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-md sm:p-8 lg:p-10 dark:border-white/70 dark:bg-white/55">
              <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-center md:gap-8 lg:gap-10 xl:gap-12">
                <div className="min-w-0 shrink-0 md:max-w-[min(100%,22rem)] lg:max-w-md xl:max-w-lg">
                  <p className="mb-3 font-mono text-xs text-rose-700 sm:mb-4 sm:text-sm dark:text-rose-700">
                    <span className="text-stone-500 dark:text-stone-500">
                      &lt;
                    </span>
                    frontend_developer
                    <span className="text-stone-500 dark:text-stone-500">
                      {" "}
                      /&gt;
                    </span>
                  </p>
                  <p className="mb-1 text-sm font-semibold text-stone-600 sm:mb-2 sm:text-base dark:text-stone-600">
                    Hi, I&apos;m
                  </p>
                  <h1 className="text-[1.65rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-stone-900 [text-shadow:_0_1px_0_rgb(255_255_255/_0.9)] min-[420px]:text-4xl sm:text-5xl sm:leading-[1.02] lg:text-6xl lg:leading-[0.98] xl:text-[4rem] xl:leading-[0.96] dark:text-stone-900">
                    Dominika
                  </h1>
                  <p className="mt-2 text-lg font-bold tracking-tight text-transparent sm:mt-3 sm:text-xl lg:text-2xl">
                    <span className="bg-gradient-to-r from-rose-800 via-pink-700 to-amber-900 bg-clip-text dark:from-rose-800 dark:via-pink-700 dark:to-amber-900">
                      Front-End Developer.
                    </span>
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-stone-600 sm:mt-2 sm:text-xs dark:text-stone-600">
                    <span className="text-stone-500 dark:text-stone-500">
                      $
                    </span>{" "}
                    ship_ui_with_react
                    <span className="animate-pulse text-rose-600 dark:text-rose-600">
                      ▌
                    </span>
                  </p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone-700 sm:mt-6 sm:text-base lg:text-lg dark:text-stone-700">
                    I design and build fast, accessible interfaces — from
                    systems in Figma to polished Next.js apps you&apos;d be
                    proud to ship.
                  </p>

                  <div className="mt-6 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <Link
                        href="/#projects"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-rose-700 via-pink-600 to-rose-600 px-7 text-sm font-bold text-white shadow-lg shadow-rose-600/30 transition hover:-translate-y-0.5 hover:brightness-105 sm:h-12 sm:px-8"
                      >
                        View my work
                      </Link>
                      <a
                        href="#about-me"
                        className="inline-flex h-11 items-center justify-center rounded-full border-2 border-stone-800/15 bg-white/80 px-7 text-sm font-bold text-stone-900 backdrop-blur-sm transition hover:border-rose-500/40 hover:bg-white sm:h-12 sm:px-8 dark:border-stone-800/15 dark:bg-white/80 dark:text-stone-900"
                      >
                        About me
                      </a>
                    </div>
                    <HeroSocial variant="hero" />
                  </div>
                </div>
                <div className="flex min-w-0 w-full justify-center md:flex-1 md:justify-end">
                  <HeroVisual />
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-2 sm:mt-16 lg:mt-20">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-600 dark:text-stone-600">
                Scroll
              </span>
              <span
                className="flex h-9 w-5 justify-center rounded-full border-2 border-stone-500/25 bg-white/30 pt-1.5 backdrop-blur-sm dark:border-stone-500/25 dark:bg-white/30"
                aria-hidden
              >
                <span className="h-1.5 w-0.5 animate-bounce rounded-full bg-rose-600 dark:bg-rose-600" />
              </span>
            </div>
          </div>
        </HeroParallax>

        <HomeBelowHero />
      </div>
    </main>
  );
}
