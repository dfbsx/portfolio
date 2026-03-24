"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const LANDING_SECTION_IDS = ["about-me", "skills", "projects"] as const;

/** Scroll to #about-me, #skills, or #projects when landing on / with that hash. */
export function LandingHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const raw = window.location.hash;
    if (!raw || raw === "#") return;
    const id = raw.slice(1);
    if (!(LANDING_SECTION_IDS as readonly string[]).includes(id)) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
