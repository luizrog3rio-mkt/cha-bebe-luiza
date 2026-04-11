"use client";

import { useState } from "react";
import { Send, CheckCircle, Gift, PartyPopper } from "lucide-react";

interface FormData {
  nome: string;
  telefone: string;
  acompanhantes: string;
  mensagem: string;
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    acompanhantes: "0",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with Supabase later
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Save to localStorage for now
    const confirmations = JSON.parse(
      localStorage.getItem("cha-luiza-confirmations") || "[]"
    );
    confirmations.push({
      ...formData,
      confirmedAt: new Date().toISOString(),
    });
    localStorage.setItem(
      "cha-luiza-confirmations",
      JSON.stringify(confirmations)
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 sm:py-12 animate-fade-in-up">
        <div className="animate-pulse-soft inline-block mb-4 sm:mb-6">
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-pink-500 mx-auto" />
        </div>
        <h3 className="font-script text-3xl sm:text-4xl text-pink-600 mb-3">
          Presença Confirmada!
        </h3>
        <p className="text-pink-400 text-base sm:text-lg mb-1.5">
          Obrigado,{" "}
          <span className="font-semibold text-pink-500">{formData.nome}</span>!
        </p>
        <p className="text-pink-400 text-sm sm:text-base flex items-center justify-center gap-1.5">
          <PartyPopper className="w-4 h-4" />
          A Luiza e a família estão ansiosos para te ver!
        </p>
        <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 bg-pink-50 rounded-xl sm:rounded-2xl border border-pink-200">
          <p className="text-pink-600 text-sm flex items-center justify-center gap-2">
            <Gift className="w-4 h-4 flex-shrink-0" />
            Lembre-se: fralda tamanho G
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Nome */}
      <div>
        <label
          htmlFor="nome"
          className="block text-sm font-medium text-pink-700 mb-1.5"
        >
          Seu nome completo *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          autoComplete="name"
          enterKeyHint="next"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full px-4 py-3.5 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200/50 transition-all bg-white/80 text-pink-900 placeholder-pink-300 text-base"
          placeholder="Digite seu nome"
        />
      </div>

      {/* Telefone */}
      <div>
        <label
          htmlFor="telefone"
          className="block text-sm font-medium text-pink-700 mb-1.5"
        >
          WhatsApp / Telefone *
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          autoComplete="tel"
          inputMode="tel"
          enterKeyHint="next"
          value={formData.telefone}
          onChange={(e) =>
            setFormData({ ...formData, telefone: e.target.value })
          }
          className="w-full px-4 py-3.5 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200/50 transition-all bg-white/80 text-pink-900 placeholder-pink-300 text-base"
          placeholder="(00) 00000-0000"
        />
      </div>

      {/* Acompanhantes */}
      <div>
        <label
          htmlFor="acompanhantes"
          className="block text-sm font-medium text-pink-700 mb-1.5"
        >
          Quantidade de acompanhantes
        </label>
        <select
          id="acompanhantes"
          name="acompanhantes"
          value={formData.acompanhantes}
          onChange={(e) =>
            setFormData({ ...formData, acompanhantes: e.target.value })
          }
          className="w-full px-4 py-3.5 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200/50 transition-all bg-white/80 text-pink-900 text-base appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23ec4899%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
        >
          <option value="0">Somente eu</option>
          <option value="1">+1 acompanhante</option>
          <option value="2">+2 acompanhantes</option>
          <option value="3">+3 acompanhantes</option>
          <option value="4">+4 acompanhantes</option>
          <option value="5">+5 ou mais</option>
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label
          htmlFor="mensagem"
          className="block text-sm font-medium text-pink-700 mb-1.5"
        >
          Deixe uma mensagem para a Luiza
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          enterKeyHint="done"
          value={formData.mensagem}
          onChange={(e) =>
            setFormData({ ...formData, mensagem: e.target.value })
          }
          className="w-full px-4 py-3.5 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200/50 transition-all bg-white/80 text-pink-900 placeholder-pink-300 resize-none text-base"
          placeholder="Escreva algo carinhoso... (opcional)"
        />
      </div>

      {/* Submit Button - min 48px height for touch target */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[52px] py-3.5 sm:py-4 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-300/40 transition-all duration-200 active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 text-base sm:text-lg cursor-pointer select-none"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Confirmando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Confirmar Presença
          </>
        )}
      </button>
    </form>
  );
}
