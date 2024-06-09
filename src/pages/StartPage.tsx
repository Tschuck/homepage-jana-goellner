import { Page } from "@/general/components/Page";
import JanaGoellner from "@/assets/Jana_Goellner.jpg";

export function StartPage() {
  return (
    <Page>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-left-top bg-cover"
        style={{ backgroundImage: `url(${JanaGoellner}` }}
      />
    </Page>
  );
}
