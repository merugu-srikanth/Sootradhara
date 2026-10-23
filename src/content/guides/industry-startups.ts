import type { Guide } from "../types";
import type { Faq } from "@/lib/services";

export const guide: Guide = {
  title: "Building your first product: a founder's guide to MVPs",
  intro:
    "Most startups don't fail because they can't build software. They fail because they build the wrong thing, too slowly, with too much of their budget. This guide shares practical steps to turn your idea into a focused product that real users can try, and to learn quickly from them.",
  sections: [
    {
      heading: "Fall in love with the problem, not the solution",
      paragraphs: [
        "Before designing features, get very clear on the problem. Who has it? How often? How do they solve it today? What does it cost them in time, money or frustration? Speak to potential users directly and listen more than you pitch.",
        "A clear problem statement keeps your product focused and makes every later decision easier.",
      ],
    },
    {
      heading: "What an MVP really is",
      paragraphs: [
        "A minimum viable product is the smallest version of your product that delivers real value to early users and lets you learn whether your idea works. It's not a half-built version of your dream product; it's a focused tool for one core job.",
        "Sometimes an MVP can be a landing page with a waitlist, a no-code prototype or a manual service behind a simple interface. Choose the lightest approach that tests your key assumption.",
      ],
      bullets: ["Solves one core problem well", "Usable by real early users", "Measures whether people find value", "Built quickly and affordably", "Easy to change based on feedback", "Avoids features that can wait"],
    },
    {
      heading: "Prioritise ruthlessly",
      paragraphs: [
        "List every feature you've imagined. For each, ask: will a first user fail to get value without this? If not, move it to a later phase. Logins, payments and admin tools may be essential; social sharing, advanced settings and dashboards often aren't.",
        "Fewer features mean faster launch, lower cost and clearer learning.",
      ],
    },
    {
      heading: "Prototype and test before building",
      paragraphs: [
        "A clickable prototype lets potential users experience your product before any code is written. Watch them use it, note where they get confused and what excites them.",
        "Prototypes are also useful for early conversations with investors, partners and pilot customers.",
      ],
    },
    {
      heading: "Choose technology that won't trap you",
      paragraphs: [
        "Pick proven, widely used technologies that make it easy to find developers later. Cross-platform frameworks for mobile, modern web frameworks and managed cloud services usually offer a good balance of speed and long-term flexibility.",
        "Avoid over-engineering for scale you don't have yet, but also avoid shortcuts that force a complete rewrite after launch.",
      ],
    },
    {
      heading: "Own your code and accounts",
      paragraphs: [
        "Make sure your company owns the source code, design files, domain, app store accounts and cloud accounts. This matters for investors, acquisitions and future team members.",
        "Keep documentation up to date so new developers can pick up the work smoothly.",
      ],
    },
    {
      heading: "Plan your launch",
      paragraphs: [
        "Even a small launch needs a plan. Prepare a clear landing page, onboarding flow, support channel and analytics. Identify where your first users are: communities, networks, early customers, partners or targeted ads.",
        "Launch to a small group first, fix the biggest issues, then widen gradually.",
      ],
    },
    {
      heading: "Measure the right things",
      paragraphs: [
        "Downloads and sign-ups are nice, but retention and engagement tell you whether people truly value your product. Track how many users return, complete key actions and recommend you.",
        "Combine data with conversations. Ask users why they stay or leave.",
      ],
    },
    {
      heading: "Iterate with purpose",
      paragraphs: [
        "After launch, plan short improvement cycles based on what you've learned. Fix friction, double down on what users love and test new ideas carefully.",
        "Each cycle should answer a specific question about your users or business model.",
      ],
    },
    {
      heading: "Working well with a development partner",
      paragraphs: [
        "Choose a partner who challenges your assumptions respectfully, explains trade-offs in plain language and cares about your business outcomes. Agree on scope, milestones, communication rhythm and ownership upfront.",
        "Stay involved: review builds regularly, share user feedback and make decisions quickly. Close collaboration produces better products, faster.",
      ],
    },
  ],
};

export const faqs: Faq[] = [
  { q: "How much should I spend on an MVP?", a: "Enough to test your key assumption with real users, and no more. We help you find the leanest version that still delivers value." },
  { q: "Can you help validate my idea before building?", a: "Yes. Discovery workshops, prototypes and landing page tests can help validate demand before major development." },
  { q: "Will my MVP be able to scale?", a: "We build on proven technologies and sensible architecture so the product can grow without a complete rewrite." },
  { q: "Can you work with my technical co-founder?", a: "Yes. We can work alongside your co-founder or in-house developers, following your preferred tools and processes." },
  { q: "Do you help with analytics and user feedback?", a: "Yes. We set up product analytics and simple feedback loops so you can learn from early users." },
];
