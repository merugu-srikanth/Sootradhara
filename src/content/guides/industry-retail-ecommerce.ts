import type { Guide } from "../types";
import type { Faq } from "@/lib/services";

export const guide: Guide = {
  title: "Omnichannel retail: connecting your shop, website and customers",
  intro:
    "Customers don't think in channels. They see your product on Instagram, check it on your website, visit your store and order on WhatsApp, often for the same purchase. This guide explains how retailers and D2C brands can connect these touchpoints to sell more and serve customers better.",
  sections: [
    {
      heading: "Start with one view of your stock",
      paragraphs: [
        "The foundation of omnichannel retail is accurate inventory. When your shop, warehouse, website and marketplaces share stock information, you avoid overselling, cancellations and disappointed customers.",
        "Use barcodes or SKUs consistently, record transfers between locations and reconcile stock regularly. A connected inventory system makes this far easier than spreadsheets.",
      ],
    },
    {
      heading: "Build an online store that reflects your brand",
      paragraphs: [
        "Your online store should feel like an extension of your shop: the same quality, personality and service. Use real product photos, accurate descriptions and clear size guides, and highlight what makes your products special.",
        "Make shopping easy on mobile, with quick search, useful filters and a fast checkout with UPI and COD options.",
      ],
      bullets: ["Consistent branding across shop and site", "High-quality product photography", "Accurate stock and delivery estimates", "UPI, cards, wallets and COD", "Clear return and exchange policy", "Store pickup for local customers"],
    },
    {
      heading: "Use WhatsApp as a sales channel",
      paragraphs: [
        "Many Indian shoppers prefer to chat before buying. WhatsApp catalogues, quick replies, payment links and order updates turn conversations into sales while keeping the personal touch.",
        "Use the official WhatsApp Business API for automation at scale, and always respect customer preferences about promotional messages.",
      ],
    },
    {
      heading: "Know your customers",
      paragraphs: [
        "A simple CRM that records purchases across channels helps you understand who your customers are, what they buy and how often. This allows personalised recommendations, timely reminders and offers that feel relevant rather than random.",
        "Collect contact details with clear consent, and use them respectfully.",
      ],
    },
    {
      heading: "Loyalty that works online and offline",
      paragraphs: [
        "Loyalty points, member pricing, birthday offers and early access to sales encourage repeat purchases. The programme should work the same way whether a customer buys in your shop or online.",
        "Keep it simple. Customers should understand how they earn and use rewards in seconds.",
      ],
    },
    {
      heading: "Marketplaces: friend and competitor",
      paragraphs: [
        "Marketplaces offer huge reach, but commissions are significant and you have limited access to customer relationships. Many brands use marketplaces for discovery while building their own store for repeat customers and higher margins.",
        "Keep pricing and stock consistent, and use packaging inserts or follow-up to invite marketplace buyers to your own channels where platform rules allow.",
      ],
    },
    {
      heading: "Marketing that drives both clicks and footfall",
      paragraphs: [
        "Google Shopping and Search ads capture buyers looking for specific products. Instagram and Facebook ads build desire and reach new audiences. Local SEO and Google Business Profile updates bring nearby customers into your store.",
        "Festive seasons are critical in Indian retail. Plan campaigns, stock and staffing well ahead.",
      ],
    },
    {
      heading: "Operations that scale",
      paragraphs: [
        "As orders grow, efficient picking, packing and dispatch become essential. Shipping integrations automate labels and tracking. Clear processes for returns and exchanges keep customers happy and costs under control.",
        "Review delivery partner performance regularly and choose the right partner for each region.",
      ],
    },
    {
      heading: "Use data to decide",
      paragraphs: [
        "Dashboards that show sales by product, store, channel and time period help you decide what to reorder, discount or discontinue. Track repeat purchase rate, average order value and return rates.",
        "Make small, informed changes regularly instead of big guesses once a year.",
      ],
    },
    {
      heading: "Grow step by step",
      paragraphs: [
        "You don't need every tool at once. Start with an online store and accurate inventory, then add WhatsApp commerce, loyalty and advanced analytics as you grow.",
        "Each step should solve a clear problem and pay for itself through more sales or less effort.",
      ],
    },
  ],
};

export const faqs: Faq[] = [
  { q: "Can customers pick up online orders from my shop?", a: "Yes. Store pickup can be added as a delivery option, with notifications when the order is ready." },
  { q: "Can I sell to wholesale buyers on the same store?", a: "Yes. We can set up separate pricing, minimum quantities and login access for B2B buyers." },
  { q: "How do I manage stock for multiple shops?", a: "A multi-location inventory system tracks stock per shop and warehouse, with transfers and alerts." },
  { q: "Can you help with festive sale preparation?", a: "Yes. We plan campaigns, offers, site performance and operations ahead of major sale periods." },
  { q: "Do I need a separate app for my store?", a: "Many brands start with a fast mobile website. An app makes sense when you have many repeat customers." },
];
