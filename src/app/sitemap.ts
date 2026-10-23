import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

const lastModified = "2026-10-23";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/industries", 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.8)),
    page("/about", 0.7),
    page("/team", 0.6),
    page("/contact", 0.8),
    page("/insights", 0.6, "weekly"),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
