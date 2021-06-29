import times_icon from '../times_icon.png';

const ProductAdmin = ({product, onRemoveReq}) => {   
  return (
    <div>
      {product.name} 
      <img src={times_icon} onClick={() => onRemoveReq(product.id)}/>   
    </div>
  );
}

export default ProductAdmin;
