"use client";

import { useState, FormEvent } from "react";

export const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Wysyłanie...");

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "5b02de90-13ae-48dc-a623-b55d30277146");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Wiadomość wysłana pomyślnie!");
        form.reset();
      } else {
        setResult("Wystąpił błąd. Spróbuj ponownie.");
      }
    } catch (error) {
      console.error(error);
      setResult("Wystąpił błąd sieci. Spróbuj ponownie.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto border border-neutral-700/70 p-6 bg-neutral-900 rounded-2xl shadow-lg flex flex-col gap-6"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white font-semibold mb-2">
          Imię i nazwisko
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="np. Jan K"
          required
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-xl bg-neutral-800 text-white placeholder-neutral-400 transition"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-white font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="np. jank@gmail.com"
          required
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-xl bg-neutral-800 text-white placeholder-neutral-400 transition"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="text-white font-semibold mb-2">
          Numer telefonu
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="np. 123 456 789"
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-xl bg-neutral-800 text-white placeholder-neutral-400 transition"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-white font-semibold mb-2">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Twoja wiadomość..."
          required
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-xl bg-neutral-800 text-white placeholder-neutral-400 transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-[#c7b170] hover:bg-[#d1ba7e] font-semibold px-6 py-3 rounded-xl active:bg-[#d1ba7e] transition-smooth w-full md:w-auto cursor-pointer"
      >
        Wyślij wiadomość
      </button>

      {result && <span className="text-white text-center mt-2">{result}</span>}
    </form>
  );
};
