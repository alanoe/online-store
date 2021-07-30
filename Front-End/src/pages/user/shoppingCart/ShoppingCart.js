import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// our imports
import './shoppingCart.css';
import Card from '../../../components/card/CartCard'
import Header from '../../../components/header/Header';
import api from './../../../Api'





const ShoppingCart = () => {

  // TODO: do not hardcode shipping
  const SHIPPING_COST = 40
  // TODO: make search work or delete it 
  //const id = new URLSearchParams(useLocation().search).get("id")

  // React state variables
  const [productList, setProductList] = useState([]);

  // on React component render, get list of cart items from server

  useEffect(() => {
    console.log("fetch products from server");
    const fetchProducts = async () => {
      const response = await api.get('/cart');
      setProductList(response.data.items);
      console.log("product list: " + response.data.items);
    }
    fetchProducts();
  }, []);

  function getShippingCost() {
    return 40.00
  }

  function getDeliveryTimeInDays() {
    // TODO: do not hardcode the delivery time
    return 3;
  }
  function getSalePrice() {
    console.log("getSalePrice");
    let total = 0;
    for (let prod of productList) {
      total += prod.price * prod.qnt
    }
    return total + SHIPPING_COST;
  };


  //const totalPrice = getSalePrice();

  return (
    <div>
      <Header />
      <div className="cart-container">
        {
          productList.length !== 0 ? (
            <>
              <h1 className="cart-title">Itens no carrinho</h1>
              <div className="purchased-list">
                {productList.map(product => {
                  return <Card name={product.name} price={product.price} qnt={product.qnt} image={product.image}></Card>
                })}
              </div>
              <div className="purchased-info">
                <h3>Frete: R$ {getShippingCost()}</h3>
                <h3>Prazo de entrega: {getDeliveryTimeInDays()} dias</h3>
              </div>
              <div className="purchased">
                <h3>Valor total: R$ {getSalePrice().toFixed(2)}</h3>
                {/** Como não tem o backend, colocar para ir direto para a página de pagamento */}
                <Link to={{ pathname: '/pay', state: { price: getSalePrice()}}}><input className="purchase-submit" type="submit" value="Comprar" /></Link>
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
