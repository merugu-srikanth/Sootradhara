import type { Guide } from "../types";
import type { Faq } from "@/lib/services";

export const guide: Guide = {
  title: "Building digital products for finance businesses: a guide",
  intro:
    "Finance businesses face high expectations from customers and regulators alike. This guide covers how to plan digital onboarding, payments, collections and dashboards with security and clarity at the centre, while working effectively with your compliance team.",
  sections: [
    {
      heading: "Start with trust",
      paragraphs: [
        "Every screen in a finance product either builds or erodes trust. Clear explanations of fees, interest and terms, transparent progress during applications and responsive support all matter as much as features.",
        "Design for clarity first. Customers should always know what's happening, what's needed from them and what comes next.",
      ],
    },
    {
      heading: "Digital onboarding that customers complete",
      paragraphs: [
        "Long, confusing application forms lead to drop-offs. Break onboarding into short steps, save progress automatically, explain why each document is needed and show clear progress indicators.",
        "Integrate verification through licensed providers you select, and provide an assisted mode where staff can help customers complete applications in branches or in the field.",
      ],
      bullets: ["Short, step-by-step forms", "Auto-save and resume later", "Clear document requirements", "Verification through approved providers", "Assisted onboarding option", "Transparent status updates"],
    },
    {
      heading: "Payments and repayments made simple",
      paragraphs: [
        "UPI, payment links, auto-debit mandates and cards give customers flexible ways to pay. Instant receipts and up-to-date balances reduce confusion and support calls.",
        "Automatic reconciliation matches payments to accounts, reducing manual work and errors for your operations team.",
      ],
    },
    {
      heading: "Equipping field collection teams",
      paragraphs: [
        "Field agents need simple, reliable tools: daily visit lists, customer details, payment recording, digital receipts and the ability to work offline in areas with weak connectivity.",
        "GPS check-ins and real-time sync give managers visibility and improve accountability, while reducing paperwork.",
      ],
    },
    {
      heading: "Dashboards for informed decisions",
      paragraphs: [
        "Management needs a clear, current view of disbursals, collections, overdue accounts and branch performance. Well-designed dashboards replace manual spreadsheets and end-of-day calls.",
        "Role-based access ensures each manager sees the right level of detail.",
      ],
    },
    {
      heading: "Security by design",
      paragraphs: [
        "Security should be built in from the first design, not added later. This includes encryption in transit and at rest, strong authentication, least-privilege access, detailed audit logs, secure coding practices and regular reviews.",
        "Hosting, backups and incident response plans should be documented and tested.",
      ],
    },
    {
      heading: "Working with compliance",
      paragraphs: [
        "Finance products operate within regulatory frameworks that vary by product and licence. Involve your compliance and legal teams from the beginning to define requirements for disclosures, consent, data handling and reporting.",
        "Your development partner builds to these requirements; your organisation remains responsible for regulatory approvals, audits and certifications.",
      ],
    },
    {
      heading: "Data protection and consent",
      paragraphs: [
        "Collect only the data you need, explain why you need it and obtain clear consent. Store personal and financial data securely, restrict access and define retention periods in line with Indian data protection law and your regulatory obligations.",
        "Give customers easy ways to view and update their information.",
      ],
    },
    {
      heading: "Customer self-service reduces costs",
      paragraphs: [
        "A self-service portal or app where customers check balances, download statements, update details and raise requests significantly reduces call volumes. Add helpful FAQs and chat support for common questions.",
        "Track the most common requests and keep simplifying those journeys.",
      ],
    },
    {
      heading: "Launch carefully, improve continuously",
      paragraphs: [
        "Start with a pilot group, monitor closely and fix issues before wider rollout. Track completion rates, drop-off points, support requests and operational efficiency.",
        "Regular, careful improvements keep the product secure, compliant and easy to use as your business grows.",
      ],
    },
  ],
};

export const faqs: Faq[] = [
  { q: "Can you build for microfinance and field-based lending?", a: "Yes, including group lending flows, field collection apps and offline support." },
  { q: "Do you support multilingual apps?", a: "Yes. Finance apps can offer regional language options to make terms and steps clearer for customers." },
  { q: "Can customers download statements and certificates?", a: "Yes. Statements, receipts and interest certificates can be generated and downloaded securely." },
  { q: "How do you handle audit requirements?", a: "We build audit logs and reports to your specifications, and support your teams during audits with technical documentation." },
  { q: "Can you work with our existing core banking or LMS?", a: "Where your system provides APIs or exports, we can integrate apps and dashboards with it." },
];
