import React,{useEffect,useState} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// our imports
import './adminProduct.css';
import api from './../../../Api'
import Header from '../../../components/header/Header';
import SearchBar from '../../../components/searchBar/SearchBar';


const Product = (props) => {
    
    let history = useHistory();

    const id = props.location.state.id
    /*const id = new URLSearchParams(useLocation().search).get("id")*/
    //const [product, setproduct] = useState({});
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [qnt, setQnt] = useState();
    const [description, setDescription] = useState();
    const [img,setImg] = useState()

    const fetchData = async () => {
        const response = await api.get('/products/' + id);
        //setproduct(response.data);
        setName(response.data.name);
        setPrice(response.data.price);
        setQnt(response.data.qnt);
        setDescription(response.data.description);
        setImg(response.data.image)
    }
    useEffect(() => {
        fetchData();
    }, []);

    const onSubmit = (e) => {

        e.preventDefault()

        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            qnt: e.target.qnt.value,
            description: e.target.description.value,
            image:e.target.img.value
        }
        
        // validate form
        async function send(){
            await api.put('/products/' + id, product) 
        };
        send();
        alert("produto alterado");


        history.push('/adminList');
      }
    
    return(
        <div>
        <Header Admin={true}  Login={true}/>
        <SearchBar Admin={true}/>
        <div className="profile-container">
            <div className="info-edit">
                <h1>Informações pessoais</h1>
            </div>

            <div className="user-profile">
                <form onSubmit={onSubmit}>

                    <label for="product-name">Nome do Produto </label>
                    <input className="product-name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                    <label for="product-email">Preço </label>
                    <input className="product-proce" type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} /> 

                    <label for="product-email">Quantidade </label>
                    <input className="product-qtd" type="number" id="qnt" value={qnt} onChange={(e) => setQnt(e.target.value)} min="0" />                                      

                    <label for="product-phone">Descrição </label>
                    <input className="product-description" type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <label for="product-name">Imagem </label>
                    <input className="product-name" type="text" id="img" value={img} onChange={(e) => setImg(e.target.value)} />

                    <input type="submit" value="Salvar Aleterações" />
                </form>
            </div>
        </div>
    </div>
    );
}
export default Product;