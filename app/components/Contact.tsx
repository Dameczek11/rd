import { Mail, MapPin, Phone } from "lucide-react";
import { Title } from "./ui/Title";
import { ContactForm } from "./ui/ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black/95 py-24 p-5">
      <div className="max-w-7xl mx-auto">
        <Title>Kontakt</Title>
        <div className="flex md:flex-row flex-col gap-10">
          <div className="md:w-4/6">
            <h3 className="text-4xl font-bold mb-6">Dane kontaktowe</h3>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#c7b170]/10 p-3 rounded-lg">
                  <Mail className="text-gold" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-neutral-400">radoslawdykieltp@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#c7b170]/10 p-3 rounded-lg">
                  <Phone className="text-gold" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-1">Numer telefonu</p>
                  <p className="text-neutral-400">+48 798 966 496</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#c7b170]/10 p-3 rounded-lg">
                  <MapPin className="text-gold" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-1">Lokalizacja</p>
                  <p className="text-neutral-400">Rzeszów, Polska</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
