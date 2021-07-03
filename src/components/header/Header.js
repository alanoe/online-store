import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './header.css'

// images
import LogoOvo from "../../img/ovo-branco.png";


function Header({Login,Admin}){
  console.log("header:"+Admin)
  const [login, setLogin] = useState();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    setLogin(Login);
    setAdmin(Admin);    
  });

  
  return(
    <div>
      <div className="bar-nav">
        
        {
          Admin === true ? (
            <div><Link to='/adminList'><img className="logo" src={LogoOvo} alt="logo"/></Link></div>
          ):(
            <div><Link to='/'><img className="logo" src={LogoOvo} alt="logo"/></Link></div>
          )
        }  
        {
          Admin === true ? (
            <div><Link to='/adminList'><h1>Granja dos desesperados</h1></Link></div>
          ):(
            <div><Link to='/'><h1>Granja dos desesperados</h1></Link></div>
          )
        }

        
        <div className="header-links">
          <ul className="link-list">
            {/* TODO: must show either login or logout depending on if user is logged in  */ }
            {
              Login === false ? (
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
              <Link className="link-header" to= {{
                  pathname: '/profile',
                  state: {
                    admin: Admin
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