import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radosław Dykiel - Trener Personalny",
  description: "Profesjonalny trener personalny.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} text-white`}>
        <Navbar />
        <div className="pt-[79.8px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
