import { BigImageLayout } from "@/general/components/layouts/big-image.layout";
import { CardsLayout } from "@/general/components/layouts/cards.layout";
import { ImageTopLayout } from "@/general/components/layouts/image-top.layout";
import { TextOnlyLayout } from "@/general/components/layouts/text-only.layout";
import { ThreeImagesTopLayout } from "@/general/components/layouts/three-images-top.layout";
import { ThreeImagesLayout } from "@/general/components/layouts/three-images.layout";
import { TwoImagesLayout } from "@/general/components/layouts/two-images.layout";
import {
  LayoutType,
  WebsitePage,
} from "@/general/interfaces/website-page.interface";

export interface WebsitePageProps {
  page: WebsitePage;
}

export function WebsitePageDisplay({ page }: WebsitePageProps) {
  switch (page.layout) {
    case LayoutType.bigImage: {
      return <BigImageLayout page={page} />;
    }
    case LayoutType.cards: {
      return <CardsLayout page={page} />;
    }
    case LayoutType.imageTop: {
      return <ImageTopLayout page={page} />;
    }
    case LayoutType.threeImagesLeft: {
      return <ThreeImagesLayout page={page} />;
    }
    case LayoutType.threeImagesRight: {
      return <ThreeImagesLayout page={page} reverse={true} />;
    }
    case LayoutType.threeImagesTop: {
      return <ThreeImagesTopLayout page={page} />;
    }
    case LayoutType.twoImagesLeft: {
      return <TwoImagesLayout page={page} />;
    }
    case LayoutType.twoImagesRight: {
      return <TwoImagesLayout page={page} reverse={true} />;
    }
    case LayoutType.textOnly: {
      return <TextOnlyLayout page={page} />;
    }
  }
}
