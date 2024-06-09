import { pageRoutes } from "@/general/Router";
import { classNames } from "@/general/utils/utils";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="z-50 flex justify-end gap-8">
      {pageRoutes.map((route, index) => {
        const isActive = location.pathname === route.path;

        return (
          <Link
            to={route.path}
            className={classNames(
              "flex relative py-2 cursor-pointer items-center justify-center",
              isActive ? "" : "",
            )}
            key={index}
          >
            <span className="text-center">{t(route.handle.name)}</span>
            {isActive && (
              <div
                className="absolute bottom-0 w-full bg-gray-600"
                style={{ height: "1px" }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
