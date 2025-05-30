'use client'

import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { ButtonForm } from "../ButtonForm";
import styles from './styles.module.css'
import { Assessment, Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { API } from "@/service/api";
import { GiCarWheel } from "react-icons/gi";
import { LuCircleCheckBig, LuCircleX } from "react-icons/lu";

type ModalQualityProps = {
    assessmentId: string;
    open: boolean;
    handleClose: (value: boolean) => void;
}
export function ModalQuality({ open, handleClose, assessmentId }: ModalQualityProps) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
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
                                <GiCarWheel />
                                <span>Pneu</span>
                            </div>
                            Status
                        </div>
                        <div className={styles.modal_content_item_footer}>
                            <button><LuCircleCheckBig /><span>Aprovar</span></button>
                            <button><LuCircleX /><span>Reprovar</span></button>
                        </div>
                    </div>

                    <div className={styles.modal_content_item}>
                        <div className={styles.modal_content_item_header}>
                            <div className={styles.header_title}>
                                <GiCarWheel />
                                <span>Pneu</span>
                            </div>
                            Status
                        </div>
                        <div className={styles.modal_content_item_footer}>
                            <button><LuCircleCheckBig /><span>Aprovar</span></button>
                            <button><LuCircleX /><span>Reprovar</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}