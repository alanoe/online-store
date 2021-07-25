import React from 'react';

// our imports
import './shoppingCart.css';
import Card from '../../../components/card/CartCard'
import Header from '../../../components/header/Header';

// images
import Unicornio from "../../../img/unicornio.jfif";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api=true;
/*
var productList = [
  {name: 'Ovo de unicornio', value: 4200.00, qtd:1, image: Unicornio},
  {name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {name: 'Ovo de BRUNO', value: 1000.00, qtd: 5, image: Unicornio}
];
*/
var totalPrice = 40;


const ShoppingCart = () => {

  const id = new URLSearchParams(useLocation().search).get("id")

  const [productList, setProductList] = useState ([]);

  const fetchData = async () => {
      const response = await api.get('/Cart/' + id);
      setProductList(response.data);
  }
  useEffect (() => {
      fetchData();
  }, []);

  return(
    <div>
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Itens no carrinho</h1>
        <div className="purchased-list">
          {productList.map(product => {
            totalPrice += product.value;
            return <Card name={product.name} value={product.value} qtd={product.qtd} image={product.image}></Card>
          })}
        </div>
        <div className="purchased-info">
          <h3>Frete:   R$40.00</h3>
          <h3>Prazo de entrega: 3 dias</h3>
        </div>      
        <div className="purchased">
          <h3>Valor total: R$ {totalPrice.toFixed(2)}</h3>
          {/** Como não tem o backend, colocar para ir direto para a página de pagamento */}
          <Link to='/pay'><input className="purchase-submit" type="submit" value="Comprar" /></Link>
        </div>
      </div>
    </div>
    );
}
export default ShoppingCart;