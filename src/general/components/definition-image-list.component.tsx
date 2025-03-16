import { websiteDefinition } from "@/definition/website-definition";
import { WebsitePage } from "@/general/interfaces/website-page.interface";
import { useTranslation } from "react-i18next";

export function DefinitionImageList() {
  const { t } = useTranslation();

  function PageImages({ page }: { page: WebsitePage }) {
    return (
      <>
        <b>{page.title}</b>
        <ul>
          {page.config.image1.referenceLink && (
            <li>
              <a href={page.config.image1.referenceLink}>{t("image")} 1</a>
            </li>
          )}
          {page.config.image2.referenceLink && (
            <li>
              <a href={page.config.image2.referenceLink}>{t("image")} 2</a>
            </li>
          )}
          {page.config.image3.referenceLink && (
            <li>
              <a href={page.config.image3.referenceLink}>{t("image")} 3</a>
            </li>
          )}

          {page.config.cards.map((card) => (
            <PageImages key={card.id} page={card} />
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="markdown-wrapper">
      {websiteDefinition.pages.map((page) => (
        <PageImages key={page.id} page={page} />
      ))}
    </div>
  );
}
