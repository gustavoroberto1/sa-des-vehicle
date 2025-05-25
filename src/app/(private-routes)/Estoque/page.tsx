"use client";

import "./style.css";
import RenderConteudo from "@/components/Conteudo";
import Cabecalho from "@/components/Cabecalho/pages";

export default function Estoque() {
  return (
    <div>
      <div>
        <Cabecalho name="Estoque" />
      </div>
      <div className="conteudo-texto">
        <RenderConteudo />
      </div>
    </div>
  );
}
