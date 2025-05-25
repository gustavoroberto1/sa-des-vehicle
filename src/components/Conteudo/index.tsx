'use client'

import { useState } from 'react';
import './style.css';
import { MdAdd } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { API } from '@/services/api';

export default function RenderConteudo() {
    const [produto, setProduto] = useState<'register' | 'consultar'>('register');

    // Estados para cadastro
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [quantidade, setQuantidade] = useState('');

    // Estado para consulta
    const [nomeBusca, setNomeBusca] = useState('');
    const [resultados, setResultados] = useState<any[]>([]);

    // Função para cadastrar produto
    async function cadastrarProduto() {
        try {
            await API.post('/estoque', {
                descricao: nome,
                marca: marca,
                quantidade: quantidade,
            });
            alert('Produto cadastrado com sucesso!');
            setNome('');
            setMarca('');
            setQuantidade('');
        } catch (error) {
            alert('Erro ao cadastrar produto');
            console.error(error);
        }
    }

    // Função para buscar produto por nome
    async function consultarProduto() {
        try {
            const response = await API.get('/estoque/search', {
                params: {
                    descricao: nomeBusca,
                },
            });
            setResultados(response.data);
        } catch (error) {
            alert('Erro ao consultar produtos');
            console.error(error);
        }
    }

    return (
        <div className="conteudo">
            <header className="header">
                <div className="cadastrar">
                    <button onClick={() => setProduto('register')}>
                        <MdAdd /> Cadastrar
                    </button>
                </div>
                <div className="consultar">
                    <button onClick={() => setProduto('consultar')}>
                        <BiSearch size={20} /> Consultar
                    </button>
                </div>
            </header>

            <div className="container-conteudo">
                {produto === 'register' ? (
                    <div className="cadastrando">
                        <h1>Cadastro de itens</h1>

                        <h2>Item</h2>
                        <input
                            type="text"
                            placeholder="Digite o nome do item"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <h2>Marca</h2>
                        <input
                            type="text"
                            placeholder="Digite a marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />

                        <h2>Quantidade</h2>
                        <input
                            type="number"
                            placeholder="Digite a quantidade"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />

                        <button className="button-manda-dados" onClick={cadastrarProduto}>
                            <MdAdd /> Cadastrar
                        </button>
                    </div>
                ) : (
                    <div className="consultando">
                        <h1>Consulta de itens</h1>

                        <h2>Item</h2>
                        <input
                            type="text"
                            placeholder="Digite o nome do item"
                            value={nomeBusca}
                            onChange={(e) => setNomeBusca(e.target.value)}
                        />

                        <button className="button-manda-dados" onClick={consultarProduto}>
                            <BiSearch size={16} /> Consultar
                        </button>

                        <div className="resultados">
                            <h2>Resultados:</h2>
                            {resultados.length === 0 ? (
                                <p>Nenhum item encontrado.</p>
                            ) : (
                                <ul>
                                    {resultados.map((item) => (
                                        <li key={item.id}>
                                            <strong>{item.descricao}</strong> - {item.marca} | Quantidade: {item.quantidade}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
