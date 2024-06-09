import { RootWrapper } from "@/general/components/RootWrapper";
import { AboutMe } from "@/pages/AboutMe";
import { Contact } from "@/pages/Contact";
import { Imprint } from "@/pages/Imprint";
import { Services } from "@/pages/Services";
import { StartPage } from "@/pages/StartPage";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

export const pageRoutes = [
  {
    path: "/",
    element: <StartPage />,
    handle: { name: "welcome" },
  },
  {
    path: "/services",
    element: <Services />,
    handle: { name: "services" },
  },
  {
    path: "/about-me",
    element: <AboutMe />,
    handle: { name: "about-me" },
  },
  {
    path: "/contact",
    element: <Contact />,
    handle: { name: "contact" },
  },
  {
    path: "/imprint",
    element: <Imprint />,
    handle: { name: "imprint" },
  },
];

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
