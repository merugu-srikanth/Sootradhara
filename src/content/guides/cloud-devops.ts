import type { Guide } from "../types";

const guide: Guide = {
  title: "Cloud hosting and DevOps explained for business owners",
  intro:
    "You don't need to be technical to make good decisions about hosting and infrastructure. This guide explains the basics in plain language, so you can understand your options, ask the right questions and keep your systems reliable and affordable.",
  sections: [
    {
      heading: "Shared hosting, VPS and cloud: what's the difference?",
      paragraphs: [
        "Shared hosting puts many websites on one server. It's cheap and fine for small, simple sites, but performance can suffer when other sites are busy. A VPS (virtual private server) gives you a dedicated slice of a server with more control and stable performance.",
        "Cloud platforms like AWS, Azure and Google Cloud offer flexible resources you can scale up or down, managed databases, storage and many other services. They're powerful, but need careful setup and cost management.",
      ],
    },
    {
      heading: "Right-size before you scale",
      paragraphs: [
        "It's tempting to choose an impressive, complex setup. In reality, many businesses are best served by a simple, well-configured environment that matches their current traffic. Complexity adds cost, maintenance and risk.",
        "Plan how you'll grow, but pay for what you need today. Good architecture makes it easy to scale when the time comes.",
      ],
    },
    {
      heading: "Backups you can actually restore",
      paragraphs: [
        "Every system needs automatic, regular backups of databases and files, stored separately from the main server. Decide how much data you can afford to lose (for example, a day or an hour) and set backup frequency accordingly.",
        "Most importantly, test restoring from backups periodically. A backup that has never been tested may fail when you need it most.",
      ],
      bullets: ["Automatic daily database backups", "Separate storage location", "Retention for several weeks", "Regular restore tests", "Backups before every major release", "Documented restore steps"],
    },
    {
      heading: "Safe releases with CI/CD",
      paragraphs: [
        "CI/CD (continuous integration and continuous delivery) means every code change is automatically tested and deployed through the same reliable process. It replaces risky manual uploads.",
        "With a staging environment, you can review changes on a copy of your site before they go live. If a release causes problems, you can roll back quickly.",
      ],
    },
    {
      heading: "Monitoring and alerts",
      paragraphs: [
        "Monitoring tools check that your site is online, measure performance and capture errors. Alerts notify your team by email, Slack or messaging apps when something goes wrong, often before customers notice.",
        "Decide who receives alerts and what the response process is, especially for business-critical systems.",
      ],
    },
    {
      heading: "Security basics",
      paragraphs: [
        "Use HTTPS everywhere, keep software and servers updated, restrict access with individual accounts and strong authentication, and give each person only the permissions they need. Store passwords and keys securely, never in shared documents.",
        "Remove access promptly when people leave, and review who has access periodically.",
      ],
    },
    {
      heading: "Controlling cloud costs",
      paragraphs: [
        "Cloud bills can grow quietly through oversized servers, forgotten test environments, unused storage and data transfer charges. Review your bill monthly, tag resources by project, set budget alerts and shut down what isn't needed.",
        "Reserved or committed-use pricing can reduce costs for stable workloads. A periodic cost review often finds meaningful savings.",
      ],
    },
    {
      heading: "Ownership and documentation",
      paragraphs: [
        "Your cloud accounts, domains and DNS should be owned by your company, with access granted to vendors as needed. Ask for clear documentation of your setup: what runs where, how to deploy, how to restore backups and who to contact.",
        "This protects you if team members or vendors change, and makes future work faster and safer.",
      ],
    },
    {
      heading: "Planning for busy periods",
      paragraphs: [
        "Sales, festive seasons, admission periods and campaign launches can bring traffic spikes. Plan ahead with caching, a CDN, scaling rules and load testing, and avoid major releases right before big events.",
        "A little preparation ensures your busiest days are your best days, not your most stressful ones.",
      ],
    },
  ],
};

export default guide;
