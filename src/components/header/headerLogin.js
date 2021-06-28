import React from 'react'
import './header.css'

export default function header(){
    return(
        <div>
            <div className="bar-nav">
                <img src="../imgs/ovo-branco.png" alt="logo" className="logo">
                <h1>Granja dos desesperados</h1>
                <div className="header-links">
                    <ul className="link-list">
                    <li>
                        <a className="link-subs" href="../userSign/userSign.html">Cadastro</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}