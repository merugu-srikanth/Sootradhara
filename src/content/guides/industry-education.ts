import type { Guide } from "../types";
import type { Faq } from "@/lib/services";

export const guide: Guide = {
  title: "Digital transformation for schools, colleges and coaching centres",
  intro:
    "Digital tools can make life easier for administrators, teachers, students and parents alike, but only when they are chosen and introduced thoughtfully. This guide walks through the most valuable areas to digitise, how to roll them out and how to keep everyone on board.",
  sections: [
    {
      heading: "Start with the parent and student experience",
      paragraphs: [
        "Families judge an institution long before they visit. They read your website, check reviews, look for fee information and compare facilities. A clear, honest and mobile-friendly website with programme details, admission steps, faculty information and contact options sets the right first impression.",
        "Think about the questions parents ask your office most often, and make sure the answers are easy to find online.",
      ],
    },
    {
      heading: "Make admissions simple and trackable",
      paragraphs: [
        "Admission season brings a flood of enquiries through calls, walk-ins, website forms and social media. An admission CRM captures every enquiry in one place, assigns follow-ups and tracks each applicant's stage, from enquiry to campus visit, application, test and confirmed admission.",
        "Online application forms with document upload reduce paperwork and queues. Applicants can see their status, and your team sees a live view of the admission pipeline.",
      ],
      bullets: ["Single list of all admission enquiries", "Automatic follow-up reminders", "Online application and document upload", "Entrance test or interview scheduling", "Application status for parents", "Season-wise admission reports"],
    },
    {
      heading: "Digitise fee collection",
      paragraphs: [
        "Collecting fees in person takes significant office time and causes long queues on due dates. Online payments via UPI, cards and net banking let parents pay from home, with instant receipts and automatic reconciliation for your accounts team.",
        "Instalment plans, automated reminders before due dates and clear dashboards of pending fees reduce follow-up work and improve collections.",
      ],
    },
    {
      heading: "Improve everyday communication",
      paragraphs: [
        "Parents want timely information about attendance, homework, exams, events and holidays. Scattered WhatsApp groups and paper circulars are hard to manage and easy to miss.",
        "A parent app or portal centralises communication. Announcements reach the right classes or batches, attendance alerts go out automatically and parents can find past messages easily.",
      ],
    },
    {
      heading: "Support teachers, don't burden them",
      paragraphs: [
        "Teachers already have heavy workloads. Digital tools should save them time, not add tasks. Quick attendance marking on a phone, simple marks entry, auto-generated report cards and easy homework posting make a real difference.",
        "Involve teachers when choosing and designing tools, and provide short, practical training sessions.",
      ],
    },
    {
      heading: "Coaching centres have unique needs",
      paragraphs: [
        "Coaching institutes often manage multiple batches, flexible schedules, frequent tests and performance tracking. Batch management, test result analytics, study material sharing and doubt-clearing sessions are especially valuable.",
        "Many coaching centres also benefit from strong local SEO and admission campaigns targeting students in nearby areas and colleges.",
      ],
    },
    {
      heading: "Protect student data",
      paragraphs: [
        "Student and parent information is sensitive. Use secure logins, role-based access so staff see only what they need, encrypted connections and regular backups. Collect only the data you genuinely need, and handle it in line with Indian data protection rules.",
        "Be clear with parents about how their information is used and protected.",
      ],
    },
    {
      heading: "Roll out in phases",
      paragraphs: [
        "Introducing every tool at once can overwhelm staff and parents. Start with the area that causes the most pain, often admissions or fees, then add communication and academic tools in later phases.",
        "Time launches carefully, avoiding exam periods and peak admission days for major changes.",
      ],
    },
    {
      heading: "Marketing during admission season",
      paragraphs: [
        "Families search for options months before the academic year. Plan campaigns ahead: update programme pages, publish helpful content, optimise your Google Business Profile and run targeted ads for key courses in your area.",
        "Track enquiries by source and follow up consistently. A well-run admission CRM can noticeably improve conversion from enquiry to admission.",
      ],
    },
    {
      heading: "Measure impact and keep improving",
      paragraphs: [
        "Track simple indicators: time spent on fee collection, number of office queries, admission conversion rates, app usage by parents and staff feedback. Use these to refine tools and processes each term.",
        "With steady improvement, digital tools become a natural part of how your institution runs.",
      ],
    },
  ],
};

export const faqs: Faq[] = [
  { q: "Can parents access the app in regional languages?", a: "Yes. We can add language options so parents can use the app in the language they're most comfortable with." },
  { q: "Can we generate report cards automatically?", a: "Yes. Once marks are entered, report cards can be generated in your format and shared digitally." },
  { q: "Can students upload assignments?", a: "Yes. Students can upload assignments and teachers can review and grade them online." },
  { q: "Will the system work for both school and college?", a: "We configure the system for your structure, whether classes and sections, programmes and semesters, or batches." },
  { q: "How do you train our staff?", a: "We run short role-based sessions, provide simple guides and stay available for questions during the first term." },
];
