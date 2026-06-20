import type { Metadata } from "next";
import { Montserrat, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Polaris Industrie",
    default: "Polaris Industrie HOSP - Hygiène et Désinfection | Maroc",
  },
  description: "Leader marocain de l'hygiène et de la désinfection professionnelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", instrumentSans.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
