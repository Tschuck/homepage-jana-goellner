import { WebsiteDefinition } from "@/general/interfaces/website-definition.interface";
import jsonImport from "./Jana Goellner.json";
import imageMapImport from "./image-map.json";
import { WebsitePage } from "@/general/interfaces/website-page.interface";

const websiteDefinition = jsonImport as WebsiteDefinition;
const imageMap = imageMapImport as Record<string, string>;

export function getImageRoute(page: WebsitePage, index: number) {
  return imageMap[`${page.slug}/image${index - 1}`];
}

export { imageMap, websiteDefinition };
