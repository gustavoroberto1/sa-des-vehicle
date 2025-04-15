'use client'

import { useState } from 'react';
import './style.css'



type ConteudoEstoque = {
    pneu: String;
    cambio: String;
    motor: String;

}

export default function ConteudoEstoque() {
    const [estoque, setEstoque] = useState<ConteudoEstoque | null>(null)
    
    async function ConteudoCadastrar(event: MouseEvent) {

        const novoEstoque: ConteudoEstoque = {
            pneu: '4 pneus novos',
            cambio: 'Automático',
            motor: 'V8 5.0'
        }
        setEstoque(novoEstoque)

    }

    async function ConteudoConsultar() {
        const dados: ConteudoEstoque = {
            pneu: '2 pneus usados',
            cambio: 'Manual',
            motor: '1.6 Flex'
        }
        setEstoque(dados)
    }

    return (
        <div>
            <h2>Conteúdo Estoque</h2>
            {estoque ? (
                <ul>
                    <li><strong>Pneu:</strong> {estoque.pneu}</li>
                    <li><strong>Câmbio:</strong> {estoque.cambio}</li>
                    <li><strong>Motor:</strong> {estoque.motor}</li>
                </ul>
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>    )
}


