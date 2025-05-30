'use client'

import { ModalQuality } from "@/components/ModalQuality";
import { ReviewCard } from "@/components/ReviewCard";
import { API } from "@/service/api";
import { Status, StatusLabel } from "@/types/status";
import { useEffect, useState } from "react";
import styles from './styles.module.css';

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
    const [reviews, setReviews] = useState<Review[]>([]);
    const [openReview, setOpenReview] = useState<boolean>(false);
    const [reviewId, setReviewId] = useState<string>("");

    useEffect(() => {
        loadReviews(tab);
    }, [tab])

    async function loadReviews(status: Status) {
        try {
            const response = await API.get<Review[]>(`/quality?status=${StatusLabel[status]}`);
            setReviews(response.data)
        } catch (errr: any) {
            console.log("EROOOu")
        }
    }

    function handleOpenReview(id: string) {
        console.log("Entrouu")
        setReviewId(id);
        setOpenReview(true);
    }

    return (
        <div className={styles.container}>
            {openReview && <ModalQuality open={openReview} handleClose={setOpenReview} assessmentId={reviewId} />}
            <h1>Qualidade</h1>
            <div className={styles.tabs}>
                <div onClick={() => setTab(Status.PENDING)} className={`${styles.tab} ${tab === Status.PENDING && styles.tabSelected}`}>Pendentes</div>
                <div onClick={() => setTab(Status.APPROVED)} className={`${styles.tab} ${tab === Status.APPROVED && styles.tabSelected}`}>Aprovados</div>
                <div onClick={() => setTab(Status.REJECTED)} className={`${styles.tab} ${tab === Status.REJECTED && styles.tabSelected}`}>Reprovados</div>
            </div>

            <div className={styles.content}>
                {reviews.map(q => (
                    <ReviewCard key={q.id} batch={reviewCard1} onClick={() => handleOpenReview("teste")}/>
                ))}
                <ReviewCard batch={reviewCard1} onClick={() => handleOpenReview("teste")} />
                <ReviewCard batch={reviewCard2} onClick={() => handleOpenReview("teste2")}/>
                <ReviewCard batch={reviewCard3} onClick={() => handleOpenReview("teste3")}/>
            </div>
        </div>
    )
}