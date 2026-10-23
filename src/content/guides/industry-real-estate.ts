import type { Guide } from "../types";
import type { Faq } from "@/lib/services";

export const guide: Guide = {
  title: "Digital marketing and sales systems for real estate: a complete guide",
  intro:
    "Real estate sales have always depended on trust, timing and follow-up. Today, those happen largely online and on the phone. This guide explains how builders, developers and agents can use websites, CRMs, WhatsApp and marketing together to generate better enquiries, convert more of them into site visits and keep buyers happy after booking.",
  sections: [
    {
      heading: "Understand how buyers search today",
      paragraphs: [
        "Most property buyers begin with broad research: locations, budgets, builders and project types. They browse portals, search on Google, watch videos and ask friends and family. As they narrow down, they visit project websites, compare floor plans and amenities, check approvals and contact a few sales teams.",
        "Your digital presence should support every stage of this journey. Broad, helpful content attracts early researchers. Detailed project pages and fast responses win buyers who are ready to visit.",
      ],
    },
    {
      heading: "Build project pages that answer every question",
      paragraphs: [
        "A great project page is the digital version of your best sales presentation. It shows real photos and renders, explains unit types with floor plans and carpet areas, lists amenities, shows the location with nearby schools, hospitals, offices and transport, and displays approval and RERA details clearly.",
        "Make the next step obvious: a brochure download, a call button, a WhatsApp chat and a site-visit booking form. Keep pages fast, because heavy images and videos can make pages slow on mobile networks.",
      ],
      bullets: ["Real photos, renders and walkthrough videos", "Floor plans with carpet areas", "Location map and nearby landmarks", "Amenities and specifications", "RERA and approval information", "Clear calls to action on every screen"],
    },
    {
      heading: "Respond to every lead within minutes",
      paragraphs: [
        "Speed matters enormously in real estate. A buyer who enquires on several projects in one evening usually speaks first with whoever calls back first. An automatic WhatsApp welcome message with the brochure, followed quickly by a call from an assigned executive, makes a strong impression.",
        "A CRM can assign leads automatically by project, location or language, notify the executive instantly and escalate leads that aren't contacted within a set time.",
      ],
    },
    {
      heading: "Structure your follow-up",
      paragraphs: [
        "Most buyers don't decide after the first call. They need time, information and reassurance. Define a follow-up rhythm: what to send after the first call, when to call again, what to share before and after a site visit, and when to move a lead to long-term nurturing.",
        "Recording notes, preferences and objections in the CRM means anyone on the team can continue the conversation, even if an executive changes roles.",
      ],
    },
    {
      heading: "Make site visits easy to book and hard to forget",
      paragraphs: [
        "Online visit booking lets buyers pick a convenient slot without phone tag. Automated confirmations with location pins and reminders the day before reduce no-shows. Your sales team sees upcoming visits on a shared calendar and can prepare accordingly.",
        "After each visit, capture feedback and next steps in the CRM. This creates a clear view of which buyers are close to booking.",
      ],
    },
    {
      heading: "Work smoothly with channel partners",
      paragraphs: [
        "Brokers and channel partners can be a major source of buyers, but disputes over lead ownership are common. A partner portal where brokers register leads, with automatic duplicate checks and timestamped records, keeps things fair and transparent.",
        "Partners can also download the latest brochures and price sheets and see the status of their leads, reducing calls to your team.",
      ],
    },
    {
      heading: "Marketing that targets the right buyers",
      paragraphs: [
        "Google Search ads reach people actively searching for projects in specific locations. Meta ads on Instagram and Facebook build awareness and generate leads through instant forms, and can target buyers by location, age and interests. Retargeting reminds website visitors about your project.",
        "Send traffic to focused landing pages for each project and track which campaigns produce site visits and bookings, not just form fills. This shows where your budget is truly working.",
      ],
    },
    {
      heading: "Local SEO for builders and agents",
      paragraphs: [
        "Buyers often search for 'apartments in Kokapet' or 'villas near Shamshabad'. Location-focused pages with genuine information about the area, connectivity, schools and upcoming infrastructure can rank well and attract early-stage buyers.",
        "Maintain an accurate Google Business Profile for your sales office and site offices, with photos, hours and genuine reviews from buyers.",
      ],
    },
    {
      heading: "Keep buyers informed after booking",
      paragraphs: [
        "The relationship doesn't end at booking. Buyers want regular construction updates, clear payment schedules, receipts and documents. A buyer portal or app provides all of this in one place and reduces repetitive calls to your CRM team.",
        "Happy buyers become your best referrals. Timely, transparent communication during construction builds that goodwill.",
      ],
    },
    {
      heading: "Measure, learn and improve",
      paragraphs: [
        "Track the full funnel: leads by source, contact rate, response time, site visits, bookings and cost per booking. Review these numbers weekly with your sales and marketing teams.",
        "Small improvements at each stage, such as faster responses, better follow-up and clearer pages, add up to many more bookings from the same marketing budget.",
      ],
    },
  ],
};

export const faqs: Faq[] = [
  { q: "Should every project have a separate website?", a: "For large projects, a dedicated microsite can perform very well in ads and search. Smaller builders often prefer one main site with a detailed page per project." },
  { q: "Can the CRM assign leads by project or language?", a: "Yes. Assignment rules can consider project, location, language, lead source or executive availability." },
  { q: "Can we track which ads bring site visits?", a: "Yes. With proper tracking and CRM stages, you can see leads, visits and bookings by campaign and source." },
  { q: "Do you create walkthrough videos or 3D tours?", a: "We embed videos and 3D tours created by your visualiser or production partner, and optimise them for fast loading." },
  { q: "Can we send construction updates automatically?", a: "Yes. Updates can be posted once in the admin panel and shared with buyers through the portal, app and WhatsApp." },
];
