import { MapPin, Clock, Calendar, Gift, ChevronDown, Heart } from "lucide-react";
import RSVPForm from "./components/RSVPForm";
import FloatingElements from "./components/FloatingElements";
import Countdown from "./components/Countdown";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <FloatingElements />

      {/* ========== HERO SECTION ========== */}
      <section className="hero-gradient min-h-screen flex flex-col items-center justify-center relative px-6">
        <div className="text-center max-w-lg mx-auto">
          <div className="animate-float mb-8">
            <span className="text-7xl sm:text-8xl block">👶</span>
          </div>

          <p className="text-pink-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Chá de Bebê
          </p>

          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-pink-500 leading-none mb-8">
            Luiza
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xs mx-auto mb-12">
            Pessoal, eu estou quase chegando!
            <br />
            Mamãe e papai estão esperando por você.
          </p>

          <a
            href="#confirmar"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium rounded-full shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 hover:from-pink-600 hover:to-rose-500 transition-all duration-300 text-base"
          >
            Confirmar Presença
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <ChevronDown className="w-6 h-6 text-pink-300" />
        </div>
      </section>

      {/* ========== COUNTDOWN SECTION ========== */}
      <section className="py-20 sm:py-28 px-6 bg-white">
        <ScrollReveal className="max-w-lg mx-auto text-center">
          <p className="text-pink-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Contagem regressiva
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-12">
            Falta pouco!
          </h2>
          <Countdown />
        </ScrollReveal>
      </section>

      {/* ========== EVENT DETAILS SECTION ========== */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="max-w-lg mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-pink-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Detalhes
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Quando e onde?
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-5">
            {/* Date */}
            <div className="bg-white rounded-2xl p-7 sm:p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-pink-500" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
                Data
              </p>
              <p className="text-3xl font-bold text-gray-800">06</p>
              <p className="text-sm text-gray-500 mt-1">Junho, Sábado</p>
            </div>

            {/* Time */}
            <div className="bg-white rounded-2xl p-7 sm:p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-pink-500" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
                Horário
              </p>
              <p className="text-3xl font-bold text-gray-800">16h</p>
              <p className="text-sm text-gray-500 mt-1">A partir das</p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-7 sm:p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-pink-500" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
                Local
              </p>
              <p className="text-3xl font-bold text-gray-800">Clube</p>
              <p className="text-sm text-gray-500 mt-1">CEEM</p>
            </div>
          </ScrollReveal>

          {/* Gift reminder */}
          <ScrollReveal className="mt-10">
            <div className="flex items-center justify-center gap-3 px-6 py-5 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-pink-100">
              <Gift className="w-5 h-5 text-pink-500 flex-shrink-0" />
              <p className="text-gray-600 text-sm sm:text-base">
                Pedimos para levar{" "}
                <span className="font-semibold text-pink-600">
                  fralda tamanho G
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== RSVP SECTION ========== */}
      <section
        id="confirmar"
        className="py-20 sm:py-28 px-6 bg-white scroll-mt-8"
      >
        <div className="max-w-md mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-pink-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
              RSVP
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
              Confirme sua presença
            </h2>
            <p className="text-gray-400 text-sm">
              Preencha o formulário abaixo
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-gray-100 shadow-lg shadow-pink-100/30">
              <RSVPForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-6 bg-pink-50/50 text-center">
        <p className="text-gray-300 text-xs flex items-center justify-center gap-1.5">
          Feito com{" "}
          <Heart className="w-3 h-3 fill-pink-300 text-pink-300" /> para a
          Luiza
        </p>
      </footer>
    </>
  );
}
