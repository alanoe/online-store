import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
// our imports
import './product.css';
import api from './../../../Api'
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar'


const Product = (props) => {
    
    let history = useHistory();

    const id = props.location.state.id
    console.log("id do produto: " + id)
    /*const id = new URLSearchParams(useLocation().search).get("id")*/
    const [product, setProduct] = useState({});
    const [qnt,setQnt] = useState();

    const fetchData = async () => {
        const response = await api.get('/products/' + id);
        setProduct(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log("PRODUTO")

    const onSubmit = (e) => {
        console.log("add product to cart");
        // prevent page change
        e.preventDefault()
        // validate form
        async function send(){
            var products = JSON.parse(localStorage.getItem('cart'));
            console.log("carrinho antes de adicionar prod: " + JSON.parse(localStorage.getItem('cart')))
            var newProduct = {productId:product._id, name:product.name, qnt:qnt, price:product.price}
            let found = false
            for (product of products) {
                if (product.productId == newProduct.productId) {
                    product.qnt += newProduct.qnt;
                    console.log("produto já existe, adicionando qtd")
                    found = true
                }
            }
            if (!found) {
                console.log("produto novo")
                products.push(newProduct);
            } 
            localStorage.setItem('cart', JSON.stringify(products))//api.put('/cart/products/' + id, {"$inc": {"qnt": qnt}} ) 
            console.log("carrinho após adicionar prod" + JSON.parse(localStorage.getItem('cart')))
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
                        <label htmlFor="product-page-price">Quantidade</label>
                        <input className="product-page-price" type="number" required min="1" max={product.qnt} onChange={(e) => setQnt(e.target.value)} />
                        <input type="submit" value="adicionar" />
                    </form>

                </div>
            </div>
           
        </div>
        </div>
    );
}
export default Product;