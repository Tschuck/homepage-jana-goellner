import { getImageRoute } from "@/definition/website-definition";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { Page } from "@/general/components/page.component";
import { WebsitePageMarkdown } from "@/general/components/website-page-markdown.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { WebsitePage } from "@/general/interfaces/website-page.interface";

export interface ThreeImagesTopLayoutProps {
  page: WebsitePage;
}

export function ThreeImagesTopLayout({ page }: ThreeImagesTopLayoutProps) {
  return (
    <Page>
      <div className="grid grid-cols-10 gap-2 md:gap-8">
        <div className="flex flex-col justify-end col-span-3">
          <CircleImage
            image={getImageRoute(page, 1)}
            border={ImageBorderThickness.xs}
            borderColor="border-primary"
            className="w-full"
          />

          <p className="pt-4 font-semibold text-center">
            {page.config.image1.description}
          </p>
        </div>
        <div className="col-span-4">
          <CircleImage
            image={getImageRoute(page, 2)}
            border={ImageBorderThickness.xs}
            className="w-full"
          />

          <p className="pt-4 font-semibold text-center">
            {page.config.image2.description}
          </p>
        </div>

        <div className="flex flex-col justify-end col-span-3">
          <CircleImage
            image={getImageRoute(page, 3)}
            border={ImageBorderThickness.xs}
            borderColor="border-primary"
            className="w-full"
          />

          <p className="pt-4 font-semibold text-center">
            {page.config.image3.description}
          </p>
        </div>
      </div>

      <WebsitePageMarkdown page={page} />
    </Page>
  );
}
