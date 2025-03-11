import { Page } from "@/general/components/page.component";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { DoorImage } from "@/general/components/images/door-image.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { BaseComponentPropsWithChildren } from "@/general/interfaces/component-props.interface";
import { classNames } from "@/general/utils/utils";

export interface PageWithTwoImagesProps extends BaseComponentPropsWithChildren {
  image1: string;
  image2: string;
  reverse?: boolean;
}

export function PageWithTwoImages({
  children,
  className,
  image1,
  image2,
  reverse,
}: PageWithTwoImagesProps) {
  const textComponent = (
    <div className="flex flex-col col-span-6 gap-8 lg:mt-8 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
      {children}
    </div>
  );

  const smallImages = (
    <div className="grid grid-cols-2 col-span-6 gap-8 lg:hidden">
      <div>
        <CircleImage
          image={image1}
          border={ImageBorderThickness.small}
          className="w-full"
        />
      </div>

      <div>
        <CircleImage
          image={image2}
          border={ImageBorderThickness.small}
          className="w-full"
        />
      </div>
    </div>
  );

  return (
    <Page className={classNames(className, "grid grid-cols-6 gap-4")}>
      {!reverse && textComponent}
      {/** images for lg+ **/}
      <div className="flex-col items-center justify-start flex-grow hidden col-span-6 pl-8 mt-8 lg:flex lg:col-span-3 xl:col-span-3 2xl:col-span-3 lg:mt-0 xl:flex">
        <CircleImage
          image={image1}
          border={ImageBorderThickness.small}
          className="mx-auto -mt-16 xl:mt-0 xl:w-[400px] 2xl:w-[500px] md:relative md:top-[100px] md:right-[50px] md:w-[250px] lg:w-[350px]"
        />

        <DoorImage
          image={image2}
          border={ImageBorderThickness.small}
          className="mx-auto -mt-12 xl:w-[400px] 2xl:w-[500px] md:relative md:top-[80px] md:left-[50px] md:w-[300px] lg:w-[350px]"
        />
      </div>
      {!reverse && smallImages}

      {/** images for lower than lg **/}
      {reverse && textComponent}
      {reverse && smallImages}
    </Page>
  );
}
