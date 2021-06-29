import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// our imports
import Login from './pages/user/login/Login';
import Payment from './pages/user/payment/Payment';
import Product from './pages/user/product/Product';
import ProductList from './pages/user/product/ProductList';
import Profile from './pages/user/profile/UserProfile';
import ShoppingCart from './pages/user/shoppingCart/ShoppingCart';
import SignUp from './pages/user/signUp/SignUp';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={ ProductList } />
                <Route path={'/login'} exact component={ Login } />
                <Route path={'/cart'} exact component={ ShoppingCart } />
                <Route path={'/pay'} exact component={ Payment } />
                <Route path={'/product'} exact component={ Product } />
                <Route path={'/profile'} exact component={ Profile } />
                <Route path={'/sign'} exact component={ SignUp } />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;