import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Allowed next/image qualities (90 keeps the showcase mockups crisp)
  images: { qualities: [75, 90] },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Old URLs -> new keyword URLs (permanent redirects keep any SEO value)
  async redirects() {
    return [
      { source: "/services/website", destination: "/services/website-development", permanent: true },
      { source: "/services/mobile-app", destination: "/services/mobile-app-development", permanent: true },
      { source: "/services/crm", destination: "/services/erp-crm-development", permanent: true },
      { source: "/services/erp", destination: "/services/erp-crm-development", permanent: true },
      { source: "/services/custom-design", destination: "/services/branding-ui-ux-design", permanent: true },
      { source: "/services/tools", destination: "/services/ai-tools-automation", permanent: true },
      { source: "/solutions/ecommerce", destination: "/services/ecommerce-development", permanent: true },
      { source: "/solutions/fintech", destination: "/industries/fintech", permanent: true },
      { source: "/solutions/enterprise-verticals", destination: "/industries/education", permanent: true },
      { source: "/solutions", destination: "/industries", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
