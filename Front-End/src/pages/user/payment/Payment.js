import React from 'react';
import { useHistory } from "react-router-dom";

// our imports
import './payment.css';
import Header from '../../../components/header/Header';


const Payment = () => {
    let history = useHistory();

    const onSubmit = (e) => 
    {
        e.preventDefault()
        alert("Compra confirmada!")
        history.push("/")
    }

    return(
        <div>
            <Header />
            
            <div className="pay-container">

                <h1>Pagamento da compra</h1>
                
                <div className="value-bar">
                    <h3>Valor total:</h3>
                    <p className="total-value">R$1200.00</p>            
                </div>

                <div className="payment-options">
                    <h3>Forma de pagamento:</h3>
                    
                    <select className="pay-select">
                        <option>1 x R$1200.00</option>
                        <option>2 x R$600.00</option>
                        <option>3 x R$400.00</option>
                        <option>6 x R$200.00</option>
                    </select>
                </div>

            
                <div className="card-container">
                    <h2 className="card-data">Dados do Cartão</h2>
                    <form action="" onSubmit={onSubmit}>
                        <div className="payment-card">
                            <label for="cc-name">Titular do Cartão </label>
                            <input className="cc-name" type="text" required />        
                        </div>
                        <div className="payment-card">
                            <label for="ccn">Número do Cartão </label>
                            <input className="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" required />        
                        </div>
                        <div className="payment-card">
                        <label for="cc-validity">Validade </label>
                            <input className="cc-validity-month" type="number" placeholder="MM" min="1" max="12" required />
                            <input className="cc-validity-year" type="number" placeholder="YY" min="21" max="99" required />
                        </div>
                        <div className="payment-card">
                            <label for="security-code">CVV </label>
                            <input className="security-code" type="number" placeholder="123" min="000" max="999" required />
                        </div>
                        
                        <div className="pay-submit-btn">
                        <input type="submit" className="pay-submit" value="Realizar Compra" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Payment