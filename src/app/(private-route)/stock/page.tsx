'use client'

import { TextField, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { AddCircleOutline } from '@mui/icons-material';
import { ButtonForm } from '@/components/ButtonForm';
import { ModalNewMarca } from '@/components/ModalNewMarca';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { API } from '@/service/api';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID' },
    {
        field: 'name',
        headerName: 'Nome',
        width: 300
    },
    {
        field: 'description',
        headerName: 'Descrição',
        width: 500,
    },
    {
        field: 'category',
        headerName: 'Categoria',
    },
    {
        field: 'mark',
        headerName: 'Marca',
    },
    {
        field: 'amount',
        headerName: 'Quantidade',
        type: 'number'
    },
];

const rows = [
    {
        id: 1,
        nome: 'Filtro de Óleo',
        description: 'Filtro responsável por remover impurezas do óleo do motor.',
        category: 'Motor',
        marca: 'Bosch',
        amount: 150
    },
    {
        id: 2,
        nome: 'Pneu Aro 16',
        description: 'Pneu radial para veículos de passeio, medida 205/55 R16.',
        category: 'Rodas e Pneus',
        marca: 'Michelin',
        amount: 60
    },
    {
        id: 3,
        nome: 'Bateria 60Ah',
        description: 'Bateria automotiva de 12V com 60Ah, ideal para veículos médios.',
        category: 'Elétrica',
        marca: 'Moura',
        amount: 80
    },
    {
        id: 4,
        nome: 'Pastilha de Freio Dianteira',
        description: 'Conjunto de pastilhas para freios a disco dianteiros.',
        category: 'Freios',
        marca: 'TRW',
        amount: 120
    },
    {
        id: 5,
        nome: 'Amortecedor Traseiro',
        description: 'Amortecedor hidráulico para suspensão traseira.',
        category: 'Suspensão',
        marca: 'Monroe',
        amount: 95
    }
];

export default function Stock() {
    const [isLoading, setIsLoading] = useState(false);
    const [newProduct, setNewProduct] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [marks, setMarks] = useState<Mark[]>([])

    const [name, setName] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [category, setCategory] = useState<String>("");
    const [amount, setAmount] = useState<Number>(0);
    const [markId, setMarkId] = useState<String>("");

    const [productId, setProductId] = useState<String>("");

    useEffect(() => {
        setIsLoading(true);
        loadProducts();
        loadMarks();
        setIsLoading(false);
    }, [])

    async function loadProducts() {
        try {
            const response = await API.get<Product[]>("/product");
            setProducts(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    async function loadMarks() {
        try {
            const response = await API.get<Mark[]>("/mark");
            setMarks(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (newProduct) {
            const newProduct = {
                name,
                description,
                category,
                amount: Number(amount),
                markId,
            }

            try {
                await API.post("/product", newProduct);
                resetValues()
                loadProducts();
            } catch (errr: any) {
                console.log("EROOOu")
            } finally {
                return
            }
        }

        const updateProduct = {
            productId: productId,
            amount: Number(amount)
        }

        try {
            await API.patch("/product", updateProduct);
            resetValues()
            loadProducts();
        } catch (errr: any) {
            console.log("EROOOu")
        } finally {
            return
        }
    }

    function resetValues() {
        setName("")
        setAmount(0)
        setDescription("")
        setCategory("")
        setMarkId("")
        setProductId("")
    }
    return (
        <div className={styles.container}>
            <ModalNewMarca open={openModal} handleClose={() => setOpenModal(!openModal)} loadMarks={loadMarks}/>
            <h1>Estoque</h1>
            <div className={styles.content}>
                <h2>Entrada de produtos</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.selectRegister}>
                        <span>Produto Novo?</span>
                        <Checkbox checked={newProduct} onChange={(e) => setNewProduct(e.target.checked)} />
                    </div>
                    <h2>Dados</h2>
                    {!newProduct ? (
                        <div className={styles.selectProduct}>
                            <FormControl fullWidth>
                                <InputLabel>Selecione o produto</InputLabel>
                                <Select
                                    label="Produtos"
                                    value={productId}
                                    onChange={e => setProductId(e.target.value)}
                                >
                                    {
                                        products.map(product => (
                                            <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <TextField
                                label="Quantidade"
                                variant="outlined"
                                type='number'
                                value={amount}
                                onChange={e => setAmount(e.target.value as any)}
                            />
                        </div>

                    ) : (
                        <div>
                            <div className={styles.formSeparetor}>
                                <TextField
                                    label="Nome do Produto"
                                    variant="outlined"
                                    sx={{ width: '30%' }}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <TextField
                                    label="Descrição"
                                    variant="outlined"
                                    sx={{ width: '70%' }}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className={styles.formSeparetor}>
                                <FormControl sx={{ width: '20%' }} >
                                    <InputLabel>Selecione a Categoria</InputLabel>
                                    <Select
                                        label="Selecione a Categoria"
                                        onChange={e => setCategory(e.target.value as any || "")}
                                        value={category}
                                    >
                                        <MenuItem value={''}>Selecione</MenuItem>
                                        <MenuItem value={'Mecânico'}>Mecânico</MenuItem>
                                        <MenuItem value={'Elétrico'}>Elétrico</MenuItem>
                                        <MenuItem value={'Pneus'}>Pneus</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ width: '60%' }}>
                                    <InputLabel>Selecione a Marca</InputLabel>
                                    <Select label="Selecione a Marca" onChange={e => setMarkId(e.target.value as any)} value={markId}>
                                        {!!marks && marks?.map(mark => (
                                            <MenuItem key={mark.id} value={mark.id}>{mark.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <div className={styles.buttonAdd} onClick={() => setOpenModal(true)}>
                                    <AddCircleOutline />
                                </div>
                                <TextField
                                    label="Quantidade"
                                    variant="outlined"
                                    type='number'
                                    value={amount}
                                    onChange={e => setAmount(e.target.value as any)}
                                />
                            </div>

                        </div>
                    )}
                    <div className={styles.buttonGroup}>
                        <ButtonForm text="Cadastrar" handle={() => { }} />
                    </div>
                </form>
            </div>

            <h1>Lista Produtos</h1>
            <div className={styles.datagrid}>
                <DataGrid
                    rows={products}
                    columns={columns as any}
                    sx={{ maxHeight: '270px' }}
                    hideFooter
                />
            </div>
        </div>
    )
}