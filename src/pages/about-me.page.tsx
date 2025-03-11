import { DoorImage } from "@/general/components/images/door-image.component";
import { MarkdownLoading } from "@/general/components/markdown-loading.component";
import { Page } from "@/general/components/page.component";
import Image2 from "@/assets/about-me/Jana Goellner low res.jpg";
import Image1 from "@/assets/about-me/Yannic Laderach Unsplash.jpg";
import Image3 from "@/assets/about-me/Two People on Gray Soil.jpg";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { useTranslation } from "react-i18next";

export function AboutMePage() {
  const { t } = useTranslation();

  return (
    <Page>
      <div className="grid grid-cols-10 gap-2 md:gap-8">
        <div className="flex flex-col justify-end col-span-3">
          <DoorImage
            image={Image1}
            border={ImageBorderThickness.xs}
            borderColor="border-primary"
            className="w-full"
          />

          <p className="pt-4 font-semibold text-center">{t("sportswoman")}</p>
        </div>
        <div className="col-span-4">
          <DoorImage
            image={Image2}
            border={ImageBorderThickness.xs}
            className="w-full"
          />

          <p className="pt-4 font-semibold text-center">{t("midwife")}</p>
        </div>

        <div className="flex flex-col justify-end col-span-3">
          <DoorImage
            image={Image3}
            border={ImageBorderThickness.xs}
            borderColor="border-primary"
            className="w-full"
          />

          <p className="pt-4 font-semibold text-center">{t("mother")}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 md:mt-16">
        <div className="col-span-2 lg:p-8 lg:col-span-1">
          <MarkdownLoading fileName="about-me" />
        </div>
        <div className="col-span-2 text-sm lg:p-8 lg:col-span-1">
          <MarkdownLoading fileName="about-me-education" />
        </div>
      </div>
    </Page>
  );
}
