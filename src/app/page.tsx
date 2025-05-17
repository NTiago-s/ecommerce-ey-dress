import SectionContainer from "@/components/section-container";
import Products from "@/page-sections/products";
import Contact from "@/page-sections/contact";
import Reviews from "@/page-sections/reviews";
import Ubication from "@/page-sections/ubication";

export default function Home() {
  return (
    <main>
      <SectionContainer idContainer="Products">
        <Products />
      </SectionContainer>
      <SectionContainer idContainer="Reviews">
        <Reviews />
      </SectionContainer>
      <SectionContainer idContainer="Ubication">
        <Ubication />
      </SectionContainer>
      <SectionContainer idContainer="Contact">
        <Contact />
      </SectionContainer>
    </main>
  );
}
