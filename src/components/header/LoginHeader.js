import React from 'react'
import './header.css'

//images
import Logotipo from "../../img/ovo-branco.png";

const LoginHeader = () => {
    return(
        <div>
            <div className="bar-nav">
                <img src={Logotipo} alt="logo" className="logo" />
                <h1>Granja dos desesperados</h1>
                <div className="header-links">
                    <ul className="link-list">
                    <li>
                        <a className="link-header" href="../signUp/signUp.html">Cadastro</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LoginHeader;