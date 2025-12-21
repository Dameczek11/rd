"use client";

import { scrollToId } from "@/utils/scroll";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <div className="group p-8 bg-[#0d0d0d] border border-neutral-700/70 rounded-2xl flex flex-col justify-between w-full hover:border-[#c7b170] active:border-[#c7b170] transition-smooth">
      <div className="flex flex-col items-baseline">
        <div className="p-4 mb-6 bg-[#c7b170]/10 group-hover:bg-[#c7b170]/20 group-active:bg-[#c7b170]/20 rounded-lg transition-smooth">
          {icon}
        </div>
        <h3 className="text-4xl font-bold mb-4 group-hover:text-[#c7b170] group-active:text-[#c7b170] transition-smooth">
          {title}
        </h3>
        <p className="leading-relaxed mb-6 text-neutral-400">{description}</p>
        <ul className="flex flex-col gap-3 mb-8">
          {features.map((feature, index) => (
            <li className="flex items-center gap-2 text-neutral-400" key={index}>
              <span className="bg-gold w-1.5 h-1.5 shrink-0 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => scrollToId("contact")}
        aria-label="Dowiedz się więcej"
        className="w-full p-3 border border-[#c7b170] rounded-lg text-[#c7b170] hover:bg-[#c7b170] active:bg-[#c7b170] active:text-white hover:text-white transition-smooth cursor-pointer"
      >
        Dowiedz się więcej
      </button>
    </div>
  );
};
