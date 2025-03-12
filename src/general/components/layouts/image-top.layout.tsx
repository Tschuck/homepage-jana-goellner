import { getImageRoute } from "@/definition/website-definition";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { Page } from "@/general/components/page.component";
import { WebsitePageMarkdown } from "@/general/components/website-page-markdown.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { WebsitePage } from "@/general/interfaces/website-page.interface";

export interface ImageTopLayoutProps {
  page: WebsitePage;
}

export function ImageTopLayout({ page }: ImageTopLayoutProps) {
  return (
    <Page>
      <CircleImage
        image={getImageRoute(page, 1)}
        border={ImageBorderThickness.xs}
        borderColor="border-0"
        className="mx-auto xl:w-[400px] 2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px] max-w-[300px]"
      />
      <div className="flex justify-center mt-8">
        <div className="w-full lg:w-2/3 xl:w-1/2 2xl:w-1/3">
          <WebsitePageMarkdown page={page} />
        </div>
      </div>
    </Page>
  );
}
