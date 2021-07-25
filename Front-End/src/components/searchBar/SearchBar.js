import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Redirect, useLocation} from 'react-router-dom';
//import {  } from 'react-router-dom/cjs/react-router-dom.min';

import AddProductButton from '../AddProductButton'
import './searchBar.css'
/*<Link className="link-cart" to="./cart"><i class="fas fa-shopping-cart"></i></Link>*/ 



const SearchBar = ({Admin, products}) => {
    const[searchedProduct, setSearchedProduct] = useState("");

    const handleChange = search => {
        setSearchedProduct(search.target.value);
    }

    const handleSubmit = search => {
        search.preventDefault();
        alert('A busca foi: ' + searchedProduct);
        console.log("search searchBar:"+ searchedProduct);
        console.log("Admin searchBar:"+ Admin)

        if(Admin === true) {
            return (
                <Redirect to="/adminList" search={searchedProduct}/>
            );
        }
        else {
            return (
                <Redirect to={`/?=${searchedProduct}`}/>
            );
        }
    }
    
    return(
        <div>
             <div className="search-area">
                
                <div className="search-bar">
                    <input type="search" value={searchedProduct} onChange={handleChange} className="product-search" />
                    <button className="search-button" onCLick={handleSubmit} type="submit"><i class="fas fa-search"></i></button>                      
                </div>      
                <AddProductButton Admin={Admin} products={products}/>
                
            </div>
        </div>
    );
}
export default SearchBar;