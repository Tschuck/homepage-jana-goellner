import Image2 from "@/assets/pregnancy/Baby Holding Finger.jpg";
import Image1 from "@/assets/pregnancy/White Dress Pregnancy Photo.jpg";
import { PageWithTwoImages } from "@/general/components/layouts/page-with-two-images";
import { MarkdownLoading } from "@/general/components/markdown-loading.component";

export function PregnancyPage() {
  return (
    <PageWithTwoImages image1={Image1} image2={Image2}>
      <MarkdownLoading fileName="pregnancy" />
    </PageWithTwoImages>
  );
}
