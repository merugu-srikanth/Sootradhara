import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  /** "dark" = dark letters for light backgrounds, "light" = white letters for dark backgrounds */
  tone?: "dark" | "light";
  withLink?: boolean;
  priority?: boolean;
}

export default function Logo({ className = "", tone = "dark", withLink = true, priority = false }: LogoProps) {
  const img = (
    <Image
      src={tone === "dark" ? "/sootradhara-logo-dark.png" : "/sootradhara-logo-light.png"}
      alt="Sootradhara Ventures Pvt Ltd"
      width={640}
      height={193}
      priority={priority}
      className={`h-10 sm:h-11 w-auto ${className}`}
    />
  );

  if (!withLink) return img;
  return (
    <Link href="/" aria-label="Sootradhara Ventures Pvt Ltd, home" className="inline-flex items-center">
      {img}
    </Link>
  );
}
