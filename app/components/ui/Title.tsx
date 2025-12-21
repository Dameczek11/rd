import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">{children}</h2>
      <div className="bg-gold p-0.5 w-30"></div>
    </div>
  );
};
