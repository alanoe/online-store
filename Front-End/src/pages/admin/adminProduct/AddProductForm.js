// 3rd party imports
import React, {useState} from 'react'

// our imports
import './adminProduct.css'
import Header from '../../../components/header/Header';
import api from './../../../Api'
import { useHistory } from 'react-router-dom';


const AddProductForm = ({onAddReq}) => {
  let history = useHistory();    

  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [qnt, setQnt] = useState()
  const [img,setImg] =  useState()

  const onSubmit = async (e) => {
    // prevent page change
    //e.preventDefault()
    // validate form
    if (!name) {
      alert('Informe o nome do produto')
      return
    }
    if (!price) {
      alert('Informe o preço do produto')
      return
    }
    // IMPROVEMENT: do more validation
    let product = {
      name:name, 
      description:description, 
      price:price, 
      qnt:qnt,
      image:img
    };
    console.log(product.price)
    await api.post('/products', product);

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
              <input type='text' name='name' value={name} required onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Descrição</label>
              <textarea  className='form-description' value={description} required onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className='form-field'>
              <label>Preço</label>
              <input type='number' name='price' value={price} required onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Quantidade em estoque</label>
              <input type='number' name=' qnt' min="0" value={qnt} required onChange={(e) => setQnt(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Imagem</label>
              <input type='text' name='img' value={img} required onChange={(e) => setImg(e.target.value)}></input>
            </div>

            <input type='submit' value='Salvar' className='btn' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProductForm
