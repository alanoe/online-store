import React from 'react';

import './cartCard.css'

const CartCard = (props) => {
    return(
        <div className="product-container">
            <img className="product-img" src={props.image} />
            <h3 className="product-name">{props.name}</h3>
            <div className="product-info">
                <h3 className="product-value">R$ {props.value.toFixed(2)}</h3>
                <p className="product-qnt">Quantidade: {props.qtd}</p>
            </div>
        </div>
    );
}

export default CartCard;
