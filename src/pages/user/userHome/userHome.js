import React from 'react';
import './userHome.css';

import Header from '../../../components/header/header';
import SearchBar from '../../../components/searchBar/searchBar'

export default function userHome(){
    return(
        <div>
            <Header />
            <SearchBar />
        </div>
    );
}