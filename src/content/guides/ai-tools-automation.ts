import type { Guide } from "../types";

const guide: Guide = {
  title: "Using AI and automation in a small business: where to start",
  intro:
    "AI is everywhere in the news, but many business owners are unsure how it can help them in practice. This guide cuts through the hype and explains, in plain words, where AI and automation can save real time and how to adopt them safely.",
  sections: [
    {
      heading: "Automation and AI are not the same thing",
      paragraphs: [
        "Automation follows fixed rules: when a form is submitted, add a row to a sheet and send an email. It's predictable and reliable. AI handles tasks that need understanding: reading a customer's question and finding the right answer, or extracting details from a messy invoice.",
        "Most useful solutions combine both. AI understands the input, and automation moves the result to the right place. Knowing the difference helps you choose the right tool for each task.",
      ],
    },
    {
      heading: "Find tasks worth automating",
      paragraphs: [
        "Good candidates are tasks that happen often, follow a similar pattern each time, take noticeable time and don't need deep human judgement. Spend a week noting repetitive work in your team, and estimate how much time each task takes.",
        "Start with the task that has the best mix of high frequency, clear rules and low risk if something goes wrong.",
      ],
      bullets: ["Answering common customer questions", "Sending reminders and follow-ups", "Copying form data into sheets or CRM", "Reading invoices and bills", "Preparing daily summary reports", "Booking appointments and visits"],
    },
    {
      heading: "AI assistants for customer questions",
      paragraphs: [
        "An AI assistant trained on your FAQs, service details and policies can answer many customer questions instantly on your website or WhatsApp. It can also collect contact details, ask qualifying questions and book appointments.",
        "The key is preparation. The assistant should only use information you approve, know when to say 'let me connect you with our team', and never invent prices or promises. With good setup and review, it becomes a reliable first point of contact.",
      ],
    },
    {
      heading: "WhatsApp automation done right",
      paragraphs: [
        "For many Indian businesses, WhatsApp is the main customer channel. The official WhatsApp Business API allows automated replies, catalogues, payment links, reminders and handover to staff, while following WhatsApp's rules on messaging and consent.",
        "Use automation to make conversations faster and more helpful, not to spam. Send messages customers expect, and always make it easy to reach a real person.",
      ],
    },
    {
      heading: "Document and data automation",
      paragraphs: [
        "Accounts and operations teams often spend hours typing data from invoices, purchase orders, delivery notes and forms. AI document tools can read these files, extract the key fields and send them for review or directly into your system.",
        "A human check step is wise at first. As accuracy is proven, you can reduce manual review for routine documents.",
      ],
    },
    {
      heading: "Protecting your data and customers",
      paragraphs: [
        "Customer data must be handled carefully. Choose providers with clear data policies, limit what information is shared with AI services, restrict access within your team and follow India's data protection requirements.",
        "Be transparent with customers when they're chatting with an automated assistant, and give them an easy path to a person.",
      ],
    },
    {
      heading: "Measuring the impact",
      paragraphs: [
        "Before launching, record how long the task takes today and how often it happens. After launch, track conversations handled, time saved, response times and errors. These numbers show whether the automation is worth expanding.",
        "Review results monthly and keep improving. AI assistants especially get better as you refine their knowledge and instructions.",
      ],
    },
    {
      heading: "Growing step by step",
      paragraphs: [
        "Once your first automation proves its value, move to the next task on your list. Over time, small automations add up to significant time savings and a more responsive business.",
        "Avoid trying to automate everything at once. Steady, measured progress is safer and more effective than a big, risky project.",
      ],
    },
  ],
};

export default guide;
