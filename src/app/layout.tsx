import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chá de Bebê da Luiza",
  description:
    "Confirme sua presença no chá de bebê da Luiza! Sábado, 06 de Junho, a partir das 16h no Clube CEEM.",
  openGraph: {
    title: "Chá de Bebê da Luiza",
    description:
      "Pessoal, eu estou quase chegando! Mamãe e papai estão esperando por você para o meu chá de bebê!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
