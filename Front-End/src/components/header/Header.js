import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import './header.css'

// images
import LogoOvo from "../../img/ovo-branco.png";
import api from '../../Api'

function Header({initialLoggedIn, initialIsAdmin}){
  
  const [loggedIn] = useState(initialLoggedIn);
  const [isAdmin] = useState(initialIsAdmin);

  // TODO: delete this code
  /*
  let id ="";
  if (!isAdmin) {
    id = '6101c6014b89d201a10148ff'
  }
  */
  let toHome = isAdmin === true ? '/adminList' : '/'
  console.log("logged in: " + loggedIn);
  
  const logout = async () => {
    await api.post("/logout")
  }

  return(
    <div>
      <div className="bar-nav">
        
        <div><Link to={toHome} isAdmin={isAdmin}><img className="logo" src={LogoOvo} alt="logo"/></Link></div>
        <div><Link to={toHome} isAdmin={isAdmin}><h1>Granja dos desesperados</h1></Link></div>
        
        <div className="header-links">
          <ul className="link-list">
            {
              loggedIn === false ? (
                <li>
                  <Link className="link-header" to='/login'>Login</Link>
                </li>
              ):(
                <li>
                  <Link className="link-header" to='/login' onClick={logout}>Logout</Link>
                </li>
              )
              }
            <li>
              <Link className="link-header" to= {{
                  pathname: '/profile',
                  state: {
                    admin: isAdmin//,
                    //id: id
                  }
               }} >
              <i class="fas fa-user"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
}
export default Header;