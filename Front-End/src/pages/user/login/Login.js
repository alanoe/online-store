// 3rd party imports
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// our imports
import './login.css';
import api from './../../../Api';
import LoginHeader from '../../../components/header/LoginHeader';


const Login = () => {

    let history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [message, setMessage] = useState("");

    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log("on submit");
        // authenticate using Basic Authentication
        const b64EncodedCredentials =  Buffer.from(email + ':' + password).toString('base64')
        let resp = null;
        let isAdmin = false;
        try {
            resp =  await api.post('/login', {}, {
                headers: {
                    authorization: 'Basic ' + b64EncodedCredentials
                }
            })
            isAdmin = resp.isAdmin;
        }     
        catch (e) {
            // TODO: only show this message is status code is 401
            setMessage("Usuário inexistente ou senha incorreta")
            return;
        }
        console.log("authentication result: " + isAdmin);

        history.push({
            pathname: isAdmin ? '/adminList' : '/',
            state: {
                loggedIn: true,
                search:'',
                admin: isAdmin,
                update: true
            },
        })
    }

    console.log("render login");
    return(
        <div>
            <LoginHeader />
            <div className="login-container">

                <div className="login-titulo">
                    <p>Bem vindo</p>
                </div>

                <div className="login-form">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="user-name">Nome de usuário ou email</label>
                        <input type="text" className="user-name" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="user-password">Senha</label>
                        <input type="password" className="user-password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="submit" value="Entrar"/>
                        <Link className="link-recuperar-senha" to='/adminList'>Esqueceu sua senha?</Link>
                    </form>
                </div>
                {message}
            </div>

        </div>
    );
}
export default Login;