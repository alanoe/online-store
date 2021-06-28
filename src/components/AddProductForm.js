import {useState} from 'react'

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
    <form onSubmit={onSubmit}>
      <div className='form-field'>
        <label>Nome</label>
        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className='form-field'>
        <label>Descrição</label>
        <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </div>
      <div className='form-field'>
        <label>Preço</label>
        <input type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </div>
      <div className='form-field'>
        <label>Quantidade em estoque</label>
        <input type='text' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
      </div>
      <div className='form-field'>
        <label>Imagem</label>
        <input type='file' name='image' ></input>
      </div>

      <input type='submit' value='Salvar' className='btn' />
    </form>
  )
}

export default AddProductForm
