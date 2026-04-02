import type { Metadata } from "next";
import { CanvaGraphicCards } from "@/components/CanvaGraphicCards";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected case studies and shipped work.",
};

type ProjectItem = {
  name: string;
  role: string;
  description: string;
  tags: readonly string[];
  year: string;
  href?: string;
  liveHref?: string;
  /** Local preview for Canva pieces (lightbox). */
  image?: string;
  kind: "code" | "design" | "canva";
};

const projects: ProjectItem[] = [
  {
    name: "Throw Muffin",
    role: "UI/UX · Next.js",
    description:
      "Fitness-focused web concept with a social-style visual direction and branded landing flow.",
    tags: ["Next.js", "UI", "UX"],
    year: "2024",
    href: "https://github.com/dfbsx/throw-muffins",
    kind: "code",
  },
  {
    name: "PoznajmySie",
    role: "Product UI · Next.js",
    description:
      "Student-focused web application with a clear information architecture and practical user journeys.",
    tags: ["Next.js", "TypeScript", "UI"],
    year: "2024",
    href: "https://github.com/dfbsx/PoznajmySie",
    kind: "code",
  },
  {
    name: "Letsmeet2026",
    role: "Product UI · Next.js",
    description:
      "Refreshed PoznajmySie app with mocked backend for interactive testing and temporary account flow.",
    tags: ["Next.js", "TypeScript", "UI"],
    year: "2026",
    href: "https://github.com/dfbsx/letsmeet2026",
    liveHref: "https://letsmeet2026.vercel.app/",
    kind: "code",
  },
  {
    name: "Poznajmy się — web",
    role: "UI/UX · Figma",
    description:
      "First Figma file: responsive web frames for landing, login, and registration — Polish copy, photography-led hero, and yellow accent system.",
    tags: ["Figma", "UI", "UX", "Responsive"],
    year: "2024",
    href: "https://www.figma.com/design/lUX5iktoI7G81j1k7pF1fE/Poznajmy-si%C4%99----web?t=orIVhf6yevF4z4pj-1",
    kind: "design",
  },
  {
    name: "Dogger",
    role: "Mobile UI · Figma",
    description:
      "Social-style mobile concept for dog lovers: auth and welcome flows, main feed, blog post, and search — full light and dark themes in Polish.",
    tags: ["Figma", "UI/UX", "Mobile app", "Dark mode"],
    year: "2024",
    href: "https://www.figma.com/design/fShFct3Yn0Z93ksDWzfcia/Dogger?t=orIVhf6yevF4z4pj-1",
    kind: "design",
  },
  {
    name: "X Challenge — Zgłoszone roboty",
    role: "Graphic design · Canva",
    description:
      "Infographic for the X Challenge robotics event: reported robots by category with a 3D pie chart, callouts, and neon hex-grid atmosphere.",
    tags: ["Canva", "Infographic", "Data visualization"],
    year: "2024",
    image: "/canva-x-challenge-infographic.png",
    kind: "canva",
  },
  {
    name: "RzIT — rekrutacja",
    role: "Poster · Canva",
    description:
      "Student-circle recruitment poster for RzIT — photo collage, handwritten accents, purple headline treatment, 3D robot mascot, and meeting room / time block.",
    tags: ["Canva", "Poster", "Typography"],
    year: "2024",
    image: "/canva-rzit-recruitment-poster.png",
    kind: "canva",
  },
];

export default function ProjectsPage() {
  const codeProjects = projects.filter((project) => project.kind === "code");
  const designProjects = projects.filter((project) => project.kind === "design");
  const canvaProjects = projects.filter((project) => project.kind === "canva");

  const renderProjectList = (items: readonly ProjectItem[]) => (
    <ul className="mt-8 flex flex-col gap-8">
      {items.map((project) => (
        <li
          key={project.name}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]/35 sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--ink)]">{project.name}</h2>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">{project.role}</p>
            </div>
            <span className="shrink-0 text-sm text-[var(--muted)]">{project.year}</span>
          </div>
          <p className="mt-4 max-w-3xl text-[var(--muted)] leading-relaxed">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="text-sm font-semibold text-rose-700 dark:text-rose-700"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {project.liveHref ? (
              <a
                href={project.liveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                Live demo →
              </a>
            ) : null}
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                {project.href.includes("figma.com")
                  ? "Open in Figma →"
                  : "View repository →"}
              </a>
            ) : !project.liveHref ? (
              <span className="text-sm font-medium text-[var(--muted)] transition group-hover:text-[var(--accent)]">
                Case study coming soon →
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Work</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
        Projects
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
        Placeholder case studies you can replace with real links, images, and outcomes. Each card is
        a simple data object in this file.
      </p>

      <section className="mt-14">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Code projects</p>
        {renderProjectList(codeProjects)}
      </section>

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Figma designs</p>
        {renderProjectList(designProjects)}
      </section>

      <section id="canva-designs" className="mt-12 scroll-mt-24 border-t border-[var(--border)] pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Canva designs</p>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
          Static graphics built in Canva — click a card to open the full image. No external file link.
        </p>
        <CanvaGraphicCards
          variant="page"
          items={canvaProjects.map((p) => ({
            name: p.name,
            description: p.description,
            image: p.image!,
            tags: p.tags,
            meta: `${p.role} · ${p.year}`,
          }))}
        />
      </section>
    </main>
  );
}
