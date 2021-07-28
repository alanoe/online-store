import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from './../../../Api';


// our imports
import './login.css';
import LoginHeader from '../../../components/header/LoginHeader';



const Login = () => {

    let history = useHistory();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const onSubmit  =  (e) =>{


        alert("usuario: " + email + "\nsenha :" + password);
        if(email == 'admin' && password == 'admin'){
            history.push({
                pathname: '/adminList',
                state: {
                  loggedIn: true,
                  search:'',
                  admin: true,
                  update: true 
                },
              })
        }else{
            history.push({
                pathname: '/',
                state: {
                  loggedIn: true,
                  search:'',
                  update: true 
                },
              })
        }
        
    }

    return(
        <div>
            <LoginHeader />
            <div className="login-container">

                <div className="login-titulo">
                    <p>Bem vindo</p>
                </div>

                <div className="login-form">
                    <form onSubmit={onSubmit}>
                        <label for="user-name">Nome de usuário ou email</label>
                        <input type="text" className="user-name" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label for="user-password">Senha</label>
                        <input type="password" className="user-password" required required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="submit" value="Entrar"/>
                        <Link className="link-recuperar-senha" to='/adminList'>Esqueceu sua senha?</Link>
                    </form>
                </div>

            </div>

        </div>
    );
}
export default Login;