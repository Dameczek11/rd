import { scrollToId } from "@/utils/scroll";
import { motion } from "framer-motion";

interface NavigationItems {
  title: string;
  href: string;
}

interface MobileNavProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: NavigationItems[];
}

export const MobileNav = ({ setIsOpen, navigation }: MobileNavProps) => {
  return (
    <motion.nav
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed z-99 w-full h-screen pt-[102px] bg-black p-5 md:hidden"
    >
      <div className="flex flex-col gap-3">
        {navigation.map(({ title, href }, index) => (
          <button
            aria-label={`Przewiń do sekcji ${href}`}
            className="active:text-[#c7b170] text-lg cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              scrollToId(href);
            }}
            key={index}
          >
            {title}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};
