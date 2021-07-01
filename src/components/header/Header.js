import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

// images
import Logotipo from "../../img/ovo-branco.png";


const Header = () => {
  return(
    <div>
      <div className="bar-nav">        
        <Link to='/'><img className="logo" src={Logotipo} alt="logo"/></Link>
        <Link to='/'><h1>Granja dos desesperados</h1></Link>
        
        <div className="header-links">
          <ul className="link-list">
            {/* TODO: must show either login or logout depending on if user is logged in  */ }
            <li>
              <Link className="link-header" to='/login'>Login</Link>
            </li>
            <li>
              <Link className="link-header" to='/login'>Logout</Link>
            </li>
            <li>
              <Link className="link-header" to='/profile' ><i class="fas fa-user"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
}
export default Header;