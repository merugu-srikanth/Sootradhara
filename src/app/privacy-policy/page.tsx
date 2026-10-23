import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site, addressLine, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" href="/privacy-policy" updated="23 October 2026">
      <p>
        {site.legalName} (&ldquo;Sootradhara&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what
        information we collect through {site.url.replace("https://", "")}, how we use it, and the choices you have. We
        handle personal data in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Details you share with us, such as your name, email, phone or WhatsApp number, company name and project details.</li>
        <li>Basic usage data, such as pages visited, device type and approximate location, collected through analytics tools.</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To reply to your enquiry and prepare quotes or proposals.</li>
        <li>To deliver and support services you engage us for.</li>
        <li>To improve our website and understand which content is useful.</li>
        <li>To send updates you have agreed to receive. You can opt out at any time.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We share it only with service providers who help us run our business
        (such as email, hosting and analytics providers), when required by law, or with your consent.
      </p>

      <h2>Data security and retention</h2>
      <p>
        We use reasonable technical and organisational measures to protect your information. We keep it only as long as
        needed for the purposes above or as required by law.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete your personal information, or withdraw consent, by emailing{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        We may use cookies and similar technologies for analytics and to improve your experience. You can control cookies
        through your browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        For any questions or requests about this policy or your personal data, contact {site.legalName}, {addressLine()},
        India. Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.phone && (
          <>
            {" "}· Phone: <a href={telHref(site.phone)}>{site.phone}</a>
          </>
        )}{" "}
        · Website: <a href={site.url}>{site.url.replace(/^https?:\/\//, "")}</a>
      </p>
    </LegalPage>
  );
}
