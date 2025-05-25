'use client'
import "./style.css"

type CabecalhoProps = {
    name: string
}

export default function Cabecalho({ name }: CabecalhoProps) {
    return (
        <div className="cabecalho-div">
            <header>
                <h1>{name}</h1>
            </header>

        </div>

    )
}