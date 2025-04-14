import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { ButtonForm } from "../ButtonForm";
import styles from './styles.module.css'
import { Close } from "@mui/icons-material";

type ModalNewModelProps = {
    open: boolean;
    handleClose: (value: boolean) => void;
}
export function ModalNewModel({ open, handleClose }: ModalNewModelProps) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <div className={styles.close} onClick={() => handleClose(false)}>
                <Close />
            </div>
            <div className={styles.container}>
                <h1>Cadastrar Modelo</h1>
                <TextField label="Nome Modelo" variant="outlined" />
                <FormControl>
                    <InputLabel>Motor Usado</InputLabel>
                    <Select label="Motor Usado">
                        <MenuItem value={10}>1.0 Turbo</MenuItem>
                        <MenuItem value={20}>1.4 Turbo</MenuItem>
                        <MenuItem value={20}>2.0 Flex</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Potência (CV)" type="number" variant="outlined" />
                <FormControl>
                    <InputLabel>Tipo de Combustível</InputLabel>
                    <Select label="Tipo de Combustíve">
                        <MenuItem value={10}>Gasolina</MenuItem>
                        <MenuItem value={20}>Etanol</MenuItem>
                        <MenuItem value={20}>Flex</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Quantidade de Portas</InputLabel>
                    <Select label="Quantidade de Portas">
                        <MenuItem value={10}>2</MenuItem>
                        <MenuItem value={20}>4</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel>Pneu usado</InputLabel>
                    <Select label="Quantidade de Portas">
                        <MenuItem value={10}>Pirelli</MenuItem>
                        <MenuItem value={20}>Goodwear</MenuItem>
                    </Select>
                </FormControl>
                <div className={styles.buttonGroup}>
                    <ButtonForm text="Cadastrar" handle={() => { }} />
                </div>
            </div>

        </Dialog>
    )
}