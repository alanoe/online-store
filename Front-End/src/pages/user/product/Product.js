import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
// our imports
import './product.css';
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'

// images
import Mae from "../../../img/unicornioMae.jpg"
import Unicornio from "../../../img/unicornio.jfif"

/*
let product = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descriptionMom:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};
*/
const api = true;

const Product = () => {
    
    const id = new URLSearchParams(useLocation().search).get("id")

    const [product, setproduct] = useState({});

    const fetchData = async () => {
        const response = await api.get('/product/' + id);
        setproduct(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    
    return(
        <div>
            <Header />
            <SearchBar />
            <div className="overall">
            <div className="product">
                <div className="picture">
                    <img className="product-page-img" src={product.img} />
                    <div className="description">{product.description}</div>                   
                </div>
                <div className="price">

                    <div className="name">
                        <h2>{product.name}</h2>
                        <p className="id">{product.id}</p>
                    </div>

                    <h2 className="value">{product.price}</h2>
                    <p className="product-page-qnt">Quantidade disponivel: {product.qnt}</p>
                    <form>
                        <label for="product-page-price">Quantidade</label>
                        <input className="product-page-price" type="number" value="1" min="1" max="99" />
                        <input type="submit" value="adicionar" />
                    </form>

                </div>
            </div>

            <div className="mother">

                <div className="mom-picture">
                    <h3 className="mom-title">Informacoes da mae</h3>
                    <img className="mom-img" src={product.imgMom} />
                </div>
                <div className="mom-stuff">
                    <div className="mom-description">{product.descriptionMom}</div>
                    <ul className="mom-list">
                        <li className="mom-things">
                            <h3>Nome:</h3>
                            <p className="name">{product.MomName}</p>
                        </li>
                        <li className="mom-things">
                            <h3>Idade:</h3>
                            <p className="age"> {product.MomAge}</p>
                        </li>
                        <li className="mom-things">
                        <h3>Peso:</h3>
                        <p className="weight">{product.MomWeight}</p>
                        </li>
                        <li className="mom-things">
                        <h3>Signo:</h3>
                        <p className="zodiac-sign"> {product.MomZodiac} </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Product;