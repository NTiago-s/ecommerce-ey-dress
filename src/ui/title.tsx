import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}
export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={`${className} text-xl md:text-4xl text-balance font-semibold underline`}
    >
      {children}
    </h1>
  );
}
