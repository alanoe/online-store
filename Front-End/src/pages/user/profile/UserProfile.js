// 3rd party imports
import React,{useEffect, useState} from 'react';

// our imports
import './userProfile.css';
import api from './../../../Api'
import Header from '../../../components/header/Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const UserProfile = (props) => {
    let history = useHistory();

    let isAdmin = props.location.state.admin;
    let id = props.location.state.id;
    let login = props.location.state.login
    //const id = props.location.state.id;

    if(!login){
        history.push('/login')
      }

    const[email, setEmail] = useState();
    const[name, setName] = useState();
    const[phone, setPhone] = useState();
    // address
    const[CEP, setCEP] = useState();
    const[street, setStreet] = useState();
    const[houseNumber, setHouseNumber] = useState();
    const[city, setCity] = useState();
    const[state, setState] = useState();
    

    const fetchProfile = async () => {
        const profile = await api.get('/users/' + id);
        console.log(id)
        console.log(profile.data)      
        
        setName(profile.data.name);
        setEmail(profile.data.email);
        // IMPROVEMENT: receive address as an object instead of a string with values separated by $
        const addressParts = profile.data.address.split("$");
        setCEP(addressParts[0]);
        setStreet(addressParts[1]);
        setHouseNumber(addressParts[2]);
        setCity(addressParts[3]);
        setState(addressParts[4]);
        setPhone(profile.data.phone);
        
    }
    
    useEffect(() => {
        fetchProfile();
    }, []);

    
    const onSubmit = async (e) => {

        e.preventDefault()

        // update the profile
        let newProfile = e.target;
        const user = {
            name: newProfile.name.value,
            email: newProfile.email.value,
            // IMPROVEMENT: send address as an object instead of a string with values separated by $
            address: newProfile.CEP.value +"$"+ newProfile.street.value +"$"+ newProfile.houseNumber.value +"$"+ newProfile.city.value +"$"+ newProfile.state.value,
            phone:newProfile.phone.value
        }
        await api.put('/users/current', user ) 

        // redirect to home
        history.push('/');
      }
    

    return (
        <div>
            <Header Admin={isAdmin} Login={login}/>
            <div className="profile-container">
                <div className="info-edit">
                    <h1>Informações pessoais</h1>
                </div>

                <div className="user-profile">
                    <form onSubmit={onSubmit}>

                        <label for="user-name">Nome de usuário </label>
                        <input className="user-name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

                        <label for="user-email">Email </label>
                        <input className="user-email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        {!isAdmin && (
                            <>
                                <label for="user-cep">CEP </label>
                                <input className="user-cep" type="text" id="CEP" value={CEP} onChange={(e) => setCEP(e.target.value)}/>

                                <label for="user-street">Rua </label>
                                <input className="user-forms-element user-street" id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                                <label for="user-house-number">Número </label>
                                <input className="user-forms-element user-house-number" id="houseNumber" type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>
                                <label for="user-city">Cidade</label>
                                <input className="user-forms-element user-city" id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                            </>
                        )}

                        <label>Estado</label>
                        <select className="user-state" id="state" value={state} onChange={(e) => setState(e.target.value)}>
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
                        <input className="user-phone" type="text" placeholder="(xx) xxxxx-xxxx" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                        <input type="submit" value="Editar" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UserProfile