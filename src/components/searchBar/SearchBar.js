import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AddProductButton from '../AddProductButton'
import './searchBar.css'
/*<Link className="link-cart" to="./cart"><i class="fas fa-shopping-cart"></i></Link>*/ 

const SearchBar = ({Admin, products}) => {
    
    return(
        <div>
             <div className="search-area">
                
                <div className="search-bar">
                    <input type="search" className="product-search" />
                    <button className="search-button"><i class="fas fa-search"></i></button>      
                </div>      
                <AddProductButton Admin={Admin} products={products}/>
                
            </div>
        </div>
    );
}
export default SearchBar;