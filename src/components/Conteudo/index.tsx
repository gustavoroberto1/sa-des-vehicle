'use client'

import { useState } from 'react';
import './style.css'
import { MdAdd } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';


export default function RenderConteudo() {
    const [tab, setTab] = useState<"register" | "query">("register")

    return (
        <div className="conteudo">
            <header className="header">
                <div className="cadastrar">

                    <button onClick={() => setTab('register')} ><MdAdd /> Cadastrar</button>

                </div>
                <div className="consultar">
                    <button onClick={() => setTab('query')} ><BiSearch size={20} /> Consultar</button>
                </div>
            </header>
            <div className="container-conteudo">
                {
                    tab === 'register' ? (
                        <div className='cadastrando'>
                            <h1>Cadastro de items</h1>
                            <h2>Item</h2>
                            <input type="text" id='' placeholder='Digite o nome do item' />
                            <h2>Marca</h2>
                            <input type="text" id='' placeholder='Digite a marca' />
                            <h2>Quatidade</h2>
                            <input type="text" id='' placeholder='Digite a quantidade' />
                            <h2>Codigo</h2>
                            <input type="text" id='' placeholder='Digite o codigo interno' />

                            <button><MdAdd /> Cadastrar</button>
                        </div>

                    ) : (

                        <div className='consultando'>
                            <h1>Consulta de items</h1>
                            <h2>Item</h2>
                            <input type="text" id='' placeholder='Digite o nome do item' />
                            <h2>Codigo</h2>
                            <input type="text" id='' placeholder='Digite o codigo interno' />

                            <button><BiSearch size={16} /> Consultar</button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}



