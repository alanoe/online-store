import React,{useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

// our imports
import './userProfile.css';
import api from './../../../Api'
import Header from '../../../components/header/Header';

/*
var usuario = {
    name: "Bruno Fernandes Moreira",
    email: "moreira.bruno@usp.br",
    cep: "99999-999",
    rua: "Casa Baixa",
    numero: "420",
    cidade: "Sanca",
    estado: "SP",
    telefone: "(11) 99999-9999",
}
*/
const UserProfile = (props) => {
    let Admin = props.location.state.admin;

    const id = new URLSearchParams(useLocation().search).get("id")

    const [usuario, setUsuario] = useState({});

    const fetchData = async () => {
        const response = await api.get('/user/' + id);
        setUsuario(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log(Admin)
    return (
        <div>
            <Header Admin={Admin} />
            <div className="profile-container">
                <div className="info-edit">
                    <h1>Informações pessoais</h1>
                </div>

                <div className="user-profile">
                    <form action="">

                        <label for="user-name">Nome de usuário </label>
                        <input className="user-name" type="text" value={usuario.name} disabled />

                        <label for="user-email">Email </label>
                        <input className="user-email" type="email" value={usuario.email} disabled />

                        {!Admin && (
                            <>
                                <label for="user-cep">CEP </label>
                                <input className="user-cep" type="text" value={usuario.cep} disabled />

                                <label for="user-street">Rua </label>
                                <input className="user-forms-element" className="user-street" type="text" value={usuario.rua} disabled />
                                <label for="user-house-number">Número </label>
                                <input className="user-forms-element" className="user-house-number" type="text" value={usuario.numero} disabled />
                                <label for="user-city">Cidade</label>
                                <input className="user-forms-element" className="user-city" type="text" value={usuario.cidade} disabled />
                            </>
                        )}

                        <label>Estado</label>
                        <select className="user-state" value={usuario.estado} disabled>
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
                        <input className="user-phone" type="text" placeholder="(xx) xxxxx-xxxx" value={usuario.telefone} disabled />

                        <input type="submit" value="Editar" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UserProfile