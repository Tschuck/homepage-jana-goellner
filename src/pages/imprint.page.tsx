import { MarkdownLoading } from "@/general/components/markdown-loading.component";
import { Page } from "@/general/components/page.component";

export function ImprintPage() {
  return (
    <Page>
      <div className="flex justify-center md:mt-8">
        <div className="w-full lg:w-2/3 xl:w-1/2 2xl:w-1/3">
          <MarkdownLoading fileName="imprint" />
        </div>
      </div>
    </Page>
  );
}
