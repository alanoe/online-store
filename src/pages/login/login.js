import React from 'react';
import './login.css';

import Header from '../../components/header/headerLogin';


export default function userCart(){
    return(
        <div>
            <Header />
            <div className="login-container">

                <div className="login-titulo">
                    <p>Bem vindo</p>
                </div>

                <div className="login-form">
                    <form action="">
                        <label for="user-name">Nome de usuário ou email</label>
                        <input type="text" className="user-name"/>
                        <label for="user-password">Senha</label>
                        <input type="password" className="user-password"/>
                        <input type="submit" value="Entrar"/>
                        <a className="link-recuperar-senha" href="../userHome/userHome.html">Esqueceu sua senha?</a>
                    </form>
                </div>

            </div>

        </div>
    );
}