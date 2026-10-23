import type { Guide } from "../types";
import type { Faq } from "@/lib/services";
import websiteDevelopment from "./website-development";
import mobileAppDevelopment from "./mobile-app-development";
import customSoftwareDevelopment from "./custom-software-development";
import ecommerceDevelopment from "./ecommerce-development";
import aiToolsAutomation from "./ai-tools-automation";
import digitalMarketing from "./digital-marketing";
import brandingUiUxDesign from "./branding-ui-ux-design";
import erpCrmDevelopment from "./erp-crm-development";
import cloudDevops from "./cloud-devops";
import * as realEstate from "./industry-real-estate";
import * as education from "./industry-education";
import * as healthcare from "./industry-healthcare";
import * as startups from "./industry-startups";
import * as retailEcommerce from "./industry-retail-ecommerce";
import * as restaurants from "./industry-restaurants";
import * as fintech from "./industry-fintech";
import { guideExtraSections } from "../guide-extra";

const withExtra = (key: string, g: Guide): Guide => ({ ...g, sections: [...g.sections, ...(guideExtraSections[key] ?? [])] });

export const serviceGuides: Record<string, Guide> = {
  "website-development": websiteDevelopment,
  "mobile-app-development": mobileAppDevelopment,
  "custom-software-development": customSoftwareDevelopment,
  "ecommerce-development": ecommerceDevelopment,
  "ai-tools-automation": aiToolsAutomation,
  "digital-marketing": digitalMarketing,
  "branding-ui-ux-design": brandingUiUxDesign,
  "erp-crm-development": erpCrmDevelopment,
  "cloud-devops": withExtra("cloud-devops", cloudDevops),
};

export const industryGuides: Record<string, { guide: Guide; faqs: Faq[] }> = {
  "real-estate": { guide: withExtra("real-estate", realEstate.guide), faqs: realEstate.faqs },
  education: { guide: withExtra("education", education.guide), faqs: education.faqs },
  healthcare: { guide: withExtra("healthcare", healthcare.guide), faqs: healthcare.faqs },
  startups: { guide: withExtra("startups", startups.guide), faqs: startups.faqs },
  "retail-ecommerce": { guide: withExtra("retail-ecommerce", retailEcommerce.guide), faqs: retailEcommerce.faqs },
  restaurants: { guide: withExtra("restaurants", restaurants.guide), faqs: restaurants.faqs },
  fintech: { guide: withExtra("fintech", fintech.guide), faqs: fintech.faqs },
};
