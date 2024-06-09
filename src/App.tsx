import { Router } from "@/general/Router";
import "./App.css";
import { Suspense } from "react";

function Application() {
  return (
    <>
      <Suspense fallback={<>loading</>}>
        <Router />
      </Suspense>
    </>
  );
}

export default Application;
