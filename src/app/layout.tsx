import type { Metadata, Viewport } from "next";
import { Poppins, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#fdfaf6",
};

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
      className={`${poppins.variable} ${dancingScript.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
