import { Status, StatusIcon, StatusLabel } from "@/types/status";
import styles from './styles.module.css';

type ReviewStatusProps = { status: Status }
export function ReviewStatus({ status }: ReviewStatusProps) {
  return (
    <div className={`${styles.container_status} ${styles["status-" + status.toLowerCase()]}`}>
      {StatusIcon[status]}
      <span>{StatusLabel[status]}</span>
    </div>
  )
}