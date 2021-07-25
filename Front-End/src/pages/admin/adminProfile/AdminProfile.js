import React ,{useState, useEffect}from 'react';
import { Link, useLocation} from 'react-router-dom';

// our imports
import './adminProfile.css';
import Header from '../../../components/header/Header';

const api=true;

const AdminProfile = () => {
 
    const id = new URLSearchParams(useLocation().search).get("id")

    const [usuario, setUsuario] = useState({});

    const fetchData = async () => {
        const response = await api.get('/Admin/' + id);
        setUsuario(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);


    return(
        <div>
            <Header />
            <div className="profile-container">
                <div className="info-edit">
                    <h1>Informações pessoais</h1>     
                </div>

                <div className="user-profile">
                    <form action="">

                        <label for="user-name">Nome de usuário </label>
                        <input className="user-name" type="text" disabled />        
                        
                        <label for="user-email">Email </label>
                        <input className="user-email" type="email" disabled />
                        
                        <label for="user-cep">CEP </label>
                        <input className="user-cep" type="text" disabled />
                        
                        
                        <label for="user-street">Rua </label>
                        <input className="user-forms-element" className="user-street" type="text" disabled />
                        <label for="user-house-number">Número </label>
                        <input className="user-forms-element" className="user-house-number" type="text" disabled />
                        <label for="user-city">Cidade</label>
                        <input className="user-forms-element" className="user-city" type="text" disabled />
                        

                        <label>Estado</label>
                        <select className="user-state" disabled>
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
                            <input className="user-phone" type="text" placeholder="(xx) xxxxx-xxxx"  disabled />
                                                
                        <input type="submit" value="Editar" />
                    </form>
                </div>
            </div>    
        </div>
    );
}
export default AdminProfile