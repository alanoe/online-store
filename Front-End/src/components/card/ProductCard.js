import React from 'react';

import './productCard.css'

const ProductCard = (props) => {
    return(
        <div className="product-container">
            <img className="product-img" src={props.image} />
            <h3 className="product-name">{props.name}</h3>            
            <h4 className="product-value">R$ {parseInt(props.price).toFixed(2)}</h4>                            
        </div>
    );
}

export default ProductCard;
