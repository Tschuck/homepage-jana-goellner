import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./general/i18n";
import "./index.css";
import markdownCache, {
  MarkdownCache,
} from "./general/utils/markdown-cache.ts";

// invalidate old cache
new MarkdownCache().validateAndCleanCache();
// ensure to directly cache
const prepareCache = [
  "about-me-education",
  "about-me",
  "birth-aftercare",
  "blog",
  "data-security",
  "fertility-cycle-counseling",
  "imprint",
  "pregnancy",
  "tcm",
  "welcome",
];

prepareCache.forEach((markdownName) =>
  markdownCache.loadMarkdown(markdownName),
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
