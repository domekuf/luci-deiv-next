import { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-5xl md:text-6xl">{children}</h1>;
}
