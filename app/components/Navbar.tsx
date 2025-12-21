"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./ui/MobileNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { scrollToId } from "@/utils/scroll";

export const Navbar = () => {
  const navigation = [
    {
      title: "Home",
      href: "top",
    },
    {
      title: "O mnie",
      href: "about",
    },
    {
      title: "Oferta",
      href: "services",
    },
    {
      title: "Kontakt",
      href: "contact",
      featured: true,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 bg-black p-3 w-full border-b border-neutral-700/70 z-100">
        <div className="flex items-center justify-between mx-auto max-w-352">
          <Link href="/">
            <Image src="/logo.png" width={55} height={55} alt="Logo" loading="eager" />
          </Link>
          <div className="items-center gap-5 hidden md:flex">
            {navigation.map(({ title, href, featured }, index) => (
              <button
                aria-label="Przejdź do sekcji kontakt"
                onClick={() => scrollToId(href)}
                className={`transition-smooth ${
                  featured ? "bg-[#c7b170] hover:bg-[#d1ba7e] px-5 py-2 rounded-lg" : "hover:text-[#c7b170]"
                } cursor-pointer`}
                key={index}
              >
                {title}
              </button>
            ))}
          </div>
          <button aria-label="Otwórz menu" onClick={() => setIsOpen((prev) => !prev)} className="md:hidden block">
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </header>
      <AnimatePresence>{isOpen && <MobileNav setIsOpen={setIsOpen} navigation={navigation} />}</AnimatePresence>
    </>
  );
};
