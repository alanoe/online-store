import React from 'react'
import './header.css'

//images
import Logotipo from "../../img/ovo-branco.png";

export default function header(){
    return(
        <div>
            <div className="bar-nav">
                <img src={Logotipo} alt="logo" className="logo" />
                <h1>Granja dos desesperados</h1>
                <div className="header-links">
                    <ul className="link-list">
                    <li>
                        <a className="link-header" href="../login/index.html">Home</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}