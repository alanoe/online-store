import React from 'react';

// our imports
import './shoppingCart.css';
import Header from '../../../components/header/Header';

// images
import Unicornio from "../../../img/unicornio.jfif";


const ShoppingCart = () => {
  return(
    <div>
      <Header />
        <h1 className="cart-title">Itens no carrinho</h1>
        <ul className="purshed-list">
          <li class="product">
            <img class="product-img" src= {Unicornio} />
            <h3 class="product-name">Ovo de unicornio </h3>
            <div>
              <h3 class="product-value">R$4200.00</h3>
              <p class="product-qnt">QuantclassNameade: 1</p>
            </div>
          </li>
        </ul>
        <div className="purshed-info">
          <h3>Frete:   R$40.00</h3>
          <h3>Prazo de entrega: 3 dias</h3>
        </div>      
        <div className="purshed">
          <h3>Valor total:  R$4200.00</h3>
          {/** Como não tem o backend, colocar para ir direto para a página de pagamento */}
          <input className="purchase-submit" type="submit" value="Comprar" />
        </div>
      </div>
    );
}
export default ShoppingCart;