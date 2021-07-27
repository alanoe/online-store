import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';

import './adminProduct.css'

import Header from '../../../components/header/Header';
import api from './../../../Api'
import { useHistory } from 'react-router-dom';


const AddProductForm = ({onAddReq}) => {
/*--------------------------------------------------------------*/
  let history = useHistory();    

  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [ qnt, setQnt] = useState()

  const onSubmit = (e) => {
    // prevent page change
    //e.preventDefault()
    // validate form
    if (! name) {
      alert('Informe o nome do produto')
      return
    }
    if (! price) {
      alert('Informe o preço do produto')
      return
    }
    // IMPROVEMENT: do more validation

    var product = {name:name, description:description, price:price, qnt:qnt};

    async function send(){await api.post('/products', product) };

    send();

    alert("enviado com sucesso")

    history.push('/adminList')
    
  }


  return (

    <div>
      <Header Login={true} Admin={true}/>
      <div className='addProduct-container'>

        <div className="info-edit-product">
          <h1>Adicione um Produto</h1>     
        </div>

        <div className='addProduct-box'>
          <form onSubmit={onSubmit}>
            <div className='form-field'>
              <label>Nome</label>
              <input type='text' name='name' value={ name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Descrição</label>
              <textarea  className='form-description' value={ description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className='form-field'>
              <label>Preço</label>
              <input type='number' name='price' value={ price} onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Quantidade em estoque</label>
              <input type='number' name=' qnt' value={qnt} onChange={(e) => setQnt(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Imagem</label>
              <input type='file' name='image' ></input>
            </div>

            <input type='submit' value='Salvar' className='btn' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProductForm
