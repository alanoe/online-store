import React from 'react';

// our imports
import './productList.css';
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'

const ProductList = () => {
    return(
        <div>
          <Header />
          <SearchBar />
        </div>
    );
}
export default ProductList;