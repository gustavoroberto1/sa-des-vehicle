"use client";

import Cabecalho from "@/components/Cabecalho/pages";
import { API } from "@/services/api";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

type Veiculo = {
  aprovado: boolean;
  
};

export default function Home() {
  const [totalProduzidos, setTotalProduzidos] = useState(0);
  const [aprovados, setTotalAprovados] = useState(0);
  const [reprovados, setTotalReprovados] = useState(0);

  useEffect(() => {
    async function buscaDados() {
      try {
        const response = await API.get("/veiculos");
        const data:Veiculo[] = response.data;
        setTotalProduzidos(data.length); 
        setTotalAprovados(data.filter(e => e.aprovado === true).length); 
        setTotalReprovados(data.filter(e => e.aprovado === false).length); 
      } catch (error) {
        console.error("Erro ao buscar dados dos veículos:", error);
      }
    }

    buscaDados();
  }, []);

  const option = {
    title: {
      text: "Qualidade Veículos Velocis",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Categorias",
        type: "pie",
        radius: "50%",
        data: [
          { value: aprovados, name: "Veículos Aprovados" },
          { value: reprovados, name: "Veículos Reprovados" },
          { value: totalProduzidos, name: "Total Produzidos" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="container p-4">
      <Cabecalho name="Home" />
      <div className="mt-6">
        <ReactECharts option={option} />
      </div>
    </div>
  );
}