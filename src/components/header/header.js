import React from 'react'
import './header.css'

import Logotipo from '../../../img/ovo-branco.png';

export default function header() {
    return(
        <div>
            <div className="bar-nav">
              <img src={Logotipo} alt="logo" className="logo" />
              <h1>Granja dos desesperados</h1>
              <div className="header-links">
                <ul className="link-list">
                  <li>
                    <a className="link-header" href="../userHome/userHome.html">Home</a>
                  </li>
                  <li>
                    <a className="link-header" href="../login/index.html">Logout</a>
                  </li>
                  <li>
                    <a className="link-header" href="../userProfile/userProfile.html">
                        <i class="fas fa-user"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    );
}