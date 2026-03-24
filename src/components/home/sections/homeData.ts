export type ExperienceEntry = {
  logo: string;
  title: string;
  org: string;
  orgUrl?: string;
  range: string;
  location: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export type EducationEntry = {
  logo: string;
  degree: string;
  school: string;
  schoolUrl?: string;
  range: string;
  location: string;
  highlights: readonly string[];
};

export type ProjectPreview = {
  name: string;
  description: string;
  tags: readonly string[];
  image: string;
  href?: string;
  kind: "code" | "design" | "canva";
};

export const skillGroups = [
  {
    title: "Frontend",
    blurb: "Components, quality, and how UIs ship in a real product team.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Gatsby",
      "HTML & CSS",
      "Storybook",
      "Chromatic",
      "Jest",
      "Accessibility (WCAG)",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Design & product",
    blurb: "Working with design and stakeholders so the right thing gets built.",
    items: [
      "Figma handoff & specs",
      "Canva — infographics, posters & social graphics",
      "Accessibility audits with design",
      "Component APIs & variants",
      "Responsive & fluid layout",
      "Research-led UX decisions",
      "Client workshops & discovery",
    ],
  },
  {
    title: "Workflow",
    blurb: "How the web team plans, ships, and keeps quality high.",
    items: [
      "Scrum",
      "Sprint planning & refinement",
      "Storybook upgrades & adoption",
      "Visual regression (Chromatic)",
      "Git flow & PR hygiene",
      "CI-friendly testing",
    ],
  },
  {
    title: "Personal",
    blurb: "Communication and collaboration style.",
    items: [
      "Close collaboration with clients & product",
      "Pairing & code review",
      "Clear async updates",
      "Honest timelines",
    ],
  },
] as const;

/** Career history (aligned with LinkedIn). */
export const experiences: ExperienceEntry[] = [
  {
    logo: "BY",
    title: "Junior Software Engineer",
    org: "Bayer Sp. z o.o.",
    range: "Jan 2025 — Present",
    location: "Poland",
    highlights: [
      "Same web team as my internship — now with more ownership of the UI layer.",
      "Delivering new components, fixing bugs, and keeping automated tests healthy.",
      "Partnering with design on accessibility audits and WCAG-oriented improvements.",
      "Go-to for Storybook and Chromatic: upgrades, workflows, and strong day-to-day knowledge of both.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Storybook", "Chromatic", "Jest", "Git"],
  },
  {
    logo: "BY",
    title: "Intern Full-stack Developer",
    org: "Bayer Sp. z o.o.",
    range: "Oct 2023 — Jan 2025",
    location: "Poland",
    highlights: [
      "Worked on the web team as a frontend developer.",
      "Worked in Scrum: sprints, ceremonies, and shipping incrementally.",
      "Learned how to introduce frontend components and validate them with tests before release.",
    ],
    stack: ["Gatsby", "TypeScript", "React", "Scrum", "Component testing", "Git"],
  },
  {
    logo: "DC",
    title: "Web Designer",
    org: "DevCodi",
    range: "Feb 2023 — May 2023",
    location: "Rzeszów, Podkarpackie, Poland",
    highlights: [
      "Designed the application end to end — a social-style product.",
      "Worked closely with the client to understand what had to ship and how it should behave.",
      "Spent significant time on research and iteration before locking layouts and flows.",
    ],
    stack: ["Figma", "UI", "UX"],
  },
  {
    logo: "ES",
    title: "Frontend Developer",
    org: "Europa Systems Rzeszów Sp. z o.o.",
    range: "Sep 2022 — Sep 2022 (1 mo.)",
    location: "Rzeszów, Podkarpackie, Poland",
    highlights: [
      "Short-term frontend engagement supporting the team’s web stack.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const education: EducationEntry[] = [
  {
    logo: "M",
    degree: "Master's degree, Computer Engineering (Cybersecurity)",
    school: "Politechnika Rzeszowska im. Ignacego Łukasiewicza",
    range: "Feb 2024 — Jul 2025",
    location: "Rzeszów, Poland",
    highlights: [
      "Master's completed in the cybersecurity speciality — computer engineering at Rzeszów University of Technology.",
    ],
  },
  {
    logo: "B",
    degree: "Bachelor's degree, Computer Engineering",
    school: "Politechnika Rzeszowska im. Ignacego Łukasiewicza",
    range: "Oct 2020 — Jan 2024",
    location: "Rzeszów, Poland",
    highlights: [
      "Undergraduate degree in computer engineering — software, systems, and engineering fundamentals.",
    ],
  },
];

export const achievements = [
  {
    logo: "LU",
    title: "LevelUp Program",
    range: "Sep-Nov 2025 (3-month program)",
    location: "Perspektywy Foundation, Remote",
    highlights: [
      "Focused on developing practical skills in cloud computing and DevOps.",
      "Course content also included big-data elements and related implementation concepts.",
    ],
    tags: ["Cloud computing", "DevOps", "Big data"],
  },
  {
    logo: "AW",
    title: "Advanced Web Design Certificate",
    range: "Nov 24-26, 2023",
    location: "Best Design Week, Warsaw",
    highlights: [
      "Completed an intensive advanced web design course and earned the certificate.",
      "Covered full UX case-study flow: problem definition, design process, competitor analysis, persona, empathy map, low-fidelity prototype, high-fidelity prototype, and final UI in Figma.",
    ],
    tags: ["UX", "UI", "Figma", "Case study"],
  },
] as const;

export const projectPreviews: ProjectPreview[] = [
  {
    name: "Throw Muffin",
    description:
      "Fitness-focused web concept with a social-style visual direction and branded landing flow.",
    tags: ["Next.js", "UI", "UX"],
    image: "/throw-muffins-cover-v2.png",
    href: "https://github.com/dfbsx/throw-muffins",
    kind: "code",
  },
  {
    name: "PoznajmySie",
    description:
      "Student-focused web application concept with a clear content flow and responsive UI.",
    tags: ["Next.js", "TypeScript", "UI"],
    image: "/poznajmy-sie-cover.png",
    href: "https://github.com/dfbsx/PoznajmySie",
    kind: "code",
  },
  {
    name: "Poznajmy się — web",
    description:
      "First Figma project: responsive web layouts for a student-focused product — landing, login, and register flows with a clean typographic system.",
    tags: ["Figma", "UI", "UX", "Responsive"],
    image: "/poznajmy-sie-figma-cover.png",
    href: "https://www.figma.com/design/lUX5iktoI7G81j1k7pF1fE/Poznajmy-si%C4%99----web?t=orIVhf6yevF4z4pj-1",
    kind: "design",
  },
  {
    name: "Dogger",
    description:
      "Mobile app UI in Figma — onboarding, feed, blog, and search with a cohesive blue brand system in light and dark mode.",
    tags: ["Figma", "UI/UX", "Mobile app", "Dark mode"],
    image: "/dogger-figma-cover.png",
    href: "https://www.figma.com/design/fShFct3Yn0Z93ksDWzfcia/Dogger?t=orIVhf6yevF4z4pj-1",
    kind: "design",
  },
  {
    name: "X Challenge — Zgłoszone roboty",
    description:
      "Tech-themed infographic for a robotics competition: 3D-style pie chart, category breakdown (ROBO ~motion, Smash Bots, Task Hunters), and X Challenge branding on a hex grid.",
    tags: ["Canva", "Infographic", "Data visualization"],
    image: "/canva-x-challenge-infographic.png",
    kind: "canva",
  },
  {
    name: "RzIT — rekrutacja",
    description:
      "Recruitment poster for Rzeszowska Grupa IT — collage photography, bold purple typography, 3D mascot, and event details for the student circle.",
    tags: ["Canva", "Poster", "Typography"],
    image: "/canva-rzit-recruitment-poster.png",
    kind: "canva",
  },
] as const;
