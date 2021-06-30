import React from 'react'
import { Link } from 'react-router-dom';

import './searchBar.css'


const SearchBar = () => {
    return(
        <div>
             <div className="search-area">
                
                <div className="search-bar">
                    <input type="search" className="product-search" />
                    <button className="search-button"><i class="fas fa-search"></i></button>      
                </div>      
                
                <Link className="link-cart" to="./cart"><i class="fas fa-shopping-cart"></i></Link>
            </div>
        </div>
    );
}
export default SearchBar;