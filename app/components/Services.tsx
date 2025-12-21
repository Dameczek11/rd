import { Dumbbell, FileText, Video } from "lucide-react";
import { Title } from "./ui/Title";
import { ServiceCard } from "./ui/ServiceCard";

const services = [
  {
    icon: <Dumbbell className="text-gold w-8 h-8" />,
    title: "Treningi indywidualne",
    description:
      "Spersonalizowane sesje treningowe w klubie fitness lub Twoim domu. Pełna uwaga, profesjonalna opieka i maksymalne rezultaty.",
    features: ["Analiza składu ciała", "Dopasowany plan treningowy", "Monitorowanie postępów"],
    id: 0,
  },
  {
    icon: <FileText className="text-gold w-8 h-8" />,
    title: "Plany treningowe",
    description:
      "Szczegółowe programy treningowe dostosowane do Twoich celów i możliwości. Treningi możesz wykonywać samodzielnie, kiedy chcesz.",
    features: ["Instrukcje video do ćwiczeń", "Plan żywieniowy", "Cotygodniowa konsultacja"],
    id: 1,
  },
  {
    icon: <Video className="text-gold w-8 h-8" />,
    title: "Konsultacje online",
    description:
      "Profesjonalne wsparcie bez wychodzenia z domu. Analiza techniki, korekta planów i motywacja przez całą drogę do celu.",
    features: ["Konsultacje video na żywo", "Analiza nagrań treningowych", "Stały kontakt"],
    id: 2,
  },
];

export const Services = () => {
  return (
    <section id="services" className="w-full py-24 px-5 bg-black">
      <div className="max-w-7xl mx-auto">
        <Title>Oferta</Title>
        <div className="flex md:flex-row flex-col gap-10">
          {services.map(({ title, description, icon, features, id }) => (
            <ServiceCard title={title} description={description} features={features} icon={icon} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
