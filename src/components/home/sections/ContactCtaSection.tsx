import { CONTACT_EMAIL, PROFILE_LINKEDIN_URL } from "@/components/hero-constants";

export function ContactCtaSection() {
  return (
    <section className="relative z-10 border-t border-rose-200/30 bg-gradient-to-r from-rose-700 via-pink-600 to-rose-600 px-4 py-14 text-center sm:py-16 lg:py-20">
      <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
        Let&apos;s create something together
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-sm text-white/85 sm:text-base">
        Tell me about your timeline, stack, and what success looks like - I&apos;ll get back within
        a few days.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-rose-700 shadow-lg transition hover:bg-rose-50"
        >
          Email me
        </a>
        <a
          href={PROFILE_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-transparent px-8 text-sm font-bold text-white transition hover:bg-white/10"
        >
          <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
