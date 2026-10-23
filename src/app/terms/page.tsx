import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site, addressLine, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using the ${site.legalName} website and engaging our services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" href="/terms" updated="23 October 2026">
      <p>
        These terms apply to your use of this website, operated by {site.legalName}. By using the website you agree to
        these terms. Specific projects are governed by a separate written proposal or agreement, which takes priority over
        these terms.
      </p>

      <h2>Use of this website</h2>
      <ul>
        <li>Content on this website is for general information and may change without notice.</li>
        <li>You agree not to misuse the website or try to access it in unauthorised ways.</li>
      </ul>

      <h2>Quotes and projects</h2>
      <p>
        Any prices, timelines or scope we share are estimates until confirmed in a signed proposal or agreement. Payment
        terms, deliverables, ownership of work and support terms are set out in that document.
      </p>

      <h2>Concept and sample work</h2>
      <p>
        Designs marked &ldquo;Concept&rdquo; or &ldquo;Sample Work&rdquo; on this website were made by our team to show our
        skills. They are not client projects unless clearly stated.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Sootradhara name, logo and website content belong to {site.legalName}. Please do not copy or reuse them without
        permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We work to keep this website accurate and available, but we do not guarantee it will always be error-free or
        uninterrupted. To the extent permitted by law, we are not liable for losses arising from use of this website.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts in Hyderabad, Telangana will have jurisdiction over any
        disputes.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Contact {site.legalName}, {addressLine()}, India. Email:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
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
