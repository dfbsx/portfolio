"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type CanvaGraphicCardItem = {
  name: string;
  description: string;
  image: string;
  tags: readonly string[];
  /** Shown under the title in the modal (e.g. year). */
  meta?: string;
};

type CanvaGraphicCardsProps = {
  items: readonly CanvaGraphicCardItem[];
  variant: "home" | "page";
};

export function CanvaGraphicCards({ items, variant }: CanvaGraphicCardsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();

  const openAt = useCallback((index: number) => {
    setActive(index);
  }, []);

  const close = useCallback(() => {
    setActive(null);
  }, []);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (active !== null) {
      if (!el.open) el.showModal();
    } else if (el.open) {
      el.close();
    }
  }, [active]);

  const current = active !== null ? items[active] : null;

  const isHome = variant === "home";

  const cardShell =
    "flex w-full flex-col overflow-hidden rounded-2xl border text-left shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400";

  const cardHome =
    "border-stone-200/90 bg-white/70 backdrop-blur-sm hover:border-rose-200/70 hover:shadow-[0_16px_40px_-24px_rgba(225,29,116,0.25)]";

  const cardPage =
    "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 hover:shadow-[0_12px_36px_-20px_rgba(225,29,116,0.15)]";

  const thumbWrapHome = "relative h-52 w-full bg-stone-100 sm:h-56";
  const thumbWrapPage = "relative h-52 w-full bg-[var(--elevated)] sm:h-56";

  const titleClass = isHome
    ? "text-base font-bold text-stone-900"
    : "text-base font-bold text-[var(--ink)]";

  const descClass = isHome
    ? "mt-1.5 line-clamp-2 text-sm leading-relaxed text-stone-600"
    : "mt-1.5 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]";

  /** Match project card tags: pink text only, no pill background. */
  const tagClass = "text-sm font-semibold text-rose-700 dark:text-rose-700";

  const hintClass = isHome
    ? "mt-3 text-xs font-medium text-stone-400"
    : "mt-3 text-xs font-medium text-[var(--muted)]";

  return (
    <>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {items.map((item, index) => (
          <li key={item.name}>
            <button
              type="button"
              onClick={() => openAt(index)}
              className={`group ${cardShell} ${isHome ? cardHome : cardPage}`}
              aria-haspopup="dialog"
              aria-expanded={active === index}
            >
              <span className={`relative block w-full ${isHome ? thumbWrapHome : thumbWrapPage}`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </span>
              <span className="flex flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                <span className={titleClass}>{item.name}</span>
                <span className={descClass}>{item.description}</span>
                <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5" aria-label="Tags">
                  {item.tags.map((t) => (
                    <span key={t} className={tagClass}>
                      {t}
                    </span>
                  ))}
                </span>
                <span className={hintClass}>Click to view full graphic</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 z-50 w-[min(100vw-1.5rem,56rem)] max-h-[min(100vh-1.5rem,92vh)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-0 text-[var(--text)] shadow-2xl backdrop:bg-stone-950/65 open:flex open:max-h-[min(100vh-1.5rem,92vh)] open:flex-col"
        aria-labelledby={titleId}
        onClose={() => setActive(null)}
      >
        {current ? (
          <>
            <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <h2 id={titleId} className="text-lg font-bold tracking-tight text-[var(--ink)] sm:text-xl">
                  {current.name}
                </h2>
                {current.meta ? (
                  <p className="mt-0.5 text-sm text-[var(--muted)]">{current.meta}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={close}
                className="shrink-0 rounded-lg px-2 py-1 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--elevated)] hover:text-[var(--ink)]"
              >
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1 overflow-y-auto">
              <div className="relative mx-auto h-[min(75vh,820px)] min-h-[220px] w-full bg-[var(--elevated)]/50">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-contain p-4 sm:p-6"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-sm leading-relaxed text-[var(--muted)]">{current.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {current.tags.map((t) => (
                    <li key={t} className={tagClass}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : null}
      </dialog>
    </>
  );
}
