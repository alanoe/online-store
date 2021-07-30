import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './header.css'

// images
import LogoOvo from "../../img/ovo-branco.png";


function Header({Login,Admin}){
  
  const [login, setLogin] = useState();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    setLogin(Login);
    setAdmin(Admin);    
  });

  console.log(login)
  var id ="";
  if(Admin){

  }else{
    id = '6101c6014b89d201a10148ff'
  }

  return(
    <div>
      <div className="bar-nav">
        
        {
          Admin === true ? (
            <div><Link to={{ pathname: '/adminList', state: { Admin: Admin}}}><img className="logo" src={LogoOvo} alt="logo"/></Link></div>
          ):(
            <div><Link to={{ pathname: '/',
            state: {
              loggedIn: true,
              search:'',
              admin: false,
              update: true 
            }}}><img className="logo" src={LogoOvo} alt="logo"/></Link></div>
          )
        }  
        {
          Admin === true ? (
            <div><Link to='/adminList' Admin={Admin} ><h1>Granja dos desesperados</h1></Link></div>
          ):(
            <div><Link to={{
              pathname: '/',
              state: {
                loggedIn: true,
                search:'',
                admin: false,
                update: true 
              },
            }} Admin={Admin} ><h1>Granja dos desesperados</h1></Link></div>
          )
        }

        
        <div className="header-links">
          <ul className="link-list">
            {/* TODO: must show either login or logout depending on if user is logged in  */ }
            {
              Login === true ? (
                <li>
                <Link className="link-header" to='/login'>Logout</Link>
                </li>
                
              ):(
                <li>
                  <Link className="link-header" to='/login'>Login</Link>
                </li>
              )
              }
            <li>
              <Link className="link-header" to= {{
                  pathname: '/profile',
                  state: {
                    admin: Admin,
                    id: id
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