import "./style.css"
import { BsPersonCircle } from "react-icons/bs";
import { TbLockPassword } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";

export default function Login() {
    return (
        <body>
            <div className="container">
                <div className="icons">
                    <BsPersonCircle size={85} />
                </div>
                <div className="inputs">

                    <div className="itens-1">
                        <div className="icon-text">
                            <IoPeopleOutline size={25} />
                        </div>
                        <input type="text" />
                    </div>
                    <div className="itens-2">
                        <div className="icon-password">
                            <TbLockPassword size={25} />
                        </div>
                        <input type="password" name="password" id="" />
                    </div>
                    <div className="button-login">
                        <button>Login</button>
                    </div>

                    <a href="http://">Cadastre-se</a>
                
                </div>
            </div> 
        </body >
    )
}