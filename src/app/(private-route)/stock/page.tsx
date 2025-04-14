'use client'

import { TextField, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styles from './styles.module.css';
import { useState } from 'react';
import { AddCircleOutline } from '@mui/icons-material';
import { ButtonForm } from '@/components/ButtonForm';
import { ModalNewMarca } from '@/components/ModalNewMarca';

export default function Stock() {
    const [newProduct, setNewProduct] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    console.log(newProduct)

    return (
        <div className={styles.container}>
            <ModalNewMarca open={openModal} handleClose={() => setOpenModal(!openModal)} />
            <h1>Estoque</h1>
            <div className={styles.content}>
                <h2>Entrada de produtos</h2>
                <form className={styles.form}>
                    <div className={styles.selectRegister}>
                        <span>Produto Novo?</span>
                        <Checkbox checked={newProduct} onChange={(e) => setNewProduct(e.target.checked)} />
                    </div>
                    <h2>Dados</h2>
                    {!newProduct ? (
                        <div className={styles.selectProduct}>
                            <FormControl fullWidth>
                                <InputLabel>Selecione o produto</InputLabel>
                                <Select label="Produtos">
                                    <MenuItem value={10}>Pneu - Pirelli</MenuItem>
                                    <MenuItem value={20}>Pneu - Goodyear</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField label="Quantidade" variant="outlined" type='number' />
                        </div>

                    ) : (
                        <div>
                            <div className={styles.formSeparetor}>
                                <TextField label="Nome do Produto" variant="outlined" sx={{ width: '30%' }} />

                                <TextField label="Descrição" variant="outlined" sx={{ width: '70%' }} />
                            </div>
                            <div className={styles.formSeparetor}>
                                <FormControl sx={{ width: '20%' }}>
                                    <InputLabel>Selecione a Categoria</InputLabel>
                                    <Select label="Selecione a Categoria">
                                        <MenuItem value={10}>Mecânico</MenuItem>
                                        <MenuItem value={20}>Elétrico</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ width: '60%' }}>
                                    <InputLabel>Selecione a Marca</InputLabel>
                                    <Select label="Selecione a Marca">
                                        <MenuItem value={10}>Bosch</MenuItem>
                                        <MenuItem value={20}>BlaBlaBla</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className={styles.buttonAdd} onClick={() => setOpenModal(true)}>
                                    <AddCircleOutline />
                                </div>
                                <TextField label="Quantidade" variant="outlined" type='number' />
                            </div>

                        </div>
                    )}
                    <div className={styles.buttonGroup}>
                        <ButtonForm text="Cadastrar" handle={() => { }} />
                    </div>
                </form>
            </div>


            <h1>Lista Produtos</h1>
            <div></div>
        </div>
    )
}