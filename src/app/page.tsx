import About from "@/page-sections/about";
import Cards from "@/page-sections/cards";
import Contact from "@/page-sections/contact";
import Reviews from "@/page-sections/reviews";
import Ubication from "@/page-sections/ubication";

export default function Home() {
  return (
    <main>
      <About />
      <Cards />
      <Reviews />
      <Ubication />
      <Contact />
    </main>
  );
}
