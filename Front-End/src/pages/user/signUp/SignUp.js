import React, {useState, useEffect} from 'react';

// our imports
import './signUp.css';
import Header from '../../../components/header/SignUpHeader';
import api from './../../../Api'
import { useHistory } from 'react-router-dom';


const SignUp = () => {

    let history = useHistory();

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[CEP, setCEP] = useState();
    const[street, setStreet] = useState();
    const[houseNumber, setHouseNumber] = useState();
    const[city, setCity] = useState();
    const[state, setState] = useState();
    const[phone, setPhone] = useState();
    const[password, setPassword] = useState();

    const onSubmit  =  (e) =>{
        
        var address = CEP + "$" +street + "$"+ houseNumber + "$"+ city + "$"+ state
        var usuario = {name:name,email:email,address:address,phone:phone,password:password}

        async function send(){await api.post('/users', usuario) };
        send();

        alert("Usuário criado com sucesso" + password)

        history.push('/login');
    }

    return(
        <div>
            <Header />
            <div className="cadastro-container">
                <div className="cadastro-titulo">
                    <h2>Criação de conta</h2>
                </div>
                <div className="cadastro-form">
                    <form onSubmit={onSubmit}>
                        <label for="user-name">Nome de usuário </label>
                        <input className="user-name"type="text" required value={name} onChange={(e) => setName(e.target.value)}/>

                        <label for="user-email">Email </label>
                        <input className="user-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label for="user-cep">CEP </label>
                        <input className="user-cep" type="text" required value={CEP} onChange={(e) => setCEP(e.target.value)}/>

                        <label for="user-street">Rua </label>
                        <input className="user-street" type="text" required value={street} onChange={(e) => setStreet(e.target.value)}/>

                        <label for="user-house-number">Número </label>
                        <input className="user-house-number" type="text" required value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>

                        <label>Cidade</label>
                        <input className="user-city" type="text" required value={city} onChange={(e) => setCity(e.target.value)}/>

                        <label>Estado</label>
                        <select required value={state} onChange={(e) => setState(e.target.value)}>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AM">AM</option>
                            <option value="AP">AP</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MG">MG</option>
                            <option value="MT">MT</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="PR">PR</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="RS">RS</option>
                            <option value="SC">SC</option>
                            <option value="SE">SE</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                        </select>
                        
                        <label for="user-phone">Telefone</label>
                        <input className="user-phone" required type="text" placeholder="(xx) xxxxx-xxxx" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                        <label for="password">Password</label>
                        <input className="user-password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>                
            </div>
        </div>
    );
}
export default SignUp;