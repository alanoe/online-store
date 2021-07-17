import {useState} from 'react'

import './adminProduct.css'

import Header from '../../../components/header/Header';

const AddProductForm = ({onAddReq}) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState(0)

  const onSubmit = (e) => {
    // prevent page change
    e.preventDefault()
    // validate form
    if (!name) {
      alert('Informe o nome do produto')
    }
    if (!price) {
      alert('Informe o preço do produto')
    }
    // IMPROVEMENT: do more validation

    onAddReq({name, description, price, quantity})
    setName('')
    setDescription('')
    setPrice('')
    setQuantity(0)
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
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Descrição</label>
              <textarea  className='form-description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className='form-field'>
              <label>Preço</label>
              <input type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div className='form-field'>
              <label>Quantidade em estoque</label>
              <input type='number' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
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
