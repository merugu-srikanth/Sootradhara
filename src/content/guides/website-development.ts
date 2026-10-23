import type { Guide } from "../types";

const guide: Guide = {
  title: "Building a business website in Hyderabad: a practical guide",
  intro:
    "If you're planning a new website or wondering whether your current one is holding you back, this guide walks you through the decisions that matter most. It's written for business owners, not developers, so you can make confident choices and ask the right questions of any web team, including ours.",
  sections: [
    {
      heading: "Start with the job your website must do",
      paragraphs: [
        "Before thinking about colours or layouts, decide what success looks like. For a clinic, it might be more appointment bookings. For a builder, it might be site-visit enquiries. For a consultant, it might be discovery calls. For a shop, it might be WhatsApp orders or store visits. Write down the one or two actions you most want visitors to take.",
        "This single decision shapes everything else: which pages you need, what goes at the top of each page, where buttons appear and what your forms ask. A website that tries to do everything usually does nothing well. A website built around a clear goal quietly does its job every day.",
      ],
    },
    {
      heading: "Know who you're talking to",
      paragraphs: [
        "Think about your typical customer. Are they young professionals in Gachibowli searching on their phones during a lunch break? Parents comparing schools in the evening? Business owners researching suppliers on a laptop at work? Their age, device, language comfort and level of urgency should influence your design and content.",
        "Most Indian businesses find that the majority of their visitors arrive on mobile phones, often on mobile data. That's why we design for small screens first and keep pages light. A beautiful desktop design that loads slowly on a phone is a missed opportunity.",
      ],
    },
    {
      heading: "Plan your pages before anything else",
      paragraphs: [
        "A typical small business website needs a home page, an about page, one page per main service, a contact page and possibly a gallery, FAQs and a blog. Having a separate page for each service is important for Google, because each page can rank for the specific searches related to that service.",
        "If you serve several areas of the city or several cities, consider location pages that explain how you serve each area. These should contain genuinely useful local information, not the same text with a different place name.",
      ],
      bullets: ["Home: what you do and why choose you", "About: your story, team and values", "Service pages: one per main service", "Contact: map, phone, WhatsApp and form", "FAQs: answers to common questions", "Blog or guides: helpful articles over time"],
    },
    {
      heading: "Content is the real foundation",
      paragraphs: [
        "Content delays more website projects than design or development. Gather your logo, business details, service descriptions, photos of your work, team or premises, and any certificates or memberships you genuinely hold. Real photos almost always build more trust than stock images.",
        "Write in the way your customers speak. Avoid jargon and vague phrases like 'world-class solutions'. Instead, explain clearly what you offer, who it's for, how it works, roughly how long it takes and how to get started. If writing isn't your strength, a web partner can turn your notes into clear copy.",
      ],
    },
    {
      heading: "Choosing a platform: WordPress, Next.js or something else",
      paragraphs: [
        "WordPress powers a huge share of the web and is a good fit when you want to manage lots of content yourself and need a cost-effective build. It has many themes and plugins, but it needs regular updates and care to stay fast and secure.",
        "Modern frameworks like Next.js produce very fast, secure websites and are a strong choice for growing businesses, web apps and portals. Content can still be edited through a headless CMS. Website builders like Wix or Squarespace can work for very simple needs, but offer less flexibility as you grow. The right choice depends on your goals, budget and who will maintain the site.",
      ],
    },
    {
      heading: "SEO basics every website should have",
      paragraphs: [
        "Search engine optimisation starts with the build. Each page needs a clear title and description, one main heading, logical subheadings, descriptive image names and alt text, clean URLs and internal links between related pages. Your site should load quickly, work well on mobile and use HTTPS.",
        "For local businesses, consistency matters. Your business name, address and phone number should be the same on your website, Google Business Profile and directories. Embedding a Google Map, adding local business structured data and earning genuine reviews all help you appear in nearby searches.",
      ],
    },
    {
      heading: "Make it easy to contact you",
      paragraphs: [
        "In India, many customers prefer to call or WhatsApp rather than fill a form. Add click-to-call and WhatsApp buttons, especially on mobile, and keep forms short. Ask only what you truly need to respond, such as name, phone number and a short message.",
        "Make sure every enquiry reaches the right person quickly. Forms can send emails, add rows to a Google Sheet or create leads in a CRM. A fast, friendly reply often matters more than anything on the website itself.",
      ],
    },
    {
      heading: "Budgeting and timelines",
      paragraphs: [
        "Website costs vary widely because projects vary widely. The biggest factors are the number of pages, custom design versus templates, content writing, features like bookings or payments, and ongoing maintenance. A clear written scope protects both you and your web partner.",
        "Plan for a few weeks for a simple site and longer for larger sites or portals. The fastest projects are those where content is ready, decisions are made quickly and one person on your side gives consolidated feedback.",
      ],
    },
    {
      heading: "After launch: keep it alive",
      paragraphs: [
        "A website is not a one-time project. Update your services, prices, photos and team as they change. Add helpful articles that answer customer questions. Check your analytics to see which pages bring enquiries and improve the ones that don't.",
        "Keep software, plugins and backups up to date, and renew your domain and hosting on time. With a little regular care, your website becomes more valuable every year.",
      ],
    },
  ],
};

export default guide;
