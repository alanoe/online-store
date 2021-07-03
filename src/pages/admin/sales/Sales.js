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

function valueTotal(){
  var total = 0;
  productList.forEach((prod)=>{
      total += prod.value * prod.qtd
  })
  return total;
};
var totalValue = valueTotal();

const Sales = () => {
    return(
        <div>
          <Header Login={true} Admin={true} />
          <h1 className="sales-title">Relatório</h1>
          <table className="sales-report">
            <tr>
              <th>Produto</th>
              <th>Quantidade Vendida</th>
              <th>Valor Unitario</th>
              <th>Valor Vendido</th>
            </tr>
            {productList.map(product => {             
              let prodValue = product.value * product.qtd;

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
          <h3 className="value-sold">Valor total vendido: R$ {totalValue}</h3>
          
        </div>
    );
}
export default Sales;