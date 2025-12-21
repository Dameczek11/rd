import Image from "next/image";
import { Title } from "./ui/Title";

export const About = () => {
  return (
    <section id="about" className="w-full px-5 py-24 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <Title>O mnie</Title>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              className="rounded-2xl w-full h-auto object-cover aspect-square"
              src="/about.jpg"
              width={1000}
              height={1000}
              alt="About"
            />
          </div>

          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span>Radosław </span>
              <span className="text-gold">Dykiel</span>
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex flex-col gap-5 text-neutral-400">
              <span>
                Cześć! Jestem trenerem personalnym, który wierzy, że skuteczny trening to połączenie techniki,
                świadomości i motywacji. Specjalizuję się w pracy z osobami, które mają trudność z przybraniem na wadze
                – pomagam budować masę mięśniową, poprawiać proporcje sylwetki i ogólną sprawność.
              </span>
              <span>
                Każdy plan tworzę indywidualnie – tak, by był skuteczny, bezpieczny i dostosowany do Twoich możliwości.
                Moim celem jest, abyś czuł się silniejszy, pewniejszy siebie i zmotywowany każdego dnia.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
