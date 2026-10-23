import type { IndustryDetail } from "../types";

const content: IndustryDetail = {
  visual: "phone",
  overview: {
    heading: "Help patients find you, book easily and feel cared for",
    paragraphs: [
      "When people need a doctor, they usually search on Google, check reviews and timings, and want to book an appointment quickly, often on their phone. If they can't find clear information or have to call repeatedly to get through, many simply choose another clinic.",
      "For clinics, hospitals, diagnostic centres and wellness providers, good digital tools reduce front-desk pressure and improve the patient experience at the same time. Online booking cuts down on phone calls. Automated reminders reduce no-shows. Digital reports save printing and collection visits. And a clear, trustworthy website helps patients understand your specialities and doctors before they arrive.",
      "We build these tools with care for privacy and simplicity, designing for patients of all ages and staff who are already very busy.",
    ],
  },
  landscape: {
    heading: "Healthcare in Hyderabad: a major medical hub",
    paragraphs: [
      "Hyderabad is one of India's leading healthcare destinations, with large multi-speciality hospitals, a growing number of specialist clinics, diagnostic chains and wellness centres across areas like Banjara Hills, Jubilee Hills, Somajiguda, Gachibowli, Kondapur, Secunderabad and Kukatpally. Patients also travel from across Telangana and Andhra Pradesh for treatment.",
      "With so many options, patients rely heavily on online information, Google reviews and ease of booking. Clinics that make the experience smooth, from search to follow-up, earn trust and loyalty.",
    ],
  },
  challengesDetail: [
    { title: "Busy phone lines", text: "Front desks spend much of the day answering calls just to book or reschedule appointments." },
    { title: "Missed appointments", text: "Without reminders, patients forget appointments, leaving gaps in doctors' schedules." },
    { title: "Hard-to-find information", text: "Patients struggle to find doctor timings, specialities, fees and directions online." },
    { title: "Paper-based records", text: "Manual files make it slow to find patient history and easy to misplace important documents." },
    { title: "Report collection", text: "Patients travel back just to collect lab reports that could be shared securely online." },
    { title: "Low visibility on Google", text: "Many clinics don't appear in local searches because their Google Business Profile and website are incomplete." },
  ],
  modules: [
    { title: "Clinic & hospital website", text: "A trustworthy, easy-to-navigate website for patients and families.", features: ["Doctor profiles & specialities", "Timings, fees & directions", "Treatments & services pages", "Online booking buttons", "Patient education content"] },
    { title: "Online appointment booking", text: "Patients choose a doctor, date and slot online in under a minute.", features: ["Doctor-wise schedules", "Slot booking & rescheduling", "WhatsApp/SMS confirmations", "Automated reminders", "Walk-in and online queue view"] },
    { title: "Patient management", text: "Secure digital records for consultations, prescriptions and billing.", features: ["Patient registration", "Visit history & notes", "Digital prescriptions", "Billing & receipts", "Role-based access"] },
    { title: "Report portal", text: "Patients log in with OTP to view and download their reports securely.", features: ["OTP-based patient login", "Report upload by lab staff", "Download & share options", "Notification when ready", "Report history"] },
    { title: "Patient app", text: "Bookings, reports, reminders and follow-ups in one app for regular patients.", features: ["Appointment booking", "Medication & follow-up reminders", "Report access", "Family member profiles", "Teleconsultation links"] },
    { title: "Local healthcare marketing", text: "Help nearby patients find your speciality on Google and Maps.", features: ["Google Business Profile optimisation", "Speciality & location pages", "Genuine review strategy", "Search ads for key treatments", "Monthly reports"] },
  ],
  journey: [
    { title: "Search", text: "A patient searches for a specialist nearby and finds your clinic on Google Maps with good information." },
    { title: "Learn", text: "They read about the doctor, check timings and fees on your website." },
    { title: "Book", text: "They book a slot online and receive a WhatsApp confirmation with directions." },
    { title: "Visit", text: "A reminder arrives the day before. At the clinic, registration is quick because details are already captured." },
    { title: "Follow-up", text: "Reports are available online, and the patient receives follow-up reminders when needed." },
  ],
  integrations: [
    { title: "WhatsApp & SMS", text: "Booking confirmations, reminders and report-ready notifications." },
    { title: "Payment gateways", text: "Online consultation fees and bill payments through UPI and cards." },
    { title: "Lab systems", text: "Report uploads from lab software where integration is possible." },
    { title: "Video consultation tools", text: "Secure video links for teleconsultations." },
    { title: "Accounting software", text: "Billing data synced with your accounts system." },
  ],
  considerations: [
    { title: "Patient privacy", text: "Health information is sensitive. We use secure logins, encryption, access control and careful data handling in line with applicable Indian regulations." },
    { title: "Medical content accuracy", text: "Treatment information on your website should be reviewed by your doctors. We avoid exaggerated claims or guarantees." },
    { title: "Advertising rules", text: "Medical advertising has professional and platform guidelines. Campaigns should be informative and compliant." },
    { title: "Accessibility", text: "Large text, clear contrast and simple steps help elderly patients and families use your tools." },
  ],
  outcomes: [
    { title: "Fewer phone calls", text: "Online booking frees your front desk for patients in the clinic." },
    { title: "Fewer no-shows", text: "Automatic reminders help patients keep their appointments." },
    { title: "Faster report delivery", text: "Secure online reports save patients extra trips." },
    { title: "Better local visibility", text: "A strong online presence helps nearby patients find and trust you." },
  ],
  gettingStarted: [
    { title: "Consultation", text: "We understand your clinic, specialities, patient flow and current tools." },
    { title: "Priorities", text: "We identify the quickest wins, often booking, reminders and local SEO." },
    { title: "Build & launch", text: "We set up the website and tools, train staff and launch smoothly." },
    { title: "Ongoing support", text: "We help with updates, new doctors, new services and improvements." },
  ],
  moreFaqs: [
    { q: "Can patients reschedule appointments themselves?", a: "Yes. Patients can reschedule or cancel online within the rules you set." },
    { q: "Can we offer teleconsultations?", a: "Yes. We can add video consultation links with online payment and digital prescriptions." },
    { q: "Do you build systems for diagnostic centres?", a: "Yes, including test booking, home sample collection scheduling and online report delivery." },
    { q: "Can multiple branches use one system?", a: "Yes. Doctors, schedules and reports can be managed across branches." },
    { q: "Will our website mention treatment outcomes?", a: "We focus on clear, accurate, informative content reviewed by your doctors, without exaggerated claims." },
  ],
};

export default content;
