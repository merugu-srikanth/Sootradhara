import type { Metadata, Viewport } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import { MotionProvider } from "@/components/ui/Reveal";
import { site, socialLinks } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const defaultDescription =
  "Website development, mobile apps, custom software, AI automation and digital marketing company in Hyderabad, helping startups and growing businesses across India.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Website, App Development & Digital Marketing Company in Hyderabad | Sootradhara",
    template: "%s | Sootradhara",
  },
  description: defaultDescription,
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.legalName,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const sameAs = socialLinks.map(([, href]) => href);

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/sootradhara-logo.png`,
    image: `${site.url}/sootradhara-logo.png`,
    description: defaultDescription,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    address: {
      "@type": "PostalAddress",
      ...(site.address.street ? { streetAddress: site.address.street } : {}),
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "Country", name: "India" },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${cormorant.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink">
        <Preloader />
        <JsonLd data={businessJsonLd} />
        <MotionProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </MotionProvider>
        <WhatsAppButton />
        <CustomCursor />
      </body>
    </html>
  );
}
