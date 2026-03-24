import type { ReactNode } from "react";
import Image from "next/image";

/** Visual mark for experience / education / achievement cards (clearer than opaque initials). */
export type PortfolioHeaderMark =
  | { kind: "icon"; name: PortfolioHeaderIcon }
  | { kind: "image"; src: string; alt: string };

export type PortfolioHeaderIcon =
  | "building"
  | "code"
  | "design"
  | "graduation"
  | "certificate"
  | "sparkles"
  | "cloud"
  | "award";

const svgBase = {
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.5,
  "aria-hidden": true as const,
};

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5M4.5 21V8.25m0 0L12 3.75l7.5 4.5V21M9.75 21v-4.5a2.25 2.25 0 014.5 0V21"
      />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-3 12"
      />
    </svg>
  );
}

function IconDesign({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

function IconGraduation({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

function IconCertificate({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      />
    </svg>
  );
}

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 1 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 1 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 1-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 1 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 1 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 1-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 1 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 1 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 1-1.423 1.423z"
      />
    </svg>
  );
}

function IconCloud({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.064-3.255A5.25 5.25 0 0 0 8.25 5.25 2.25 2.25 0 0 0 5.25 7.5a2.25 2.25 0 0 0-1.07 1.93V15z"
      />
    </svg>
  );
}

function IconAward({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={`h-7 w-7 shrink-0 ${className ?? ""}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function renderHeaderIcon(name: PortfolioHeaderIcon, className?: string) {
  switch (name) {
    case "building":
      return <IconBuilding className={className} />;
    case "code":
      return <IconCode className={className} />;
    case "design":
      return <IconDesign className={className} />;
    case "graduation":
      return <IconGraduation className={className} />;
    case "certificate":
      return <IconCertificate className={className} />;
    case "sparkles":
      return <IconSparkles className={className} />;
    case "cloud":
      return <IconCloud className={className} />;
    case "award":
      return <IconAward className={className} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

const markFrameRose =
  "flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-rose-200/60 bg-gradient-to-br from-rose-50 to-amber-50 shadow-sm dark:border-rose-200/60 dark:from-rose-50 dark:to-amber-50";

const markFrameAmber =
  "flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-rose-50 shadow-sm dark:border-amber-200/60 dark:from-amber-50 dark:to-rose-50";

/** Left tile on timeline cards: semantic icon or optional logo image (`{ kind: \"image\", src, alt }`). */
export function PortfolioHeaderMarkView({
  mark,
  variant = "rose",
}: {
  mark: PortfolioHeaderMark;
  variant?: "rose" | "amber";
}) {
  const frame = variant === "amber" ? markFrameAmber : markFrameRose;
  const iconClass =
    variant === "amber" ? "text-amber-900 dark:text-amber-950" : "text-rose-800 dark:text-rose-900";

  if (mark.kind === "image") {
    return (
      <div className={`${frame} border-0 bg-white p-0 dark:bg-white`}>
        <div className="relative h-full w-full">
          <Image src={mark.src} alt={mark.alt} fill className="object-cover" sizes="56px" />
        </div>
      </div>
    );
  }

  return (
    <div className={frame} aria-hidden>
      {renderHeaderIcon(mark.name, iconClass)}
    </div>
  );
}

export function IconCalendar({ className }: { className?: string }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 text-stone-400 ${className ?? ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

export function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 text-stone-400 ${className ?? ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function IconExternalLink({ className }: { className?: string }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 ${className ?? ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 overflow-hidden border-b border-stone-200/35 ${className}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        {children}
      </div>
    </section>
  );
}
