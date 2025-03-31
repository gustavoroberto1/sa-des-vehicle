import "./styles.css";

export function TopMenu() {
    return (
        <div className="container">
            <div className="content">
            <div className="item">
                    <span>Home</span>
                </div>
                <div className="item">
                    <span>Manutenção</span>
                </div>
                <div className="item">
                    <span>Qualidade</span>
                </div>
                <div className="item">
                    <span>Produção</span>
                </div>
                <div className="item">
                    <span>Estoque</span>
                </div>
            </div>
        </div>
    )
}