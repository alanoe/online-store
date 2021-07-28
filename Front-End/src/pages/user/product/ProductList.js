import React from 'react';
import { useEffect, useState } from 'react';
import { Link, Redirect, useLocation} from 'react-router-dom';
// our imports
import './productList.css';
import api from './../../../Api'
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'
import Card from '../../../components/card/ProductCard'


const ProductList = (props) => {  


  var search;
  try{
    search = props.location.state.search;
  }catch(err){

  }
  const [productList, setProductList] = useState ([]);

  const fetchData = async () => {
      const response = await api.get('/products');
      setProductList(response.data);
      console.log(response.data)
  }
  useEffect (() => {
      fetchData();
  }, []);


  return(
        <div>
          <Header Login={true} Admin={false}/>
          <SearchBar Admin={false}/>

         <div className='product-list'>
         {productList.map(product => {            
            if(product.name.search(search) != -1){       
              return <Link to={{ pathname: '/product', state: { id: product._id}}}><Card name={product.name} price={product.price} image={product.image} /></Link>
         }
          })}
         </div>

        </div>
    );
}
export default ProductList;