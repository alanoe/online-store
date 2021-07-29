import React,{useEffect,useState} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// our imports
import './product.css';
import api from './../../../Api'
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'


const Product = (props) => {
    
    let history = useHistory();

    const id = props.location.state.id
    /*const id = new URLSearchParams(useLocation().search).get("id")*/
    const [product, setproduct] = useState({});
    const [qnt,setQnt] = useState();

    const fetchData = async () => {
        const response = await api.get('/products/' + id);
        setproduct(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const onSubmit = (e) => {
        // prevent page change
        e.preventDefault()
        // validate form
        let res;
        async function send(){
            await api.post('/cart/products', {product:id,qnt:qnt,price:product.price,name:product.name} ) 
        };
        send();
        alert("produto adicionado ao carrinho");
        
        history.push('/')
      }
    
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

                    <h2 className="value">R${parseFloat(product.price).toFixed(2)}</h2>
                    <p className="product-page-qnt">Quantidade disponivel: {product.qnt}</p>
                    <form onSubmit={onSubmit}>
                        <label for="product-page-price">Quantidade</label>
                        <input className="product-page-price" type="number" required min="1" max={product.qnt} onChange={(e) => setQnt(e.target.value)} />
                        <input  type="submit" value="adicionar" />
                    </form>

                </div>
            </div>
           
        </div>
        </div>
    );
}
export default Product;