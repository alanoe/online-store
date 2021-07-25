import React from 'react';

import './productCard.css'

const ProductCard = (props) => {
    console.log("Card nome: " + props.name + "price: " + props.price)
    return(
        <div className="product-container">
            <img className="product-img" src={props.image} />
            <h3 className="product-name">{props.name}</h3>            
            <h4 className="product-value">R$ {props.price}</h4>                            
        </div>
    );
}

export default ProductCard;
