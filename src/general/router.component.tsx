import { RootWrapper } from "@/general/components/root-wrapper.component";
import { AboutMePage } from "@/pages/about-me.page";
import { BirthAftercarePage } from "@/pages/birth-aftercare.page";
import { BlogOverviewPage } from "@/pages/blog-overview.page";
import { BlogPage } from "@/pages/blog.page";
import { DataSecurityPage } from "@/pages/data-security.page";
import { FertilityCycleCounselingPage } from "@/pages/fertility-cycle-counseling.page";
import { ImprintPage } from "@/pages/imprint.page";
import { PregnancyPage } from "@/pages/pregnancy.page";
import { TcmPage } from "@/pages/tcm.page";
import { WelcomePage } from "@/pages/welcome.page";
import { createRef } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

export const pageRoutes = [
  {
    path: "/",
    element: <WelcomePage />,
    handle: { name: "welcome.nav", hide: true },
  },
  {
    path: "/pregnancy",
    element: <PregnancyPage />,
    handle: { name: "pregnancy.nav" },
  },
  {
    path: "/birth-aftercare",
    element: <BirthAftercarePage />,
    handle: { name: "birth-aftercare.nav" },
  },
  {
    path: "/fertility-cycle-counseling",
    element: <FertilityCycleCounselingPage />,
    handle: { name: "fertility-cycle-counseling.nav" },
  },
  {
    path: "/tcm",
    element: <TcmPage />,
    handle: { name: "tcm.nav" },
  },
  {
    path: "/about-me",
    element: <AboutMePage />,
    handle: { name: "about-me.nav" },
  },
  {
    path: "/blog",
    handle: { name: "blog.nav" },
    children: [
      {
        path: "",
        element: <BlogOverviewPage />,
      },
      {
        path: "post/:slug",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/imprint",
    element: <ImprintPage />,
    handle: { name: "imprint.nav" },
  },
  {
    path: "/data-security",
    element: <DataSecurityPage />,
    handle: { name: "data-security.nav" },
  },
].map((entry) => ({ ...entry, nodeRef: createRef() }));

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
