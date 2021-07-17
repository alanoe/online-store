import React from 'react';

// our imports
import './productList.css';
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'
import Card from '../../../components/card/ProductCard'

import Unicornio from "../../../img/unicornio.jfif";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

var productList = [
  {name: 'Ovo de unicornio da angola', value: 4200.00, qtd:1, image: Unicornio},
  {name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {name: 'Ovo de BRUNO', value: 1000.00, qtd: 5, image: Unicornio},
  {name: 'Ovo de unicornio', value: 4200.00, qtd:1, image: Unicornio},
  {name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {name: 'Ovo de Savio', value: 1000.00, qtd: 5, image: Unicornio},
  {name: 'Ovo de unicornio', value: 4200.00, qtd:1, image: Unicornio},
  {name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {name: 'Ovo de Savio', value: 1000.00, qtd: 5, image: Unicornio}
];

const ProductList = () => {
    return(
        <div>
          <Header Login={true}/>
          <SearchBar />

         <div className='product-list'>
         {productList.map(product => {            
            return <Link to='/product'><Card name={product.name} value={product.value} image={product.image} /></Link>
          })}
         </div>

        </div>
    );
}
export default ProductList;