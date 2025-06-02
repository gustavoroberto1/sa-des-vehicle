"use client";

import { Status } from "@/types/status";
import { JSX } from "@emotion/react/jsx-runtime";
import { Close } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { CgComponents } from "react-icons/cg";
import { FaCarBattery } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { LuNotepadText } from "react-icons/lu";
import { PiEngineFill } from "react-icons/pi";
import { ReviewButtonGroup } from "../ReviewButtonGroup";
import { ReviewStatus } from "../ReviewStatus";
import styles from "./styles.module.css";

type ModalQualityProps = {
  assessmentId: string;
  open: boolean;
  handleClose: (value: boolean) => void;
};

type ItemProps = {
  icon: JSX.Element;
  label: string;
  slug: "engine" | "tire" | "battery" | "accessories";
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

  function getStatus(value: boolean | null) {
    if (value === null) {
      return Status.PENDING;
    }

    if (value) {
      return Status.APPROVED;
    }

    return Status.REJECTED;
  }

  const reviewItems: ItemProps[] = [
    {
      icon: <PiEngineFill />,
      label: "Motor",
      slug: "engine",
    },
    {
      icon: <GiCarWheel />,
      label: "Pneu",
      slug: "tire",
    },
    {
      icon: <FaCarBattery />,
      label: "Bateria",
      slug: "battery",
    },
    {
      icon: <CgComponents />,
      label: "Acessórios",
      slug: "accessories",
    },
  ];

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

          {reviewItems.map((item) => (
            <div className={styles.modal_content_item} key={item.slug}>
              <div className={styles.modal_content_item_header}>
                <div className={styles.header_title}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <ReviewStatus status={getStatus(review[item.slug])} />
              </div>
              <ReviewButtonGroup
                opinion={review.engine}
                selectOpinion={handleSelectOption}
                slug={item.slug}
              />
            </div>
          ))}

          <div className={styles.divider} />

          <div className={styles.observation_container}>
            <div className={styles.observation_container_header}>
              <LuNotepadText />
              <h2>Observação</h2>
            </div>
            <textarea  rows={4} />
          </div>

          <div className={styles.divider} />

          <div className={styles.footer_container}>
            <button className={styles.cancel} onClick={() => handleClose(false)}>Cancelar</button>
            <button className={styles.send}>Enviar Avaliação</button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
