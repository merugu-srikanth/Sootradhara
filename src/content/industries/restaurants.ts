import type { IndustryDetail } from "../types";

const content: IndustryDetail = {
  visual: "phone",
  overview: {
    heading: "More direct orders, fuller tables and loyal regulars",
    paragraphs: [
      "Restaurants, cafés and cloud kitchens work on tight margins, and every order that comes through an aggregator with a high commission reduces what you keep. At the same time, aggregators own the customer relationship, so it's hard to build loyalty or reach your regulars directly.",
      "Digital tools can rebalance this. Your own ordering website or app lets customers order directly, with UPI payment and delivery or pickup. QR menus and table ordering speed up service and make menu updates instant. Table reservations fill your busiest nights in an organised way. And customer data lets you reward regulars and invite them back on slower days.",
      "We build practical, easy-to-run tools for restaurant owners and teams, designed for fast service, busy kitchens and customers who want to order in a few taps.",
    ],
  },
  landscape: {
    heading: "Dining out in Hyderabad: a food city that loves to order",
    paragraphs: [
      "Hyderabad is famous for its food, from legendary biryani houses and Irani cafés to modern cafés in Jubilee Hills, family restaurants in Kukatpally and Dilsukhnagar, and countless cloud kitchens across Gachibowli, Madhapur and Kondapur. Food delivery and dining out are part of everyday life here.",
      "With such strong competition, restaurants need to be easy to find on Google Maps, quick to order from and memorable enough to bring customers back. A direct digital channel helps you do all three.",
    ],
  },
  challengesDetail: [
    { title: "High aggregator commissions", text: "A large share of revenue goes to delivery platforms, reducing margins on every order." },
    { title: "No direct customer relationship", text: "Aggregators keep customer data, making it hard to build loyalty." },
    { title: "Printed menus are costly to update", text: "Price changes and new dishes mean reprinting menus again and again." },
    { title: "Slow table service at peak hours", text: "Waiting for staff to take orders frustrates guests on busy evenings." },
    { title: "Unmanaged reservations", text: "Phone bookings in a notebook lead to double bookings and no-shows." },
    { title: "Low visibility on Google Maps", text: "Incomplete listings, few photos and unanswered reviews hurt discovery." },
  ],
  modules: [
    { title: "Direct ordering website & app", text: "Your own branded ordering channel with no per-order commission to a platform.", features: ["Menu with photos & variants", "UPI & card payments", "Delivery & pickup options", "Order tracking", "Offers and coupons"] },
    { title: "QR menu & table ordering", text: "Guests scan, browse and order from the table.", features: ["Digital menu by QR code", "Instant menu updates", "Table-wise orders", "Kitchen notifications", "Pay at table"] },
    { title: "Kitchen order display", text: "Orders flow directly to the kitchen, reducing mistakes.", features: ["Kitchen screen or KOT print", "Order status updates", "Preparation timers", "Station-wise views", "Order history"] },
    { title: "Table reservations", text: "Online booking that keeps busy nights organised.", features: ["Online reservation form", "WhatsApp confirmations", "Reminders", "Table management", "Special requests"] },
    { title: "Loyalty & CRM", text: "Reward regulars and bring guests back on slow days.", features: ["Customer profiles", "Points & rewards", "Birthday offers", "WhatsApp campaigns", "Repeat order reports"] },
    { title: "Local restaurant marketing", text: "Get discovered by hungry customers nearby.", features: ["Google Business Profile care", "Photo & menu updates", "Review responses", "Instagram content", "Local ads"] },
  ],
  journey: [
    { title: "Discover", text: "A customer finds your restaurant on Google Maps with great photos and reviews." },
    { title: "Order or reserve", text: "They order directly from your website or reserve a table online." },
    { title: "Enjoy", text: "Dine-in guests order from the QR menu; delivery customers get updates on WhatsApp." },
    { title: "Pay", text: "Payment by UPI or card is quick, online or at the table." },
    { title: "Return", text: "Loyalty points and personalised offers invite them back." },
  ],
  integrations: [
    { title: "POS systems", text: "Connections with your restaurant POS where integrations are available." },
    { title: "Payment gateways", text: "UPI, cards and wallets for online and table payments." },
    { title: "Delivery partners", text: "Third-party delivery services for your direct orders, where available." },
    { title: "WhatsApp Business API", text: "Order updates, reservation confirmations and offers." },
    { title: "Accounting", text: "Daily sales synced with your accounts system." },
  ],
  considerations: [
    { title: "Speed during rush hours", text: "Ordering and kitchen tools must stay fast and simple when the restaurant is full." },
    { title: "Accurate menus and prices", text: "Menus, prices, taxes and allergen information should always be up to date." },
    { title: "Food safety information", text: "Display licences and hygiene information as required, accurately." },
    { title: "Customer data care", text: "Contact details collected for loyalty must be stored securely and used respectfully." },
  ],
  outcomes: [
    { title: "Better margins on direct orders", text: "Orders through your own channel avoid platform commissions." },
    { title: "Faster table service", text: "QR ordering reduces waiting and frees staff for hospitality." },
    { title: "Organised reservations", text: "Online bookings reduce double bookings and no-shows." },
    { title: "More regulars", text: "Loyalty and direct communication build repeat business." },
  ],
  gettingStarted: [
    { title: "Visit & consultation", text: "We visit your restaurant to understand service, kitchen and ordering flow." },
    { title: "Pick the first tool", text: "Often a direct ordering site or QR menu, depending on your biggest need." },
    { title: "Launch", text: "We set up, train staff and launch during a quieter period." },
    { title: "Grow", text: "We add loyalty, reservations and marketing as you see results." },
  ],
  moreFaqs: [
    { q: "Will customers really order directly instead of through apps?", a: "Many regulars will, especially with an easy ordering experience and loyalty rewards for ordering direct." },
    { q: "Can I change menu prices anytime?", a: "Yes. Digital menus update instantly across QR menus and your ordering site." },
    { q: "Do you support cloud kitchens with multiple brands?", a: "Yes. We can set up multiple brands with separate menus while sharing one kitchen system." },
    { q: "Can orders print as KOTs?", a: "Yes. Orders can print as kitchen order tickets or show on a kitchen screen." },
    { q: "Do you help with Google reviews?", a: "We help you ask happy guests for genuine reviews and respond professionally to all feedback." },
  ],
};

export default content;
