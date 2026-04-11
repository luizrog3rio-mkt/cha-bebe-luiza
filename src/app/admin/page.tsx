"use client";

import { useState, useEffect } from "react";
import { Users, Phone, MessageCircle, Calendar, Trash2, Baby } from "lucide-react";

interface Confirmation {
  nome: string;
  telefone: string;
  acompanhantes: string;
  mensagem: string;
  confirmedAt: string;
}

export default function AdminPage() {
  const [confirmations, setConfirmations] = useState<Confirmation[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("cha-luiza-confirmations") || "[]"
    );
    setConfirmations(data);
  }, []);

  const totalPeople = confirmations.reduce(
    (acc, c) => acc + 1 + parseInt(c.acompanhantes || "0"),
    0
  );

  const handleDelete = (index: number) => {
    const updated = confirmations.filter((_, i) => i !== index);
    setConfirmations(updated);
    localStorage.setItem("cha-luiza-confirmations", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Baby className="w-10 h-10 text-pink-400 mx-auto mb-2" />
          <h1 className="text-3xl font-bold text-pink-700">
            Painel de Confirmações
          </h1>
          <p className="text-pink-400 mt-1">Chá de Bebê da Luiza</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 text-center">
            <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-pink-600">
              {confirmations.length}
            </p>
            <p className="text-sm text-pink-400">Confirmações</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 text-center">
            <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-pink-600">{totalPeople}</p>
            <p className="text-sm text-pink-400">Total de pessoas</p>
          </div>
        </div>

        {/* List */}
        {confirmations.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md border border-pink-100">
            <p className="text-pink-300 text-lg">
              Nenhuma confirmação ainda...
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {confirmations.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md border border-pink-100 p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-pink-700 text-lg">
                      {c.nome}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-pink-500">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        {c.telefone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {parseInt(c.acompanhantes) === 0
                          ? "Sozinho(a)"
                          : `+${c.acompanhantes} acompanhante(s)`}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(c.confirmedAt).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    {c.mensagem && (
                      <div className="mt-3 flex items-start gap-2 bg-pink-50 rounded-lg p-3">
                        <MessageCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                        <p className="text-pink-600 text-sm italic">
                          &ldquo;{c.mensagem}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-pink-300 hover:text-red-500 transition-colors p-1 cursor-pointer"
                    title="Remover confirmação"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
