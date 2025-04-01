'use client'
import Link from "next/link"
import "./styles.css"
import logo from '@/assets/logo_full.png';
import { usePathname } from "next/navigation"
import { MdBuild, MdCheckCircle, MdFactory, MdHome, MdInventory } from "react-icons/md";
import Image from "next/image";

export default function NavMenu() {
    const pathName = usePathname();

    const itens = [
        {
            label: "Home",
            page: '/dashboard',
            icon: <MdHome />
        },
        {
            label: "Manutenção",
            page: '/maintenance',
            icon: <MdBuild />
        },
        {
            label: "Produção",
            page: '/production',
            icon: <MdFactory />
        },
        {
            label: "Estoque",
            page: '/stock',
            icon: <MdInventory />
        },
        {
            label: "Qualidade",
            page: '/quality',
            icon: <MdCheckCircle />
        },
    ]



    return (
        <div className="container">
            <Image src={logo}  width={250} height={100} alt="" />
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
            <div className="profile">
                <img src="https://github.com/gustavoroberto1.png" />
                <div className="profile-infos">
                    <strong>Gustavo Souza</strong>
                    <strong>gustavo@gmail.com</strong>
                </div>
            </div>
        </div>
    )
}