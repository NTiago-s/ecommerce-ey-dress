import SectionContainer from "@/components/section-container";
import DynamicMap from "@/ui/dynamic-map";
import Title from "@/ui/title";

export default function ContactPage() {
  return (
    <SectionContainer>
      <Title>Ubicación</Title>
      <DynamicMap />
    </SectionContainer>
  );
}
