"use client";

import { useState } from "react";
import estilos from "./styles.module.css";
import Cabecalho from "@/components/Cabecalho/pages";

type StatusVeiculo = "aprovado" | "reprovado";

interface Veiculo {
  id: string;
  modelo: string;
  dataProducao: string;
  status: StatusVeiculo;
}

const listaVeiculos: Veiculo[] = [
  {
    id: "V001",
    modelo: "SUV Z5",
    dataProducao: "2025-05-16",
    status: "aprovado",
  },
  {
    id: "V002",
    modelo: "Sedan X1",
    dataProducao: "2025-05-15",
    status: "reprovado",
  },
  {
    id: "V003",
    modelo: "Hatch G3",
    dataProducao: "2025-05-15",
    status: "aprovado",
  },
  {
    id: "V004",
    modelo: "Crossover A2",
    dataProducao: "2025-05-14",
    status: "reprovado",
  },
];

export default function Qualidade() {
  const [abaSelecionada, setAbaSelecionada] = useState<
    "todos" | "aprovado" | "reprovado"
  >("todos");

  const veiculosFiltrados =
    abaSelecionada === "todos"
      ? listaVeiculos
      : listaVeiculos.filter((v) => v.status === abaSelecionada);

  return (
    <div>
      <Cabecalho name="Qualidade" />
      <div className={estilos.container}>
        <div className={estilos.abas}>
          <div
            onClick={() => setAbaSelecionada("todos")}
            className={`${estilos.aba} ${
              abaSelecionada === "todos" && estilos.abaSelecionada
            }`}
          >
            Todos
          </div>
          <div
            onClick={() => setAbaSelecionada("aprovado")}
            className={`${estilos.aba} ${
              abaSelecionada === "aprovado" && estilos.abaSelecionada
            }`}
          >
            Aprovados
          </div>
          <div
            onClick={() => setAbaSelecionada("reprovado")}
            className={`${estilos.aba} ${
              abaSelecionada === "reprovado" && estilos.abaSelecionada
            }`}
          >
            Reprovados
          </div>
        </div>

        <div className={estilos.conteudo}>
          {veiculosFiltrados.length === 0 ? (
            <p>Nenhum veículo encontrado.</p>
          ) : (
            <ul className={estilos.listaVeiculos}>
              {veiculosFiltrados.map((veiculo) => (
                <li key={veiculo.id} className={estilos.itemVeiculo}>
                  <strong>{veiculo.modelo}</strong> — {veiculo.dataProducao} —
                  <span
                    className={
                      veiculo.status === "aprovado"
                        ? estilos.aprovado
                        : estilos.reprovado
                    }
                  >
                    {veiculo.status === "aprovado" ? "Aprovado" : "Reprovado"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
