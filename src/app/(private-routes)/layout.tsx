import NavBar from "@/components/NavBar";
import "./style.css"
export default function PrivateLayout({ children }: { children: React.ReactNode}){
    return (
        <div className="layout">
            <NavBar/>
            {children}
            
        </div>
    )
}