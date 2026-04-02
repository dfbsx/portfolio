import Image from "next/image";
import Link from "next/link";
import { CanvaGraphicCards } from "@/components/CanvaGraphicCards";
import { projectPreviews } from "@/components/home/sections/homeData";
import { SectionShell } from "@/components/home/sections/shared";

export function ProjectsSection() {
  const codeProjects = projectPreviews.filter((p) => p.kind === "code");
  const designProjects = projectPreviews.filter((p) => p.kind === "design");
  const canvaProjects = projectPreviews.filter((p) => p.kind === "canva");

  const renderCards = (items: typeof projectPreviews) => (
    <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      {items.map((p) => {
        const href = p.href ?? "/projects";
        const external = href.startsWith("http");
        const liveHref = p.liveHref;
        const dualExternal =
          Boolean(liveHref?.startsWith("http")) && Boolean(p.href?.startsWith("http"));

        const imageBlock = (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
            <Image
              src={p.image}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        );

        const textBlock = (
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-900">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-600">
              {p.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
              {p.tags.map((t) => (
                <li key={t} className="text-sm font-semibold text-rose-700 dark:text-rose-700">
                  {t}
                </li>
              ))}
            </ul>
            {dualExternal && liveHref ? (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href={liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-rose-700 underline-offset-2 hover:underline dark:text-rose-700"
                >
                  Live demo →
                </a>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-rose-700 underline-offset-2 hover:underline dark:text-rose-700"
                >
                  Repository →
                </a>
              </div>
            ) : null}
          </div>
        );

        return (
          <li
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/50 shadow-[0_12px_40px_-18px_rgba(28,25,23,0.12)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-rose-200/80 hover:shadow-[0_20px_48px_-20px_rgba(225,29,116,0.12)] dark:border-white/70 dark:bg-white/50"
          >
            {dualExternal && liveHref ? (
              <>
                <a href={liveHref} target="_blank" rel="noopener noreferrer" className="block">
                  {imageBlock}
                </a>
                {textBlock}
              </>
            ) : external ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {imageBlock}
                {textBlock}
              </a>
            ) : (
              <Link href={href} className="block">
                {imageBlock}
                {textBlock}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <SectionShell
      id="projects"
      className="scroll-mt-[4.75rem] border-t border-white/40 sm:scroll-mt-20"
    >
      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-rose-700 dark:text-rose-700">
          portfolio
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-900">
          Projects
        </h2>
      </div>
      <div className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500 dark:text-stone-500">
          Code projects
        </p>
        {renderCards(codeProjects)}
      </div>

      <div className="mt-12 border-t border-stone-200/50 pt-10 dark:border-stone-200/50">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500 dark:text-stone-500">
          Figma designs
        </p>
        {renderCards(designProjects)}
      </div>

      <div className="mt-12 border-t border-stone-200/50 pt-10 dark:border-stone-200/50">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500 dark:text-stone-500">
          Canva designs
        </p>
        <CanvaGraphicCards variant="home" items={canvaProjects} />
      </div>
    </SectionShell>
  );
}
