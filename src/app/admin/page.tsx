"use client";

import { useState, useEffect } from "react";
import { Users, Phone, MessageCircle, Calendar, Trash2, Baby, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Confirmation {
  id: string;
  nome: string;
  telefone: string;
  acompanhantes: string;
  nomes_acompanhantes?: string;
  mensagem: string;
  created_at: string;
}

export default function AdminPage() {
  const [confirmations, setConfirmations] = useState<Confirmation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("confirmacoes")
      .select("*")
      .order("created_at", { ascending: false });
    setConfirmations(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPeople = confirmations.reduce(
    (acc, c) => acc + 1 + parseInt(c.acompanhantes || "0"),
    0
  );

  const handleDelete = async (id: string) => {
    await supabase.from("confirmacoes").delete().eq("id", id);
    setConfirmations(confirmations.filter((c) => c.id !== id));
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
          <button
            onClick={fetchData}
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-pink-400 hover:text-pink-600 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Atualizar
          </button>
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
        {loading ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md border border-pink-100">
            <div className="w-6 h-6 border-2 border-pink-300 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-pink-300">Carregando...</p>
          </div>
        ) : confirmations.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md border border-pink-100">
            <p className="text-pink-300 text-lg">
              Nenhuma confirmação ainda...
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {confirmations.map((c) => (
              <div
                key={c.id}
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
                        {new Date(c.created_at).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    {c.nomes_acompanhantes && (
                      <div className="mt-3 flex items-start gap-2 bg-purple-50 rounded-lg p-3">
                        <Users className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <p className="text-purple-600 text-sm">
                          {c.nomes_acompanhantes}
                        </p>
                      </div>
                    )}
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
                    onClick={() => handleDelete(c.id)}
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
