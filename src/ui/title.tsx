import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}
export default function Title({ children }: TitleProps) {
  return (
    <h1 className="text-4xl text-balance text-primary-txt ont-semibold underline">
      {children}
    </h1>
  );
}
