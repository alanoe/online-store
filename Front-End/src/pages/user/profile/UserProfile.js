import React,{useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

// our imports
import './userProfile.css';
import api from './../../../Api'
import Header from '../../../components/header/Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//import { set } from 'mongoose';


const UserProfile = (props) => {
    let history = useHistory();

    let Admin = props.location.state.admin;

    const id = props.location.state.id;
    console.log(id);

    const[address, setAddress] = useState();
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[CEP, setCEP] = useState();
    const[street, setStreet] = useState();
    const[houseNumber, setHouseNumber] = useState();
    const[city, setCity] = useState();
    const[state, setState] = useState();
    const[phone, setPhone] = useState();
    

    const fetchData = async () => {
        const response = await api.get('/users/' + id);
        setName(response.data.name);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setPhone(response.data.phone);
        
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    //
    /*
    var addressParts = address.split("$")
    setCEP(addressParts[0]);
    setStreet(addressParts[1]);
    setHouseNumber(addressParts[2]);
    setCity(addressParts[3]);
    setState(addressParts[4])
    */
    const onSubmit = (e) => {

        e.preventDefault()

        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.CEP.value +"$"+ e.target.street.value +"$"+ e.target.houseNumber.value +"$"+ e.target.city.value +"$"+ e.target.state.value,
            phone:e.target.phone.value
        }

        console.log(user);
        // validate form
        async function send(){
            //await api.put('/users/' + id, user ) 
        };
        send();
        alert("produto alterado");


        history.push('/adminList');
      }
    

    return (
        <div>
            <Header Admin={Admin} />
            <div className="profile-container">
                <div className="info-edit">
                    <h1>Informações pessoais</h1>
                </div>

                <div className="user-profile">
                    <form onSubmit={onSubmit}>

                        <label for="user-name">Nome de usuário </label>
                        <input className="user-name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                        <label for="user-email">Email </label>
                        <input className="user-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        {!Admin && (
                            <>
                                <label for="user-cep">CEP </label>
                                <input className="user-cep" type="text" value={CEP} onChange={(e) => setCEP(e.target.value)}/>

                                <label for="user-street">Rua </label>
                                <input className="user-forms-element" className="user-street" type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                                <label for="user-house-number">Número </label>
                                <input className="user-forms-element" className="user-house-number" type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>
                                <label for="user-city">Cidade</label>
                                <input className="user-forms-element" className="user-city" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                            </>
                        )}

                        <label>Estado</label>
                        <select className="user-state" value={state} onChange={(e) => setState(e.target.value)}>
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
                        <input className="user-phone" type="text" placeholder="(xx) xxxxx-xxxx" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                        <input type="submit" value="Editar" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UserProfile