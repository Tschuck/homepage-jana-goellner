import { websiteDefinition } from "@/definition/website-definition";
import { Button, ButtonType } from "@/general/components/button.component";
import { RootWrapper } from "@/general/components/root-wrapper.component";
import { WebsitePageDisplay } from "@/general/components/website-page-display.component";
import { i18n } from "@/general/i18n";
import { LayoutType } from "@/general/interfaces/website-page.interface";
import { createRef } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

export const pageRoutes = websiteDefinition.pages.map((page, index) => {
  return {
    path: index === 0 ? "/" : `/${page.slug}`,
    ...(page.layout !== LayoutType.cards
      ? { element: <WebsitePageDisplay page={page} /> }
      : {}),
    handle: { name: page.title, hide: index === 0 },
    children:
      page.layout === LayoutType.cards
        ? [
            {
              path: "",
              element: <WebsitePageDisplay page={page} />,
              handle: { name: page.title, hide: index === 0 },
            },
            ...page.config.cards.map((card) => ({
              path: `/${page.slug}/${card.slug}`,
              element: (
                <>
                  <WebsitePageDisplay page={card} />

                  <div className="flex justify-center p-4 mt-4">
                    <Button
                      className="mt-8"
                      type={ButtonType.SECONDARY}
                      link="/blog"
                    >
                      {i18n.t("back")}
                    </Button>
                  </div>
                </>
              ),
            })),
          ]
        : [],
    nodeRef: createRef(),
  };
});

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootWrapper />,
    children: pageRoutes,
  },
];

export function Router() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
}
