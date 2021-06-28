/*
import './App.css';
import {useState} from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Products from './components/Products'
import AddProductForm from './components/AddProductForm'


function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState (false)
  const [products, setProducts] = useState([
    {"id": 1, "name": "ovo de ET"},
    {"id": 2, "name": "ovo de avestruz"},  
  ])

  const addProduct = (product) => {
    console.log('add product ' + product)
    console.log("last elem ID " + products[products.length-1].id )
    const newId = products[products.length-1].id+1;
    const newProduct = {'id': newId, ...product}
    setProducts([...products, newProduct])
  }

  const removeProduct = (id) => {
    console.log('remove product ' + id)
    setProducts(products.filter( product => product.id !== id)) 
    console.log('new list of products ' + products.map(p => p.id))
  }

  const toggleShowAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm)
  }

  return (
    <div className='App'>
      <Header/>
      <Button text='Adicionar' onClick={toggleShowAddTaskForm} />
      {showAddTaskForm ? (<AddProductForm onAddReq={addProduct} /> ) : null}
      <Products products={products} onRemoveReq={removeProduct} />
    </div>
  );
}

export default App;
*/

import React from 'react';
import './App.css';

import Routes from './routes';

function App(){
  return(
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;