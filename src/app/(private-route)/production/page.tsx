'use client'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ButtonForm } from '@/components/ButtonForm';
import styles from './styles.module.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import SelectOptional from '@/components/SelectOptional';
import { ModalNewModel } from '@/components/ModalNewModel';
import { API } from '@/service/api';



export default function Production() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [models, setModels] = useState<Model[]>([]);
    const [productions, setProductions] = useState<Production[]>([]);

    const [modelId, setModelId] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [optional, setOptional] = useState<string[]>([]);

    useEffect(() => {
        loadModels();
        loadProduction();
    }, [])

    async function loadModels() {
        try {
            const response = await API.get<Model[]>("/model");
            setModels(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    async function loadProduction() {
        try {
            const response = await API.get<Production[]>("/production");
            setProductions(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newProduction = {
            modelId: modelId,
            color: color,
            amount: amount,
            optional: optional
        }

        try {
            await API.post("/production", newProduction);
            resetValues()
            loadProduction()
        } catch (errr: any) {
            console.log("EROOOu")
        } finally {
            return
        }
    }

    function resetValues() {
        setModelId("")
        setColor("")
        setAmount(0)
        setOptional([])
    }

    
const columns: GridColDef<(typeof productions)[number]>[] = [

    { field: 'id', headerName: 'ID',width: 300, },
    {
        field: 'model',
        headerName: 'Modelo',
        width: 200,
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
        width: 500,
    },
];

    return (
        <div className={styles.container}>
            <ModalNewModel open={openModal} handleClose={() => setOpenModal(!openModal)} loadModels={loadModels} />
            <h1>Produção</h1>

            <div className={styles.content}>
                <h2>Novo Veículo</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <div className={styles.formSeparetor}>
                            <FormControl sx={{ width: '60%' }}>
                                <InputLabel>Selecione a Modelo</InputLabel>
                                <Select label="Selecione o Modelo" value={modelId} onChange={(e) => setModelId(e.target.value)}>
                                    {models.map(model => (
                                        <MenuItem value={model.id} key={model.id}>{model.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <div className={styles.buttonAdd} onClick={() => setOpenModal(true)}>
                                <AddCircleOutline />
                            </div>

                            <FormControl sx={{ width: '30%' }}>
                                <InputLabel>Selecione a Cor</InputLabel>
                                <Select label="Selecione a Cor">
                                    <MenuItem value={"Preto"}>Preto</MenuItem>
                                    <MenuItem value={"Branco"}>Branco</MenuItem>
                                    <MenuItem value={"Prata"}>Prata</MenuItem>
                                    <MenuItem value={"Cinza"}>Cinza</MenuItem>
                                    <MenuItem value={"Vermelho"}>Vermelho</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField label="Quantidade" variant="outlined" type='number' value={amount} onChange={e => setAmount(Number(e.target.value))} />
                        </div>

                        <div className={styles.formSeparetor}>
                            <SelectOptional
                                optionais={["Ár-Condicionado", "Direção Elétrica", "Câmbio automático", "Roda Liga Leve", "Banco de Couro", "Câmeras traseiras"]}
                                selected={optional}
                                onSelect={setOptional}
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
                    rows={productions as any}
                    columns={columns}
                    sx={{ maxHeight: '270px' }}
                    hideFooter
                />
            </div>
        </div>
    )
}