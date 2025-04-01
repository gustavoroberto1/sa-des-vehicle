'use client '
import NavMenu from "@/components/NavMenu";
import { TopMenu } from "@/components/TopMenu";
import "./styles.css"

export default function PrivateLayout({ children }: { children: React.ReactNode}){
    return (
        <div className="layout">
            <NavMenu  />
            {children}
        </div>
    )
}