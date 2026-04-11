import { Heart, MapPin, Clock, Calendar, Gift } from "lucide-react";
import RSVPForm from "./components/RSVPForm";
import FloatingElements from "./components/FloatingElements";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingElements />

      <div className="relative z-10 w-full max-w-md mx-auto px-4 py-8 sm:px-6 sm:py-12">
        {/* Header */}
        <header className="text-center mb-8 animate-fade-in-up">
          <div className="inline-block animate-float mb-2">
            <span className="text-6xl block">👶</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-xs tracking-[0.25em] uppercase font-medium">
              Chá de Bebê
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
          <h1 className="font-script text-fluid-hero text-pink-500 leading-none">
            Luiza
          </h1>
        </header>

        {/* Invitation Card */}
        <section className="bg-white/60 rounded-2xl shadow-lg shadow-pink-100/40 border border-pink-100/80 p-6 sm:p-8 mb-5 animate-fade-in-up delay-100">
          <p className="text-center text-pink-700/70 text-fluid-body leading-relaxed mb-6 italic">
            &ldquo;Pessoal, eu estou quase chegando!
            <br />
            Mamãe e papai estão esperando
            <br />
            por você para o meu chá de bebê!&rdquo;
          </p>

          {/* Event Details - stacked on mobile for clarity */}
          <div className="flex flex-col gap-3 mb-5">
            {/* Date & Time row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-b from-pink-50 to-pink-100/40 rounded-xl p-4 text-center border border-pink-200/40">
                <Calendar className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                <p className="text-[11px] text-pink-400 uppercase tracking-wider font-medium">
                  Sábado
                </p>
                <p className="text-fluid-number font-bold text-pink-600 leading-tight">
                  06
                </p>
                <p className="text-sm text-pink-500 font-medium">Junho</p>
              </div>
              <div className="bg-gradient-to-b from-pink-50 to-pink-100/40 rounded-xl p-4 text-center border border-pink-200/40">
                <Clock className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                <p className="text-[11px] text-pink-400 uppercase tracking-wider font-medium">
                  A partir das
                </p>
                <p className="text-fluid-number font-bold text-pink-600 leading-tight">
                  16h
                </p>
                <p className="text-sm text-pink-500 font-medium">Horas</p>
              </div>
            </div>

            {/* Location - full width */}
            <div className="bg-gradient-to-b from-pink-50 to-pink-100/40 rounded-xl p-4 text-center border border-pink-200/40 flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
              <div>
                <p className="text-[11px] text-pink-400 uppercase tracking-wider font-medium">
                  Local
                </p>
                <p className="text-lg font-bold text-pink-600">CLUBE CEEM</p>
              </div>
            </div>
          </div>

          {/* Gift reminder */}
          <div className="flex items-center justify-center gap-2.5 bg-rose-50/80 rounded-xl py-3 px-4 border border-rose-200/40">
            <Gift className="w-5 h-5 text-rose-400 flex-shrink-0" />
            <p className="text-rose-500 font-medium text-sm">
              Levar fralda tamanho G
            </p>
          </div>
        </section>

        {/* RSVP Form Card */}
        <section className="bg-white/60 rounded-2xl shadow-lg shadow-pink-100/40 border border-pink-100/80 p-6 sm:p-8 animate-fade-in-up delay-200">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              <h2 className="text-lg font-semibold text-pink-700">
                Confirme sua presença
              </h2>
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            </div>
            <p className="text-pink-400 text-xs">
              Preencha os dados abaixo para confirmar
            </p>
          </div>

          <RSVPForm />
        </section>

        {/* Footer */}
        <footer className="text-center mt-8 mb-2 animate-fade-in-up delay-300">
          <p className="text-pink-300 text-[11px] flex items-center justify-center gap-1">
            Feito com <Heart className="w-3 h-3 fill-pink-300" /> para a Luiza
          </p>
        </footer>
      </div>
    </main>
  );
}
