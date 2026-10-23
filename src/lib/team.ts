/**
 * Team shown on /team. Avatars are line-art illustrations (no photos).
 *
 * `name` left empty shows the role as the card title, useful until a
 * person's details are confirmed. `years` left empty hides the badge.
 */
export type Hair = "short" | "side" | "quiff" | "curly" | "buzz" | "long" | "bun";
export type Top = "tshirt" | "shirt" | "hoodie";

export interface TeamMember {
  name: string;
  role: string;
  years?: number;
  focus: string;
  skills: string[];
  avatar: { hair: Hair; top: Top; beard?: boolean; glasses?: boolean };
}

export const team: TeamMember[] = [
  {
    name: "M. Srikanth",
    role: "Full Stack Developer",
    years: 5,
    focus: "Develops fast websites, dashboards and mobile-ready apps that are easy to maintain.",
    skills: ["Next.js", "Mobile apps", "Dashboards"],
    avatar: { hair: "short", top: "tshirt" },
  },
  {
    name: "G. Trinath",
    role: "Full Stack Developer",
    years: 7,
    focus: "Builds complete web apps end to end, from database design to the screens your customers use.",
    skills: ["React & Next.js", "Node.js APIs", "Databases"],
    avatar: { hair: "side", top: "shirt", beard: true },
  },
  {
    name: "Pavan Kumar",
    role: "Full Stack Developer",
    years: 4,
    focus: "Builds features across frontend and backend, from payments to admin panels.",
    skills: ["React", "REST APIs", "Payments"],
    avatar: { hair: "quiff", top: "hoodie", glasses: true },
  },
  {
    name: "Rajinikanth",
    role: "Full Stack Developer",
    years: 6,
    focus: "Turns business processes into reliable software, with a focus on clean code and performance.",
    skills: ["Web apps", "Integrations", "Performance"],
    avatar: { hair: "curly", top: "shirt", beard: true, glasses: true },
  },
  {
    name: "M. Manasa",
    role: "Digital Marketing",
    years: 4,
    focus: "Plans SEO, ads and social media campaigns that bring real enquiries, not just likes.",
    skills: ["SEO", "Google & Meta Ads", "Social media"],
    avatar: { hair: "long", top: "tshirt" },
  },
  {
    name: "Rahul",
    role: "DevOps Engineer",
    focus: "Automates releases and keeps systems monitored, backed up and running smoothly.",
    skills: ["CI/CD", "Docker", "Monitoring"],
    avatar: { hair: "buzz", top: "hoodie", beard: true },
  },
  {
    name: "Ramesh",
    role: "Cloud Engineer",
    focus: "Sets up secure, cost-effective hosting on AWS, Azure and Google Cloud.",
    skills: ["AWS & Azure", "Security", "Backups"],
    avatar: { hair: "short", top: "shirt", glasses: true },
  },
  {
    name: "Mani Kumar",
    role: "UI/UX Designer",
    focus: "Designs simple, beautiful screens and brand visuals that people enjoy using.",
    skills: ["Figma", "Design systems", "Prototypes"],
    avatar: { hair: "quiff", top: "tshirt", beard: true },
  },
];

/** Combined experience of members with a confirmed number of years. */
export const combinedYears = team.reduce((sum, m) => sum + (m.years ?? 0), 0);
