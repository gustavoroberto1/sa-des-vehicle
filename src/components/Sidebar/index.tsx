"use client";
import logo from "@/assets/logo_full.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdBuild,
  MdCheckCircle,
  MdFactory,
  MdHome,
  MdInventory,
} from "react-icons/md";
import styles from "./styles.module.css";

export default function Sidebar() {
  const pathName = usePathname();

  const itens = [
    {
      label: "Home",
      page: "/dashboard",
      icon: <MdHome />,
    },
    {
      label: "Manutenção",
      page: "/maintenance",
      icon: <MdBuild />,
    },
    {
      label: "Produção",
      page: "/production",
      icon: <MdFactory />,
    },
    {
      label: "Estoque",
      page: "/stock",
      icon: <MdInventory />,
    },
    {
      label: "Qualidade",
      page: "/quality",
      icon: <MdCheckCircle />,
    },
  ];

  return (
    <div className={styles.container}>
      <Image src={logo} width={250} height={100} alt="" />
      <div>
        <div className={styles.content}>
          {itens.map((item) => (
            <Link
              key={item.label}
              className={`${styles.item} ${
                pathName === item.page ? styles.selected : ""
              }`}
              href={item.page}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
