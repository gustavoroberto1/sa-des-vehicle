"use client";

import { useState } from "react";
import "./style.css";


type Vehicle = {
  name: string;
  type: string;
  year: string;
  status: string;
};

export default function Produção() {

  const [vehicleName, setVehicleName] = useState("");
  const [vehicleType, setVehicleType] = useState("carro");
  const [manufactureYear, setManufactureYear] = useState("");
  const [productionStatus, setProductionStatus] = useState("em_producao");


  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newVehicle: Vehicle = {
      name: vehicleName,
      type: vehicleType,
      year: manufactureYear,
      status: productionStatus,
    };
    setVehicles([...vehicles, newVehicle]);

    setVehicleName("");
    setManufactureYear("");
    setProductionStatus("em_producao");
  };

  return (
    <div className="Container">
      <header>
        <h1>Produção de Veículos</h1>
      </header>

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
                  value={vehicleName}
                  onChange={(e) => setVehicleName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Tipo de Veículo</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option value="carro">Carro</option>
                  <option value="moto">Moto</option>
                  <option value="caminhao">Caminhão</option>
                </select>
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
                  value={manufactureYear}
                  onChange={(e) => setManufactureYear(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status de Produção</label>
                <select
                  id="status"
                  name="status"
                  value={productionStatus}
                  onChange={(e) => setProductionStatus(e.target.value)}
                >
                  <option value="em_producao">Em Produção</option>
                  <option value="pronto">Pronto</option>
                  <option value="entregue">Entregue</option>
                </select>
              </div>
            </div>
            <button type="submit">Registrar Veículo</button>
          </form>
        </section>

        <section className="vehicle-list">
          <h2>Veículos Produzidos</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Ano</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
