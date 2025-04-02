import { MdBuild, MdCheckCircle, MdFactory, MdInventory, MdMoney } from "react-icons/md";
import styles from './styles.module.css';

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <div className={styles.card}>
                <div className={styles.cardItem}>
                    <div className={`${styles.icon} ${styles.production}`}>
                        <MdFactory />
                    </div>
                    <div className={styles.cardInfos}>
                        <span>Fabricados</span>
                        <strong>436</strong>
                    </div>
                </div>

                <div className={styles.cardItem}>
                    <div className={`${styles.icon} ${styles.stock}`}>
                        <MdInventory />
                    </div>
                    <div className={styles.cardInfos}>
                        <span>Novos Produtos</span>
                        <strong>436</strong>
                    </div>
                </div>               
                
                <div className={styles.cardItem}>
                    <div className={`${styles.icon} ${styles.maintenance}`}>
                        <MdBuild />
                    </div>
                    <div className={styles.cardInfos}>
                        <span>Manutenções</span>
                        <strong>436</strong>
                    </div>
                </div>               
                
                <div className={styles.cardItem}>
                    <div className={`${styles.icon} ${styles.quality}`}>
                        <MdCheckCircle />
                    </div>
                    <div className={styles.cardInfos}>
                        <span>Qualidade</span>
                        <strong>100%</strong>
                    </div>
                </div>
            </div>

            <div className={styles.header}>
                <ul>
                    <li>Nome</li>
                    <li>Valor</li>
                    <li>Ações</li>
                    <li>Blabla</li>
                </ul>
            </div>

            <div className={styles.datagrid}>
                <ul>
                    <li>Nome</li>
                    <li>Valor</li>
                    <li></li>
                    <li>Blabla</li>
                </ul>
                <ul>
                    <li>João</li>
                    <li>R$2313.33</li>
                    <li>Deletar</li>
                    <li>Blabla  </li>
                </ul>
            </div>
        </div>
    )
}