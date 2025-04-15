'use client'

import { useState } from "react"
import styles from './styles.module.css';

export default function Quality() {
    const [tab, setTab] = useState<'all' | 'approved' | 'failed'>('all');

    return (
        <div className={styles.container}>
            <h1>Qualidade</h1>
            <div className={styles.tabs}>
                <div onClick={() => setTab("all")} className={`${styles.tab} ${tab === 'all' && styles.tabSelected}`}>Todos</div>
                <div onClick={() => setTab("approved")} className={`${styles.tab} ${tab === 'approved' && styles.tabSelected}`}>Aprovados</div>
                <div onClick={() => setTab("failed")} className={`${styles.tab} ${tab === 'failed' && styles.tabSelected}`}>Reprovados</div>
            </div>

            <div className={styles.content}>
                {tab === "all" ? (
                    <h1>Todas Avaliações</h1>
                ): tab === "approved" ? (
                    <h1>Avaliaçãoes Aprovadas</h1>
                ): (
                    <h1>Avaliações Reprovados</h1>
                )}
            </div>
        </div>


    )
}