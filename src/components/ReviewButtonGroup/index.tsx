"use client";

import { useEffect, useState } from "react";
import { LuCircleCheckBig, LuCircleX } from "react-icons/lu";
import styles from "./styles.module.css";

type ReviewButtonGroupProps = {
  opinion: boolean | null;
  selectOpinion: (key: 'engine' | 'tire' | 'battery' | 'accessories', value: boolean | null) => void;
  slug: 'engine' | 'tire' | 'battery' | 'accessories';
};
export function ReviewButtonGroup({ opinion, selectOpinion, slug }: ReviewButtonGroupProps) {
  const [opinionSelected, setOpinionSelected] = useState<"APPROVED" | "REJECTED" | null>(null);
  
  useEffect(() => {
    setOpinionSelected(opinion === null ? null : opinion === true ? 'APPROVED' : 'REJECTED')
  }, [])
  
  function handleSelectOpinion(newOpinion: "APPROVED" | "REJECTED") {
    if (newOpinion === opinionSelected) {
      setOpinionSelected(null);
      selectOpinion(slug, null);
      return;
    }
    setOpinionSelected(newOpinion);
    selectOpinion(slug, newOpinion === "APPROVED");
  }

  return (
    <div className={styles.container_button_group}>
      <button onClick={() => handleSelectOpinion("APPROVED")} className={`${opinionSelected === "APPROVED" ? styles.approved : styles.button_opinion}`}>
        <LuCircleCheckBig />
        <span>Aprovar</span>
      </button>
      <button onClick={() => handleSelectOpinion("REJECTED")} className={`${opinionSelected === "REJECTED" ? styles.rejected: styles.button_opinion}`}>
        <LuCircleX />
        <span>Reprovar</span>
      </button>
    </div>
  );
}
