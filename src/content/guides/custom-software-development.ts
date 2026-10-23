import type { Guide } from "../types";

const guide: Guide = {
  title: "Custom software for growing businesses: a plain-English guide",
  intro:
    "Custom software can transform how a business runs, but only when it's planned well. This guide explains when custom software makes sense, how to prepare, and how to make sure your team actually uses it after launch.",
  sections: [
    {
      heading: "When custom software makes sense",
      paragraphs: [
        "Ready-made software is often the right first choice. It's quick to start, usually affordable and well-tested. Custom software becomes worthwhile when your process is unusual, when off-the-shelf tools force constant workarounds, when licence costs keep rising as your team grows, or when your way of working is part of what makes your business special.",
        "A simple test: if your team spends significant time each week copying data, maintaining spreadsheets or fixing errors caused by disconnected tools, the time saved by a well-designed system can be substantial.",
      ],
    },
    {
      heading: "Map your process before writing any code",
      paragraphs: [
        "Start by documenting how work flows today. Who starts a task, what information they need, who approves it, what happens next and where it ends. Include the exceptions, because they're often where problems hide.",
        "This exercise alone often reveals improvements you can make immediately, even before software is built. It also ensures the software reflects reality rather than assumptions.",
      ],
      bullets: ["List every step in order", "Note who does each step", "Record what information is needed", "Mark approvals and handovers", "Capture common exceptions", "Identify the biggest delays"],
    },
    {
      heading: "Involve the people who do the work",
      paragraphs: [
        "Owners and managers see the big picture, but staff on the ground know the details: the special cases, the shortcuts, the reasons things are done a certain way. Involve them early in workshops and design reviews.",
        "When people help shape the software, they trust it and adopt it faster. When software is imposed on them, they often find ways to keep using their old spreadsheets.",
      ],
    },
    {
      heading: "Build in phases, not one big launch",
      paragraphs: [
        "Large software projects delivered all at once carry high risk. Requirements change, priorities shift and problems surface late. A phased approach delivers the most valuable module first, gets it into real use, and builds from there.",
        "Each phase becomes a learning opportunity. Feedback from the first module improves the design of the next.",
      ],
    },
    {
      heading: "Plan integrations carefully",
      paragraphs: [
        "Most businesses use several tools already: Tally or Zoho for accounts, Google Workspace for email and documents, payment gateways, perhaps a website or online store. Decide which systems the new software must talk to, and what information should flow between them.",
        "Not every tool offers easy integration. A good partner will check what's possible early and suggest practical alternatives when needed.",
      ],
    },
    {
      heading: "Clean your data before moving it",
      paragraphs: [
        "Migrating data from spreadsheets or old systems is often underestimated. Duplicate customers, inconsistent product names, outdated prices and missing fields all cause problems in a new system.",
        "Set aside time to clean and standardise your data before import. It's one of the most valuable steps in any software project.",
      ],
    },
    {
      heading: "Security and access from day one",
      paragraphs: [
        "Decide who should see and change what. Role-based access ensures each person sees only what they need. Combine this with secure logins, encrypted connections, regular backups and an audit trail of important changes.",
        "Make sure the system is hosted in accounts your company owns, and that access is removed promptly when people leave.",
      ],
    },
    {
      heading: "Training and adoption",
      paragraphs: [
        "Even the best software fails if people don't use it. Plan short, practical training sessions for each role, simple user guides and a clear person to contact with questions. Expect a settling-in period and stay close to the team during the first weeks.",
        "Measure adoption: are people logging in, completing tasks in the system and trusting its reports? If not, find out why and adjust.",
      ],
    },
    {
      heading: "Owning and evolving your software",
      paragraphs: [
        "Your business will keep changing, and your software should change with it. Make sure you receive the source code and documentation, and plan for ongoing support and improvements.",
        "Treat software as a living asset. Regular small improvements keep it aligned with how your business works and protect the value of your investment.",
      ],
    },
  ],
};

export default guide;
