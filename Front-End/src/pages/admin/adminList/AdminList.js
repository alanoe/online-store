import React from 'react';
import {useState, useEffect} from 'react'

// our imports
import './adminList.css';

import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'
import Card from '../../../components/card/ProductCard'

import Unicornio from "../../../img/unicornio.jfif";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

/*
var productList = [
  {id: 1, name: 'Ovo da angola', value: 4200.00, qtd:1, image: Unicornio},
  {id: 2, name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {id: 3, name: 'Ovo de BRUNO', value: 1000.00, qtd: 5, image: Unicornio},
  {id: 4, name: 'Ovo de unicornio', value: 4200.00, qtd:1, image: Unicornio},
  {id: 5, name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {id: 6, name: 'Ovo de Savio', value: 1000.00, qtd: 5, image: Unicornio},
  {id: 7, name: 'Ovo de unicornio', value: 4200.00, qtd:1, image: Unicornio},
  {id: 8, name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {id: 9, name: 'Ovo de Savio', value: 1000.00, qtd: 5, image: Unicornio}
];
*/

const api=true;

const ProductList = () => {

  const [productList, setProductList] = useState ([]);

  const fetchData = async () => {
      const response = await api.get('/productList');
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
          return <Link to='/product'><Card name={product.name} value={product.value} image={product.image} /></Link>
        })}
      </div>
    </div>
  );
}
export default ProductList;