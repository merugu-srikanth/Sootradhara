import type { TitleText } from "./types";
import type { Faq } from "@/lib/services";

export interface IndustryMore {
  /** How each related service applies to this industry (keyed by service slug) */
  serviceFit: Record<string, string>;
  mistakes: TitleText[];
}

/** Additional practical FAQs per industry */
export const industryMoreFaqs: Record<string, Faq[]> = {
  education: [
    { q: "How long does it take to set up an admission portal?", a: "A focused admission portal with online forms, document upload and payment can usually be ready in a few weeks, depending on your process and content." },
    { q: "Can we try the system with one class or branch first?", a: "Yes. Piloting with one class, department or branch is a good way to refine the system before a wider rollout." },
    { q: "What happens to our data if we stop using the system?", a: "Your data belongs to you. We can export it in common formats so you can keep or move it." },
  ],
  healthcare: [
    { q: "How long does it take to start online booking?", a: "For a clinic with a few doctors, online booking with reminders can usually be live within a few weeks." },
    { q: "Can patients pay online and get receipts?", a: "Yes. Payments by UPI, cards and wallets can generate receipts automatically and update your billing records." },
    { q: "Can we keep using our existing billing software?", a: "Often yes. We can integrate where possible, or replace only the parts that cause problems." },
    { q: "Will older patients be able to use online booking?", a: "We design simple, large-text flows and keep phone booking available, so every patient has an easy option." },
  ],
  startups: [
    { q: "How fast can we get a prototype?", a: "A clickable prototype for the core user flow can often be ready within two to three weeks after the discovery workshop." },
    { q: "Do you help write product requirements?", a: "Yes. We turn your ideas into clear user stories and a prioritised feature list as part of discovery." },
    { q: "Can you support us during an investor demo?", a: "We can prepare a stable demo environment and help you rehearse the product walkthrough." },
  ],
  "retail-ecommerce": [
    { q: "How long does it take to launch an online store?", a: "A store on Shopify or WooCommerce with core features can often launch in a few weeks once products and photos are ready." },
    { q: "Can you migrate my existing store?", a: "Yes. We can move products, customers and orders from your current platform, with redirects to protect search rankings." },
    { q: "Can staff in my shop see online orders?", a: "Yes. Shop staff can view and prepare online orders, especially for store pickup and local delivery." },
  ],
  restaurants: [
    { q: "How long does it take to set up direct ordering?", a: "A direct ordering website with your menu, payments and delivery or pickup options can usually be ready in a few weeks." },
    { q: "Can we manage multiple outlets from one dashboard?", a: "Yes. Menus, prices, orders and reports can be managed centrally with outlet-level access." },
    { q: "What hardware do we need?", a: "Often just a tablet or kitchen screen and a printer for KOTs. We recommend options based on your setup." },
    { q: "Can we pause online orders during rush hours?", a: "Yes. You can pause ordering, extend preparation times or mark items unavailable at any moment." },
  ],
  fintech: [
    { q: "How long does a digital onboarding project take?", a: "A focused onboarding journey with document upload and provider integrations typically takes a couple of months, depending on requirements and approvals." },
    { q: "Can you build both customer and internal apps?", a: "Yes. We often build customer apps, field apps and internal dashboards that share one secure backend." },
    { q: "Do you provide documentation for audits?", a: "Yes. We provide technical documentation covering architecture, access control, data flows and security measures." },
    { q: "Can the app support regional languages?", a: "Yes. Multilingual interfaces help customers understand terms and steps clearly." },
    { q: "How do you handle sensitive documents?", a: "Documents are uploaded over encrypted connections, stored securely with restricted access and retained according to your policies." },
    { q: "Can we start with one product line?", a: "Yes. Starting with one loan or payment product lets you refine the platform before expanding." },
    { q: "Can customers track their application status?", a: "Yes. Customers can see each stage of their application in the app or portal and receive notifications when action is needed or a decision is made." },
    { q: "Do you offer support after launch?", a: "Yes. We provide ongoing support for monitoring, fixes, security updates and new features, with response times agreed in a support plan." },
  ],
};

