import React from 'react';

// our imports
import './signUp.css';
import Header from '../../../components/header/SignUpHeader';


const SignUp = () => {
    return(
        <div>
            <Header />
            <div className="cadastro-container">
                <div className="cadastro-titulo">
                    <h2>Criação de conta</h2>
                </div>
                <div className="cadastro-form">
                    <form action="">
                        <label for="user-name">Nome de usuário </label>
                        <input className="user-name"type="text" />

                        <label for="user-email">Email </label>
                        <input className="user-email" type="email" />

                        <label for="user-cep">CEP </label>
                        <input className="user-cep" type="text" />

                        <label for="user-street">Rua </label>
                        <input className="user-street" type="text" />

                        <label for="user-house-number">Número </label>
                        <input className="user-house-number" type="text" />

                        <label>Cidade</label>
                        <input type="text" />

                        <label>Estado</label>
                        <select>
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
                        <input className="user-phone" type="text" placeholder="(xx) xxxxx-xxxx" />

                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>                
            </div>
        </div>
    );
}
export default SignUp;