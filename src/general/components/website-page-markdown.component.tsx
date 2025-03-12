import {
  TextDisplayType,
  WebsitePage,
} from "@/general/interfaces/website-page.interface";
import Markdown from "react-markdown";

export interface WebsitePageMarkdownProps {
  page: WebsitePage;
  reverse?: boolean;
}

export function WebsitePageMarkdown({ page }: WebsitePageMarkdownProps) {
  return (
    <>
      {page.textDisplay === TextDisplayType.sideBySide ? (
        <div className="grid grid-cols-2 gap-4 mt-8 md:mt-16">
          <div className="col-span-2 lg:p-8 lg:col-span-1">
            <div className="markdown-wrapper">
              <Markdown skipHtml={false}>{page.config.markdown}</Markdown>
            </div>
          </div>
          <div className="col-span-2 text-sm lg:p-8 lg:col-span-1">
            <div className="markdown-wrapper">
              <Markdown skipHtml={false}>{page.config.markdown2}</Markdown>
            </div>
          </div>
        </div>
      ) : (
        <div className="markdown-wrapper">
          <Markdown skipHtml={false}>{page.config.markdown}</Markdown>
        </div>
      )}
    </>
  );
}
