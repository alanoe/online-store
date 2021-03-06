import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import {Redirect} from 'react-router'


import AddProductButton from '../AddProductButton'
import './searchBar.css'


const SearchBar = ({Admin, products, login, id}) => {
    let history = useHistory();
    console.log(login)
    const[searchedProduct, setSearchedProduct] = useState("");

    const handleChange = search => {
        setSearchedProduct(search.target.value);
    }

    const handleSubmit = search => {
        //search.preventDefault();
        //alert('A busca foi: ' + searchedProduct);
        
        if(Admin === true) {
            return (
                history.push({
                    pathname: '/adminList',
                    state: {
                      search: searchedProduct,
                      update: true 
                    },
                  })
            );
        }
        else {
            return (
                history.push({
                    pathname: '/',
                    state: {
                      search: searchedProduct,
                      update: true 
                    },
                  })
            );
        }
    }
    
    return(
        <div>
             <div className="search-area">
                
                <div className="search-bar">
                    <input type="search" value={searchedProduct} onChange={handleChange} className="product-search" />
                    <button className="search-button" onCLick={handleSubmit} ><i class="fas fa-search"></i></button>                      
                </div>      
                <AddProductButton Admin={Admin} products={products} login={login} id={id}/>
                
            </div>
        </div>
    );
}
export default SearchBar;