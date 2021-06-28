import times_icon from '../times_icon.png';

const Product = ({product, onRemoveReq}) => {   
  return (
    <div>
      {product.name} 
      <img src={times_icon} onClick={() => onRemoveReq(product.id)}/>   
    </div>
  )
}

export default Product
