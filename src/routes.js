import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//page - login
import Login from './pages/login/login';

//pages - user
import userCart from './pages/user/userCart/userCart';
import userHome from './pages/user/userHome/userHome';
import userPay from './pages/user/userPay/userPay';
import userProduct from './pages/user/userProduct/userProduct';
import userProfile from './pages/user/userProfile/userProfile';
import userSign from './pages/user/userSign/userSign';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/** Colocar os demais e fazer os Links entre as páginas */}
                <Route path={'/'} exact component={ Login } />
                <Route path={'/userHome'} exact component={ userHome } />
                <Route path={'/userCart'} exact component={ userCart } />
                <Route path={'/userPay'} exact component={ userPay } />
                <Route path={'/userProduct'} exact component={ userProduct } />
                <Route path={'/userProfile'} exact component={ userProfile } />
                <Route path={'/userSign'} exact component={ userSign } />
            </Switch>
        </BrowserRouter>
    );
}