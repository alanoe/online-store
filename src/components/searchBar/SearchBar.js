import React from 'react'
import './searchBar.css'


const SearchBar = () => {
    return(
        <div>
             <div className="search-area">
                
                <div className="search-bar">
                    <input type="search" className="product-search" />
                    <button className="search-button"><i class="fas fa-search"></i></button>      
                </div>      
                
                <a className="link-cart" href="../userCart/userCart.html"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    );
}
export default SearchBar;