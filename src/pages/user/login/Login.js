import React from 'react';
import { Link } from 'react-router-dom';

// our imports
import './login.css';
import LoginHeader from '../../../components/header/LoginHeader';


const Login = () => {
    return(
        <div>
            <LoginHeader />
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
                        <Link className="link-recuperar-senha" to="pages/user/retrievePassword">Esqueceu sua senha?</Link>
                    </form>
                </div>

            </div>

        </div>
    );
}
export default Login;