import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Rocket,
  ShoppingBag,
  UtensilsCrossed,
  Landmark,
} from "lucide-react";
import type { Faq } from "./services";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  challenges: string[];
  solutions: { title: string; description: string }[];
  services: string[];
  faqs: Faq[];
}

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Building2,
    tagline: "Websites, lead tracking and site-visit booking for builders and agents",
    metaTitle: "Real Estate Website & CRM Development in Hyderabad",
    metaDescription:
      "Real estate websites, property listing portals and lead CRMs for builders, developers and agents in Hyderabad. Capture more enquiries and book more site visits.",
    h1: "Digital Solutions for Real Estate Builders & Agents",
    intro:
      "Buyers start their property search online. We help builders, developers and agents in Hyderabad show projects beautifully, capture every enquiry, and follow up until the site visit.",
    challenges: [
      "Leads from portals, ads and WhatsApp get lost or followed up late",
      "Project brochures and floor plans are hard to share and update",
      "No clear view of which ad or channel brings real buyers",
    ],
    solutions: [
      { title: "Project websites", description: "Fast project pages with gallery, floor plans, location map, amenities and enquiry forms." },
      { title: "Lead CRM", description: "All enquiries in one place with auto-assignment to sales staff and follow-up reminders." },
      { title: "Site-visit booking", description: "Let buyers pick a slot online and get WhatsApp confirmations and reminders." },
      { title: "Local marketing", description: "Google and Meta campaigns targeted to buyers in and around your project location." },
    ],
    services: ["website-development", "erp-crm-development", "digital-marketing"],
    faqs: [
      { q: "Can you connect leads from 99acres or MagicBricks to our CRM?", a: "Where the portal allows exports or integrations, yes. We bring those leads into the same CRM as your website and ad leads." },
      { q: "Can each project have its own website?", a: "Yes. We can build separate project microsites or one main site with a page for each project." },
      { q: "Do you make 3D walkthroughs?", a: "We can embed 3D tours and videos from your architect or visualiser into the website." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    tagline: "Admissions, fee collection and student portals for schools and colleges",
    metaTitle: "School & College Software and Website Development in Hyderabad",
    metaDescription:
      "Websites, admission portals, fee collection and student management software for schools, colleges and coaching centres in Hyderabad.",
    h1: "Websites & Software for Schools, Colleges and Coaching Centres",
    intro:
      "Parents and students expect quick answers and easy online processes. We help schools, colleges and coaching centres take admissions, collect fees and share updates online, with less paperwork for staff.",
    challenges: [
      "Admission enquiries come through calls and walk-ins and are hard to track",
      "Fee collection and receipts take a lot of office time",
      "Parents want timely updates on attendance, marks and events",
    ],
    solutions: [
      { title: "Institution website", description: "Courses, faculty, facilities, results and an online admission enquiry form." },
      { title: "Admission & fee portal", description: "Online applications, document upload, and fee payment by UPI with instant receipts." },
      { title: "Student & parent app", description: "Attendance, homework, marks and announcements on the phone." },
      { title: "Admission campaigns", description: "Targeted ads and SEO during admission season to reach the right students." },
    ],
    services: ["website-development", "custom-software-development", "mobile-app-development"],
    faqs: [
      { q: "Can parents pay fees online?", a: "Yes. We integrate UPI, cards and net banking with automatic receipts and due-date reminders." },
      { q: "Do you build apps for coaching institutes?", a: "Yes, including batch schedules, study material, tests and doubt sessions." },
      { q: "Can we send SMS or WhatsApp updates to parents?", a: "Yes. Attendance alerts, fee reminders and circulars can go out automatically." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    tagline: "Appointment booking, patient records and clinic websites",
    metaTitle: "Healthcare Website & Clinic Software Development in Hyderabad",
    metaDescription:
      "Clinic and hospital websites, online appointment booking and patient management software for healthcare providers in Hyderabad.",
    h1: "Digital Solutions for Clinics, Hospitals & Diagnostic Centres",
    intro:
      "Patients look for doctors on Google and book on their phones. We help clinics, hospitals and diagnostic centres get found, take bookings online and manage patients more smoothly.",
    challenges: [
      "Front desks are busy with calls just to book appointments",
      "Patients miss appointments without reminders",
      "Reports and records are hard to share safely",
    ],
    solutions: [
      { title: "Clinic & hospital websites", description: "Doctor profiles, departments, timings and easy booking buttons." },
      { title: "Online appointments", description: "Slot booking with WhatsApp or SMS confirmations and reminders." },
      { title: "Patient management", description: "Patient records, prescriptions and billing in one secure system." },
      { title: "Local SEO", description: "Show up when people nearby search for your speciality on Google and Maps." },
    ],
    services: ["website-development", "custom-software-development", "digital-marketing"],
    faqs: [
      { q: "Is patient data kept private?", a: "Yes. We use secure logins, encrypted connections, access control and regular backups, and follow applicable Indian data protection rules." },
      { q: "Can patients download their lab reports online?", a: "Yes. We can build a secure portal where patients log in with OTP to view and download reports." },
      { q: "Can multiple doctors have separate schedules?", a: "Yes. Each doctor can have their own timings, leave days and slot lengths." },
    ],
  },
  {
    slug: "startups",
    name: "Startups",
    icon: Rocket,
    tagline: "MVPs, product design and launch support for new ventures",
    metaTitle: "MVP & Startup App Development Company in Hyderabad",
    metaDescription:
      "MVP development, product design and launch marketing for startups in Hyderabad. Turn your idea into a working product you can test with real users.",
    h1: "Turn Your Startup Idea into a Working Product",
    intro:
      "Early-stage founders need to move fast without wasting money. We help you shape the idea, design and build a focused first version, and launch it to real users, with honest advice along the way.",
    challenges: [
      "Unsure which features to build first",
      "Limited budget and time to prove the idea",
      "Need something solid to show users and investors",
    ],
    solutions: [
      { title: "Product discovery", description: "Short workshops to define your users, core problem and the smallest useful product." },
      { title: "Design & prototype", description: "Clickable prototypes to test with users before spending on development." },
      { title: "MVP development", description: "Web or mobile MVP built to launch quickly and grow later." },
      { title: "Launch & growth", description: "Landing page, analytics and early marketing to get your first users." },
    ],
    services: ["mobile-app-development", "branding-ui-ux-design", "cloud-devops"],
    faqs: [
      { q: "Can you sign an NDA before I share my idea?", a: "Yes. We are happy to sign an NDA before detailed discussions." },
      { q: "How do you keep MVP costs low?", a: "By building only the core features first, reusing proven components, and using managed cloud services." },
      { q: "Can you continue after the MVP?", a: "Yes. We can keep building with you, or help you hire and hand over to your own team." },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    tagline: "Online stores, inventory and billing for shops and D2C brands",
    metaTitle: "Retail & E-commerce Software Development in Hyderabad",
    metaDescription:
      "E-commerce stores, inventory and billing software for retailers and D2C brands in Hyderabad. Sell online and offline from one system.",
    h1: "Grow Your Retail Business Online and In-Store",
    intro:
      "Whether you run a shop, a chain of stores or a D2C brand, we help you sell online, keep stock in sync and understand what your customers buy.",
    challenges: [
      "Online and shop stock don't match",
      "Hard to compete with marketplaces on visibility",
      "Little data on repeat customers",
    ],
    solutions: [
      { title: "Online store", description: "Shopify, WooCommerce or custom stores with UPI, COD and shipping." },
      { title: "Inventory & billing", description: "One stock count across your shop, warehouse and website." },
      { title: "Loyalty & WhatsApp", description: "Bring customers back with offers, reminders and loyalty points." },
      { title: "Shopping ads & SEO", description: "Google Shopping, Meta ads and product SEO to drive sales." },
    ],
    services: ["ecommerce-development", "erp-crm-development", "digital-marketing"],
    faqs: [
      { q: "Can my shop billing and online store share stock?", a: "Yes. We connect your billing or POS with the store so stock updates in both places." },
      { q: "Can you list products on Amazon or Flipkart too?", a: "We can help connect your catalogue and inventory with marketplace seller tools where integrations are available." },
      { q: "Do you design product photos and banners?", a: "We design banners and creatives, and can coordinate product photography if needed." },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants & Hospitality",
    icon: UtensilsCrossed,
    tagline: "QR menus, online ordering and table bookings",
    metaTitle: "Restaurant Website & Ordering App Development in Hyderabad",
    metaDescription:
      "Restaurant websites, QR menus, direct online ordering and table booking systems for restaurants, cafés and cloud kitchens in Hyderabad.",
    h1: "Online Ordering & Digital Tools for Restaurants and Cafés",
    intro:
      "Aggregator commissions eat into margins. We help restaurants, cafés and cloud kitchens take direct orders, manage tables and stay in touch with regular guests.",
    challenges: [
      "High commissions on aggregator orders",
      "Printed menus are costly to update",
      "No direct way to reach regular customers",
    ],
    solutions: [
      { title: "Direct ordering website", description: "Your own ordering site and app with UPI payments, so you keep the margin." },
      { title: "QR menus & table ordering", description: "Guests scan, browse and order from the table; the kitchen sees it instantly." },
      { title: "Table reservations", description: "Online booking with WhatsApp confirmations for busy weekends." },
      { title: "Local promotion", description: "Google Business Profile, Instagram and offers to fill tables on slow days." },
    ],
    services: ["website-development", "mobile-app-development", "digital-marketing"],
    faqs: [
      { q: "Can direct orders reach our kitchen screen?", a: "Yes. Orders can print as KOTs or show on a kitchen display, depending on your setup." },
      { q: "Can you work with our existing POS?", a: "Many POS systems offer integrations. We check yours and connect where possible." },
      { q: "How do we get customers to order directly?", a: "With a simple ordering site, loyalty offers and WhatsApp updates for repeat customers." },
    ],
  },
  {
    slug: "fintech",
    name: "Fintech & Finance",
    icon: Landmark,
    tagline: "Secure apps, dashboards and payment flows for finance businesses",
    metaTitle: "Fintech App & Software Development in Hyderabad",
    metaDescription:
      "Fintech app development in Hyderabad. Secure loan, payment, investment and accounting apps for NBFCs, fintech startups and finance firms.",
    h1: "Secure Apps & Software for Finance Businesses",
    intro:
      "Finance customers expect speed and safety. We build loan, payment, investment and accounting apps for NBFCs, fintech startups and finance firms, with security and clear user journeys at the centre.",
    challenges: [
      "Long, paper-heavy onboarding",
      "Manual reconciliation of payments",
      "Customers want everything on their phone",
    ],
    solutions: [
      { title: "Digital onboarding", description: "Mobile onboarding with document upload and verification through approved providers." },
      { title: "Loan & payment apps", description: "Apply, track, pay EMIs and download statements in one app." },
      { title: "Dashboards & reports", description: "Live views of collections, disbursals and customer activity." },
      { title: "Payment integrations", description: "UPI, NACH and payment gateway integrations with automatic reconciliation." },
    ],
    services: ["mobile-app-development", "custom-software-development", "cloud-devops"],
    faqs: [
      { q: "How do you approach security?", a: "Secure coding practices, encryption, role-based access, audit logs and regular reviews. Formal compliance certifications depend on your own organisation's audits." },
      { q: "Can you integrate KYC providers?", a: "Yes. We integrate with licensed KYC and verification providers that you choose." },
      { q: "Do you build for NBFCs?", a: "Yes. We build lending and collection tools, working with your compliance team on regulatory requirements." },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
