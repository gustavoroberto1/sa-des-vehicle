import Button from '@/components/Button'
import './styles.css'

export default function Producao() {
    return (

        <div className='producao-container'>
            <div className='input'>
                <input type="text" id="" placeholder=' Nome do Produto'></input>
                <select name="" id="" >
                    <option value="">2 portas</option>
                    <option value="">4 portas</option>
                </select>
                <select name="" id="">
                    <option value="">Câmbio Manual</option>
                    <option value="">Câmbio Automático</option>
                </select>
                <Button/>
            </div>
                <div className='produtos'>
                    <h1>aaaaaaaaaaaaaaaaaaa</h1>
                    
                </div>
        </div>
    )
}