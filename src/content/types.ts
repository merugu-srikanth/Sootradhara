import type { Faq } from "@/lib/services";

export interface TitleText {
  title: string;
  text: string;
}

/** Which coded illustration to show for a page (see components/visuals) */
export type VisualKind =
  | "browser"
  | "phone"
  | "code"
  | "store"
  | "chat"
  | "chart"
  | "brand"
  | "dashboard"
  | "cloud";

/** Long-form content for a service page */
export interface ServiceDetail {
  visual: VisualKind;
  /** Short highlights shown under the hero */
  highlights: string[];
  overview: { heading: string; paragraphs: string[] };
  /** "Signs you need this" checklist */
  signs: string[];
  audiences: TitleText[];
  serviceTypes: (TitleText & { bestFor: string })[];
  features: TitleText[];
  benefits: TitleText[];
  process: (TitleText & { duration: string })[];
  options: { name: string; summary: string; includes: string[]; bestFor: string; timeline: string }[];
  costFactors: TitleText[];
  estimateTips: string[];
  mistakes: TitleText[];
  chooseGuide: TitleText[];
  local: { heading: string; paragraphs: string[] };
  /** Extra FAQs, shown after the core ones */
  moreFaqs: Faq[];
  /** Show the concept image gallery on this page */
  gallery?: { image: string; title: string; caption: string }[];
}

/** Long-form content for an industry page */
export interface IndustryDetail {
  visual: VisualKind;
  overview: { heading: string; paragraphs: string[] };
  landscape: { heading: string; paragraphs: string[] };
  challengesDetail: TitleText[];
  modules: (TitleText & { features: string[] })[];
  journey: TitleText[];
  integrations: TitleText[];
  considerations: TitleText[];
  outcomes: TitleText[];
  gettingStarted: TitleText[];
  moreFaqs: Faq[];
}

/** Long-form, article-style guide shown on service and industry pages */
export interface Guide {
  title: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}
