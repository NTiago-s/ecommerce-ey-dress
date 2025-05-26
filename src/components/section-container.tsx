import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  idContainer?: string;
}

export default function SectionContainer({
  children,
  idContainer,
}: SectionContainerProps) {
  return (
    <section
      className="flex justify-center py-6 px-2 md:py-12 md:px-4"
      id={idContainer}
    >
      {children}
    </section>
  );
}
