import { Page } from "@/general/components/page.component";
import { WebsitePageMarkdown } from "@/general/components/website-page-markdown.component";
import { WebsitePage } from "@/general/interfaces/website-page.interface";

export interface TextOnlyProps {
  page: WebsitePage;
}

export function TextOnlyLayout({ page }: TextOnlyProps) {
  return (
    <Page>
      <div className="flex justify-center md:mt-8">
        <div className="w-full lg:w-2/3 xl:w-1/2 2xl:w-1/3">
          <WebsitePageMarkdown page={page} />
        </div>
      </div>
    </Page>
  );
}
