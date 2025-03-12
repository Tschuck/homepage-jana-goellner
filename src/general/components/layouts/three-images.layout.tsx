import { Page } from "@/general/components/page.component";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { WebsitePage } from "@/general/interfaces/website-page.interface";
import { getImageRoute } from "@/definition/website-definition";
import { WebsitePageMarkdown } from "@/general/components/website-page-markdown.component";

export interface ThreeImagesLayoutProps {
  page: WebsitePage;
  reverse?: boolean;
}

export function ThreeImagesLayout({ page, reverse }: ThreeImagesLayoutProps) {
  const imagesDisplay = (
    <>
      <div className="flex-col items-center justify-start flex-grow hidden col-span-6 gap-8 p-8 mt-8 lg:flex lg:col-span-2 xl:col-span-2 2xl:col-span-2 lg:mt-0 xl:flex">
        <CircleImage
          image={getImageRoute(page, 1)}
          border={ImageBorderThickness.xs}
          borderColor="border-secondary"
          className="mx-auto xl:w-[400px] 2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px]"
        />
        <CircleImage
          image={getImageRoute(page, 2)}
          border={ImageBorderThickness.xs}
          borderColor="border-secondary"
          className="mx-auto xl:w-[400px] 2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px]"
        />
        <CircleImage
          image={getImageRoute(page, 3)}
          border={ImageBorderThickness.xs}
          borderColor="border-secondary"
          className="mx-auto xl:w-[400px]  2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px]"
        />
      </div>
    </>
  );

  return (
    <Page className="grid grid-cols-8 gap-4">
      {!reverse && imagesDisplay}
      <div className="flex flex-col col-span-8 gap-8 lg:mt-8 lg:col-span-5 xl:col-span-5 2xl:col-span-5">
        <WebsitePageMarkdown page={page} />
      </div>
      {reverse && imagesDisplay}

      <div className="grid grid-cols-3 col-span-8 gap-8 lg:hidden">
        <div>
          <CircleImage
            image={getImageRoute(page, 1)}
            border={ImageBorderThickness.xs}
            className="w-full"
          />
        </div>

        <div>
          <CircleImage
            image={getImageRoute(page, 2)}
            border={ImageBorderThickness.xs}
            className="w-full"
          />
        </div>

        <div>
          <CircleImage
            image={getImageRoute(page, 3)}
            border={ImageBorderThickness.xs}
            className="w-full"
          />
        </div>
      </div>
    </Page>
  );
}
