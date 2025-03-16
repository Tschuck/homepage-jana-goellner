import { WebsiteDefinition } from "@/general/interfaces/website-definition.interface";
import jsonImport from "@/definition/Jana Goellner.json";
import { WebsitePage } from "@/general/interfaces/website-page.interface";
import fs from "fs";
import { randomUUID } from "crypto";
import importedImageMap from "./definition/image-map.json";

const websiteDefinition = jsonImport as WebsiteDefinition;
const previousImageMap = importedImageMap as Record<string, string>;
const imageMap: Record<string, string> = {};

async function downloadImages(page: WebsitePage) {
  const images = [
    page.config.image1.downloadLink,
    page.config.image2.downloadLink,
    page.config.image3.downloadLink,
  ].filter((downloadLink) => !!downloadLink);

  for (let i = 0; i < images.length; i += 1) {
    const imageUrl = images[i];

    if (previousImageMap[imageUrl]) {
      imageMap[imageUrl] = previousImageMap[imageUrl];
      continue;
    }

    // assume its a local image
    if (!imageUrl.startsWith("http")) {
      imageMap[imageUrl] = imageUrl;
      continue;
    }

    const response = await fetch(imageUrl);
    const fileType = response.headers
      .get("content-type")
      ?.replace("image/", "");
    const folderPath = `images/downloaded`;
    const filePath = `${folderPath}/${randomUUID()}.${fileType}`;

    imageMap[imageUrl] = `/${filePath}`;

    if (!fs.existsSync(`${process.cwd()}/public/${folderPath}`)) {
      fs.mkdirSync(`${process.cwd()}/public/${folderPath}`);
    }

    fs.writeFileSync(
      `${process.cwd()}/public/${filePath}`,
      Buffer.from(await response.arrayBuffer()),
    );
  }
}

for (const page of websiteDefinition.pages) {
  console.log(`- ${page.title}`);

  await downloadImages(page);

  for (const card of page.config.cards) {
    console.log(`   - ${page.title}`);
    await downloadImages(card);
  }
}

// cleanup old images
const oldImages = Object.keys(previousImageMap);
for (const oldImage of oldImages) {
  if (!imageMap[oldImage]) {
    fs.rmSync(`${process.cwd()}/public/${previousImageMap[oldImage]}`);
  }
}

fs.writeFileSync(
  `${process.cwd()}/src/definition/image-map.json`,
  Buffer.from(JSON.stringify(imageMap)),
);
