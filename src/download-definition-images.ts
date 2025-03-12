import { WebsiteDefinition } from "@/general/interfaces/website-definition.interface";
import jsonImport from "@/definition/Jana Goellner.json";
import { WebsitePage } from "@/general/interfaces/website-page.interface";
import fs from "fs";

const websiteDefinition = jsonImport as WebsiteDefinition;
const imageMap: Record<string, string> = {};

async function downloadImages(page: WebsitePage) {
  const images = [
    page.config.image1.downloadLink,
    page.config.image2.downloadLink,
    page.config.image3.downloadLink,
  ].filter((downloadLink) => !!downloadLink);

  for (let i = 0; i < images.length; i += 1) {
    // assume its a local image
    if (!images[i].startsWith("http")) {
      imageMap[`${page.slug}/image${i}`] = images[i];
      continue;
    }

    const response = await fetch(images[i]);
    const fileType = response.headers
      .get("content-type")
      ?.replace("image/", "");
    const folderPath = `images/${page.slug}`;
    const filePath = `${folderPath}/image${i}.${fileType}`;

    imageMap[`${page.slug}/image${i}`] = `/${filePath}`;

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

fs.writeFileSync(
  `${process.cwd()}/src/definition/image-map.json`,
  Buffer.from(JSON.stringify(imageMap)),
);
