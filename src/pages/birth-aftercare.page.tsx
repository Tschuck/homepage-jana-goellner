import Image2 from "@/assets/birth-aftercare/Baby Holding Wooden Block.jpg";
import Image1 from "@/assets/birth-aftercare/Girl in Blue Jacket Photo.jpg";
import { PageWithTwoImages } from "@/general/components/layouts/page-with-two-images";
import { MarkdownLoading } from "@/general/components/markdown-loading.component";

export function BirthAftercarePage() {
  return (
    <PageWithTwoImages image1={Image1} image2={Image2} reverse={true}>
      <MarkdownLoading fileName="birth-aftercare" />
    </PageWithTwoImages>
  );
}
