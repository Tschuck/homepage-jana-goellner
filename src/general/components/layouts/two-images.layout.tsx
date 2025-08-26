import { getImageRoute } from "@/definition/website-definition";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { DoorImage } from "@/general/components/images/door-image.component";
import { Page } from "@/general/components/page.component";
import { WebsitePageMarkdown } from "@/general/components/website-page-markdown.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { WebsitePage } from "@/general/interfaces/website-page.interface";

export interface TwoImagesLayoutProps {
  page: WebsitePage;
  reverse?: boolean;
}

export function TwoImagesLayout({ page, reverse }: TwoImagesLayoutProps) {
  const textComponent = (
    <div className="flex flex-col col-span-6 gap-8 lg:mt-8 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
      <WebsitePageMarkdown page={page} />
    </div>
  );

  const smallImages = (
    <div className="grid grid-cols-2 col-span-6 gap-8 lg:hidden">
      <div>
        <CircleImage
          image={getImageRoute(page, 1)}
          border={ImageBorderThickness.small}
          className="w-full"
        />
      </div>

      <div>
        <CircleImage
          image={getImageRoute(page, 2)}
          border={ImageBorderThickness.small}
          className="w-full"
        />
      </div>
    </div>
  );

  return (
    <Page className="grid grid-cols-6 gap-4">
      {!reverse && textComponent}
      {/** images for lg+ **/}
      <div className="flex-col items-start justify-start flex-grow hidden col-span-6 pl-8 mt-8 lg:flex lg:col-span-3 xl:col-span-3 2xl:col-span-3 lg:mt-0 xl:flex">
        <CircleImage
          image={getImageRoute(page, 1)}
          border={ImageBorderThickness.small}
          className="mx-auto -mt-16 xl:mt-0 xl:w-[400px] 2xl:w-[500px] md:relative md:top-[20px] md:right-[50px] md:w-[250px] lg:w-[350px]"
        />

        <DoorImage
          image={getImageRoute(page, 2)}
          border={ImageBorderThickness.small}
          className="mx-auto -mt-12 xl:w-[400px] 2xl:w-[500px] md:relative md:top-[0px] md:left-[50px] md:w-[300px] lg:w-[350px]"
        />
      </div>
      {!reverse && smallImages}

      {/** images for lower than lg **/}
      {reverse && textComponent}
      {reverse && smallImages}
    </Page>
  );
}
