import React from "react";

/**
 * Brand signature: a fine gold thread (the "sootra") that weaves across the
 * page and ends in a small bead, echoing the thread in the logo.
 *
 * Renders as a normal block: give it a size with className
 * (e.g. "h-20 w-full"). The line stretches to fit; the bead stays round.
 */
export default function GoldThread({
  variant = "wave",
  className = "",
}: {
  variant?: "wave" | "divider";
  className?: string;
}) {
  const id = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");

  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
        <span className="h-px w-16 sm:w-24 bg-linear-to-r from-transparent to-gold" />
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="h-px w-16 sm:w-24 bg-linear-to-l from-transparent to-gold" />
      </div>
    );
  }

  return (
    <div className={`thread-reveal pointer-events-none relative ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id={`thread-${id}`} x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="0.2" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="0.65" stopColor="#E2C25A" />
            <stop offset="1" stopColor="#B8962E" />
          </linearGradient>
        </defs>
        <path
          d="M0 80 C 260 92, 470 96, 700 70 S 1040 6, 1210 30 S 1360 70, 1404 52"
          stroke={`url(#thread-${id})`}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
      </svg>
      {/* Bead at the end of the thread (outside the SVG so it stays round) */}
      <span className="absolute left-[97.5%] top-[52%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-4 ring-gold/20" />
    </div>
  );
}
