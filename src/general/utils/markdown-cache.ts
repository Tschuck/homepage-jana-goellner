import config from "@/general/config";
import { i18n } from "@/general/i18n";

const BUILD_ID_KEY = "midwife-homepage-build-id";

export class MarkdownCache {
  public validateAndCleanCache() {
    const cookiesAccepted = sessionStorage.getItem("cookies-accepted");

    if (window.location.origin.includes("localhost")) {
      sessionStorage.clear();
    }

    if (sessionStorage.getItem(BUILD_ID_KEY) !== config.buildId) {
      sessionStorage.clear();
    }

    // ensure to keep cookies accepted when switching language
    if (cookiesAccepted) {
      sessionStorage.setItem("cookies-accepted", cookiesAccepted);
    }

    sessionStorage.setItem(BUILD_ID_KEY, config.buildId);
  }

  public async loadMarkdown(fileName: string) {
    const cached = this.getCache(fileName);
    if (cached) {
      return cached;
    }

    const res = await fetch(
      `${window.location.origin}/markdown/${i18n.language}/${fileName}.md`,
    );

    if (!res.ok) {
      throw res;
    }

    const markdown = await res.text();
    this.setCache(fileName, markdown);

    return markdown;
  }

  public getCache(fileName: string) {
    return sessionStorage.getItem(this.getCacheKey(fileName)) || "";
  }

  private setCache(fileName: string, content: string) {
    sessionStorage.setItem(this.getCacheKey(fileName), content);
  }

  private getCacheKey(fileName: string) {
    return `${config.buildId}-${i18n.language}-${fileName}`;
  }
}

export default new MarkdownCache();
