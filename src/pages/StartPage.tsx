import { Page } from "@/general/components/Page";
import { useTranslation } from "react-i18next";
import Image from "@/assets/alex-pasarelu-S8BW-Wx9G8I-unsplash.jpg";
import { classNames } from "@/general/utils/utils";
import { Button, ButtonType } from "@/general/components/Button";

export function StartPage() {
  const { t } = useTranslation();

  return (
    <Page>
      <div
        className={classNames(
          "flex flex-col w-full gap-4",
          "2xl:w-8/12 2xl:mt-16 2xl:pl-32",
          "xl:w-8/12 xl:mt-16 xl:pl-24",
          "lg:w-8/12 lg:mt-16 lg:pl-16",
          "md:w-10/12 md:mt-16 md:pl-24",
          "sm:mt-16 sm:px-8",
          "p-4",
        )}
      >
        <h1 className="text-2xl md:text-7xl font-yevesa">
          {t("welcome.header")}
        </h1>
        <h2 className="md:font-semibold md:text-lg text-md font-inter">
          {t("welcome.sub-header")}
        </h2>
        <p className="text-xs text-justify text-gray-900 md:text-base font-inter">
          {t("welcome.text")}
        </p>

        <div className="flex justify-center">
          <Button
            className="hidden md:flex"
            link={`tel:${t("contact.phone-value")}`}
            type={ButtonType.PRIMARY}
          >
            {t("contact.call")}
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div
          className={classNames(
            "md:fixed bg-center bg-cover rounded-full border-secondary",
            "2xl:w-[900px] 2xl:h-[900px] 2xl:-bottom-52 2xl:-right-52",
            "xl:w-[800px] xl:h-[800px] xl:-bottom-36 xl:-right-36",
            "lg:w-[700px] lg:h-[700px] lg:-bottom-32 lg:-right-32",
            "md:w-[500px] md:h-[500px] md:-bottom-32 md:-right-32 md:border-thick",
            "w-[400px] h-[400px] border-16 border-8 margin-auto",
          )}
          style={{
            backgroundImage: `url(${Image})`,
            backgroundPosition: "center",
          }}
        />
      </div>
    </Page>
  );
}
