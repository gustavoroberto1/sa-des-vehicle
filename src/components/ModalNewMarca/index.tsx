"use client"

import { Dialog, TextField } from "@mui/material";
import { ButtonForm } from "../ButtonForm";
import styles from './styles.module.css'
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { API } from "@/service/api";

type ModalNewMarcaProps = {
    open: boolean;
    handleClose: (value: boolean) => void;
    loadMarks: () => void;
}
export function ModalNewMarca({ open, handleClose, loadMarks }: ModalNewMarcaProps) {
    const [name, setName] = useState<String>("");

    async function handleSubmit() {
        try {
            const value = { name }
            await API.post("/mark", value);
            loadMarks()
            handleClose(false)
        } catch (Error: any) {
            console.log("EROuuuuu")
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <div className={styles.close} onClick={() => handleClose(false)}>
                <Close />
            </div>
            <div className={styles.container}>
                <h1>Cadastrar Marca</h1>
                <TextField label="Marca" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
                <div className={styles.buttonGroup}>
                    <ButtonForm text="Cadastrar" handle={handleSubmit} />
                </div>
            </div>

        </Dialog>
    )
}