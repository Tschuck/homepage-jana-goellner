import { BaseComponentPropsWithChildren } from "@/general/interfaces/ComponentProps";
import { classNames } from "@/general/utils/utils";

export interface PageProps extends BaseComponentPropsWithChildren {}

export function Page({ className, children }: PageProps) {
  return <div className={classNames(className, "flex-grow")}>{children}</div>;
}
