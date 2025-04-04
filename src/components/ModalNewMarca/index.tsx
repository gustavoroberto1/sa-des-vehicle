import { Dialog, TextField } from "@mui/material";
import { ButtonForm } from "../ButtonForm";
import styles from './styles.module.css'
import { Close } from "@mui/icons-material";

type ModalNewMarcaProps = {
    open: boolean;
    handleClose: (value: boolean) => void;
}
export function ModalNewMarca({ open, handleClose }: ModalNewMarcaProps) {
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
                <TextField label="Marca" variant="outlined" />
                <div className={styles.buttonGroup}>
                    <ButtonForm text="Cadastrar" handle={() => { }} />
                </div>
            </div>

        </Dialog>
    )
}