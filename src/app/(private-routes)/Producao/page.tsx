"use client";

import { useState } from "react";
import "./style.css";
import Cabecalho from "@/components/Cabecalho/pages";


type Vehicle = {
  name: string;
  year: string;
  cor: string;
  pneu: string;
  cambio: string;
  motor: string;
};

export default function Produção() {

  const [nomeVeiculo, setNomeVeiculo] = useState("");
  const [anoVeiculo, setAnoVeiculo] = useState("");
  const [corVeiculo, setCorProducaoVeiculo] = useState("Cor");
  const [pneuVeiculo, setPneuVeiculo] = useState("Cor");
  const [cambioVeiculo, setCambioVeiculo] = useState("Cor");
  const [motorVeiculo, setMotorVeiculo] = useState("Cor");


  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newVehicle: Vehicle = {
      name: nomeVeiculo,
      year: anoVeiculo,
      cor: corVeiculo,
      pneu: pneuVeiculo,
      cambio: cambioVeiculo,
      motor: motorVeiculo
    };
    setVehicles([...vehicles, newVehicle]);

    setNomeVeiculo("");
    setAnoVeiculo("");
    setCorProducaoVeiculo("");
    setPneuVeiculo("");
    setCambioVeiculo("");
    setMotorVeiculo("")
  };

  return (
    <div className="Container">
     <Cabecalho name=" Produção"/>
      <main>
        <section>
          <h2>Registrar Novo Veículo</h2>
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
              
              <div className="form-group">
                <label htmlFor="year">Ano de Fabricação</label>
                <input
                  type="number"
                  name="ano"
                  min="1900"
                  max="9999"
                  step="1"
                  placeholder="Digite o ano"
                  value={anoVeiculo}
                  onChange={(e) => setAnoVeiculo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cor">Cor do Veiculo</label>
                <select
                  id="cor"
                  name="cor"
                  value={corVeiculo}
                  onChange={(e) => setCorProducaoVeiculo(e.target.value)}
                >
                  <option value=""></option>
                  <option value="branco">Branco</option>
                  <option value="preto">Preto</option>
                  <option value="vermelho">Vermelho</option>
                  <option value="azul">Azul</option>
                  <option value="prata">Prata</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Pneus">Pneus</label>
                <select
                  id="pneus"
                  name="pneu"
                  value={pneuVeiculo}
                  onChange={(e) => setPneuVeiculo(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Goodyear">Goodyear</option>
                  <option value="Pirelli">Pirelli</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cambio">Cambio</label>
                <select
                  id="cambio"
                  name="cambio"
                  value={cambioVeiculo}
                  onChange={(e) => setCambioVeiculo(e.target.value)}
                >
                  <option value=""></option>
                  <option value="manual">Manual</option>
                  <option value="Automatico">Automatico</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="Motor">motor</label>
                <select
                  id="motor"
                  name="motor"
                  value={motorVeiculo}
                  onChange={(e) => setMotorVeiculo(e.target.value)}
                >
                  <option value=""></option>
                  <option value="1.0 turbo">1.0 Turbo</option>
                  <option value="1.4 turbo">1.4 Turbo</option>
                  <option value="1.8 flex">1.8 flex</option>
                  <option value="2.0 flex">2.0 flex</option> 
                </select>
              </div>
            </div>
            <button type="submit">Enviar para Produção</button>
          </form>
        </section>

        <section className="vehicle-list">
          <h2>Veículos Produzidos</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Pneu</th>
                <th>Câmbio</th>
                <th>Motor</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.cor}</td>
                  <td>{vehicle.pneu}</td>
                  <td>{vehicle.cambio}</td>
                  <td>{vehicle.motor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
