import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <section className="rounded-xl w-full flex flex-col items-center justify-center">
      {children}
    </section>
  );
}
