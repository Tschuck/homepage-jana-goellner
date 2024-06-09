import { PropsWithChildren } from "react";

export interface PageProps extends PropsWithChildren {}

export function Page({ children }: PageProps) {
  return <div>{children}</div>;
}
