import styles from "./styles.module.css"

type ButtonProps = {
    text: string;
    handle: any;
    disabled?: boolean;
}

export function ButtonForm({ text, handle, disabled = false }: ButtonProps) {
    return (
        <button 
            onClick={handle}
            disabled={disabled}
            className={styles.button}
        >
            {text}
        </button>
    )
}