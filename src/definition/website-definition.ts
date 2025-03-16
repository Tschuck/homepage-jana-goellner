import { WebsiteDefinition } from "@/general/interfaces/website-definition.interface";
import jsonImport from "./Jana Goellner.json";
import imageMapImport from "./image-map.json";
import {
  Image,
  WebsitePage,
} from "@/general/interfaces/website-page.interface";

const websiteDefinition = jsonImport as WebsiteDefinition;
const imageMap = imageMapImport as Record<string, string>;

export function getImageRoute(page: WebsitePage, index: 1 | 2 | 3) {
  const imageKey = `image${index}` as "image1" | "image2" | "image3";
  const imageUrl = (page.config[imageKey] as Image).downloadLink;
  return imageMap[imageUrl];
}

export { imageMap, websiteDefinition };
