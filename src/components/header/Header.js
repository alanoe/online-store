import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './header.css'

// images
import LogoOvo from "../../img/ovo-branco.png";


function Header(Login){
  console.log(Login)
  const [login, setLogin] = useState();

  useEffect(() => {
    if (Login) { setLogin(Login); }
  });


  return(
    <div>
      <div className="bar-nav">        
        <Link to='/'><img className="logo" src={LogoOvo} alt="logo"/></Link>
        <Link to='/'><h1>Granja dos desesperados</h1></Link>
        
        <div className="header-links">
          <ul className="link-list">
            {/* TODO: must show either login or logout depending on if user is logged in  */ }
            {
              login === true ? (
                <li>
                  <Link className="link-header" to='/login'>Login</Link>
                </li>
              ):(
                <li>
                  <Link className="link-header" to='/login'>Logout</Link>
                </li>
              )
            }
            <li>
              <Link className="link-header" to='/profile' ><i class="fas fa-user"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
}
export default Header();