import { Heart, MapPin, Clock, Calendar, Gift } from "lucide-react";
import RSVPForm from "./components/RSVPForm";
import FloatingElements from "./components/FloatingElements";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingElements />

      <div className="relative z-10 max-w-lg mx-auto px-4 py-8">
        {/* Header - Baby illustration area */}
        <div className="text-center mb-6 animate-fade-in-up">
          <div className="inline-block animate-float">
            <div className="text-7xl mb-2">👶</div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-sm tracking-widest uppercase font-medium">
              Chá de Bebê
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
          <h1 className="font-script text-6xl text-pink-500 mb-3 drop-shadow-sm">
            Luiza
          </h1>
        </div>

        {/* Invitation Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-pink-200/30 border border-pink-100 p-8 mb-6 animate-fade-in-up delay-100">
          <p className="text-center text-pink-800/80 text-lg leading-relaxed mb-6 italic">
            &ldquo;Pessoal, eu estou quase chegando!
            <br />
            Mamãe e papai estão esperando por você
            <br />
            para o meu chá de bebê!&rdquo;
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-2xl p-4 text-center border border-pink-200/50">
              <Calendar className="w-5 h-5 text-pink-400 mx-auto mb-2" />
              <p className="text-xs text-pink-400 uppercase tracking-wider mb-1">
                Sábado
              </p>
              <p className="text-3xl font-bold text-pink-600">06</p>
              <p className="text-sm text-pink-500 font-medium">Junho</p>
            </div>
            <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-2xl p-4 text-center border border-pink-200/50">
              <Clock className="w-5 h-5 text-pink-400 mx-auto mb-2" />
              <p className="text-xs text-pink-400 uppercase tracking-wider mb-1">
                A partir das
              </p>
              <p className="text-3xl font-bold text-pink-600">16</p>
              <p className="text-sm text-pink-500 font-medium">Horas</p>
            </div>
            <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-2xl p-4 text-center border border-pink-200/50">
              <MapPin className="w-5 h-5 text-pink-400 mx-auto mb-2" />
              <p className="text-xs text-pink-400 uppercase tracking-wider mb-1">
                Local
              </p>
              <p className="text-lg font-bold text-pink-600 leading-tight">
                CLUBE
              </p>
              <p className="text-sm text-pink-500 font-medium">CEEM</p>
            </div>
          </div>

          {/* Gift reminder */}
          <div className="flex items-center justify-center gap-2 bg-rose-50 rounded-xl py-3 px-4 border border-rose-200/50">
            <Gift className="w-5 h-5 text-rose-400 flex-shrink-0" />
            <p className="text-rose-500 font-medium text-sm">
              Levar fralda tamanho G
            </p>
          </div>
        </div>

        {/* RSVP Form Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-pink-200/30 border border-pink-100 p-8 animate-fade-in-up delay-200">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
              <h2 className="text-xl font-semibold text-pink-700">
                Confirme sua presença
              </h2>
              <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            </div>
            <p className="text-pink-400 text-sm">
              Preencha os dados abaixo para confirmar
            </p>
          </div>

          <RSVPForm />
        </div>

        {/* Footer */}
        <div className="text-center mt-8 mb-4 animate-fade-in-up delay-300">
          <p className="text-pink-300 text-xs flex items-center justify-center gap-1">
            Feito com <Heart className="w-3 h-3 fill-pink-300" /> para a Luiza
          </p>
        </div>
      </div>
    </main>
  );
}
