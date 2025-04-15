'use client'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ButtonForm } from '@/components/ButtonForm';
import styles from './styles.module.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useState } from 'react';
import SelectOptional from '@/components/SelectOptional';
import { ModalNewModel } from '@/components/ModalNewModel';

const columns: GridColDef<(typeof rows)[number]>[] = [
   
        { field: 'id', headerName: 'ID' },
    { field: 'model',
        headerName: 'Modelo',
        width: 500,
        editable: false,
    },
    {
        field: 'color',
        headerName: 'Cor',
    },
    {
        field: 'amount',
        headerName: 'Quantidade',
        type: 'number',
    },
    {
        field: 'optional',
        headerName: 'Opcionais',
        width: 300,
    },
];

const rows = [
    { id: 1, model: 'Fiat Uno Mille 1.0 FLex', color: 'Vermelho', amount: 2, optional: "Volante" },
    { id: 2, model: 'Fiat Fiorino', color: 'Preto', amount: 10, optional: "Direção Elétrica" },
    { id: 3, model: 'Fiat Toro', color: 'Branco', amount: 4, optional: "Ár-Condicionado, Câmbio Automático" },
    { id: 4, model: 'Fiat Strada', color: 'Prata', amount: 100, optional: "Direção Elétrica" },
];

export default function Production() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [opcionaisSelected, setOptionaisSelected] = useState<string[]>([]);

    return (
        <div className={styles.container}>
            <ModalNewModel open={openModal} handleClose={() => setOpenModal(!openModal)} />
            <h1>Produção</h1>

            <div className={styles.content}>
                <h2>Novo Veículo</h2>
                <form className={styles.form}>
                    <div>
                        <div className={styles.formSeparetor}>
                            <FormControl sx={{ width: '60%' }}>
                                <InputLabel>Selecione a Modelo</InputLabel>
                                <Select label="Selecione o Modelo">
                                    <MenuItem value={10}>Uno Mille 1.4</MenuItem>
                                    <MenuItem value={20}>Toro 1.8</MenuItem>
                                </Select>
                            </FormControl>
                            <div className={styles.buttonAdd} onClick={() => setOpenModal(true)}>
                                <AddCircleOutline />
                            </div>

                            <FormControl sx={{ width: '30%' }}>
                                <InputLabel>Selecione a Cor</InputLabel>
                                <Select label="Selecione a Cor">
                                    <MenuItem value={10}>Preto</MenuItem>
                                    <MenuItem value={20}>Branco</MenuItem>
                                    <MenuItem value={30}>Prata</MenuItem>
                                    <MenuItem value={30}>Grafite</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField label="Quantidade" variant="outlined" type='number' />
                        </div>

                        <div className={styles.formSeparetor}>
                            <SelectOptional
                                optionais={["Ár-Condicionado", "Direção Elétrica", "Câmbio automático", "Roda Liga Leve", "Banco de Couro", "Câmeras traseiras"]}
                                selected={opcionaisSelected}
                                onSelect={setOptionaisSelected}
                            />
                        </div>
                    </div>
                    <div className={styles.buttonGroup}>
                        <ButtonForm text="Enviar para Produção" handle={() => { }} />
                    </div>
                </form>
            </div>

            <h1>Lista Últimos Produzidos</h1>
            <div className={styles.datagrid}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    sx={{ maxHeight: '270px'}}
                    hideFooter
                />
            </div>
        </div>
    )
}