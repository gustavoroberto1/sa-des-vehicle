"use client";

import { Status } from "@/types/status";
import { Close } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { CgComponents } from "react-icons/cg";
import { FaCarBattery } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { ReviewButtonGroup } from "../ReviewButtonGroup";
import { ReviewStatus } from "../ReviewStatus";
import styles from "./styles.module.css";

type ModalQualityProps = {
  assessmentId: string;
  open: boolean;
  handleClose: (value: boolean) => void;
};
export function ModalQuality({
  open,
  handleClose,
  assessmentId,
}: ModalQualityProps) {
  const [review, setReview] = useState({
    id: "batch-001",
    production: {
      model: "Hatch Compact",
      amount: 5,
      color: "Azul Escuro",
      accessories: [
        "Ár-Condicionado",
        "Direção Elética",
        "Câmbio Automático",
        "Aro Liga Leve",
        "Bando de Couro",
        "Câmera de Ré",
      ],
    },
    engine: null,
    tire: null,
    battery: null,
    accessories: null,
    status: Status.PENDING,
    createdAt: new Date("2025-05-01T08:30:00Z"),
    updatedAt: new Date("2025-05-28T10:00:00Z"),
  });

  function handleSelectOption(
    key: "engine" | "tire" | "battery" | "accessories",
    value: boolean | null
  ) {
    setReview((prev) => ({ ...prev, [key]: value }));
  }

  function getStatus(value: boolean | null){
    if(value === null) {
      return Status.PENDING;
    }

    if(value){
      return Status.APPROVED;
    }

    return Status.REJECTED
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={styles.close} onClick={() => handleClose(false)}>
        <Close />
      </div>
      <div className={styles.container}>
        <div className={styles.modal_header}>
          <h2>Checklist do Lote - Fusquinha</h2>
          <span>Quantidade: 12 | Cor: Branco | Acessórios</span>
        </div>

        <div className={styles.modal_content}>
          <h2>Componentes do Veículo</h2>

          <div className={styles.modal_content_item}>
            <div className={styles.modal_content_item_header}>
              <div className={styles.header_title}>
                <PiEngineFill />
                <span>Motor</span>
              </div>
              <ReviewStatus status={getStatus(review.engine)} />
            </div>
            <ReviewButtonGroup
              opinion={review.engine}
              selectOpinion={handleSelectOption}
              slug="engine"
            />
          </div>

          <div className={styles.modal_content_item}>
            <div className={styles.modal_content_item_header}>
              <div className={styles.header_title}>
                <GiCarWheel />
                <span>Pneu</span>
              </div>
              <ReviewStatus status={getStatus(review.tire)} />
            </div>
            <ReviewButtonGroup
              opinion={review.tire}
              selectOpinion={handleSelectOption}
              slug="tire"
            />
          </div>

          <div className={styles.modal_content_item}>
            <div className={styles.modal_content_item_header}>
              <div className={styles.header_title}>
                <FaCarBattery />
                <span>Bateria</span>
              </div>
              <ReviewStatus status={getStatus(review.battery)} />
            </div>
            <ReviewButtonGroup
              opinion={review.battery}
              selectOpinion={handleSelectOption}
              slug="battery"
            />
          </div>

          <div className={styles.modal_content_item}>
            <div className={styles.modal_content_item_header}>
              <div className={styles.header_title}>
                <CgComponents />
                <span>Accessórios</span>
              </div>
              <ReviewStatus status={getStatus(review.accessories)} />
            </div>
            <ReviewButtonGroup
              opinion={review.accessories}
              selectOpinion={handleSelectOption}
              slug="accessories"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
