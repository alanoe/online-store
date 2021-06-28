import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/header.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={ Header } />

            </Switch>
        </BrowserRouter>
    );
}