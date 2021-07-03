import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AddProductButton = ({Admin, products}) => {
  const [admin, setAdmin] = useState(Admin);

  return (
     <div>
         {
           admin == true ? (
              <Link className="link-sales" to="./sales" ><i class="fas fa-chart-line"></i></Link>
           ):(
             <></>
           )
         }
         {
              admin === true ?(
                <Link className="link-cart" to="./addProduct" products={products}><i class="fas fa-plus"></i></Link>
            ):(
                <Link className="link-cart" to="./cart"><i class="fas fa-shopping-cart"></i></Link>
            )
         }
     </div>  
  )
}

export default AddProductButton


