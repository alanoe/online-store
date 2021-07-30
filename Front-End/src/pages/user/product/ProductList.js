// 3rd party imports
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// our imports
import './productList.css';
import api from './../../../Api'
import Card from '../../../components/card/ProductCard'
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'


const ProductList = (props) => {  


  let search;
  try{
    search = props.location.state.search;
  } catch(err){
    // TODO: empty catch blocks are evil, either do sth or remove the try-catch block
  }
  const [productList, setProductList] = useState ([]);

  // on component render, load products from server
  const fetchProducts = async () => {
      const response = await api.get('/products');
      setProductList(response.data);
  }
  useEffect (() => {
    fetchProducts();
  }, []);


  return(
        <div>
          <Header initialLoggedIn={true} initialAdmin={false}/>
          <SearchBar Admin={false}/>

         <div className='product-list'>
         {productList.map(product => {            
            if (product.name.search(search) !== -1){       
              return <Link to={{ pathname: '/product', state: { id: product._id}}}>
                  <Card name={product.name} price={product.price} image={product.image} />
              </Link>
         }
          })}
         </div>

        </div>
    );
}
export default ProductList;