import "./styles.css";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="redirection">
            <div>
                <button className="home">Início</button>
            </div>
            <div>
                <button className="estoque">Estoque</button>
            </div>
            <div>
                <button className="manutencao">Manutenção</button>
            </div>
            <div>
                <button className="producao">Produção</button>
            </div>
            <div>
                <button className="qualidade">Qualidade</button>
            </div>
        </div>
    </div>
  );
}
