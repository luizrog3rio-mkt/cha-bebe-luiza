import { Heart, MapPin, Clock, Calendar, Gift } from "lucide-react";
import RSVPForm from "./components/RSVPForm";
import FloatingElements from "./components/FloatingElements";

export default function Home() {
  return (
    <main className="min-h-dvh relative">
      <FloatingElements />

      <div className="relative z-10 w-full max-w-lg mx-auto px-5 sm:px-6 py-6 sm:py-10 safe-area-padding">
        {/* Header */}
        <header className="text-center mb-5 sm:mb-8 animate-fade-in-up">
          <div className="inline-block animate-float">
            <div className="text-6xl sm:text-7xl mb-1">👶</div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
              Chá de Bebê
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
          <h1 className="font-script text-fluid-hero text-pink-500 drop-shadow-sm leading-tight">
            Luiza
          </h1>
        </header>

        {/* Invitation Card */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl shadow-pink-200/30 border border-pink-100 p-5 sm:p-8 mb-5 sm:mb-6 animate-fade-in-up delay-100">
          <p className="text-center text-pink-800/80 text-fluid-body leading-relaxed mb-5 sm:mb-6 italic">
            &ldquo;Pessoal, eu estou quase chegando!
            <br />
            Mamãe e papai estão esperando
            <br />
            por você para o meu chá de bebê!&rdquo;
          </p>

          {/* Event Details - responsive grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
            <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-pink-200/50">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mx-auto mb-1.5" />
              <p className="text-[10px] sm:text-xs text-pink-400 uppercase tracking-wider mb-0.5">
                Sábado
              </p>
              <p className="text-fluid-detail font-bold text-pink-600">06</p>
              <p className="text-xs sm:text-sm text-pink-500 font-medium">
                Junho
              </p>
            </div>
            <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-pink-200/50">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mx-auto mb-1.5" />
              <p className="text-[10px] sm:text-xs text-pink-400 uppercase tracking-wider mb-0.5">
                A partir das
              </p>
              <p className="text-fluid-detail font-bold text-pink-600">16</p>
              <p className="text-xs sm:text-sm text-pink-500 font-medium">
                Horas
              </p>
            </div>
            <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-pink-200/50">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mx-auto mb-1.5" />
              <p className="text-[10px] sm:text-xs text-pink-400 uppercase tracking-wider mb-0.5">
                Local
              </p>
              <p className="text-base sm:text-lg font-bold text-pink-600 leading-tight">
                CLUBE
              </p>
              <p className="text-xs sm:text-sm text-pink-500 font-medium">
                CEEM
              </p>
            </div>
          </div>

          {/* Gift reminder */}
          <div className="flex items-center justify-center gap-2 bg-rose-50 rounded-xl py-3 px-4 border border-rose-200/50">
            <Gift className="w-5 h-5 text-rose-400 flex-shrink-0" />
            <p className="text-rose-500 font-medium text-sm">
              Levar fralda tamanho G
            </p>
          </div>
        </section>

        {/* RSVP Form Card */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl shadow-pink-200/30 border border-pink-100 p-5 sm:p-8 animate-fade-in-up delay-200">
          <div className="text-center mb-5 sm:mb-6">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 fill-pink-400" />
              <h2 className="text-lg sm:text-xl font-semibold text-pink-700">
                Confirme sua presença
              </h2>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 fill-pink-400" />
            </div>
            <p className="text-pink-400 text-xs sm:text-sm">
              Preencha os dados abaixo para confirmar
            </p>
          </div>

          <RSVPForm />
        </section>

        {/* Footer */}
        <footer className="text-center mt-6 sm:mt-8 mb-4 animate-fade-in-up delay-300">
          <p className="text-pink-300 text-xs flex items-center justify-center gap-1">
            Feito com <Heart className="w-3 h-3 fill-pink-300" /> para a Luiza
          </p>
        </footer>
      </div>
    </main>
  );
}
