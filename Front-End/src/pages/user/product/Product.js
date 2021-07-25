import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
// our imports
import './product.css';
import api from './../../../Api'
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


const Product = (props) => {
    
    const id = props.location.state.id
    /*const id = new URLSearchParams(useLocation().search).get("id")*/
    console.log("product id: "+id);
    const [product, setproduct] = useState({});

    const fetchData = async () => {
        const response = await api.get('/products/' + id);
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

                    <h2 className="value">R${parseInt(product.price).toFixed(2)}</h2>
                    <p className="product-page-qnt">Quantidade disponivel: {product.qnt}</p>
                    <form>
                        <label for="product-page-price">Quantidade</label>
                        <input className="product-page-price" type="number" value="1" min="1" max="99" />
                        <input type="submit" value="adicionar" />
                    </form>

                </div>
            </div>
           
        </div>
        </div>
    );
}
export default Product;