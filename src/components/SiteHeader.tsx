"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about-me", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
] as const;

const LANDING_HASHES = new Set(["#about-me", "#skills", "#projects"]);
const LANDING_SECTION_IDS = ["about-me", "skills", "projects"] as const;

function navItemActive(pathname: string, hash: string, href: string) {
  if (href === "/") return pathname === "/" && !LANDING_HASHES.has(hash);
  if (href.startsWith("/#")) return pathname === "/" && hash === href.slice(1);
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    const onPopState = () => {
      syncHash();
      setOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    queueMicrotask(() => setHash(window.location.hash));
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const updateActiveByScroll = () => {
      const headerOffset = 72;
      const nearTop = window.scrollY < 24;
      setAtTop((prev) => (prev === nearTop ? prev : nearTop));
      if (nearTop) {
        setHash((prev) => (prev === "" ? prev : ""));
        return;
      }

      const sections = LANDING_SECTION_IDS
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((s): s is { id: (typeof LANDING_SECTION_IDS)[number]; el: HTMLElement } => Boolean(s.el));

      if (sections.length === 0) {
        setHash((prev) => (prev === "" ? prev : ""));
        return;
      }

      // Still in hero / top area: keep Home active.
      if (sections[0].el.getBoundingClientRect().top > headerOffset) {
        setHash((prev) => (prev === "" ? prev : ""));
        return;
      }

      let active = `#${sections[0].id}`;
      for (const section of sections) {
        if (section.el.getBoundingClientRect().top <= headerOffset) {
          active = `#${section.id}`;
        }
      }

      setHash((prev) => (prev === active ? prev : active));
    };

    updateActiveByScroll();
    window.addEventListener("scroll", updateActiveByScroll, { passive: true });
    window.addEventListener("resize", updateActiveByScroll);
    return () => {
      window.removeEventListener("scroll", updateActiveByScroll);
      window.removeEventListener("resize", updateActiveByScroll);
    };
  }, [pathname]);

  const scrollToLandingSection = (href: string) => {
    const id = href.replace("/#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${id}`);
    setHash(`#${id}`);
    setOpen(false);
  };

  const scrollHomeTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
    setAtTop(true);
    setHash("");
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const desktopNavLink = (active: boolean) =>
    [
      "relative text-sm font-semibold tracking-tight transition-colors",
      active
        ? "text-rose-800 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-rose-600 after:to-pink-600 dark:text-rose-200"
        : "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-[var(--ink)]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 px-4 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--bg)]/88 sm:px-6 lg:px-10 dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex max-w-7xl min-h-10 items-center justify-between gap-3 sm:min-h-11">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              scrollHomeTop();
              return;
            }
            setOpen(false);
          }}
          className="group min-w-0 shrink"
        >
          <span className="block truncate bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-base font-extrabold tracking-tight text-transparent transition group-hover:from-rose-800 group-hover:to-pink-700 sm:text-lg dark:from-rose-300 dark:to-pink-300 dark:group-hover:from-rose-200 dark:group-hover:to-pink-200">
            Dominika Fergisz
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Main">
            {navItems.map(({ href, label }) => {
              const active = pathname === "/" && atTop ? href === "/" : navItemActive(pathname, hash, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={(e) => {
                    if (pathname === "/" && href === "/") {
                      e.preventDefault();
                      scrollHomeTop();
                      return;
                    }
                    if (pathname === "/" && href.startsWith("/#")) {
                      e.preventDefault();
                      scrollToLandingSection(href);
                    }
                  }}
                  className={desktopNavLink(active)}
                >
                  {label}
                </Link>
              );
            })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-stone-700 transition hover:bg-[var(--elevated)]/80 hover:text-rose-800 md:hidden dark:text-stone-200 dark:hover:bg-[var(--surface)]/60 dark:hover:text-[var(--accent)]"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mx-auto max-w-7xl border-t border-[var(--border)] bg-[var(--bg)]/98 px-2 pb-3 pt-1 md:hidden"
        >
          <nav className="flex flex-col gap-0.5 py-1" aria-label="Mobile">
              {navItems.map(({ href, label }) => {
                const active = pathname === "/" && atTop ? href === "/" : navItemActive(pathname, hash, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={(e) => {
                      if (pathname === "/" && href === "/") {
                        e.preventDefault();
                        scrollHomeTop();
                        return;
                      }
                      if (pathname === "/" && href.startsWith("/#")) {
                        e.preventDefault();
                        scrollToLandingSection(href);
                      } else {
                        setOpen(false);
                      }
                    }}
                    className={`rounded-lg px-4 py-3 text-base font-semibold tracking-tight transition-colors ${
                      active
                        ? "bg-[var(--accent-soft)] text-rose-900 dark:text-rose-100"
                        : "text-stone-700 hover:bg-[var(--elevated)]/70 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-[var(--surface)]/50 dark:hover:text-[var(--ink)]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
