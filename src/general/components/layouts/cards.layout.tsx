import { DoorImage } from "@/general/components/images/door-image.component";
import { Page } from "@/general/components/page.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { Link } from "react-router-dom";
import { WebsitePage } from "@/general/interfaces/website-page.interface";
import { getImageRoute } from "@/definition/website-definition";

export interface CardsLayoutProps {
  page: WebsitePage;
}

export function CardsLayout({ page }: CardsLayoutProps) {
  return (
    <Page className="w-full pb-16">
      <div className="flex-col items-center justify-center hidden gap-8 pb-16 lg:grid lg:grid-cols-3 lg:mt-16">
        {page.config.cards.map((card) => (
          <div className="flex justify-center" key={card.slug}>
            <Link
              to={`/${page.slug}/${card.slug}`}
              className="border-4 rounded-tl-full rounded-tr-full border-primary  max-w-[400px]"
            >
              <DoorImage
                className="w-full"
                image={getImageRoute(card, 1)}
                border={ImageBorderThickness.none}
              />
              <div className="p-4">
                <p className="text-semibold">{card.title}</p>
                <p className="text-xs">{card.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 lg:hidden">
        {page.config.cards.map((card) => (
          <Link
            className="flex border-2 rounded-md border-primary hover:bg-gray-50"
            key={card.slug}
            to={`/${page.slug}/${card.slug}`}
          >
            <img
              src={getImageRoute(card, 1)}
              className="w-[100px] bg-center bg-cover aspect-square object-cover"
            />
            <div className="flex flex-col justify-start py-4 ml-4">
              <p className="text-semibold">{card.title}</p>
              <p className="text-xs">{card.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}
