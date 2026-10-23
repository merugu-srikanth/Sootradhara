import type { Guide } from "./types";

type Section = Guide["sections"][number];

/** Additional guide sections appended to the main guides */
export const guideExtraSections: Record<string, Section[]> = {
  "cloud-devops": [
    {
      heading: "When to bring in outside help",
      paragraphs: [
        "Many businesses manage hosting themselves at first, often through one developer or a hosting provider's dashboard. It's worth bringing in experienced help when outages become frequent, releases feel risky, costs rise without explanation or the only person who understands the setup is leaving.",
        "A one-time review can be enough to put things on a solid footing. For business-critical systems, ongoing managed care gives peace of mind and frees your team to focus on building features.",
      ],
    },
  ],
  "real-estate": [
    {
      heading: "Content that attracts early-stage buyers",
      paragraphs: [
        "Not every visitor is ready to book a site visit. Many are still learning about locations, budgets and the buying process. Helpful content such as area guides, explanations of carpet area versus super built-up area, home loan basics and checklists for site visits builds trust early.",
        "These articles can rank on Google, bring steady traffic and give your sales team useful material to share with buyers who need more time.",
      ],
    },
    {
      heading: "Using video and virtual tours well",
      paragraphs: [
        "Walkthrough videos, drone footage of the location and 3D tours help buyers imagine living in a home before visiting. They're especially valuable for NRI buyers and families deciding from a distance.",
        "Keep videos short, show real progress and surroundings, and host them so they load quickly without slowing down your pages.",
      ],
    },
  ],
  education: [
    {
      heading: "Building trust with honest information",
      paragraphs: [
        "Parents value transparency. Publish accurate details about fees, facilities, faculty, affiliations, transport and safety measures. Share genuine achievements and activities, with permission, rather than exaggerated claims.",
        "Clear, honest information reduces repetitive questions and helps the right families choose you with confidence.",
      ],
    },
    {
      heading: "Choosing technology partners wisely",
      paragraphs: [
        "Look for partners who understand academic calendars, peak admission periods and the realities of busy school offices. Ask how they handle data security, training and support during critical periods.",
        "A partner who listens to teachers and administrators will build tools that people genuinely use.",
      ],
    },
    {
      heading: "Budgeting for digital tools",
      paragraphs: [
        "Digital tools for institutions usually involve a one-time setup cost and smaller ongoing costs for hosting, SMS or WhatsApp messages, payment gateway charges and support. Plan these together so there are no surprises later in the year.",
        "Start with the module that saves the most staff time or improves parent satisfaction the most. The savings and goodwill from the first phase often make the case for the next one easier.",
      ],
    },
  ],
  healthcare: [
    {
      heading: "Follow-up care and patient relationships",
      paragraphs: [
        "Many patients need follow-up visits, regular check-ups or ongoing treatment. Automated reminders for follow-ups, medication refills or annual health checks help patients stay on track and keep your schedule steady.",
        "Thoughtful communication after visits, such as care instructions and easy ways to ask questions, builds lasting relationships.",
      ],
    },
    {
      heading: "Planning for growth and new branches",
      paragraphs: [
        "As clinics grow into multiple doctors or branches, systems should support shared patient records, doctor-specific schedules and branch-level reports. Choosing scalable tools early avoids painful migrations later.",
        "Consistent branding and processes across branches also help patients feel the same quality of care wherever they visit.",
      ],
    },
    {
      heading: "Budgeting and getting started",
      paragraphs: [
        "Most clinics start with a website, online booking and reminders, which offer quick, visible improvements. Patient records, report portals and apps can follow in later phases.",
        "Ongoing costs typically include hosting, SMS or WhatsApp messages and support. Planning them upfront makes the investment predictable and easier to justify.",
      ],
    },
    {
      heading: "Training your team",
      paragraphs: [
        "Front-desk staff, nurses and doctors use systems differently. Short, role-specific training sessions with real examples from your clinic help everyone become comfortable quickly.",
        "Choose a staff member to act as the internal champion who collects feedback and helps colleagues in the first weeks.",
      ],
    },
    {
      heading: "Questions to ask before choosing a system",
      paragraphs: [
        "Ask how patient data is protected, who can access it, where it's hosted and how backups work. Check how easily staff can book, reschedule and manage walk-ins, and how patients receive reminders and reports.",
        "Request a walkthrough using your own clinic's scenarios, such as a new patient booking, a follow-up visit and a report delivery. Practical demos reveal far more than feature lists.",
      ],
    },
  ],
  startups: [
    {
      heading: "Preparing for investor conversations",
      paragraphs: [
        "Investors look for evidence: real users, engagement, early revenue or strong interest. A working MVP, clear analytics and insights from user interviews make conversations far more concrete than slides alone.",
        "Keep your product story simple: the problem, who has it, how you solve it, what you've learned so far and what you'll build next.",
      ],
    },
    {
      heading: "Building your own team over time",
      paragraphs: [
        "Many startups begin with an external partner and gradually build an in-house team. Plan for this from the start with clean code, documentation and shared tools, so new hires can take over smoothly.",
        "A good partner helps with this transition, from interviewing developers to handing over knowledge.",
      ],
    },
    {
      heading: "Your first 90 days after launch",
      paragraphs: [
        "The weeks after launch are when you learn the most. Talk to early users every week, watch analytics daily, fix the most painful issues quickly and resist the urge to add new features before the core experience works smoothly.",
        "Set a simple rhythm: review data and feedback on Monday, decide priorities, build and release during the week. Small, steady improvements compound quickly at this stage.",
      ],
    },
  ],
  "retail-ecommerce": [
    {
      heading: "Photography and product content",
      paragraphs: [
        "Online shoppers rely entirely on photos and descriptions. Invest in consistent, well-lit product photography with multiple angles, close-ups and lifestyle images. Describe materials, dimensions, care instructions and how products fit or feel.",
        "Better product content reduces returns, increases conversions and helps your products appear in search results.",
      ],
    },
    {
      heading: "Customer service as a competitive edge",
      paragraphs: [
        "Fast, friendly answers on WhatsApp, simple returns and proactive delivery updates turn ordinary purchases into memorable experiences. Small brands can often outshine larger competitors here.",
        "Track common questions and complaints, and fix the root causes in your product pages, policies or operations.",
      ],
    },
    {
      heading: "Your first 90 days selling online",
      paragraphs: [
        "In the first months, focus on getting the basics right: accurate stock, smooth checkout, reliable delivery and quick replies to customer questions. Collect reviews from early buyers and fix any issues they raise.",
        "Start marketing with small, well-tracked campaigns. Learn which products, audiences and messages work before increasing your budget.",
      ],
    },
    {
      heading: "Budgeting for growth",
      paragraphs: [
        "Plan for platform fees, payment gateway charges, shipping costs, packaging, apps and marketing alongside the initial store build. Understanding your cost per order helps you price products and offers sensibly.",
        "Reinvest in what works: better photos for top products, more budget for profitable campaigns and tools that save operational time.",
      ],
    },
    {
      heading: "Questions to ask before you build",
      paragraphs: [
        "Clarify which channels you'll sell through, how many products and variants you have, where stock is held and how orders will be packed and shipped. Decide your payment options, delivery zones and returns policy upfront.",
        "Ask potential partners how they'll handle festive traffic, stock sync, GST invoices and integrations with your billing software. Clear answers to these questions prevent the most common launch problems.",
      ],
    },
  ],
  restaurants: [
    {
      heading: "Managing online reviews",
      paragraphs: [
        "Reviews on Google and delivery platforms strongly influence where people eat. Encourage happy guests to share feedback, respond to every review politely and use criticism to improve.",
        "Never offer incentives for fake reviews. Genuine reviews and thoughtful responses build long-term trust.",
      ],
    },
    {
      heading: "Using data to plan menus and staffing",
      paragraphs: [
        "Digital ordering and billing data shows which dishes sell best, which times are busiest and how ordering patterns change across days and seasons. Use this to refine menus, plan purchasing and schedule staff.",
        "Small adjustments based on real data can reduce wastage and improve margins.",
      ],
    },
    {
      heading: "Your first 90 days with direct ordering",
      paragraphs: [
        "Promote your direct ordering channel to existing guests first: table cards with QR codes, packaging inserts and messages to regulars. Offer a small welcome reward for their first direct order.",
        "Watch which dishes and times perform best, gather feedback and refine the menu and offers. Word of mouth from happy regulars often drives the strongest growth.",
      ],
    },
    {
      heading: "Budgeting for technology",
      paragraphs: [
        "Restaurant technology costs usually include setup, monthly software or hosting, payment gateway fees and occasional hardware like tablets or printers. Compare these against aggregator commissions saved on direct orders.",
        "Start with the tool that addresses your biggest pain point and expand once you see results.",
      ],
    },
    {
      heading: "Questions to ask before choosing tools",
      paragraphs: [
        "Before choosing restaurant technology, think about your service style, peak hours, team size, delivery mix and existing POS. Ask how each tool handles busy periods, internet outages, menu changes and multiple outlets.",
        "Request a short demo with your actual menu and walk through a typical order from customer to kitchen to payment. The best tool is the one your team can use confidently during a Saturday night rush.",
      ],
    },
  ],
  fintech: [
    {
      heading: "Designing for diverse customers",
      paragraphs: [
        "Finance customers range from tech-savvy urban professionals to first-time digital users in smaller towns. Offer simple language, regional language options, helpful explanations and assisted journeys where needed.",
        "Test journeys with real users from your target segments to find confusing steps.",
      ],
    },
    {
      heading: "Partnering with the right providers",
      paragraphs: [
        "Finance products depend on partners for verification, payments, credit information and communication. Choose licensed, reliable providers, understand their costs and service levels, and plan fallbacks if a service is unavailable.",
        "Clear contracts and technical documentation make integrations smoother and safer.",
      ],
    },
    {
      heading: "Planning releases in a regulated environment",
      paragraphs: [
        "Changes to finance products often need review by risk and compliance teams. Build this into your release plan with clear documentation of what's changing, testing evidence and approval steps.",
        "Regular, smaller releases are easier to review and safer than large, infrequent updates.",
      ],
    },
    {
      heading: "Measuring success",
      paragraphs: [
        "Track application completion rates, verification turnaround, collection efficiency, support volumes and customer satisfaction. These metrics show where digital journeys are working and where customers struggle.",
        "Share these insights across product, operations and compliance teams so improvements are coordinated.",
      ],
    },
    {
      heading: "Questions to ask before you start",
      paragraphs: [
        "Before beginning a finance technology project, clarify a few essentials: which products and customer segments come first, which regulations and internal policies apply, which partners you'll integrate with, what data you need to collect and why, and how success will be measured.",
        "Agree on who owns decisions across business, compliance, risk and technology teams. Clear ownership speeds up approvals and avoids rework later. A short written brief covering these points makes every later conversation with your development partner faster and more productive.",
      ],
    },
  ],
};
