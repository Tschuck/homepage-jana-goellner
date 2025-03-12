import Favicon from "@/assets/favicon.svg";
import { websiteDefinition } from "@/definition/website-definition";
import { Button, ButtonType } from "@/general/components/button.component";
import { CookieDisclaimer } from "@/general/components/cookie-disclaimer.component";
import { Navigation } from "@/general/components/navigation.component";
import { SidePanel } from "@/general/components/side-panel.component";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

export function RootWrapper() {
  const { t } = useTranslation();
  const [showSidePanel, setShowSidePanel] = useState(false);

  return (
    <div className="flex flex-col h-full bg-whitesmoke">
      <div className="flex items-center gap-4 px-4 py-1 sm:pt-4 sm:px-8 xl:px-32">
        <div className="flex items-center">
          <img src={Favicon} className="w-12 -ml-4 md:w-20" />
          <div className="relative">
            <Link
              to="/"
              className="text-2xl text-gray-900 md:text-3xl font-yeseva"
              viewTransition
            >
              {websiteDefinition.title}
            </Link>
            <Navigation className="absolute flex hidden w-screen -mt-3 lg:hidden" />
          </div>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <Navigation className="hidden lg:flex" />
          <div className="flex justify-between gap-2 sm:ml-4 lg:ml-12">
            <Button
              className="hidden lg:flex"
              link={`tel:${t("contact.phone-value")}`}
              type={ButtonType.PRIMARY}
            >
              {t("contact.call")}
            </Button>
            <Button
              className="flex lg:hidden"
              link={`tel:${websiteDefinition.phoneNumber}`}
              type={ButtonType.ICON_PRIMARY}
            >
              <PhoneIcon className="w-4 h-4" />
            </Button>
            <Button
              type={ButtonType.ICON}
              className="flex lg:hidden"
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

      <CookieDisclaimer />
      <Outlet />
      {/* <div className="relative h-full overflow-y-auto">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef as RefObject<HTMLElement>}
            timeout={300}
            classNames="page-transition"
            unmountOnExit
          >
            {() => (
              <div
                ref={nodeRef as LegacyRef<HTMLDivElement>}
                className="page-transition"
              >
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition> */}
      {/* </div> */}
    </div>
  );
}
