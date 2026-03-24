import Link from "next/link";
import {
  CONTACT_EMAIL,
  PROFILE_GITHUB_URL,
  PROFILE_LINKEDIN_URL,
} from "@/components/hero-constants";

const navigate = [
  { href: "/", label: "Home" },
  { href: "/#about-me", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-stone-200/45 bg-gradient-to-b from-[#faf6f0] to-[#f0e6dc] dark:border-stone-700/40 dark:from-[var(--surface)] dark:to-[var(--elevated)]">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(252,200,209,0.35),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(225,29,116,0.12),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-rose-700 dark:text-[var(--accent)]">
              portfolio
            </p>
            <p className="mt-3 text-lg font-extrabold tracking-tight text-stone-900 dark:text-[var(--ink)]">
              Dominika Fergisz
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-600 dark:text-[var(--muted)]">
              Front-end developer focused on accessible interfaces, design systems, and thoughtful
              product UI.
            </p>
          </div>

          <div className="sm:col-span-1 lg:col-span-3">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-stone-500 dark:text-[var(--muted)]">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navigate.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-semibold text-stone-800 transition hover:text-rose-700 dark:text-[var(--text)] dark:hover:text-[var(--accent)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-4">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-stone-500 dark:text-[var(--muted)]">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex text-sm font-semibold text-stone-800 underline-offset-4 transition hover:text-rose-700 hover:underline dark:text-[var(--text)] dark:hover:text-[var(--accent)]"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-stone-800 underline-offset-4 transition hover:text-rose-700 hover:underline dark:text-[var(--text)] dark:hover:text-[var(--accent)]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-stone-800 underline-offset-4 transition hover:text-rose-700 hover:underline dark:text-[var(--text)] dark:hover:text-[var(--accent)]"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-stone-200/50 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between dark:border-stone-700/50 dark:text-[var(--muted)]">
          <p>© {year} Dominika Fergisz. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wide text-stone-400 dark:text-[var(--muted)]">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
