import React from 'react';

// our imports
import './shoppingCart.css';
import Card from '../../../components/card/CartCard'
import Header from '../../../components/header/Header';
import api from './../../../Api'


import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



const ShoppingCart = () => {

  const id = new URLSearchParams(useLocation().search).get("id")

  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    const response = await api.get('/cart');

    setProductList(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function valueTotal() {
    var total = 0;
    productList.forEach((prod) => {
      total += prod.price * prod.qnt
    })
    return total + 40;
  };

  const totalPrice = valueTotal();

  return (
    <div>
      <Header />
      <div className="cart-container">
        {
          productList.length != 0 ? (
            <>
              <h1 className="cart-title">Itens no carrinho</h1>
              <div className="purchased-list">
                {productList.map(product => {
                  
                  return <Card name={product.name} price={product.price} qnt={product.qnt} image={product.image}></Card>
                })}
              </div>
              <div className="purchased-info">
                <h3>Frete:   R$40.00</h3>
                <h3>Prazo de entrega: 3 dias</h3>
              </div>      
              <div className="purchased">
                <h3>Valor total: R$ {totalPrice.toFixed(2)}</h3>
                {/** Como não tem o backend, colocar para ir direto para a página de pagamento */}
                <Link to={{ pathname: '/pay', state: { price: totalPrice}}}><input className="purchase-submit" type="submit" value="Comprar" /></Link>
              </div>
            </>
          ) :
          ( <h1 className="cart-title">Carrinho vazio</h1>)
        }

      </div>
    </div>
  );
}
export default ShoppingCart;