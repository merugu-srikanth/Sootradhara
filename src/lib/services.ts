import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Smartphone,
  Code2,
  ShoppingCart,
  Bot,
  Megaphone,
  Palette,
  LayoutDashboard,
  Cloud,
} from "lucide-react";

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Used in "Let's build your ___" */
  ctaNoun: string;
  /** One line for menus */
  tagline: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  card: { summary: string; features: string[]; tools: string };
  offerings: { title: string; description: string; points: string[] }[];
  whyUs: { title: string; description: string }[];
  tools: { name: string; use: string }[];
  deliverables: string[];
  faqs: Faq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    ctaNoun: "website",
    tagline: "Fast, mobile-friendly websites that bring in enquiries",
    icon: Globe,
    metaTitle: "Website Development Company in Hyderabad",
    metaDescription:
      "Website development in Hyderabad for startups and growing businesses. Fast, mobile-friendly, SEO-ready websites that turn visitors into enquiries.",
    h1: "Website Development in Hyderabad That Brings You Customers",
    intro:
      "Your website is often the first place a customer meets your business. We build fast, clean websites that explain what you do in plain words, look great on every phone, and make it easy for people to call, WhatsApp or fill a form.",
    card: {
      summary: "Business websites, landing pages and web portals that load fast and are easy to update.",
      features: ["Mobile-first design", "SEO-ready from day one", "Easy to edit content"],
      tools: "Next.js • React • WordPress",
    },
    offerings: [
      {
        title: "Business & company websites",
        description:
          "A professional home for your brand: services, about, gallery, contact and enquiry forms, built to rank on Google.",
        points: ["Clear page structure", "WhatsApp & call buttons", "Google Maps and enquiry forms"],
      },
      {
        title: "Landing pages for ads",
        description:
          "Focused single pages for your Google or Meta ad campaigns, designed to get the visitor to take one action.",
        points: ["Fast loading on mobile data", "Lead form connected to your email or CRM", "Easy A/B changes"],
      },
      {
        title: "Web portals & dashboards",
        description:
          "Login areas for customers, students, dealers or staff, such as booking systems, member areas and order tracking.",
        points: ["Secure logins", "Role-based access", "Connects with your existing tools"],
      },
    ],
    whyUs: [
      {
        title: "You can update it yourself",
        description: "We set up an admin panel so you can change text, photos and offers without calling a developer.",
      },
      {
        title: "Built for Google",
        description: "Proper titles, page speed and local SEO basics are part of the build, not an extra.",
      },
      {
        title: "Made for phones first",
        description: "Most of your visitors come from mobile. We design for small screens first, then scale up.",
      },
    ],
    tools: [
      { name: "Next.js & React", use: "Fast, modern websites and portals" },
      { name: "WordPress", use: "Simple sites you want to manage yourself" },
      { name: "Tailwind CSS", use: "Clean, consistent design" },
      { name: "Google Analytics & Search Console", use: "See where visitors come from" },
    ],
    deliverables: [
      "Design preview before development starts",
      "Responsive website on your own domain",
      "Basic on-page SEO and Google Search Console setup",
      "Admin access and a short walkthrough video",
      "Help with hosting, domain and business email",
    ],
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "A simple business website usually takes 2 to 4 weeks once we have your content. Larger sites and portals take longer. We share a clear timeline before we start.",
      },
      {
        q: "How much does a website cost?",
        a: "It depends on the number of pages and features. After a short call we send a written quote with a fixed scope, so there are no surprises.",
      },
      {
        q: "Will I be able to edit the website myself?",
        a: "Yes. We set up an easy admin panel and show you how to change text, images and offers.",
      },
      {
        q: "Do you help with domain, hosting and email?",
        a: "Yes. We can register your domain, set up hosting and business email, or work with what you already have.",
      },
    ],
    related: ["branding-ui-ux-design", "digital-marketing", "ecommerce-development"],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    ctaNoun: "mobile app",
    tagline: "Android and iOS apps your customers enjoy using",
    icon: Smartphone,
    metaTitle: "Mobile App Development Company in Hyderabad | Android & iOS",
    metaDescription:
      "Android and iOS app development in Hyderabad. We design, build and publish mobile apps for startups and businesses, from idea to Play Store and App Store.",
    h1: "Mobile App Development in Hyderabad for Android & iOS",
    intro:
      "Have an app idea, or need an app for your customers or staff? We help you plan the right features, design simple screens, build the app for Android and iOS, and publish it on the Play Store and App Store.",
    card: {
      summary: "Android and iOS apps for customers, staff and delivery teams, from first idea to store launch.",
      features: ["One codebase for Android & iOS", "Play Store & App Store launch", "Push notifications & payments"],
      tools: "Flutter • React Native • Firebase",
    },
    offerings: [
      {
        title: "Customer apps",
        description:
          "Booking, ordering, loyalty and service apps that keep your customers coming back.",
        points: ["Simple sign-up with OTP", "UPI and card payments", "Push notifications for offers"],
      },
      {
        title: "Staff & field apps",
        description:
          "Apps for sales teams, delivery staff and technicians to log visits, orders, photos and attendance.",
        points: ["Works on low network", "GPS check-in", "Syncs with your admin panel"],
      },
      {
        title: "MVPs for startups",
        description:
          "A focused first version of your product so you can test it with real users and show investors.",
        points: ["Feature planning workshop", "Clickable prototype first", "Built to grow later"],
      },
    ],
    whyUs: [
      {
        title: "Prototype before code",
        description: "You click through the app screens before we write code, so changes are cheap and quick.",
      },
      {
        title: "One team, both platforms",
        description: "We build for Android and iOS together, which saves time and keeps both apps in sync.",
      },
      {
        title: "We handle the store launch",
        description: "Store listings, screenshots and review guidelines are part of our work.",
      },
    ],
    tools: [
      { name: "Flutter & React Native", use: "One app for Android and iOS" },
      { name: "Swift & Kotlin", use: "When an app needs native features" },
      { name: "Firebase", use: "Login, notifications and real-time data" },
      { name: "Razorpay / UPI", use: "In-app payments" },
    ],
    deliverables: [
      "Feature list and clickable prototype",
      "Android and iOS apps",
      "Admin panel to manage users and content",
      "Play Store and App Store publishing",
      "Support for bug fixes after launch",
    ],
    faqs: [
      {
        q: "Should I build for Android or iOS first?",
        a: "In India most users are on Android, so many businesses start there. With Flutter or React Native we can usually launch both at the same time for little extra effort.",
      },
      {
        q: "How long does an app take?",
        a: "A focused first version usually takes 8 to 14 weeks depending on features. We agree on the scope and timeline before starting.",
      },
      {
        q: "Who owns the app and source code?",
        a: "You do. The app is published under your developer accounts, and the source code is handed over once the project is paid.",
      },
      {
        q: "Can you add payments to my app?",
        a: "Yes. We regularly integrate Razorpay, UPI, cards and wallets, along with invoices and refunds.",
      },
    ],
    related: ["branding-ui-ux-design", "custom-software-development", "cloud-devops"],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    ctaNoun: "software",
    tagline: "Software built around how your business actually works",
    icon: Code2,
    metaTitle: "Custom Software Development Company in Hyderabad",
    metaDescription:
      "Custom software development in Hyderabad. Billing, booking, inventory and internal tools built around your exact process, so your team works faster.",
    h1: "Custom Software Development Built Around Your Business",
    intro:
      "Off-the-shelf software often makes you change the way you work. We build software that fits your process instead: billing, bookings, inventory, approvals or anything your team now does in Excel and WhatsApp groups.",
    card: {
      summary: "Internal tools, billing, booking and inventory systems made for your exact process.",
      features: ["Replaces Excel & manual work", "Role-based logins for staff", "Reports you can download"],
      tools: "Node.js • Python • PostgreSQL",
    },
    offerings: [
      {
        title: "Internal business tools",
        description: "Simple web apps that replace spreadsheets for orders, approvals, tasks and stock.",
        points: ["Forms and approval flows", "Staff roles and permissions", "Excel and PDF exports"],
      },
      {
        title: "Customer & vendor portals",
        description: "Let customers, dealers or vendors place orders, track status and download invoices themselves.",
        points: ["Self-service logins", "Order and payment tracking", "Email and SMS updates"],
      },
      {
        title: "Integrations",
        description: "Connect the tools you already use, such as Tally, Zoho, Google Sheets and payment gateways, so data flows on its own.",
        points: ["No double entry", "Scheduled syncs", "Alerts when something fails"],
      },
    ],
    whyUs: [
      {
        title: "We learn your process first",
        description: "We sit with your team, understand the daily work, and only then design the software.",
      },
      {
        title: "Built in small steps",
        description: "You see working screens every week or two, not a big surprise at the end.",
      },
      {
        title: "Easy for your team",
        description: "Clean screens, simple words and short training so your staff actually use it.",
      },
    ],
    tools: [
      { name: "Node.js & Python", use: "Business logic and automation" },
      { name: "PostgreSQL & MySQL", use: "Reliable data storage" },
      { name: "React", use: "Easy-to-use screens" },
      { name: "REST APIs", use: "Connect with other tools" },
    ],
    deliverables: [
      "Process study and written scope",
      "Working software on the cloud",
      "Admin and staff logins",
      "Training session and user guide",
      "Source code and documentation",
    ],
    faqs: [
      {
        q: "Why choose custom software over a ready-made tool?",
        a: "Ready-made tools are great when your process is standard. If your team spends time on workarounds, extra sheets or manual copy-paste, custom software usually pays for itself.",
      },
      {
        q: "Can you connect it with Tally or our accounting tool?",
        a: "In most cases, yes. We check the integration options of your tool during the first discussion.",
      },
      {
        q: "Will my data be safe?",
        a: "We use secure logins, encrypted connections, regular backups and access control so each person sees only what they need.",
      },
      {
        q: "What happens after the software goes live?",
        a: "We fix bugs, help your team settle in, and can continue with a monthly support plan for changes and new features.",
      },
    ],
    related: ["erp-crm-development", "ai-tools-automation", "cloud-devops"],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    ctaNoun: "online store",
    tagline: "Online stores that make buying easy",
    icon: ShoppingCart,
    metaTitle: "E-commerce Website Development Company in Hyderabad",
    metaDescription:
      "E-commerce website development in Hyderabad. Shopify, WooCommerce and custom online stores with UPI payments, shipping and inventory built in.",
    h1: "E-commerce Website Development in Hyderabad",
    intro:
      "Sell online with a store that is quick to browse and simple to pay on. We set up your catalogue, payments, shipping and order management, so you can focus on your products and customers.",
    card: {
      summary: "Shopify, WooCommerce and custom online stores with payments and shipping set up.",
      features: ["UPI, cards & COD", "Shipping partner integration", "Inventory & order dashboard"],
      tools: "Shopify • WooCommerce • Next.js",
    },
    offerings: [
      {
        title: "Shopify & WooCommerce stores",
        description: "A quick, reliable way to start selling online, with a design that matches your brand.",
        points: ["Theme design and setup", "Product upload help", "Payment and shipping setup"],
      },
      {
        title: "Custom online stores",
        description: "For brands that need special pricing, B2B ordering, subscriptions or a unique buying experience.",
        points: ["Custom checkout flows", "Wholesale and dealer pricing", "Subscription orders"],
      },
      {
        title: "Store operations",
        description: "Keep stock, orders and returns under control as you grow.",
        points: ["Inventory sync across channels", "Invoice and GST reports", "Order and return tracking"],
      },
    ],
    whyUs: [
      {
        title: "Checkout made for Indian buyers",
        description: "UPI, COD, wallets and pincode checks, built the way Indian customers expect to shop.",
      },
      {
        title: "Ready for marketing",
        description: "Product SEO, Meta pixel and Google tags are set up, so your ads can track sales.",
      },
      {
        title: "You stay in control",
        description: "Simple dashboards to add products, run offers and see orders.",
      },
    ],
    tools: [
      { name: "Shopify", use: "Quick, managed online stores" },
      { name: "WooCommerce", use: "Flexible stores on WordPress" },
      { name: "Razorpay & Cashfree", use: "UPI, cards and wallets" },
      { name: "Shiprocket", use: "Shipping and delivery tracking" },
    ],
    deliverables: [
      "Store design matched to your brand",
      "Payment gateway and shipping setup",
      "Product listing structure and SEO basics",
      "Analytics, pixel and conversion tracking",
      "Training to manage orders and products",
    ],
    faqs: [
      {
        q: "Shopify or WooCommerce: which is right for me?",
        a: "Shopify is easier to run and great for most new stores. WooCommerce gives more control and lower monthly fees. We recommend one after understanding your products and budget.",
      },
      {
        q: "Can I accept UPI and Cash on Delivery?",
        a: "Yes. We set up UPI, cards, wallets and COD through gateways like Razorpay or Cashfree.",
      },
      {
        q: "Do you help with shipping?",
        a: "Yes. We connect shipping partners such as Shiprocket so labels, tracking and delivery updates are automatic.",
      },
      {
        q: "Can you also market my store?",
        a: "Yes. Our digital marketing team can run Google Shopping, Meta ads and SEO for your store.",
      },
    ],
    related: ["digital-marketing", "website-development", "branding-ui-ux-design"],
  },
  {
    slug: "ai-tools-automation",
    name: "AI Tools & Automation",
    ctaNoun: "AI tool",
    tagline: "Chatbots and automations that save your team hours",
    icon: Bot,
    metaTitle: "AI Tools & Business Automation Services in Hyderabad",
    metaDescription:
      "AI chatbots, WhatsApp automation and workflow automation for businesses in Hyderabad. Cut repetitive work and reply to customers faster.",
    h1: "AI Tools & Business Automation for Growing Teams",
    intro:
      "Many hours go into repeating the same tasks: answering common questions, copying data, sending reminders, making reports. We build AI assistants and automations that handle this work, so your team can focus on customers.",
    card: {
      summary: "AI chatbots, WhatsApp automation, auto reports and workflows that remove repetitive work.",
      features: ["AI chat on website & WhatsApp", "Automatic reports & reminders", "Document reading & data entry"],
      tools: "OpenAI • Claude • n8n",
    },
    offerings: [
      {
        title: "AI chat assistants",
        description: "A chatbot trained on your own services, prices and FAQs, which answers customers on your website or WhatsApp at any hour.",
        points: ["Answers in English, Hindi and Telugu", "Hands over to a human when needed", "Captures leads automatically"],
      },
      {
        title: "Workflow automation",
        description: "Connect your forms, sheets, CRM and email so routine steps happen on their own.",
        points: ["Lead follow-up reminders", "Auto invoices and receipts", "Daily summary reports"],
      },
      {
        title: "Document & data tools",
        description: "Use AI to read invoices, forms and PDFs and turn them into clean data in your system.",
        points: ["Less manual typing", "Fewer data entry errors", "Searchable records"],
      },
    ],
    whyUs: [
      {
        title: "Practical, not hype",
        description: "We start with one task that eats your team's time and automate that first.",
      },
      {
        title: "Your data stays yours",
        description: "We choose setups that keep customer data private and under your control.",
      },
      {
        title: "Measured results",
        description: "We track how much time or how many replies the tool handles, so you can see the value.",
      },
    ],
    tools: [
      { name: "OpenAI & Anthropic Claude", use: "Understanding and writing text" },
      { name: "WhatsApp Business API", use: "Automated customer chats" },
      { name: "n8n & Zapier", use: "Connecting your apps" },
      { name: "Python", use: "Custom automation scripts" },
    ],
    deliverables: [
      "List of tasks worth automating",
      "Working AI assistant or automation",
      "Admin view to review conversations and logs",
      "Team training and handover notes",
      "Monthly tuning (optional)",
    ],
    faqs: [
      {
        q: "Will the AI give wrong answers to my customers?",
        a: "We train the assistant only on your approved information, set clear limits, and route anything it is unsure about to your team.",
      },
      {
        q: "Can it work on WhatsApp?",
        a: "Yes. Using the official WhatsApp Business API, the assistant can reply, share brochures, book appointments and pass chats to staff.",
      },
      {
        q: "Do I need technical knowledge to use it?",
        a: "No. We set everything up and give you a simple dashboard to see conversations and change answers.",
      },
      {
        q: "What does it cost to run?",
        a: "There is a one-time setup cost and a small monthly usage cost for AI and WhatsApp messages. We estimate both before starting.",
      },
    ],
    related: ["custom-software-development", "erp-crm-development", "digital-marketing"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing & SEO",
    ctaNoun: "marketing plan",
    tagline: "SEO, ads and social media that bring real leads",
    icon: Megaphone,
    metaTitle: "Digital Marketing & SEO Company in Hyderabad",
    metaDescription:
      "Digital marketing agency in Hyderabad offering SEO, Google Ads, Meta ads and social media management focused on leads and sales, not just likes.",
    h1: "Digital Marketing & SEO Services in Hyderabad",
    intro:
      "A good website needs visitors. We help the right people find you on Google, Instagram and Facebook, and we report results in simple terms: calls, enquiries and sales.",
    card: {
      summary: "SEO, Google Ads, Meta ads and social media focused on enquiries and sales.",
      features: ["Local SEO & Google Business Profile", "Google & Meta ad campaigns", "Monthly reports in plain words"],
      tools: "Google Ads • Meta Ads • Search Console",
    },
    offerings: [
      {
        title: "SEO & local SEO",
        description: "Rank for the searches your customers make, like \"best ___ in Hyderabad\", and show up on Google Maps.",
        points: ["Keyword and competitor research", "On-page and technical fixes", "Google Business Profile care"],
      },
      {
        title: "Performance ads",
        description: "Google Search, Shopping and Meta ad campaigns built around leads and sales, with careful budget control.",
        points: ["Clear targeting and creatives", "Conversion tracking set up properly", "Weekly optimisation"],
      },
      {
        title: "Social media",
        description: "Consistent, on-brand posts and reels that build trust with your audience.",
        points: ["Monthly content calendar", "Post and reel design", "Community replies"],
      },
    ],
    whyUs: [
      {
        title: "Focus on leads, not likes",
        description: "We measure calls, forms and sales, the numbers that actually matter to your business.",
      },
      {
        title: "Website + marketing together",
        description: "Since we also build websites, we can fix landing pages that are losing you leads.",
      },
      {
        title: "Plain monthly reports",
        description: "A short report on what we did, what worked, and what we will try next.",
      },
    ],
    tools: [
      { name: "Google Ads & Meta Ads", use: "Paid campaigns" },
      { name: "Google Search Console & GA4", use: "Tracking traffic and leads" },
      { name: "Google Business Profile", use: "Local search and Maps" },
      { name: "Canva & Figma", use: "Ad and social creatives" },
    ],
    deliverables: [
      "Marketing audit and 90-day plan",
      "Campaign and content setup",
      "Conversion tracking on your website",
      "Monthly report and review call",
      "Ongoing optimisation",
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "SEO usually takes 3 to 6 months to show steady growth, depending on your competition. Ads can bring leads within days.",
      },
      {
        q: "What budget do I need for ads?",
        a: "It depends on your industry and goals. We suggest a starting budget after the audit and adjust it based on results.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No honest agency can guarantee rankings, because Google decides them. We guarantee clear work, honest reporting and steady improvement.",
      },
      {
        q: "Will I own the ad accounts and data?",
        a: "Yes. All ad accounts, pages and analytics are set up in your name, and we work on them with access you give us.",
      },
    ],
    related: ["website-development", "ecommerce-development", "branding-ui-ux-design"],
  },
  {
    slug: "branding-ui-ux-design",
    name: "Branding & UI/UX Design",
    ctaNoun: "brand",
    tagline: "Logos, brand identity and screens people love to use",
    icon: Palette,
    metaTitle: "Branding & UI/UX Design Agency in Hyderabad",
    metaDescription:
      "Branding and UI/UX design in Hyderabad. Logo and brand identity, website and app design, and clickable prototypes that make your business look trustworthy.",
    h1: "Branding & UI/UX Design That Makes You Look Trustworthy",
    intro:
      "People decide in seconds whether a business feels trustworthy. We design brand identities, websites and app screens that look professional, feel consistent, and are easy for your customers to use.",
    card: {
      summary: "Logo, brand identity, and website and app designs that are clear and easy to use.",
      features: ["Logo & brand guidelines", "Website & app screen design", "Clickable prototypes"],
      tools: "Figma • Illustrator • Canva",
    },
    offerings: [
      {
        title: "Brand identity",
        description: "Logo, colours, fonts and a simple brand guide so your business looks the same everywhere.",
        points: ["Logo concepts and refinements", "Colour and font system", "Visiting cards and social templates"],
      },
      {
        title: "UI/UX design",
        description: "Website and app screens designed around what your users need to do, in as few steps as possible.",
        points: ["User flows and wireframes", "High-quality screen designs", "Design files ready for developers"],
      },
      {
        title: "Prototypes & testing",
        description: "Clickable designs you can show to customers or investors before spending on development.",
        points: ["Interactive Figma prototypes", "Quick user feedback rounds", "Changes before code is written"],
      },
    ],
    whyUs: [
      {
        title: "Design that sells",
        description: "Every screen is designed to guide your customer to the next step: call, buy or sign up.",
      },
      {
        title: "Developer-ready files",
        description: "Our designs come with spacing, colours and components already organised for the build.",
      },
      {
        title: "Consistent everywhere",
        description: "Your website, app, social posts and print all look like one brand.",
      },
    ],
    tools: [
      { name: "Figma", use: "Screen design and prototypes" },
      { name: "Adobe Illustrator", use: "Logos and brand assets" },
      { name: "Canva templates", use: "Easy social posts for your team" },
      { name: "Maze / user calls", use: "Quick feedback from real users" },
    ],
    deliverables: [
      "Logo files in all formats",
      "Brand guide (colours, fonts, usage)",
      "Website or app screen designs",
      "Clickable prototype",
      "Social media and stationery templates",
    ],
    faqs: [
      {
        q: "How many logo options will I get?",
        a: "We usually share 2 to 3 logo directions, then refine your chosen one with a set number of revision rounds agreed in the quote.",
      },
      {
        q: "What is the difference between UI and UX?",
        a: "UX is how easy and logical something is to use. UI is how it looks. We take care of both together.",
      },
      {
        q: "Can you redesign my existing website or app?",
        a: "Yes. We review what is working and what is not, then redesign with your existing customers in mind.",
      },
      {
        q: "Will I get the source design files?",
        a: "Yes. You receive the Figma and logo source files once the project is complete.",
      },
    ],
    related: ["website-development", "mobile-app-development", "digital-marketing"],
  },
  {
    slug: "erp-crm-development",
    name: "ERP & CRM Development",
    ctaNoun: "ERP or CRM",
    tagline: "One system for sales, stock, accounts and teams",
    icon: LayoutDashboard,
    metaTitle: "Custom ERP & CRM Software Development in Hyderabad",
    metaDescription:
      "Custom ERP and CRM software development in Hyderabad. Manage leads, sales, inventory, billing and staff in one simple system built for your business.",
    h1: "Custom ERP & CRM Software for Growing Businesses",
    intro:
      "When leads sit in WhatsApp, stock in Excel and accounts in Tally, it is hard to see what is really happening. We build CRM and ERP systems that bring sales, stock, billing and teams into one place, designed for how your business works.",
    card: {
      summary: "Lead tracking, sales pipeline, inventory, billing and HR in one simple system.",
      features: ["Lead & follow-up tracking", "Inventory, billing & GST", "WhatsApp & email built in"],
      tools: "Node.js • PostgreSQL • React",
    },
    offerings: [
      {
        title: "CRM for sales teams",
        description: "Capture every lead from your website, ads and WhatsApp, and never miss a follow-up again.",
        points: ["Lead capture from all sources", "Follow-up reminders", "Sales pipeline and reports"],
      },
      {
        title: "ERP for operations",
        description: "Purchases, inventory, production, billing and dispatch connected in one system.",
        points: ["Multi-location stock", "GST-ready invoices", "Purchase and vendor tracking"],
      },
      {
        title: "HR & admin modules",
        description: "Attendance, leave, payroll inputs and staff tasks, all in the same system.",
        points: ["Attendance and leave", "Task assignment", "Role-based dashboards"],
      },
    ],
    whyUs: [
      {
        title: "Only the modules you need",
        description: "Start with what hurts most, such as leads or stock, and add modules as you grow.",
      },
      {
        title: "No per-user licence fees",
        description: "Unlike many SaaS tools, a custom system doesn't charge you more for each new team member.",
      },
      {
        title: "Your data, your control",
        description: "Hosted on your cloud account with backups, so the data always belongs to you.",
      },
    ],
    tools: [
      { name: "React & Next.js", use: "Simple dashboards for your team" },
      { name: "Node.js & PostgreSQL", use: "Reliable data and business rules" },
      { name: "WhatsApp Business API", use: "Lead chats and alerts" },
      { name: "Tally / Zoho integration", use: "Sync with your accounts" },
    ],
    deliverables: [
      "Process mapping and module plan",
      "Working CRM / ERP on the cloud",
      "Data migration from your sheets",
      "Staff training and user guide",
      "Ongoing support plan (optional)",
    ],
    faqs: [
      {
        q: "Why not just use Zoho or Salesforce?",
        a: "They are good tools. A custom system makes sense when your process is unusual, you have many users, or you are paying for features you never use.",
      },
      {
        q: "Can you move our data from Excel?",
        a: "Yes. We clean and import your existing customer, product and stock data during setup.",
      },
      {
        q: "Can our team use it on mobile?",
        a: "Yes. The system works in the phone browser, and we can build a mobile app for field staff if needed.",
      },
      {
        q: "How long does an ERP or CRM take?",
        a: "A focused CRM can go live in 6 to 10 weeks. A full ERP is built in phases, with the first module live early.",
      },
    ],
    related: ["custom-software-development", "ai-tools-automation", "cloud-devops"],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    ctaNoun: "cloud setup",
    tagline: "Reliable hosting, backups and smooth releases",
    icon: Cloud,
    metaTitle: "Cloud & DevOps Services in Hyderabad | AWS, Azure, GCP",
    metaDescription:
      "Cloud and DevOps services in Hyderabad. AWS, Azure and Google Cloud setup, migration, backups, monitoring and cost control for your apps and websites.",
    h1: "Cloud & DevOps Services to Keep Your Apps Running Smoothly",
    intro:
      "Slow sites, surprise cloud bills and nervous releases cost you customers. We set up and look after your cloud hosting, so your website and apps stay fast, safe and backed up, and new updates go out without drama.",
    card: {
      summary: "Cloud setup, migration, backups, monitoring and cost control on AWS, Azure or GCP.",
      features: ["Cloud setup & migration", "Automatic backups & monitoring", "Cloud bill reduction"],
      tools: "AWS • Azure • Google Cloud",
    },
    offerings: [
      {
        title: "Cloud setup & migration",
        description: "Move your website, apps and databases to the cloud, or from shared hosting to a proper setup.",
        points: ["Planned with minimal downtime", "Domain, SSL and email checks", "Security basics in place"],
      },
      {
        title: "Automated releases",
        description: "Set up a process where every update is tested and released the same safe way.",
        points: ["Staging site for testing", "One-click releases", "Easy rollback if something breaks"],
      },
      {
        title: "Monitoring & cost control",
        description: "Know when something goes wrong before your customers do, and stop paying for idle servers.",
        points: ["Uptime and error alerts", "Daily backups", "Monthly cost review"],
      },
    ],
    whyUs: [
      {
        title: "Explained simply",
        description: "We explain your setup and costs in plain language, so you always know what you are paying for.",
      },
      {
        title: "Right-sized, not oversized",
        description: "We pick the simplest setup that works well for your traffic today, and plan for growth.",
      },
      {
        title: "Your accounts, your access",
        description: "Everything runs in cloud accounts you own, with documented access.",
      },
    ],
    tools: [
      { name: "AWS, Azure & Google Cloud", use: "Hosting and storage" },
      { name: "Docker", use: "Apps that run the same everywhere" },
      { name: "GitHub Actions", use: "Automated testing and releases" },
      { name: "Cloudflare", use: "Speed and protection" },
    ],
    deliverables: [
      "Review of current hosting and costs",
      "Cloud setup or migration",
      "Backup and monitoring setup",
      "Release process with staging site",
      "Simple documentation of your setup",
    ],
    faqs: [
      {
        q: "Which cloud is best: AWS, Azure or Google Cloud?",
        a: "All three are reliable. We recommend one based on your app, team and budget. For many small businesses, a simpler host is enough.",
      },
      {
        q: "Will my website go down during migration?",
        a: "We plan migrations carefully and usually switch over during low-traffic hours, so any downtime is minimal.",
      },
      {
        q: "Can you reduce my cloud bill?",
        a: "Often, yes. We review unused servers, oversized machines and storage, and suggest savings.",
      },
      {
        q: "Do you offer ongoing maintenance?",
        a: "Yes. We offer monthly plans covering monitoring, updates, backups and small fixes.",
      },
    ],
    related: ["custom-software-development", "website-development", "erp-crm-development"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
