import type { Guide } from "../types";

const guide: Guide = {
  title: "Planning a mobile app: what business owners should know",
  intro:
    "Building an app is an exciting step, and also a significant investment of time and money. This guide covers the key decisions, from whether you need an app at all to what happens after launch, so you can plan wisely and avoid the most common surprises.",
  sections: [
    {
      heading: "Do you really need an app?",
      paragraphs: [
        "Apps make the most sense when customers or staff will use them often: weekly orders, regular bookings, daily field work, ongoing learning or frequent payments. For occasional visitors, a fast mobile website is usually a better and cheaper choice, because people won't install an app they use once.",
        "Ask yourself: what will users do in the app that they can't easily do today? How often will they open it? What will make them keep it on their phone? If the answers are clear, an app can become a powerful channel for your business.",
      ],
    },
    {
      heading: "Define the smallest useful first version",
      paragraphs: [
        "The most successful apps start focused. List every feature you can think of, then mark the ones that are essential for a user to get value on day one. Everything else can come later, based on real feedback.",
        "A focused first version launches sooner, costs less and teaches you what users actually want. It's much easier to add features to an app people love than to fix an app that tried to do too much.",
      ],
      bullets: ["Who is the main user?", "What is the one job they need done?", "What's the shortest path to do it?", "What must work offline?", "How will you measure success?", "What can safely wait for version two?"],
    },
    {
      heading: "Android, iOS or both?",
      paragraphs: [
        "In India, Android has the larger share of users, while iOS users are often concentrated in premium segments. Many businesses launch on both at the same time using cross-platform tools like Flutter or React Native, which share one codebase and keep costs manageable.",
        "If your audience is mostly in one group, starting there is reasonable. Discuss your customer profile with your development partner to make the right call.",
      ],
    },
    {
      heading: "Design for real phones and real networks",
      paragraphs: [
        "Your users may have mid-range phones with limited storage, older Android versions and patchy mobile data. Keep the app size small, load content efficiently, show clear loading states and handle network errors gracefully.",
        "Simple, familiar patterns work best: bottom navigation, large buttons, readable text and clear labels. Consider regional language support if your audience prefers it. Test with people who are not tech-savvy to find confusing steps.",
      ],
    },
    {
      heading: "Payments, logins and notifications",
      paragraphs: [
        "OTP-based login is the standard expectation for Indian users. For payments, UPI should be front and centre, with cards, net banking and wallets as options, all through a trusted payment gateway. Make receipts and payment history easy to find.",
        "Push notifications are valuable but easy to overuse. Send updates users care about, like order status, appointment reminders and genuinely useful offers. Too many messages lead to uninstalls.",
      ],
    },
    {
      heading: "Don't forget the admin side",
      paragraphs: [
        "Behind every app is a team that manages users, content, orders and support. A clear admin panel saves hours every day and prevents mistakes. Plan the admin experience with the same care as the customer app.",
        "Think about reports too. What numbers do you need to see each day or week? Building them in from the start is easier than adding them later.",
      ],
    },
    {
      heading: "Store launch and approval",
      paragraphs: [
        "Both Google Play and the Apple App Store review apps before publishing. You'll need developer accounts in your company's name, a privacy policy, clear descriptions, screenshots and correct data-safety information. Apple's review is generally stricter, so plan a little extra time.",
        "Ensure the apps are published under your own accounts. This keeps you in control of your product, reviews and users.",
      ],
    },
    {
      heading: "Costs beyond the first build",
      paragraphs: [
        "Apps have ongoing costs: cloud hosting, store developer accounts, third-party services like SMS or maps, and regular maintenance. New Android and iOS versions arrive every year and may require updates.",
        "Budget for improvements after launch too. Real users will suggest changes, find bugs and reveal new opportunities. The best apps improve steadily over time.",
      ],
    },
    {
      heading: "Measuring success after launch",
      paragraphs: [
        "Track installs, active users, retention (how many come back), key actions completed and crash rates. Read store reviews regularly and respond politely. Use this data to plan each next release.",
        "A good development partner will help you interpret this data and turn it into a practical improvement roadmap.",
      ],
    },
  ],
};

export default guide;
