import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// our imports
import Login from './pages/user/login/Login';
import Payment from './pages/user/payment/Payment';
import Product from './pages/user/product/Product';
import ProductList from './pages/user/product/ProductList';
import UserProfile from './pages/user/profile/UserProfile';
import RecoverPassword from './pages/user/recoverPassword/RecoverPassword';
import ShoppingCart from './pages/user/shoppingCart/ShoppingCart';
import SignUp from './pages/user/signUp/SignUp';
import AdminList from './pages/admin/adminList/AdminList';
import AdminProfile from './pages/admin/adminProfile/AdminProfile';
import AdminProduct from './pages/admin/adminProduct/AdminProduct';
import Sales from './pages/admin/sales/Sales';
import AddProductForm  from './pages/admin/adminProduct/AddProductForm'

const Routes = () => {
    //<Route path={'/adminProfile'} exact component={ AdminProfile } />
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={ ProductList } />
                <Route path={'/login'} exact component={ Login } />
                <Route path={'/cart'} exact component={ ShoppingCart } />
                <Route path={'/pay'} exact component={ Payment } />
                <Route path={'/product'} exact component={ Product } />
                <Route path={'/addProduct'} exact component={ AddProductForm } />
                <Route path={'/profile'} exact component={ UserProfile } />
                <Route path={'/recover'} exact component={RecoverPassword} />
                <Route path={'/signUp'} exact component={ SignUp } />
                <Route path={'/adminList'} exact component={ AdminList } />
                <Route path={'/adminList'} exact component={ AdminProduct } />
                <Route path={'/sales'} exact component={ Sales } />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;