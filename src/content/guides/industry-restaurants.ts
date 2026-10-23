import type { Guide } from "../types";
import type { Faq } from "@/lib/services";

export const guide: Guide = {
  title: "Growing a restaurant with direct orders and digital tools",
  intro:
    "Running a restaurant is demanding, and technology should make it easier, not more complicated. This guide explains how restaurants, cafés and cloud kitchens can build direct ordering, speed up service, fill tables and turn first-time guests into regulars.",
  sections: [
    {
      heading: "Why direct ordering matters",
      paragraphs: [
        "Delivery aggregators bring visibility and convenience, but commissions on every order can significantly reduce margins. They also keep customer data, making it hard to build direct relationships.",
        "A direct ordering channel, through your own website or app, lets you keep more of each order and communicate with customers directly. Many restaurants use aggregators for discovery and direct ordering for loyal customers.",
      ],
    },
    {
      heading: "Build an ordering experience people prefer",
      paragraphs: [
        "Direct ordering only works if it's as easy as using an aggregator. Your menu should load quickly, show appetising photos, make customisation simple and support UPI and card payments. Delivery and pickup options should be clear.",
        "Reward direct orders with small benefits, such as loyalty points, exclusive combos or free add-ons, so customers have a reason to order directly.",
      ],
      bullets: ["Fast, photo-rich menu", "Simple customisation and add-ons", "UPI and card payments", "Delivery and pickup options", "Order tracking updates", "Rewards for ordering direct"],
    },
    {
      heading: "QR menus and table ordering",
      paragraphs: [
        "QR menus let guests browse your full menu on their phones and see updated prices instantly. With table ordering, they can place orders directly, which reduces waiting during busy hours and frees staff to focus on hospitality.",
        "Orders go straight to the kitchen screen or printer, reducing mistakes from handwritten notes.",
      ],
    },
    {
      heading: "A smoother kitchen",
      paragraphs: [
        "Kitchen display systems show orders clearly by station and time, with preparation status updates. This improves coordination between front-of-house and kitchen, especially during peak hours.",
        "Combining dine-in, takeaway and delivery orders in one queue helps the kitchen prioritise effectively.",
      ],
    },
    {
      heading: "Reservations without the notebook",
      paragraphs: [
        "Online reservations let guests book tables at their convenience, with instant confirmation and reminders. Your team sees all bookings in one view, manages table allocation and records special requests like birthdays or seating preferences.",
        "This reduces double bookings and no-shows, and helps you prepare for busy evenings.",
      ],
    },
    {
      heading: "Build loyalty with your regulars",
      paragraphs: [
        "Regular guests are the heart of a successful restaurant. A simple loyalty programme, birthday offers and occasional messages about new dishes or events keep them coming back.",
        "Use customer data respectfully, with consent, and avoid sending too many promotional messages.",
      ],
    },
    {
      heading: "Be easy to find on Google Maps",
      paragraphs: [
        "Many diners search for 'restaurants near me' or specific cuisines nearby. A complete Google Business Profile with accurate hours, menu, photos and genuine reviews helps you appear and look appealing.",
        "Update photos regularly, post about specials and respond to reviews professionally.",
      ],
    },
    {
      heading: "Social media that makes people hungry",
      paragraphs: [
        "Instagram is where many diners discover new places. Short videos of dishes being prepared, behind-the-scenes moments, chef stories and guest experiences often perform well.",
        "Combine organic content with local ads to reach people in your delivery area or neighbourhood.",
      ],
    },
    {
      heading: "Keep menus and information accurate",
      paragraphs: [
        "Prices, taxes, availability and allergen information should always be correct across your website, QR menus and listings. Digital menus make updates instant everywhere.",
        "Display required licences and hygiene information clearly and accurately.",
      ],
    },
    {
      heading: "Start small and grow",
      paragraphs: [
        "Choose one tool that solves your biggest problem first, whether that's direct ordering, QR menus or reservations. Train your team, measure results and then add the next tool.",
        "Technology should feel invisible to guests and simple for staff. That's when it delivers the most value.",
      ],
    },
  ],
};

export const faqs: Faq[] = [
  { q: "Can QR menus show items as unavailable?", a: "Yes. Staff can mark dishes as sold out instantly, and the menu updates for all guests." },
  { q: "Can guests split the bill?", a: "Yes. Table ordering systems can support splitting bills and paying separately by UPI or card." },
  { q: "Can we run happy-hour or time-based offers?", a: "Yes. Offers can be scheduled by day and time and shown automatically on the menu." },
  { q: "Do you design restaurant websites with menus?", a: "Yes. We build websites with menus, photos, location, reservations and direct ordering." },
  { q: "Can we collect feedback after a visit?", a: "Yes. Short feedback requests can be sent after dining or delivery, helping you improve and gather reviews." },
];
