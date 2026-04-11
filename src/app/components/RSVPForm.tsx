"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Gift, Sparkles } from "lucide-react";

interface FormData {
  nome: string;
  telefone: string;
  acompanhantes: string;
  nomesAcompanhantes: string;
  mensagem: string;
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    acompanhantes: "0",
    nomesAcompanhantes: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const confirmations = JSON.parse(localStorage.getItem("cha-luiza-confirmations") || "[]");
    confirmations.push({ ...formData, confirmedAt: new Date().toISOString() });
    localStorage.setItem("cha-luiza-confirmations", JSON.stringify(confirmations));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blush-300 to-blush-400 flex items-center justify-center mx-auto shadow-lg shadow-blush-200/40">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </motion.div>
        <h3 className="font-script text-5xl text-blush-500 mb-4" style={{ textShadow: "0 2px 20px rgba(212,70,104,0.1)" }}>
          Confirmado!
        </h3>
        <p className="text-blush-700/50 text-lg mb-2">
          Obrigado, <span className="font-medium text-blush-600">{formData.nome}</span>
        </p>
        <p className="text-blush-400/60 text-sm flex items-center justify-center gap-2 mb-10">
          <Sparkles className="w-4 h-4" />
          Te esperamos com muito carinho!
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-blush-50 rounded-full border border-blush-200/40">
          <Gift className="w-4 h-4 text-blush-400" />
          <span className="text-blush-600/70 text-sm">
            Lembre-se: <span className="font-medium text-blush-600">fralda tamanho G</span>
          </span>
        </div>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-5 py-4 rounded-xl bg-cream-dark/50 border border-gold-200/30 focus:border-blush-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blush-200/40 transition-all duration-300 text-blush-800 placeholder-blush-300/40 text-base";

  const fields = [
    { id: "nome", label: "Nome completo", type: "text", autoComplete: "name", inputMode: undefined, placeholder: "Seu nome completo" },
    { id: "telefone", label: "WhatsApp", type: "tel", autoComplete: "tel", inputMode: "tel" as const, placeholder: "(00) 00000-0000" },
  ];

  return (
    <motion.form
      ref={ref}
      onSubmit={handleSubmit}
      className="space-y-7"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {fields.map((field, i) => (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        >
          <label htmlFor={field.id} className="block text-xs font-medium text-blush-600/60 mb-2 tracking-wide uppercase">
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            required
            autoComplete={field.autoComplete}
            inputMode={field.inputMode}
            enterKeyHint="next"
            value={formData[field.id as keyof FormData]}
            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
            className={inputClasses}
            placeholder={field.placeholder}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="acompanhantes" className="block text-xs font-medium text-blush-600/60 mb-2 tracking-wide uppercase">
          Acompanhantes
        </label>
        <select
          id="acompanhantes"
          name="acompanhantes"
          value={formData.acompanhantes}
          onChange={(e) => setFormData({ ...formData, acompanhantes: e.target.value })}
          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23d4a574%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
        >
          <option value="0">Somente eu</option>
          <option value="1">+1 acompanhante</option>
          <option value="2">+2 acompanhantes</option>
          <option value="3">+3 acompanhantes</option>
          <option value="4">+4 acompanhantes</option>
          <option value="5">+5 ou mais</option>
        </select>
      </motion.div>

      {formData.acompanhantes !== "0" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="nomesAcompanhantes" className="block text-xs font-medium text-blush-600/60 mb-2 tracking-wide uppercase">
            Nomes dos acompanhantes
          </label>
          <textarea
            id="nomesAcompanhantes"
            name="nomesAcompanhantes"
            rows={parseInt(formData.acompanhantes) > 2 ? 3 : 2}
            value={formData.nomesAcompanhantes}
            onChange={(e) => setFormData({ ...formData, nomesAcompanhantes: e.target.value })}
            className={`${inputClasses} resize-none`}
            placeholder={"Informe o nome de cada acompanhante\nEx: João, Maria"}
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="mensagem" className="block text-xs font-medium text-blush-600/60 mb-2 tracking-wide uppercase">
          Mensagem para a Luiza <span className="text-blush-300/40 normal-case">(opcional)</span>
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pt-3"
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-gold w-full py-4 sm:py-5 bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white font-medium rounded-xl shadow-xl shadow-blush-300/25 hover:shadow-blush-400/35 hover:scale-[1.02] transition-all duration-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base sm:text-lg cursor-pointer select-none tracking-wide"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Confirmando...
            </>
          ) : (
            <>
              Confirmar Presença
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
}
