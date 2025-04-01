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
            page: '/teste',
            icon: <BsSquareHalf />
        },
        {
            label: "Produção",
            page: '/teste2',
            icon: <BsAndroid />
        },
        {
            label: "Estoque",
            page: '/stock',
            icon: <BsPersonCircle />
        },
        {
            label: "Qualidade",
            page: '/quality',
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