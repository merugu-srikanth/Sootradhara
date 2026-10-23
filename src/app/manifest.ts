import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Web app manifest: name, colours and icons for "Add to Home Screen". */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: "Website, app development and digital marketing company in Hyderabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14120F",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
