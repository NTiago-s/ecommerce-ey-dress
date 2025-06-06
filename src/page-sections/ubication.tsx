import DynamicMap from "@/ui/dynamic-map";
import Title from "@/ui/title";

export default function Ubication() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl p-2 gap-4">
      <Title>Ubicación</Title>
      <DynamicMap />
    </div>
  );
}
