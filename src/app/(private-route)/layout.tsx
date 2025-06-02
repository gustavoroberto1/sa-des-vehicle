'use client '
import Sidebar from "@/components/Sidebar";
import "./styles.css";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="layout">
            <Sidebar />
            <main className="main">
                {children}
            </main>
        </div>
    )
}