'use client'

import { useEffect, useState } from "react"
import styles from './styles.module.css';
import { API } from "@/service/api";
import { ReviewCard } from "@/components/ReviewCard";
import { Status, StatusLabel } from "@/types/status";
import { ModalQuality } from "@/components/ModalQuality";

const reviewCard1 = {
    id: "batch-001",
    production: {
        model: "Hatch Compact",
        amount: 5,
        color: "Azul Escuro",
        accessories: ["Ár-Condicionado", "Direção Elética", "Câmbio Automático", "Aro Liga Leve", "Bando de Couro", "Câmera de Ré"]
    },
    engine: null,
    tire: null,
    battery: null,
    accessories: null,
    status: Status.PENDING,
    createdAt: new Date("2025-05-01T08:30:00Z"),
    updatedAt: new Date("2025-05-28T10:00:00Z")
};

const reviewCard2 = {
    id: "batch-002",
    production: {
        model: "SUV Plus",
        amount: 12,
        color: "Branco Pérola",
        accessories: ["Ár-Condicionado", "Direção Elética", "Câmbio Automático", "Aro Liga Leve", "Bando de Couro", "Câmera de Ré"]
    },
    engine: true,
    tire: true,
    battery: true,
    accessories: true,
    status: Status.APPROVED,
    createdAt: new Date("2025-04-25T14:15:00Z"),
    updatedAt: new Date("2025-05-27T09:45:00Z")
};

const reviewCard3 = {
    id: "batch-003",
    production: {
        model: "Sedan LX",
        amount: 8,
        color: "Vermelho Rubi",
        accessories: ["Ár-Condicionado", "Direção Elética", "Câmbio Automático", "Aro Liga Leve", "Bando de Couro", "Câmera de Ré"]
    },
    engine: false,
    tire: false,
    battery: false,
    accessories: false,
    status: Status.REJECTED,
    createdAt: new Date("2025-05-10T11:00:00Z"),
    updatedAt: new Date("2025-05-28T11:45:00Z")
};

export default function Quality() {
    const [tab, setTab] = useState<Status>(Status.PENDING);
    const [quality, setQuality] = useState<Quality[]>([]);
    const [assessmentOpen, setAssesmentOpen] = useState<boolean>(false);
    const [assessmentId, setAssesmentId] = useState<string>("");

    useEffect(() => {
        loadAvaliable(tab);
    }, [tab])

    async function loadAvaliable(status: Status) {
        try {
            const response = await API.get<Quality[]>(`/quality?status=${StatusLabel[status]}`);
            setQuality(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    function handleOpenAssessment(id: string) {
        console.log("Entrouu")
        setAssesmentId(id);
        setAssesmentOpen(true);
    }

    return (
        <div className={styles.container}>
            {assessmentOpen && <ModalQuality open={assessmentOpen} handleClose={setAssesmentOpen} assessmentId={assessmentId} />}
            <h1>Qualidade</h1>
            <div className={styles.tabs}>
                <div onClick={() => setTab(Status.PENDING)} className={`${styles.tab} ${tab === Status.PENDING && styles.tabSelected}`}>Pendentes</div>
                <div onClick={() => setTab(Status.APPROVED)} className={`${styles.tab} ${tab === Status.APPROVED && styles.tabSelected}`}>Aprovados</div>
                <div onClick={() => setTab(Status.REJECTED)} className={`${styles.tab} ${tab === Status.REJECTED && styles.tabSelected}`}>Reprovados</div>
            </div>

            <div className={styles.content}>
                {quality.map(q => (
                    <ReviewCard key={q.id} batch={reviewCard1} onClick={() => handleOpenAssessment("teste")}/>
                ))}
                <ReviewCard batch={reviewCard1} onClick={() => handleOpenAssessment("teste")} />
                <ReviewCard batch={reviewCard2} onClick={() => handleOpenAssessment("teste2")}/>
                <ReviewCard batch={reviewCard3} onClick={() => handleOpenAssessment("teste3")}/>
            </div>
        </div>
    )
}