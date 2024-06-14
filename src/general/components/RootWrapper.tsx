import { Navigation } from "@/general/components/Navigation";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import Favicon from "@/assets/favicon.svg";
import { Button, ButtonType } from "@/general/components/Button";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { SidePanel } from "@/general/components/SidePanel";

export function RootWrapper() {
  const { t } = useTranslation();
  const [showSidePanel, setShowSidePanel] = useState(false);

  return (
    <div className="flex flex-col h-full gap-8 p-4 sm:p-8 xl:px-32 bg-whitesmoke">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <img src={Favicon} className="w-12 md:w-20" />
          <div className="relative">
            <Link
              to="/"
              className="text-2xl text-gray-900 md:text-3xl font-yeseva"
            >
              {t("jana-goellner")}
            </Link>
            <Navigation className="absolute hidden w-screen -mt-3 sm:flex lg:hidden" />
          </div>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <Navigation className="hidden lg:flex" />
          <div className="flex justify-between gap-2 sm:ml-4 lg:ml-12">
            <Button
              className="hidden md:flex"
              link={`tel:${t("contact.phone-value")}`}
              type={ButtonType.PRIMARY}
            >
              {t("contact.call")}
            </Button>
            <Button
              className="flex md:hidden"
              link={`tel:${t("contact.phone-value")}`}
              type={ButtonType.ICON_PRIMARY}
            >
              <PhoneIcon className="w-4 h-4" />
            </Button>
            <Button
              type={ButtonType.ICON}
              className="flex sm:hidden"
              onClick={() => setShowSidePanel(true)}
            >
              <Bars3Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <SidePanel
        isOpen={showSidePanel}
        onClose={() => setShowSidePanel(false)}
      />
      <Outlet />
    </div>
  );
}
