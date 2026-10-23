import type { ServiceDetail } from "../types";
import websiteDevelopment from "./website-development";
import mobileAppDevelopment from "./mobile-app-development";
import customSoftwareDevelopment from "./custom-software-development";
import ecommerceDevelopment from "./ecommerce-development";
import aiToolsAutomation from "./ai-tools-automation";
import digitalMarketing from "./digital-marketing";
import brandingUiUxDesign from "./branding-ui-ux-design";
import erpCrmDevelopment from "./erp-crm-development";
import cloudDevops from "./cloud-devops";

export const serviceDetails: Record<string, ServiceDetail> = {
  "website-development": websiteDevelopment,
  "mobile-app-development": mobileAppDevelopment,
  "custom-software-development": customSoftwareDevelopment,
  "ecommerce-development": ecommerceDevelopment,
  "ai-tools-automation": aiToolsAutomation,
  "digital-marketing": digitalMarketing,
  "branding-ui-ux-design": brandingUiUxDesign,
  "erp-crm-development": erpCrmDevelopment,
  "cloud-devops": cloudDevops,
};
