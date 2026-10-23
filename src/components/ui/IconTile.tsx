import React from "react";
import type { LucideIcon } from "lucide-react";

const sizes = {
  sm: { box: "w-9 h-9", icon: "w-4 h-4" },
  md: { box: "w-12 h-12", icon: "w-5 h-5" },
  lg: { box: "w-14 h-14", icon: "w-6 h-6" },
};

/** Ivory circle with a thin gold-stroke icon. Gold stays an accent. */
export default function IconTile({
  icon: Icon,
  size = "md",
  className = "",
}: {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <span
      className={`${s.box} inline-flex shrink-0 items-center justify-center rounded-full bg-ivory border border-gold/40 text-gold-ink transition-colors group-hover:border-gold ${className}`}
    >
      <Icon className={s.icon} strokeWidth={1.4} aria-hidden="true" />
    </span>
  );
}
