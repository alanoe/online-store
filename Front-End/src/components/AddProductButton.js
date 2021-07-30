import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AddProductButton = ({initialIsAdmin, products,cart}) => {
  const [isAdmin] = useState(initialIsAdmin);

  return (
     <div>          
         {
           isAdmin === true ? (
              <Link className="link-sales" to="./sales" ><i class="fas fa-chart-line"></i></Link>
           ):(
             <></>
           )
         }
         {
              isAdmin === true ?(
                <Link className="link-cart" to="./addProduct" products={products}><i class="fas fa-plus"></i></Link>
            ):(
                <Link className="link-cart" to="./cart"><i class="fas fa-shopping-cart"></i></Link>
            )
         }
     </div>  
  )
}

export default AddProductButton


