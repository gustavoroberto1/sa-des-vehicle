import "./style.css"
import { FaHome } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md"
import { FaCar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";


export default function NavBar() {
    return (
        <div className="container">
            <nav>
                <div className="nav-bar">
                    <div className="Avatar">
                        <h1 className="avatar"><img src="https://github.com/J3runo.png" alt="avatar" width="70px" height="70px" borde-radius="20px"/></h1>
                        
                    </div>
                    <button><FaHome />Home</button>
                    <button><MdPrecisionManufacturing />Produção</button>
                    <button><FaCar />Estoque</button>
                    <button><FaGear />Manutenção</button>
                    <button><FaCheck /> Qualidade</button>
                    <button><CiLogout />Logout</button>
                </div>
            </nav>
        </div>
    )
}