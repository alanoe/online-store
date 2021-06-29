import ProductAdmin from  './ProductAdmin'

const ProductsAdmin = ({ products, onRemoveReq }) => {
  console.log("render products " + products)
  return (
    <>
      {products.map((p) => (
        <Product key={p.id} product={p} onRemoveReq={onRemoveReq}/> 
      ))}  
    </>
  );
}

export default ProductsAdmin;
  