export const industryMore: Record<string, IndustryMore> = {
  "real-estate": {
    serviceFit: {
      "website-development": "For real estate, the website is your 24/7 sales gallery. We build project pages that load fast on mobile, present unit types and floor plans clearly, show the location with real distances to schools, offices and transport, and display RERA details accurately. Every page includes brochure downloads, WhatsApp and call buttons, and a site-visit booking form that feeds directly into your CRM.",
      "erp-crm-development": "A real estate CRM keeps every enquiry from portals, ads, walk-ins and channel partners in one place. Leads are assigned automatically, follow-ups are scheduled, site visits are tracked and each stage up to booking is visible. Inventory views show which units are available, blocked or sold, and managers get source-wise reports that connect marketing spend to bookings.",
      "digital-marketing": "Property marketing works best when it's precise. We run Google Search campaigns for location and project searches, Meta lead campaigns for awareness, and retargeting for visitors who showed interest. Each campaign points to a focused landing page, and tracking follows leads through to site visits so you know which spend produces real buyers.",
    },
    mistakes: [
      { title: "Generic landing pages", text: "Sending all ads to a homepage instead of project-specific pages wastes budget and confuses buyers." },
      { title: "Slow first response", text: "Waiting hours to call back new enquiries lets competitors reach buyers first." },
      { title: "Outdated price sheets", text: "Sharing old prices or availability damages trust and causes friction later." },
      { title: "Unclear lead ownership", text: "Without a partner portal, disputes with brokers over who brought a buyer are common." },
      { title: "Silence after booking", text: "Buyers who hear nothing during construction become anxious and less likely to refer friends." },
    ],
  },
  education: {
    serviceFit: {
      "website-development": "An education website should help families find answers quickly: programmes, eligibility, fees, facilities, faculty, transport and admission steps. We design clear structures for schools, colleges and coaching centres, with course pages that rank in search, accessible design for parents of all ages and enquiry forms that reach your admission team immediately.",
      "custom-software-development": "Every institution has its own way of running admissions, fees, attendance and exams. Custom software lets you digitise these processes exactly as you work, with role-based access for administrators, teachers and accountants, automated receipts and reminders, and reports that management can trust.",
      "mobile-app-development": "A student and parent app becomes the daily connection between your institution and families. Attendance alerts, homework, timetables, results, fee payments and announcements arrive in one place, replacing scattered messages. For coaching centres, apps can also deliver study material, tests and performance tracking.",
    },
    mistakes: [
      { title: "Too many communication channels", text: "Using several WhatsApp groups, SMS and paper notices makes it hard for parents to keep track." },
      { title: "Launching during exams or admissions", text: "Introducing new systems at peak times overwhelms staff and families." },
      { title: "Ignoring teacher feedback", text: "Tools that add work for teachers are quietly abandoned." },
      { title: "Outdated website information", text: "Old fees, faculty lists or results make families doubt everything else on the site." },
      { title: "Weak data access control", text: "Giving everyone access to all student data creates privacy risks." },
    ],
  },
  healthcare: {
    serviceFit: {
      "website-development": "A healthcare website must be clear, calm and trustworthy. We build sites with doctor profiles, specialities, timings, fees, directions and patient information pages reviewed by your doctors. Booking buttons are visible on every page, and the design is accessible for elderly patients and families searching on behalf of loved ones.",
      "custom-software-development": "Clinics and diagnostic centres often outgrow paper registers and basic billing software. Custom systems bring patient registration, appointments, consultation notes, prescriptions, billing and reports together, with strict role-based access so each staff member sees only what they need.",
      "digital-marketing": "Healthcare marketing should inform rather than promise. We focus on local SEO, a complete Google Business Profile, helpful treatment pages and carefully targeted search ads for specific services. Campaigns follow professional and platform guidelines, and we track bookings so you can see which services patients are looking for.",
    },
    mistakes: [
      { title: "Hard-to-find timings and fees", text: "Patients leave when basic information isn't visible quickly." },
      { title: "No appointment reminders", text: "Without reminders, no-shows create gaps and wasted doctor time." },
      { title: "Exaggerated medical claims", text: "Promising outcomes damages trust and can breach professional guidelines." },
      { title: "Sharing reports over insecure channels", text: "Sending sensitive reports casually risks patient privacy." },
      { title: "Ignoring online reviews", text: "Unanswered reviews, especially negative ones, shape how new patients see you." },
    ],
  },
  startups: {
    serviceFit: {
      "mobile-app-development": "For consumer and marketplace startups, the mobile app is often the product itself. We help you define the core user flow, build a clickable prototype for testing and develop a cross-platform MVP for Android and iOS, with analytics in place from day one so you can measure what users actually do.",
      "branding-ui-ux-design": "Early-stage startups need to look credible without overspending. We create a focused brand identity, a clear landing page and product UX that makes your value obvious within seconds. Strong design helps with user adoption, investor conversations and hiring.",
      "cloud-devops": "A startup's infrastructure should be lean, reliable and ready to grow. We set up managed cloud services, automated deployments, backups and monitoring with costs that match your stage, and plan clear paths to scale when traction arrives.",
    },
    mistakes: [
      { title: "Building before validating", text: "Months of development without user feedback is the most common and expensive mistake." },
      { title: "Too many features in version one", text: "Every extra feature delays launch and blurs what you're testing." },
      { title: "Not owning your code and accounts", text: "Missing ownership creates problems with investors and future teams." },
      { title: "No analytics at launch", text: "Without data, you can't learn what's working or why users leave." },
      { title: "Over-engineering for scale", text: "Complex architecture for users you don't have yet wastes runway." },
    ],
  },
  "retail-ecommerce": {
    serviceFit: {
      "ecommerce-development": "We build online stores that reflect your brand and work the way Indian shoppers buy: fast mobile pages, clear product information, UPI, cards and COD, pincode delivery checks, WhatsApp updates and easy returns. Behind the scenes, we connect shipping, GST invoicing and inventory so operations stay manageable as orders grow.",
      "erp-crm-development": "For retailers with multiple stores or channels, inventory and customer data are the backbone. We build systems that track stock across locations, connect shop billing with your online store where possible, manage purchases and suppliers, and record customer purchase history for loyalty and personalised offers.",
      "digital-marketing": "Retail marketing combines online sales and store footfall. We run Google Shopping and Search campaigns, Instagram and Facebook ads, product SEO and local SEO for each store, with special planning for festive seasons and sales events. Tracking ties campaigns to orders so budgets go where they work.",
    },
    mistakes: [
      { title: "Unsynced stock", text: "Selling items online that are already sold in-store leads to cancellations and lost trust." },
      { title: "Poor product photos", text: "Low-quality images are one of the biggest reasons online shoppers don't buy." },
      { title: "Complicated returns", text: "Difficult return processes discourage first-time buyers." },
      { title: "Late festive planning", text: "Starting campaigns and stock planning too close to festivals means missed sales." },
      { title: "No repeat-customer strategy", text: "Focusing only on new customers ignores your most profitable buyers." },
    ],
  },
  restaurants: {
    serviceFit: {
      "website-development": "A restaurant website should make people hungry and make ordering easy. We build sites with beautiful menus, photos, location and hours, table reservations and direct ordering for delivery or pickup, optimised for phones and quick to update when menus or prices change.",
      "mobile-app-development": "For restaurants and cloud kitchens with many regular customers, an ordering app builds loyalty and repeat business. Saved favourites, quick reordering, loyalty points, order tracking and personalised offers encourage customers to order directly instead of through aggregators.",
      "digital-marketing": "Restaurant marketing is local and visual. We optimise your Google Business Profile with fresh photos and menu updates, manage reviews, create Instagram content that showcases your dishes and run local ads to fill tables on slower days and promote special events.",
    },
    mistakes: [
      { title: "Outdated online menus", text: "Wrong prices or unavailable dishes online frustrate customers before they even arrive." },
      { title: "Ignoring Google Maps", text: "An incomplete listing with old photos loses diners searching nearby." },
      { title: "No reason to order direct", text: "Without rewards or convenience, customers stay on aggregator apps." },
      { title: "Complex tools for busy staff", text: "Systems that slow down service during rush hours get abandoned." },
      { title: "Unmanaged reservations", text: "Notebook bookings cause double bookings and unhappy guests on busy nights." },
    ],
  },
  fintech: {
    serviceFit: {
      "mobile-app-development": "Finance apps must feel simple and safe. We build onboarding, loan, payment and investment apps with clear step-by-step flows, secure authentication, transparent fees and terms, instant receipts and easy access to statements, designed for customers with different levels of digital experience.",
      "custom-software-development": "Behind customer apps sit internal systems for approvals, collections, reconciliation and reporting. We build these around your processes, with role-based access, audit logs and integrations with payment partners, verification providers and accounting systems.",
      "cloud-devops": "Finance systems need strong, well-documented infrastructure. We set up secure cloud environments with encryption, access controls, monitoring, backups and controlled release processes, documented to support your security reviews and audits.",
    },
    mistakes: [
      { title: "Long, confusing onboarding", text: "Asking for too much information at once causes high drop-off." },
      { title: "Hidden fees or unclear terms", text: "Lack of transparency damages trust and can create compliance issues." },
      { title: "Security added late", text: "Retrofitting security is harder and riskier than designing it in from the start." },
      { title: "Manual reconciliation", text: "Matching payments by hand causes delays, errors and disputes." },
      { title: "Leaving compliance out of planning", text: "Involving compliance only at the end leads to expensive rework." },
    ],
  },
};
