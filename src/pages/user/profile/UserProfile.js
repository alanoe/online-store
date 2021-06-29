import React from 'react';
import { Link } from 'react-router-dom';

// our imports
import './userProfile.css';
import Header from '../../../components/header/Header';

const UserProfile = () => {
    return(
        <div>
            <Header />
            <div className="info-edit">
                <h1>Informações pessoais</h1>
                <Link className="edit" to="/profile" />      
            </div>

            <div>
            <form action="">

                <div class="user-forms">
                <label for="user-name">Nome de usuário </label>
                <input className="user-name" type="text" disabled />        
                </div>

                <div class="user-forms">
                <label for="user-email">Email </label>
                <input className="user-email" type="email" disabled />
                </div>

                <div class="user-forms">
                <label for="user-cep">CEP </label>
                <input className="user-cep" type="text" disabled />
                </div>

                <div class="user-forms">
                <label for="user-street">Rua </label>
                <input class="user-forms-element" className="user-street" type="text" disabled />
                <label for="user-house-number">Número </label>
                <input class="user-forms-element" className="user-house-number" type="text" disabled />
                <label for="user-city">Cidade</label>
                <input class="user-forms-element" className="user-city" type="text" disabled />
                </div>

                <div class="user-forms">
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
                </div>

                <div class="user-forms">
                    <label for="user-phone">Telefone</label>
                    <input className="user-phone" type="text" placeholder="(xx) xxxxx-xxxx"  disabled />
                </div>
                                        
                <input type="submit" value="Editar" />
            </form>
            </div>
            
        </div>
    );
}
export default UserProfile