import ProductAdmin from  './ProductAdmin'

const ProductsAdmin = ({ products, onRemoveReq }) => {
  
  return (
    <>
      {products.map((p) => (
        <Product key={p.id} product={p} onRemoveReq={onRemoveReq}/> 
      ))}  
    </>
  );
}

export default ProductsAdmin;
  