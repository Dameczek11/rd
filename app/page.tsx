import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}
