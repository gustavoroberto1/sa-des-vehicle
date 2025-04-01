import "./style.css"
import { BsPersonCircle } from "react-icons/bs";

export default function Login() {
    return (
        <body>
            <div className="container">
               <div className="icons">
                 <BsPersonCircle size={80}/> 
                 </div>
                <div className="inputs">
                    <div className="item">
                        <input type="text" />
                    </div>
                    <div className="item">
                        <input type="password" name="password" id="" />
                    </div>
                    <div className="item">
                        <div className="button-login">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </body >
    )
}