import React from 'react';
import {useState, useEffect} from 'react'

// our imports
import './adminList.css';
import api from './../../../Api'

import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'
import Card from '../../../components/card/ProductCard'

import Unicornio from "../../../img/unicornio.jfif";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const ProductList = () => {

  const [productList, setProductList] = useState ([]);

  const fetchData = async () => {
      const response = await api.get('/products');
      setProductList(response.data);
  }
  useEffect (() => {
      fetchData();
  }, []);


  return(
    <div>
      <Header Login={true} Admin={true}/>
      <SearchBar Admin={true} products={productList}/>

      <div className='product-list'>
        {productList.map(product => {            
          return <Link to={{ pathname: '/adminProduct', state: { id: product._id}}}><Card name={product.name} price={product.price} image={product.image} /></Link>
        })}
      </div>
    </div>
  );
}
export default ProductList;