'use client'

import { useEffect, useState, useRef } from "react";
import "./style.css";
import Cabecalho from "@/components/Cabecalho/pages";
import { API } from "@/services/api";

type veiculo = {
  modelo: string;
  cor: string;
  pneu: string;
  cambio: string;
  motor: string;
};

export default function Producao() {
  const [nomeVeiculo, setNomeVeiculo] = useState("");
  const [corVeiculo, setCorProducaoVeiculo] = useState("");
  const [pneuVeiculo, setPneuVeiculo] = useState("");
  const [cambioVeiculo, setCambioVeiculo] = useState("");
  const [motorVeiculo, setMotorVeiculo] = useState("");
  //----------------------------------------------------------//

  const [productionFromApi, setVehicles] = useState<veiculo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVehicle: veiculo = {
      modelo: nomeVeiculo,
      cor: corVeiculo,
      pneu: pneuVeiculo,
      cambio: cambioVeiculo,
      motor: motorVeiculo,
    };
    setVehicles([...productionFromApi, newVehicle]);


    setNomeVeiculo("");
    setCorProducaoVeiculo("");
    setPneuVeiculo("");
    setCambioVeiculo("");
    setMotorVeiculo("");
  };

  async function creatVeiculo() {

    try {
      const response = await API.post('/veiculos')
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function getProduction() {
    try {
      const response = await API.get("/veiculos");
      const data = response.data;

      const veiculosTratados = data.map((item: any) => {
        const estoqueMap: Record<string, string> = {};

        item.Veiculo_Estoque.forEach((e: any) => {
          estoqueMap[e.estoque.descricao.toLowerCase()] = e.estoque.marca;
        });

        return {
          modelo: item.modelo,
          cor: item.cor,
          pneu: estoqueMap["pneu"] || "",
          cambio: estoqueMap["cambio"] || "",
          motor: estoqueMap["motor"] || ""
        };
      });

      setVehicles(veiculosTratados);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
    }
  }

  useEffect(() => {
    getProduction();
  }, []);

  return (
    <div>
      <Cabecalho name="Produção" />
      <div className="producao">
        <main>
          <section>
            <h2 className="h2">Registrar Novo Veículo</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="name">Nome do Veículo</label>
                  <input
                    type="text"
                    id="name"
                    value={nomeVeiculo}
                    onChange={(e) => setNomeVeiculo(e.target.value)}
                  />
                </div>

                <div className="group-form">
                  <label htmlFor="cor">Cor do Veículo</label>
                  <select
                    id="cor"
                    name="cor"
                    value={corVeiculo}
                    onChange={(e) => setCorProducaoVeiculo(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="branco">Branco</option>
                    <option value="preto">Preto</option>
                    <option value="vermelho">Vermelho</option>
                    <option value="azul">Azul</option>
                    <option value="prata">Prata</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="pneus">Pneus</label>
                  <select
                    id="pneus"
                    name="pneu"
                    value={pneuVeiculo}
                    onChange={(e) => setPneuVeiculo(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="Goodyear">Goodyear</option>
                    <option value="Pirelli">Pirelli</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cambio">Câmbio</label>
                  <select
                    id="cambio"
                    name="cambio"
                    value={cambioVeiculo}
                    onChange={(e) => setCambioVeiculo(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="manual">Manual</option>
                    <option value="automatico">Automático</option>
                    <option value="CVT">CVT</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="motor">Motor</label>
                  <select
                    id="motor"
                    name="motor"
                    value={motorVeiculo}
                    onChange={(e) => setMotorVeiculo(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="1.0 turbo">1.0 Turbo</option>
                    <option value="1.4 turbo">1.4 Turbo</option>
                    <option value="1.8 flex">1.8 Flex</option>
                    <option value="2.0 flex">2.0 Flex</option>
                  </select>
                </div>
              </div>

              <button className="envia-producao" type="submit" onClick={creatVeiculo}>Enviar para Produção</button>
            </form>
          </section>

          <section className="vehicle-list">
            <h2 className="h2">Veículos Produzidos</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Cor</th>
                  <th>Pneu</th>
                  <th>Câmbio</th>
                  <th>Motor</th>
                </tr>
              </thead>
              <tbody>
                {productionFromApi.map((veiculo, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{veiculo.modelo}</td>
                    <td>{veiculo.cor}</td>
                    <td>{veiculo.pneu}</td>
                    <td>{veiculo.cambio}</td>
                    <td>{veiculo.motor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
