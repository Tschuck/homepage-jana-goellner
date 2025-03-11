import { ImageProps } from "@/general/interfaces/image-component.interface";
import { classNames } from "@/general/utils/utils";

export function DoorImage({
  image,
  className,
  border,
  borderColor,
}: ImageProps) {
  return (
    <img
      src={image}
      className={classNames(
        className,
        `bg-center bg-cover rounded-tl-full rounded-tr-full aspect-square object-cover ${border} ${borderColor || "border-secondary"}`,
      )}
    />
  );
}
