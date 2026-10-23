import type { IndustryDetail } from "../types";

const content: IndustryDetail = {
  visual: "dashboard",
  overview: {
    heading: "Less paperwork for staff, better experience for students and parents",
    paragraphs: [
      "Schools, colleges and coaching institutes handle an enormous amount of communication and administration: admission enquiries, applications, document verification, fee collection, attendance, timetables, exam results, circulars and countless parent questions. When most of this runs on paper registers, phone calls and scattered WhatsApp groups, staff are overloaded and parents feel out of the loop.",
      "Digital tools make a visible difference. A clear website helps families understand your institution and apply online. Admission and fee portals reduce queues at the office. Student and parent apps share attendance, homework and results instantly. Automated reminders cut down on missed fee deadlines and repetitive calls.",
      "We build these tools for schools, junior colleges, degree and engineering colleges, coaching centres and training institutes. We focus on simplicity, so staff of every age can use the system comfortably and parents can find what they need on their phones without confusion.",
    ],
  },
  landscape: {
    heading: "Education in Hyderabad: high expectations from families",
    paragraphs: [
      "Hyderabad has a vast education ecosystem, from established schools and colleges across Secunderabad, Banjara Hills and Begumpet to the coaching hubs of Ameerpet, Dilsukhnagar and Kukatpally, and new international schools along the western corridor. Parents here compare institutions carefully, often online, before visiting.",
      "Families increasingly expect online applications, digital fee payment, quick communication and transparent updates on their child's progress. Institutions that offer this smoothly stand out, especially during competitive admission seasons.",
    ],
  },
  challengesDetail: [
    { title: "Admission enquiries are hard to track", text: "Calls, walk-ins, website forms and social media messages arrive during admission season, and many are never followed up properly." },
    { title: "Fee collection takes office time", text: "Collecting fees in person, issuing receipts and chasing pending payments consumes hours of staff time." },
    { title: "Parent communication is scattered", text: "Circulars on paper, messages in many WhatsApp groups and phone calls make it hard for parents to stay informed." },
    { title: "Manual attendance and records", text: "Paper registers and spreadsheets make reports slow and errors common." },
    { title: "Outdated websites", text: "Many institution websites have old information, broken links and no clear way to apply or enquire." },
    { title: "Exam and result management", text: "Preparing marks, report cards and certificates manually is slow and stressful for staff." },
  ],
  modules: [
    { title: "Institution website", text: "A clear, modern website that presents your programmes, facilities and achievements honestly.", features: ["Courses and programme pages", "Faculty and facilities", "Admissions information", "News, events & gallery", "Online enquiry forms"] },
    { title: "Admission portal", text: "Online applications from enquiry to confirmed admission, with fewer queues and less paperwork.", features: ["Online application forms", "Document upload & verification", "Application status tracking", "Entrance test scheduling", "Admission CRM for follow-ups"] },
    { title: "Fee management", text: "Digital fee collection with automatic receipts and reminders.", features: ["UPI, card & net banking payments", "Instalment plans", "Automatic receipts", "Due-date reminders", "Pending fee reports"] },
    { title: "Student & parent app", text: "Everything parents and students need, on their phones.", features: ["Attendance updates", "Homework & assignments", "Results & report cards", "Timetables & calendars", "Circulars & announcements"] },
    { title: "Academic management", text: "Tools for teachers and administrators to manage daily academic work.", features: ["Digital attendance", "Marks entry & report cards", "Class & batch management", "Teacher timetables", "Certificates & ID cards"] },
    { title: "Admission marketing", text: "Campaigns that reach the right students and parents during admission season.", features: ["Local SEO & Google Maps", "Google & Meta admission ads", "Landing pages per course", "Lead tracking", "Season reports"] },
  ],
  journey: [
    { title: "Search", text: "A parent searches for schools or courses nearby and finds your clear, mobile-friendly website." },
    { title: "Enquiry", text: "They submit an enquiry or chat on WhatsApp, and your admission team is notified instantly." },
    { title: "Application", text: "The parent applies online, uploads documents and pays the application fee by UPI." },
    { title: "Admission", text: "Status updates keep them informed until admission is confirmed and fees are paid online." },
    { title: "Everyday engagement", text: "Through the app, parents follow attendance, homework, results and announcements all year." },
  ],
  integrations: [
    { title: "Payment gateways", text: "UPI, cards and net banking for application and tuition fees, with automatic reconciliation." },
    { title: "SMS & WhatsApp", text: "Attendance alerts, fee reminders and circulars sent automatically." },
    { title: "Biometric devices", text: "Attendance data from biometric or RFID devices where supported." },
    { title: "Accounting software", text: "Fee collections synced with Tally or your accounting system." },
    { title: "Video & LMS tools", text: "Links with Google Classroom, Zoom or learning platforms used by your teachers." },
  ],
  considerations: [
    { title: "Student data privacy", text: "Student and parent information must be stored securely, with access restricted by role, and handled in line with Indian data protection rules." },
    { title: "Simplicity for all users", text: "Staff and parents have varied comfort with technology. Simple screens and clear language are essential." },
    { title: "Peak-season performance", text: "Admission and result days bring heavy traffic. Systems must stay fast under load." },
    { title: "Accurate public information", text: "Fees, affiliations, results and facilities shown online should be accurate and regularly updated." },
  ],
  outcomes: [
    { title: "Fewer queues at the office", text: "Online applications and fee payments reduce in-person visits." },
    { title: "Better-informed parents", text: "Timely updates on one app replace scattered messages and calls." },
    { title: "More admissions followed up", text: "An admission CRM ensures every enquiry gets a timely response." },
    { title: "Less admin work for staff", text: "Automated receipts, reminders and reports save hours every week." },
  ],
  gettingStarted: [
    { title: "Consultation", text: "We discuss your institution, current processes and priorities." },
    { title: "Process review", text: "We look at admission, fee and communication workflows to find the biggest wins." },
    { title: "Phased rollout", text: "We often start with the website and admission or fee portal, then add apps and academic tools." },
    { title: "Training & support", text: "We train staff and stay available during the first admission or term cycle." },
  ],
  moreFaqs: [
    { q: "Can parents pay fees in instalments online?", a: "Yes. We can set up instalment plans with automatic reminders and receipts." },
    { q: "Do you build apps for coaching centres?", a: "Yes, including batch schedules, study material, tests, results and doubt sessions." },
    { q: "Can teachers use it without much training?", a: "We design simple screens and provide short training sessions and guides for staff." },
    { q: "Can it handle multiple branches?", a: "Yes. Systems can be designed for multiple campuses with central reports." },
    { q: "Do you run admission campaigns?", a: "Yes. Our marketing team runs SEO and ad campaigns targeted to students and parents in your area." },
  ],
};

export default content;
