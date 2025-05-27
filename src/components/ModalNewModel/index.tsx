'use client'

import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { ButtonForm } from "../ButtonForm";
import styles from './styles.module.css'
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { API } from "@/service/api";

type ModalNewModelProps = {
    open: boolean;
    handleClose: (value: boolean) => void;
    loadModels: () => void;
}
export function ModalNewModel({ open, handleClose, loadModels }: ModalNewModelProps) {
    const [engines, setEngines] = useState<Product[]>([]);
    const [batteries, setBatteries] = useState<Product[]>([]);
    const [pneus, setPneus] = useState<Product[]>([]);

    const [name, setName] = useState<string>("");
    const [motorId, setMotorId] = useState<string>("")
    const [batteryId, setBaterryId] = useState<string>("")
    const [pneuId, setPneuId] = useState<string>("")
    const [amountPort, setAmountPort] = useState<number>(0)
    const [fuelType, setFuelType] = useState<string>("")


    useEffect(() => {
        loadBattery();
        loadEngine();
        loadPneu();
    }, [])

    async function loadBattery() {
        try {
            const response = await API.get<Product[]>("/product/search?category=elétrico");
            setBatteries(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    async function loadEngine() {
        try {
            const response = await API.get<Product[]>("/product/search?category=motor");
            setEngines(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    async function loadPneu() {
        try {
            const response = await API.get<Product[]>("/product/search?category=pneu");
            setPneus(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newModel = {
            name: name,
            motorId: motorId,
            batteryId: batteryId,
            fuelType: fuelType,
            numberOfPorts: amountPort,
            pneuId: pneuId
        }

        try {
            await API.post("/model", newModel);
            resetValues()
            loadModels();
            handleClose(false);
        } catch (errr: any) {
            console.log("EROOOu")
        } finally {
            return
        }
    }

    function resetValues() {
        setName("")
        setAmountPort(0)
        setBaterryId("")
        setFuelType("")
        setMotorId("")
        setPneuId("")
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
                <h1>Cadastrar Modelo</h1>
                <TextField label="Nome Modelo" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <FormControl>
                    <InputLabel>Motor Usado</InputLabel>
                    <Select
                        label="Motor Usado"
                        value={motorId}
                        onChange={e => setMotorId(e.target.value)}
                    >
                        {engines.map((engine) => (
                            <MenuItem value={engine.id}>{engine.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Bateria Usada</InputLabel>
                    <Select
                        label="Bateria Usada"
                        value={batteryId}
                        onChange={e => setBaterryId(e.target.value)}
                    >
                        {batteries.map((b) => (
                            <MenuItem value={b.id}>{b.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Tipo de Combustível</InputLabel>
                    <Select label="Tipo de Combustíve" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                        <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
                        <MenuItem value={"Etanol"}>Etanol</MenuItem>
                        <MenuItem value={"Diesel"}>Diesel</MenuItem>
                        <MenuItem value={"Flex"}>Flex</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Quantidade de Portas</InputLabel>
                    <Select label="Quantidade de Portas" value={amountPort} onChange={(e) => setAmountPort(Number(e.target.value))}>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel>Pneu usado</InputLabel>
                    <Select
                        label="Pneu usado"
                        value={pneuId}
                        onChange={e => setPneuId(e.target.value)}
                    >
                        {pneus.map((p) => (
                            <MenuItem value={p.id}>{p.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div className={styles.buttonGroup}>
                    <ButtonForm text="Cadastrar" handle={handleSubmit} />
                </div>
            </div>

        </Dialog>
    )
}