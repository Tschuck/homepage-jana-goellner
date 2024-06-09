import { Navigation } from "@/general/components/Navigation";
import { Outlet } from "react-router-dom";

export function RootWrapper() {
  return (
    <div className="flex flex-col gap-8 px-8 pt-8">
      <Navigation />
      <Outlet />
    </div>
  );
}
