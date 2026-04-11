import { Heart } from "lucide-react";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import DetailsSection from "./components/DetailsSection";
import RSVPSection from "./components/RSVPSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <HeroSection />
      <CountdownSection />
      <DetailsSection />
      <RSVPSection />

      <footer className="py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold-300/30" />
          <div className="w-1 h-1 rounded-full bg-gold-300/30" />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold-300/30" />
        </div>
        <p className="text-blush-300/40 text-[10px] flex items-center justify-center gap-1.5 tracking-wider uppercase">
          Feito com <Heart className="w-2.5 h-2.5 fill-blush-300/40 text-blush-300/40" /> para a Luiza
        </p>
      </footer>
    </main>
  );
}
