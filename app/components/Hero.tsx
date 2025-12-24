"use client";

import { scrollToId } from "@/utils/scroll";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="top" className="bg-black w-full p-5 py-10 md:py-20">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col-reverse items-center">
        <div className="md:w-1/2 flex flex-col gap-3 items-baseline">
          <h1 className="flex flex-col text-[clamp(3rem,8vw,5rem)] leading-tight font-extrabold">
            <span>SIŁA</span>
            <span>ZACZYNA SIĘ</span>
            <span className="text-gold flex items-center gap-3">W GŁOWIE</span>
          </h1>
          <p className="text-lg text-gray-300">
            Profesjonalny trening personalny łączący ciało i umysł. Odkryj swoją prawdziwą siłę z doświadczonym
            trenerem.
          </p>
          <button
            onClick={() => scrollToId("contact")}
            aria-label="Umów trening"
            className="bg-[#c7b170] rounded-lg px-4 py-2 cursor-pointer hover:bg-[#d1ba7e] transition-smooth"
          >
            Umów trening
          </button>
        </div>
        <div className="md:w-1/2">
          <Image src="/mes.png" width={1200} height={1200} alt="Me" />
        </div>
      </div>
    </section>
  );
};
