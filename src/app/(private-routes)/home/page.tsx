"use client";

import Cabecalho from "@/components/Cabecalho/pages";
import ReactECharts from "echarts-for-react";

export default function Home() {
  const option = {
    title: {
      text: "Qualidade Veiculos velocis",
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
          { value: 1048, name: "Veiculos Aprovados" },
          { value: 735, name: "Veiculos Reprovados" },
          { value: 780, name: "Total Produzidos" },
          { value: 584, name: "Total inspencionados" }
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
      <div className="mt-6">
        <ReactECharts option={option} />
      </div>
    </div>
  );
}
