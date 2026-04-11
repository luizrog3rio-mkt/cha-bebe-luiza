"use client";

import { useState } from "react";
import { Heart, Send, CheckCircle, Baby, MapPin, Clock, Calendar, Gift } from "lucide-react";

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
      <div className="text-center py-12 animate-fade-in-up">
        <div className="animate-pulse-soft inline-block mb-6">
          <CheckCircle className="w-20 h-20 text-pink-500 mx-auto" />
        </div>
        <h3 className="font-script text-4xl text-pink-600 mb-4">
          Presença Confirmada!
        </h3>
        <p className="text-beige-400 text-lg mb-2">
          Obrigado, <span className="font-semibold text-pink-500">{formData.nome}</span>!
        </p>
        <p className="text-beige-400">
          A Luiza e a família estão ansiosos para te ver!
        </p>
        <div className="mt-8 p-4 bg-pink-50 rounded-2xl border border-pink-200">
          <p className="text-pink-600 text-sm flex items-center justify-center gap-2">
            <Gift className="w-4 h-4" />
            Lembre-se: fralda tamanho G
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          required
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all bg-white/80 text-pink-900 placeholder-pink-300"
          placeholder="Digite seu nome"
        />
      </div>

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
          required
          value={formData.telefone}
          onChange={(e) =>
            setFormData({ ...formData, telefone: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all bg-white/80 text-pink-900 placeholder-pink-300"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label
          htmlFor="acompanhantes"
          className="block text-sm font-medium text-pink-700 mb-1.5"
        >
          Quantidade de acompanhantes
        </label>
        <select
          id="acompanhantes"
          value={formData.acompanhantes}
          onChange={(e) =>
            setFormData({ ...formData, acompanhantes: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all bg-white/80 text-pink-900"
        >
          <option value="0">Somente eu</option>
          <option value="1">+1 acompanhante</option>
          <option value="2">+2 acompanhantes</option>
          <option value="3">+3 acompanhantes</option>
          <option value="4">+4 acompanhantes</option>
          <option value="5">+5 ou mais</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="mensagem"
          className="block text-sm font-medium text-pink-700 mb-1.5"
        >
          Deixe uma mensagem para a Luiza
        </label>
        <textarea
          id="mensagem"
          rows={3}
          value={formData.mensagem}
          onChange={(e) =>
            setFormData({ ...formData, mensagem: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all bg-white/80 text-pink-900 placeholder-pink-300 resize-none"
          placeholder="Escreva algo carinhoso... (opcional)"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-300/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg cursor-pointer"
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
