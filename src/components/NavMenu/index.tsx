'use client'
import Link from "next/link"
import "./styles.css"
import { usePathname } from "next/navigation"
import { BsAndroid, BsPerson, BsPersonCircle, BsSquareHalf } from "react-icons/bs";

export default function NavMenu() {
    const pathName = usePathname();

    
    const itens = [
        {
            label: "Home",
            page: '/dashboard',
            icon: <BsPersonCircle />
        },
        {
            label: "Manutenção",
            page: '/manutencao',
            icon: <BsSquareHalf />
        },
        {
            label: "Produção",
            page: '/producao',
            icon: <BsAndroid />
        },
        {
            label: "Estoque",
            page: '/estoque',
            icon: <BsPersonCircle />
        },
        {
            label: "Qualidade",
            page: '/qualidade',
            icon: <BsPersonCircle />
        },
    ]



    return (
        <div className="container">
            <div className="content">
                {itens.map(item => (
                    <Link 
                        key={item.label} 
                        className={`item ${pathName === item.page ? "selected" : ""}`}
                        href={item.page}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}