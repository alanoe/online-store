import React from 'react';

import './cartCard.css'

const CartCard = (props) => {
    return(
        <div className="cart-card-container">
            <img className="cart-card-img" src={props.image} />
            <h3 className="cart-card-name">{props.name}</h3>
            <div className="cart-card-info">
                <h3 className="cart-card-value">R$ {props.value.toFixed(2)}</h3>
                <p className="cart-card-qnt">Quantidade: {props.qtd}</p>
            </div>
        </div>
    );
}

export default CartCard;
