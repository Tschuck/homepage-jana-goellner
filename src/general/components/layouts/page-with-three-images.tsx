import { Page } from "@/general/components/page.component";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { BaseComponentPropsWithChildren } from "@/general/interfaces/component-props.interface";
import { classNames } from "@/general/utils/utils";

export interface PageThreeImagesProps extends BaseComponentPropsWithChildren {
  image1: string;
  image2: string;
  image3: string;
}

export function PageThreeImages({
  children,
  className,
  image1,
  image2,
  image3,
}: PageThreeImagesProps) {
  return (
    <Page className={classNames(className, "grid grid-cols-8 gap-4")}>
      <div className="flex-col items-center justify-start flex-grow hidden col-span-6 gap-8 p-8 mt-8 lg:flex lg:col-span-2 xl:col-span-2 2xl:col-span-2 lg:mt-0 xl:flex">
        <CircleImage
          image={image1}
          border={ImageBorderThickness.xs}
          borderColor="border-secondary"
          className="mx-auto xl:w-[400px] 2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px]"
        />
        <CircleImage
          image={image2}
          border={ImageBorderThickness.xs}
          borderColor="border-secondary"
          className="mx-auto xl:w-[400px] 2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px]"
        />
        <CircleImage
          image={image3}
          border={ImageBorderThickness.xs}
          borderColor="border-secondary"
          className="mx-auto xl:w-[400px]  2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px]"
        />
      </div>
      <div className="flex flex-col col-span-8 gap-8 lg:mt-8 lg:col-span-5 xl:col-span-5 2xl:col-span-5">
        {children}
      </div>
      <div className="grid grid-cols-3 col-span-8 gap-8 lg:hidden">
        <div>
          <CircleImage
            image={image1}
            border={ImageBorderThickness.xs}
            className="w-full"
          />
        </div>

        <div>
          <CircleImage
            image={image2}
            border={ImageBorderThickness.xs}
            className="w-full"
          />
        </div>

        <div>
          <CircleImage
            image={image3}
            border={ImageBorderThickness.xs}
            className="w-full"
          />
        </div>
      </div>
    </Page>
  );
}
