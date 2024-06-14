import { pageRoutes } from "@/general/Router";
import { BaseComponentProps } from "@/general/interfaces/ComponentProps";
import { classNames } from "@/general/utils/utils";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export function Navigation({ className }: BaseComponentProps) {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className={classNames(className, "flex gap-8 flex-wrap")}>
      {pageRoutes
        .filter((route) => !route.handle.hide)
        .map((route, index) => {
          const isActive = location.pathname === route.path;

          return (
            <Link
              to={route.path}
              className={classNames(
                "flex relative py-4 cursor-pointer items-center justify-center font-inter text-gray-800 text-md",
                isActive ? "font-bold text-primary" : "",
              )}
              key={index}
            >
              <span className="text-center text-nowrap">
                {t(route.handle.name)}
              </span>
            </Link>
          );
        })}
    </div>
  );
}
