import type { IndustryDetail } from "../types";
import realEstate from "./real-estate";
import education from "./education";
import healthcare from "./healthcare";
import startups from "./startups";
import retailEcommerce from "./retail-ecommerce";
import restaurants from "./restaurants";
import fintech from "./fintech";

export const industryDetails: Record<string, IndustryDetail> = {
  "real-estate": realEstate,
  education,
  healthcare,
  startups,
  "retail-ecommerce": retailEcommerce,
  restaurants,
  fintech,
};
