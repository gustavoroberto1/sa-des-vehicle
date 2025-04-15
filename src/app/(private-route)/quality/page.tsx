'use client'

import { useState } from "react"
import styles from './styles.module.css';

export default function Quality() {
    const [tab, setTab] = useState<'all' | 'approved' | 'failed'>('all');
    const items = [0, 1, 2, 3, 4, 5, 6];

    function getClasses(item: number){
        if(item === 0){
            return styles.notEvalueted;
        }

        if(item % 2 === 0){
            return styles.approved;
        }else {
            return styles.failed
        }
    } 

    function getValue(item: number){
        if(item === 0){
            return 'Não avaliado'
        }

        if(item % 2 === 0){
            return 'Aprovado';
        }else {
            return 'Reprovado'
        }
    } 
    return (
        <div className={styles.container}>
            <h1>Qualidade</h1>
            <div className={styles.tabs}>
                <div onClick={() => setTab("all")} className={`${styles.tab} ${tab === 'all' && styles.tabSelected}`}>Todos</div>
                <div onClick={() => setTab("approved")} className={`${styles.tab} ${tab === 'approved' && styles.tabSelected}`}>Aprovados</div>
                <div onClick={() => setTab("failed")} className={`${styles.tab} ${tab === 'failed' && styles.tabSelected}`}>Reprovados</div>
            </div>

            <div className={styles.content}>
                {items.map(item => (
                    <div key={item} className={styles.order}>
                        <h2>Polo 1.6 MSI</h2>
                        <span><strong>Cor:</strong> Branco</span>
                        <span><strong>Quantidade:</strong> 5</span>
                        <strong>Itens de série:</strong>
                        <span>Ár, Direção</span>
                        <div className={`${styles.status} ${getClasses(item)}`}>
                            {getValue(item)}
                        </div>
                    </div>
                ))}


            </div>
        </div>


    )
}