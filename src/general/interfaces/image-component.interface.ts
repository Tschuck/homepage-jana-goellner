import { BaseComponentProps } from "@/general/interfaces/component-props.interface";

export enum ImageBorderThickness {
  none = "border-0",
  xs = "border-4",
  small = "border-small",
  medium = "border-medium",
  thick = "border-thick",
}

export interface ImageProps extends BaseComponentProps {
  image: string;
  border: ImageBorderThickness;
  borderColor?: string;
}
