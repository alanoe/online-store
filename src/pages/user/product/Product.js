import React from 'react';

// our imports
import './product.css';
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'

// images
import Mae from "../../../img/unicornioMae.jpg"
import Unicornio from "../../../img/unicornio.jfif"

let product = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descriptionMom:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

const Product = () => {
    return(
        <div>
            <Header />
            <SearchBar />
            <div className="overall">
            <div className="product">
                <div className="picture">
                    <img className="product-img" src={Unicornio} />
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>                   
                </div>
                <div className="price">

                    <div className="name">
                        <h2>Ovo de unicornio</h2>
                        <p className="id">ID: 123789456</p>
                    </div>

                    <h2 className="value">R$4200.00</h2>
                    <p className="product-qnt">Quantidade disponivel: 69</p>
                    <form>
                        <label for="product-price">Quantidade</label>
                        <input className="product-price" type="number" value="1" min="1" max="99" />
                        <input type="submit" value="adicionar" />
                    </form>

                </div>
            </div>

            <div className="mother">

                <div className="mom-picture">
                    <h3 className="mom-title">Informacoes da mae</h3>
                    <img className="mom-img" src={Mae} />
                </div>
                <div className="mom-stuff">
                    <div className="mom-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <ul className="mom-list">
                        <li class="mom-things">
                            <h3>Nome:</h3>
                            <p className="name">L'Oreal</p>
                        </li>
                        <li class="mom-things">
                            <h3>Idade:</h3>
                            <p className="age"> 368 anos</p>
                        </li>
                        <li class="mom-things">
                        <h3>Peso:</h3>
                        <p className="weight"> 568 Kg</p>
                        </li>
                        <li class="mom-things">
                        <h3>Signo:</h3>
                        <p className="zodiac-sign"> Sagitario</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Product;