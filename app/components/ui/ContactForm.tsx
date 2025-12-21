export const ContactForm = () => {
  return (
    <form className="max-w-3xl mx-auto border border-neutral-700/70 p-6 bg-neutral-900 rounded-xl shadow-lg flex flex-col gap-6">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white font-semibold mb-1">
          Imię i nazwisko
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="np. Jan K"
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-400 transition"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-white font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="np. jank@gmail.com"
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-400 transition"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-white font-semibold mb-1">
          Numer telefonu
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="np. 123 456 789"
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-400 transition"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-white font-semibold mb-1">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Twoja wiadomość..."
          rows={5}
          className="px-4 border border-neutral-700/70 outline-0 focus:outline-2 outline-[#c7b170] py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-400 transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-[#c7b170] hover:bg-[#d1ba7e] font-semibold px-6 py-3 rounded-lg active:bg-[#d1ba7e] transition-smooth w-full md:w-auto cursor-pointer"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
};
