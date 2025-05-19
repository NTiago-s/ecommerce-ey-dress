import SectionContainer from "@/components/section-container";
import Contact from "@/page-sections/contact";

export default function About() {
  return (
    <section className="flex flex-col justify-center px-4 py-12 text-center">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Ey-Dress</strong>, creemos que la ropa no solo es una
          necesidad, sino una forma de expresión. Somos una tienda dedicada a
          ofrecer prendas modernas, cómodas y accesibles para todas las personas
          que buscan un estilo auténtico y versátil.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Nos apasiona la moda y trabajamos día a día para traer productos de
          calidad que se adapten a tu ritmo de vida. Desde bermudas casuales
          hasta futuras colecciones más completas, estamos en constante
          crecimiento para ofrecerte lo mejor.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Gracias por ser parte de esta comunidad. ¡Seguimos creciendo juntos!
        </p>
      </div>
      <SectionContainer>
        <Contact />
      </SectionContainer>
    </section>
  );
}
