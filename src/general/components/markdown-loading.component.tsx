import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { BaseComponentProps } from "@/general/interfaces/component-props.interface";
import markdownCache from "@/general/utils/markdown-cache";

export interface MarkdownLoadingProps extends BaseComponentProps {
  fileName: string;
}

export function MarkdownLoading({ fileName }: MarkdownLoadingProps) {
  const cachedValue = markdownCache.getCache(fileName);
  const [markdown, setMarkdown] = useState(cachedValue);

  useEffect(() => {
    markdownCache
      .loadMarkdown(fileName)
      .then((newValue) => {
        if (!cachedValue) {
          setMarkdown(newValue);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="markdown-wrapper">
      <Markdown skipHtml={false}>{markdown}</Markdown>
    </div>
  );
}
