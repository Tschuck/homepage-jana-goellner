import { Button, ButtonType } from "@/general/components/button.component";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function CookieDisclaimer() {
  const { t } = useTranslation();
  const [wasRead, setWasRead] = useState(
    sessionStorage.getItem("cookies-accepted") === "true",
  );

  function markAsRead() {
    setWasRead(true);
    sessionStorage.setItem("cookies-accepted", "true");
  }

  return (
    <div>
      {!wasRead && (
        <div className="fixed z-20">
          <div className="fixed p-3 text-justify text-white shadow-xl left-0 right-0 md:left-[20%] md:right-[20%] z-50 bg-primary bottom-4">
            <small className="text-xs">
              {t("data-security.cookie-disclaimer")}
            </small>

            <div className="flex justify-end gap-4 px-8 pt-2 text-xs">
              <Button
                className="text-white button primary hover:text-primary"
                link={`/data-security`}
                type={ButtonType.BORDER_GRAY}
              >
                {t("data-security.read-more")}
              </Button>

              <Button onClick={markAsRead} type={ButtonType.SECONDARY}>
                {t("data-security.ok")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
