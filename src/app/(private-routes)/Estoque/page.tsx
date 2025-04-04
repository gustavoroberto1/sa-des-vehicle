'use client'
import { useState } from "react";
import "./style.css"
import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";


export default function Estoque() {
    const [cadastraractivado, setcadastraativado] = useState(false);
    const [consultaractivado, setconsultarativado] = useState(false);

    const cadastrarativo = () => {
        setcadastraativado(!cadastraractivado)
    }
    const consultarativo = () => {
        setconsultarativado(!consultaractivado)
    }

    return (
        <div className="conteudo">
            <header className="header">
                <div className="cadastrar">
                    <button onClick={cadastrarativo} ><MdAdd /> Cadastrar</button>
                </div>
                <div className="consultar">
                    <button onClick={consultarativo}><BiSearch size={20} /> Consultar</button>
                </div>
            </header>

            <div className="conteudo-estoque">

                {cadastraractivado ? (
                    <h1>Cadastro Ativo</h1>  
                ) : (
                    <h1>Conteúdo Inativo</h1>  
                )}
                {consultaractivado ? (
                    <h1>Cadastro Ativo</h1>  
                ) : (
                    <h1>Conteúdo Inativo</h1>  
                )}
            </div>
        </div>
    )
}