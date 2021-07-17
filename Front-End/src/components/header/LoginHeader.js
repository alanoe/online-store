import React from 'react'
import { Link } from 'react-router-dom';

import './header.css'

//images
import Logotipo from "../../img/ovo-branco.png";

const LoginHeader = () => {
    return(
        <div>
            <div className="bar-nav">

            <Link to='/'><img className="logo" src={Logotipo} alt="logo"/></Link>
            <Link to='/'><h1>Granja dos desesperados</h1></Link>
            
                <div className="header-links">
                    <ul className="link-list">
                    <li>
                        <Link className="link-header" to='/signUp'>Cadastro</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LoginHeader;