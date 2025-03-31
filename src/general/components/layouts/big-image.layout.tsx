import { getImageRoute } from "@/definition/website-definition";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { Page } from "@/general/components/page.component";
import { WebsitePageMarkdown } from "@/general/components/website-page-markdown.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { WebsitePage } from "@/general/interfaces/website-page.interface";

export interface BigImageLayoutProps {
  page: WebsitePage;
}

export function BigImageLayout({ page }: BigImageLayoutProps) {
  return (
    <Page className="grid grid-cols-5 gap-4">
      <div className="flex flex-col col-span-5 gap-8 lg:col-span-2">
        <WebsitePageMarkdown page={page} />
      </div>

      <div className="relative flex items-end justify-center flex-grow col-span-5 mt-8 lg:justify-end lg:col-span-3 lg:mt-0">
        {/* <FancyDots className="hidden lg:flex absolute top-[100px] left-[25%]" /> */}
        <CircleImage
          image={getImageRoute(page, 1)}
          border={ImageBorderThickness.thick}
          className="lg:w-full"
        />
      </div>
    </Page>
  );
}
