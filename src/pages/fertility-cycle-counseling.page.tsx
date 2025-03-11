import { MarkdownLoading } from "@/general/components/markdown-loading.component";
import { PageThreeImages } from "@/general/components/layouts/page-with-three-images";
import Image1 from "@/assets/fertility-cycle-counseling/Clear Measuring Container.jpg";
import Image2 from "@/assets/fertility-cycle-counseling/Poached Egg with Vegetables.jpg";
import Image3 from "@/assets/fertility-cycle-counseling/Woman Doing Yoga.jpg";

export function FertilityCycleCounselingPage() {
  return (
    <PageThreeImages image1={Image1} image2={Image2} image3={Image3}>
      <MarkdownLoading fileName="fertility-cycle-counseling" />
    </PageThreeImages>
  );
}
