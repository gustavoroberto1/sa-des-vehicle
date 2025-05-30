import { Status } from "@/types/status";
import { Tooltip } from "@mui/material";
import { CgComponents } from "react-icons/cg";
import { FaCamera, FaCarBattery, FaCogs, FaSnowflake, FaSortAmountUp } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { IoColorPalette } from "react-icons/io5";
import { LuCircleCheckBig, LuCircleX, LuClock, LuLoaderPinwheel } from "react-icons/lu";
import { MdChair, MdOutlineElectricCar } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { ReviewStatus } from "../ReviewStatus";
import styles from "./styles.module.css";

export type ReviewCardProps = {
    batch: {
        id: string;
        status: Status;
        production: {
            model: string;
            amount: number;
            color: string;
            accessories: string[];
        };
        engine: boolean | null;
        tire: boolean | null;
        battery: boolean | null;
        accessories: boolean | null;
        createdAt: Date;
        updatedAt: Date;
    };
} & React.HTMLAttributes<HTMLDivElement>;
export function ReviewCard({ batch, ...props }: ReviewCardProps) {
    function getStatus(value: boolean | null) {
        if (value === null) {
            return <LuClock className={styles.check_pending} />
        }

        if (value) {
            return <LuCircleCheckBig className={styles.check_approved} />
        }

        return <LuCircleX className={styles.check_rejected} />

    }

    return (
        <div className={styles.card_container} {...props}>
            <div className={styles.card_header}>
                <h2>{batch.production.model}</h2>
                <ReviewStatus status={batch.status}/>
            </div>

            <div className={styles.card_item}>
                <IoColorPalette />
                <strong>Cor:</strong>
                <span>{batch.production.color}</span>
            </div>

            <div className={styles.card_item}>
                <FaSortAmountUp />
                <strong>Quantidade:</strong>
                <span>{batch.production.amount}</span>
            </div>

            <div className={styles.card_item}>
                <CgComponents />
                <strong>Acessórios:</strong>
                <span className={styles.card_accessories}>
                    {batch.production.accessories.includes("Ár-Condicionado") && <Tooltip title="Ár-Condicionado"><FaSnowflake /></Tooltip>}
                    {batch.production.accessories.includes("Direção Elética") && <Tooltip title="Direção Elétrica"><MdOutlineElectricCar /></Tooltip>}
                    {batch.production.accessories.includes("Câmbio Automático") && <Tooltip title="Câmbio Automático"><FaCogs /></Tooltip>}
                    {batch.production.accessories.includes("Aro Liga Leve") && <Tooltip title="Aro Liga Leve"><LuLoaderPinwheel /></Tooltip>}
                    {batch.production.accessories.includes("Bando de Couro") && <Tooltip title="Banco de Couro"><MdChair /></Tooltip>}
                    {batch.production.accessories.includes("Câmera de Ré") && <Tooltip title="Câmera de Ré"><FaCamera /></Tooltip>}
                </span>
            </div>

            <div className={styles.card_check}>
                <div className={styles.card_check_item}>
                    <PiEngineFill />
                    <span>Motor: </span>
                    {getStatus(batch.engine)}
                </div>
                <div className={styles.card_check_item}>
                    <GiCarWheel />
                    <span>Pneu: </span>
                    {getStatus(batch.tire)}
                </div>
                <div className={styles.card_check_item}>
                    <FaCarBattery />
                    <span>Bateria: </span>
                    {getStatus(batch.battery)}
                </div>
                <div className={styles.card_check_item}>
                    <CgComponents />
                    <span>Acessórios: </span>
                    {getStatus(batch.accessories)}
                </div>
            </div>
        </div>
    );
}
