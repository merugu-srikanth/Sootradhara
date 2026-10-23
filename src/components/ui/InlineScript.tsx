"use client";

/**
 * Inline script that runs during HTML parsing (before first paint).
 * On the client it renders as text/plain so React doesn't warn or re-run it.
 */
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
