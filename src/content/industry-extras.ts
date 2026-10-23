import type { TitleText } from "./types";

export interface IndustryExtras {
  useCases: TitleText[];
  checklist: string[];
  whyUs: TitleText[];
}

export const industryExtras: Record<string, IndustryExtras> = {
  "real-estate": {
    useCases: [
      { title: "New project launch", text: "A builder launching a gated community needs a project microsite, launch campaigns on Google and Instagram, and a CRM that can handle a surge of enquiries in the first weeks. Leads are assigned automatically, site visits are booked online and the sales head sees daily reports by source." },
      { title: "Resale and rental agency", text: "An agency with hundreds of listings needs a searchable property website with filters for area, budget and type, WhatsApp enquiries per listing and a simple back office to add or update properties quickly." },
      { title: "Plotted development", text: "A developer selling plots on the city's outskirts needs layout maps showing available plots, location videos explaining connectivity, and nurturing campaigns for buyers who take longer to decide." },
      { title: "Commercial leasing", text: "A commercial property owner needs detailed floor-wise availability, specification sheets for businesses, and a lead pipeline tailored to longer B2B decision cycles." },
      { title: "Channel partner network", text: "A developer working with many brokers needs a partner portal with lead registration, duplicate checks and transparent status updates to avoid disputes." },
      { title: "Post-booking experience", text: "A builder with many buyers under construction needs a buyer app for progress photos, payment schedules, receipts and document downloads, reducing calls to the CRM team." },
    ],
    checklist: ["Every project has an up-to-date page", "RERA details are displayed correctly", "All lead sources flow into one system", "First response happens within minutes", "Follow-ups are scheduled, not remembered", "Site visits can be booked online", "Marketing is tracked to visits and bookings", "Buyers receive regular progress updates", "Google Business Profile is complete", "Brochures and price sheets are current"],
    whyUs: [
      { title: "We understand the sales cycle", text: "From enquiry to site visit to booking and possession, we design tools around how property is actually sold." },
      { title: "Website, CRM and marketing together", text: "One team connects your project pages, lead management and campaigns, so nothing falls between the cracks." },
      { title: "Local market knowledge", text: "We know Hyderabad's micro-markets and how buyers search for them." },
      { title: "Built for your team", text: "Simple screens for sales executives, clear reports for managers and easy updates for marketing." },
    ],
  },
  education: {
    useCases: [
      { title: "CBSE or state board school", text: "A school wants online admissions, digital fee payments with instalments, and a parent app for attendance, homework, circulars and report cards, reducing office queues and paper notices." },
      { title: "Junior or degree college", text: "A college needs programme pages that rank in search, an application portal with document verification, and student tools for timetables, attendance and results." },
      { title: "Coaching institute", text: "A coaching centre with many batches needs batch scheduling, test management with performance analytics, study material sharing and targeted admission campaigns during peak seasons." },
      { title: "Multi-campus group", text: "An education group with several branches needs centralised reporting, shared admission CRM and branch-level access for local staff." },
      { title: "Skill training provider", text: "A training company needs course pages, online enrolment and payment, attendance tracking, assessments and digital certificates." },
      { title: "Pre-school and daycare", text: "A pre-school needs a warm, trustworthy website, enquiry management, and a parent app for daily updates, photos and announcements." },
    ],
    checklist: ["Website shows current programmes and fees", "Admission enquiries are tracked in one place", "Parents can apply and pay online", "Receipts are generated automatically", "Fee reminders are sent before due dates", "Attendance is recorded digitally", "Parents receive timely updates", "Results and report cards are digital", "Student data access is role-based", "Admission campaigns are planned early"],
    whyUs: [
      { title: "Designed for every user", text: "Administrators, teachers, students and parents each get simple screens built for their needs." },
      { title: "Admission season ready", text: "We plan for peak traffic and enquiry volumes during admissions and results." },
      { title: "Phased, low-disruption rollout", text: "We introduce tools step by step, timed around your academic calendar." },
      { title: "Care for student data", text: "Secure access, careful data handling and privacy by design." },
    ],
  },
  healthcare: {
    useCases: [
      { title: "Single-doctor clinic", text: "A specialist clinic wants a professional website, Google Maps visibility, online booking with reminders and simple digital prescriptions, so the doctor spends less time on admin." },
      { title: "Multi-speciality clinic", text: "A clinic with several doctors needs doctor-wise schedules, a shared front-desk view, patient records and billing across specialities." },
      { title: "Diagnostic centre", text: "A diagnostic lab needs online test booking, home sample collection scheduling, and a secure portal where patients download reports." },
      { title: "Dental or skin clinic", text: "An aesthetic or dental clinic needs treatment pages, before-and-after galleries shared with consent, consultation booking and follow-up reminders." },
      { title: "Physiotherapy or wellness centre", text: "A wellness centre needs package management, session tracking, reminders and simple online payments." },
      { title: "Hospital outpatient department", text: "A hospital needs department pages, doctor search, appointment booking and queue management to reduce crowding in OPD areas." },
    ],
    checklist: ["Doctor profiles and timings are accurate", "Patients can book online", "Reminders are sent automatically", "Patient records are digital and secure", "Reports can be shared securely", "Google Business Profile is complete", "Reviews are answered professionally", "Medical content is doctor-reviewed", "Staff roles have proper access limits", "Backups are automatic and tested"],
    whyUs: [
      { title: "Privacy-first approach", text: "Secure access, encryption and careful data practices for sensitive health information." },
      { title: "Simple for patients of all ages", text: "Large text, clear steps and familiar patterns that work for elderly patients and families." },
      { title: "Less work for your front desk", text: "Booking, reminders and reports designed to reduce calls and paperwork." },
      { title: "Responsible marketing", text: "Informative, accurate content and campaigns without exaggerated claims." },
    ],
  },
  startups: {
    useCases: [
      { title: "Marketplace startup", text: "Founders connecting customers and service providers need two-sided apps, an admin panel, payments with commission logic and ratings, starting with one city and one category." },
      { title: "SaaS for small businesses", text: "A startup building billing or inventory software for shops needs a multi-tenant web app, subscriptions, onboarding and a simple support system." },
      { title: "Consumer mobile app", text: "A consumer app idea needs a polished prototype for user testing, a focused MVP and analytics to measure retention before raising funds." },
      { title: "Fintech or healthtech pilot", text: "A regulated-sector startup needs a secure MVP built with compliance requirements in mind, ready for pilot customers and partners." },
      { title: "D2C brand", text: "A new consumer brand needs a brand identity, an online store, launch campaigns and WhatsApp-based customer support." },
      { title: "Internal tool turned product", text: "A business that built a tool for itself wants to turn it into a product for others, with multi-tenant architecture and billing." },
    ],
    checklist: ["The core problem is clearly defined", "Target users have been interviewed", "MVP features are prioritised", "A prototype has been tested", "You own code, accounts and designs", "Analytics are set up before launch", "There is a plan for first users", "Success metrics are agreed", "Budget includes post-launch iteration", "An NDA is signed if needed"],
    whyUs: [
      { title: "Honest product advice", text: "We tell you what can wait and when a simpler approach is enough." },
      { title: "Design and engineering together", text: "Prototypes, branding and development under one roof for faster progress." },
      { title: "Built to grow", text: "Sensible architecture that scales without an expensive rewrite." },
      { title: "A long-term partner", text: "We can keep building with you or help you hand over to your own team." },
    ],
  },
  "retail-ecommerce": {
    useCases: [
      { title: "Single store going online", text: "A boutique or speciality shop wants an online store with UPI and COD, local delivery and store pickup, and stock that stays in sync with the shop." },
      { title: "Multi-store retail chain", text: "A chain with several outlets needs central inventory, store-wise sales reports, stock transfers and consistent pricing." },
      { title: "D2C brand scaling up", text: "A growing brand needs a distinctive store, conversion-focused product pages, WhatsApp automation and performance marketing." },
      { title: "Wholesale and B2B", text: "A distributor needs a B2B ordering portal with dealer pricing, minimum order quantities, credit limits and order history." },
      { title: "Marketplace seller", text: "A brand selling mainly on marketplaces wants its own store and loyalty programme to build direct customer relationships." },
      { title: "Festive season retailer", text: "A seasonal business needs a store and operations that can handle spikes during festivals and sales events." },
    ],
    checklist: ["Stock is accurate across channels", "Online store loads fast on mobile", "UPI, cards and COD are offered", "Delivery estimates are shown by pincode", "Returns policy is simple and visible", "Customers receive WhatsApp updates", "Repeat customers are recognised", "Sales reports are available daily", "Festive campaigns are planned early", "GST invoices are generated correctly"],
    whyUs: [
      { title: "Retail operations know-how", text: "We think about stock, billing, delivery and returns, not just the storefront." },
      { title: "Built for Indian shoppers", text: "UPI, COD, pincode checks and WhatsApp built in from the start." },
      { title: "Commerce plus marketing", text: "One team for your store, SEO, ads and customer engagement." },
      { title: "Scales with you", text: "Start simple and add loyalty, B2B or multi-store features as you grow." },
    ],
  },
  restaurants: {
    useCases: [
      { title: "Neighbourhood restaurant", text: "A family restaurant wants a direct ordering website with delivery and pickup, Google Maps optimisation and a loyalty programme for regulars." },
      { title: "Busy café", text: "A café with long weekend queues needs QR ordering at tables, a kitchen display and quick UPI payments to speed up service." },
      { title: "Cloud kitchen with several brands", text: "A cloud kitchen runs multiple virtual brands from one kitchen and needs separate menus and ordering pages with a shared kitchen system." },
      { title: "Fine dining", text: "A premium restaurant needs an elegant website, online reservations with special requests and personalised communication with guests." },
      { title: "Bakery and sweet shop", text: "A bakery needs online pre-orders for cakes and festive specials, delivery slots and WhatsApp order confirmations." },
      { title: "Restaurant group", text: "A group with several outlets needs centralised menus, outlet-wise reports and consistent branding across locations." },
    ],
    checklist: ["Customers can order directly from you", "Menus and prices are up to date", "QR menu is available for dine-in", "Orders reach the kitchen instantly", "Reservations are managed online", "Regulars are rewarded", "Google Business Profile has recent photos", "Reviews are answered politely", "Instagram is updated regularly", "Daily sales reports are available"],
    whyUs: [
      { title: "Built for rush hour", text: "Fast, simple tools that work when the restaurant is full." },
      { title: "More direct orders", text: "Ordering experiences and loyalty that encourage guests to order from you directly." },
      { title: "Food-first visuals", text: "Design and content that make your dishes look as good as they taste." },
      { title: "Local marketing", text: "Google Maps, Instagram and local ads to fill tables in your neighbourhood." },
    ],
  },
  fintech: {
    useCases: [
      { title: "NBFC digital lending", text: "An NBFC wants a mobile application journey with document upload, verification through chosen providers, an approval dashboard and EMI repayment through UPI and auto-debit." },
      { title: "Microfinance collections", text: "A microfinance institution needs offline-capable collection apps for field officers, with digital receipts and real-time dashboards for branches." },
      { title: "Investment advisory", text: "An advisory firm needs a client portal for portfolio summaries, documents, meeting scheduling and secure communication." },
      { title: "Insurance distribution", text: "An insurance distributor needs lead management, policy renewal reminders and a customer portal for policy documents." },
      { title: "Accounting and tax firm", text: "A CA firm needs a client portal for document collection, task tracking, deadlines and secure file sharing." },
      { title: "Fintech startup MVP", text: "A fintech founder needs a secure MVP built with compliance input, ready for pilot users and partner integrations." },
    ],
    checklist: ["Onboarding is mobile-friendly", "Fees and terms are clearly explained", "Verification uses approved providers", "Payments reconcile automatically", "Field teams have offline tools", "Customers can self-serve statements", "Access is role-based and logged", "Data is encrypted and backed up", "Compliance has reviewed requirements", "Dashboards show live performance"],
    whyUs: [
      { title: "Security by design", text: "Encryption, access control and audit trails built in from the first sprint." },
      { title: "Compliance-aware delivery", text: "We work closely with your compliance team to build to defined requirements." },
      { title: "Clear customer journeys", text: "Simple, transparent flows that build trust and improve completion rates." },
      { title: "Operational efficiency", text: "Automation for reconciliation, collections and reporting to reduce manual work." },
    ],
  },
};
