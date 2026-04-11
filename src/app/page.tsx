import { Heart } from "lucide-react";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import DetailsSection from "./components/DetailsSection";
import RSVPSection from "./components/RSVPSection";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <HeroSection />
      <CountdownSection />
      <DetailsSection />
      <RSVPSection />

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-white/[0.05]">
        <p className="text-white/15 text-xs flex items-center justify-center gap-1.5">
          Feito com{" "}
          <Heart className="w-3 h-3 fill-pink-500/30 text-pink-500/30" /> para
          a Luiza
        </p>
      </footer>
    </main>
  );
}
