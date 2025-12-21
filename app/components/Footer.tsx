"use client";

import { scrollToId } from "@/utils/scroll";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-neutral-700/70 py-24 p-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex w-1/2 flex-col md:flex-row justify-between items-start gap-8">
          <Image onClick={() => scrollToId("top")} src="/logo.png" width={100} height={100} alt="Logo" />
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Kontakt</h3>
            <p className="flex items-center gap-2 text-neutral-300">
              <Mail size={20} />
              radoslawdykieltp@gmail.com
            </p>
            <p className="flex items-center gap-2 text-neutral-300">
              <Phone size={20} />
              +48 798 966 496
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Śledź mnie</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="hover:text-[#c7b170] active:text-[#c7b170] transition-smooth" size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:text-[#c7b170] active:text-[#c7b170] transition-smooth" size={24} />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="hover:text-[#c7b170] active:text-[#c7b170] transition-smooth" size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="w-full text-neutral-700/70 my-8" />
        <p className="text-center text-neutral-400">
          Radosław Dykiel © {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};
