import { Page } from "@/general/components/page.component";
import { useTranslation } from "react-i18next";
import Image from "@/assets/welcome/Infant Feet on Blanket.jpg";
import { Button, ButtonType } from "@/general/components/button.component";
import { MarkdownLoading } from "@/general/components/markdown-loading.component";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";

export function WelcomePage() {
  const { t } = useTranslation();

  return (
    <Page className="grid grid-cols-5 gap-4">
      <div className="flex flex-col col-span-5 gap-8 lg:col-span-2">
        <MarkdownLoading fileName="welcome" />

        <div className="flex justify-center">
          <Button
            link={`tel:${t("contact.phone-value")}`}
            type={ButtonType.PRIMARY}
          >
            {t("contact.call")}
          </Button>
        </div>
      </div>

      <div className="relative flex items-end justify-center flex-grow col-span-5 mt-8 lg:justify-end lg:col-span-3 lg:mt-0">
        {/* <FancyDots className="hidden lg:flex absolute top-[100px] left-[25%]" /> */}
        <CircleImage
          image={Image}
          border={ImageBorderThickness.thick}
          className="lg:w-full"
        />
      </div>
    </Page>
  );
}
