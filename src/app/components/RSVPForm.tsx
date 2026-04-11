"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Gift, PartyPopper } from "lucide-react";

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

    await new Promise((resolve) => setTimeout(resolve, 1500));

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
      <div className="text-center py-10 reveal visible">
        <div className="animate-pulse-soft inline-block mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center mx-auto shadow-lg shadow-pink-300/30">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="font-script text-4xl sm:text-5xl text-pink-600 mb-4">
          Confirmado!
        </h3>
        <p className="text-gray-500 text-lg mb-1">
          Obrigado,{" "}
          <span className="font-semibold text-pink-500">{formData.nome}</span>
        </p>
        <p className="text-gray-400 text-sm flex items-center justify-center gap-1.5 mb-8">
          <PartyPopper className="w-4 h-4" />
          Te esperamos com muito carinho!
        </p>
        <div className="inline-flex items-center gap-2 px-5 py-3 bg-pink-50 rounded-full border border-pink-100">
          <Gift className="w-4 h-4 text-pink-500" />
          <span className="text-pink-600 text-sm font-medium">
            Lembre-se: fralda tamanho G
          </span>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-3 focus:ring-pink-100 transition-all bg-white text-gray-800 placeholder-gray-300 text-base";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-600 mb-2">
          Nome completo
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
          className={inputClasses}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-600 mb-2">
          WhatsApp
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
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          className={inputClasses}
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label htmlFor="acompanhantes" className="block text-sm font-medium text-gray-600 mb-2">
          Acompanhantes
        </label>
        <select
          id="acompanhantes"
          name="acompanhantes"
          value={formData.acompanhantes}
          onChange={(e) => setFormData({ ...formData, acompanhantes: e.target.value })}
          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
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
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-600 mb-2">
          Mensagem para a Luiza{" "}
          <span className="text-gray-300 font-normal">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          enterKeyHint="done"
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className={`${inputClasses} resize-none`}
          placeholder="Escreva algo carinhoso..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 text-base cursor-pointer select-none"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Confirmando...
          </>
        ) : (
          <>
            Confirmar Presença
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
