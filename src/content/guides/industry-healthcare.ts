import type { Guide } from "../types";
import type { Faq } from "@/lib/services";

export const guide: Guide = {
  title: "Digital tools for clinics and hospitals: a practical guide",
  intro:
    "Healthcare providers want to spend their time caring for patients, not managing phone queues and paperwork. This guide explains how websites, online booking, patient records and local marketing can work together to improve both patient experience and clinic efficiency.",
  sections: [
    {
      heading: "Your online presence is your new front desk",
      paragraphs: [
        "Patients often make decisions based on what they find online: doctor qualifications, specialities, timings, location, reviews and how easy it is to book. An accurate, well-organised website and Google Business Profile act as your first point of contact.",
        "Make sure essential information is visible within seconds: specialities, doctors, timings, address with directions, phone and booking options.",
      ],
    },
    {
      heading: "Write clear, trustworthy medical content",
      paragraphs: [
        "Patients appreciate clear explanations of conditions, treatments and what to expect during a visit. Content should be written simply, reviewed by your doctors and free from exaggerated claims or guaranteed outcomes.",
        "Doctor profiles with qualifications, experience areas and languages spoken help patients choose with confidence.",
      ],
      bullets: ["Speciality and treatment pages", "Doctor profiles and qualifications", "What to expect at your visit", "Preparation instructions for tests", "Insurance and payment information", "Clear contact and directions"],
    },
    {
      heading: "Online booking reduces phone pressure",
      paragraphs: [
        "Online appointment booking lets patients choose a doctor, date and time without calling. Each doctor's availability, slot length and breaks are configured once, and bookings appear instantly for the front desk.",
        "Patients receive confirmations and reminders on WhatsApp or SMS, which reduces no-shows and frees staff to focus on patients in the clinic.",
      ],
    },
    {
      heading: "Manage patient flow on the day",
      paragraphs: [
        "A digital queue that combines booked and walk-in patients helps manage waiting times. Pre-registration details captured during booking speed up check-in.",
        "Some clinics share live queue updates with patients, so they can arrive closer to their turn.",
      ],
    },
    {
      heading: "Digital patient records",
      paragraphs: [
        "Electronic records make patient history, prescriptions and reports available instantly to authorised staff. Templates for common consultations save doctors time, and digital prescriptions are clearer for patients and pharmacies.",
        "Access must be carefully controlled, with each role seeing only what it needs, and every access logged for accountability.",
      ],
    },
    {
      heading: "Secure online reports",
      paragraphs: [
        "Diagnostic centres and clinics can upload reports to a secure portal where patients log in with OTP to view and download them. Patients are notified when reports are ready, saving them an extra trip.",
        "Doctors can also access reports quickly, improving follow-up consultations.",
      ],
    },
    {
      heading: "Privacy and data protection",
      paragraphs: [
        "Health information is highly sensitive. Systems should use encryption, strong authentication, role-based access, audit logs and regular backups. Collect only necessary information, obtain consent where required and follow applicable Indian regulations.",
        "Choose hosting and partners who take security seriously, and keep your team trained on safe practices.",
      ],
    },
    {
      heading: "Local SEO and reputation",
      paragraphs: [
        "Patients usually search close to home: 'paediatrician near Kondapur' or 'diagnostic centre in Kukatpally'. A complete Google Business Profile, location-specific pages and genuine patient reviews help you appear in these searches.",
        "Respond professionally to all reviews without sharing patient details. A thoughtful response to criticism often builds more trust than many five-star reviews.",
      ],
    },
    {
      heading: "Responsible healthcare marketing",
      paragraphs: [
        "Healthcare marketing should inform and reassure, not overpromise. Focus campaigns on services, availability and expertise. Follow professional guidelines and advertising platform policies for medical content.",
        "Track bookings and calls from campaigns to understand which services and channels bring patients.",
      ],
    },
    {
      heading: "Introduce change gently",
      paragraphs: [
        "Clinics are busy places. Introduce new tools gradually, starting with the highest-impact improvements like booking and reminders. Train staff with short sessions and provide quick support during the first weeks.",
        "Collect feedback from both staff and patients and adjust. Small refinements make a big difference to adoption.",
      ],
    },
  ],
};

export const faqs: Faq[] = [
  { q: "Can patients book for family members?", a: "Yes. Patients can add family members to their profile and book appointments for them." },
  { q: "Can doctors set different slot lengths?", a: "Yes. Each doctor's slot length, breaks, leave days and maximum bookings can be configured individually." },
  { q: "Do you integrate with lab equipment software?", a: "Where lab software supports exports or APIs, we can automate report uploads. Otherwise, staff can upload reports in a few clicks." },
  { q: "Can we collect consultation fees online?", a: "Yes. Patients can pay booking or consultation fees online through UPI, cards or wallets." },
  { q: "Is WhatsApp safe for sending health information?", a: "We use WhatsApp for reminders and notifications, and keep detailed medical information inside the secure portal accessed by login." },
];
