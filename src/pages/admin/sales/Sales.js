import React from 'react';

// our imports
import './sales.css';
import Header from '../../../components/header/Header';

import Unicornio from "../../../img/unicornio.jfif";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

var productList = [
  {name: 'Ovo de unicornio da angola', value: 4200.00, qtd:25, image: Unicornio},
  {name: 'Ovo de ET', value: 3600.00, qtd:3, image: Unicornio},
  {name: 'Ovo de Savio', value: 1000.00, qtd: 15, image: Unicornio}  
];

var totalValue = 0;

const Sales = () => {
    return(
        <div>
          <Header />

          <table className="sales-freport">
            <tr>
              <th>Produto</th>
              <th>Quantidade Vendida</th>
              <th>Valor Unitario</th>
              <th>Valor Vendido</th>
            </tr>
            {productList.map(product => {
              let prodValue = product.value * product.qtd;  
              totalValue += prodValue;
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.qtd}</td>
                  <td>R$ {product.value.toFixed(2)}</td>
                  <td>R$ {prodValue.toFixed(2)}</td>
                </tr>
              )
            })}
          </table>

        </div>
    );
}
export default Sales;