import { CircleImage } from "@/general/components/images/circle-image.component";
import { MarkdownLoading } from "@/general/components/markdown-loading.component";
import { Page } from "@/general/components/page.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import Image1 from "@/assets/tcm/Yin Yang.jpg";

export function TcmPage() {
  return (
    <Page>
      <CircleImage
        image={Image1}
        border={ImageBorderThickness.xs}
        borderColor="border-0"
        className="mx-auto xl:w-[400px] 2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px] max-w-[300px]"
      />
      <div className="flex justify-center mt-8">
        <div className="w-full lg:w-2/3 xl:w-1/2 2xl:w-1/3">
          <MarkdownLoading fileName="tcm" />
        </div>
      </div>
    </Page>
  );
}
