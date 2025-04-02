import './styles.css'

export default function Estoque() {
    return(
        <div className='estoque-container'>
            <div className="form">
                <h2>Cadastro de Equipamentos Recebidos</h2>
                <input type="text" placeholder='Produto' required />
                <input type="number" placeholder='Quantidade' required/>
                <input type="color" placeholder='Cor'/>
                <input type="text" placeholder='Interna ou Externa?' />
                <input type="number" placeholder='Custo' />
            </div>
            <footer>
                
            </footer>
        </div>
    )
} 