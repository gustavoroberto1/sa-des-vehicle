'use client'

import { ButtonForm } from '@/components/ButtonForm';
import styles from './styles.module.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useState } from 'react';
import SelectOptional from '@/components/SelectOptional';
import { ModalNewModel } from '@/components/ModalNewModel';

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
            <div></div>
        </div>
    )
}