import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <section className="flex justify-center py-12 px-4">
      <div className="flex flex-col w-full max-w-screen-xl gap-4">
        {children}
      </div>
    </section>
  );
}
