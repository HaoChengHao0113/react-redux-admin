import React from "react";
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '@/Store';
import Layout from '@/layout/layout.js';
import Yrz from '@/conponments/YRZ.js';
import Candan1 from "../conponments/candan1";
import Login from '@/conponments/Login';
import Jump from '@/conponments/jump';
import Test from '@/conponments/test';

const RouteConfig = (
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path="/login" component={ Login }></Route>
            <Route path="/" component={ Layout }>
                <Route path="/yrz" component={ Yrz }></Route>
                <Route path="/candan1" component={ Candan1 }></Route>
                <Route path="/test" exact component={ Test }></Route>
            </Route>
            <Route path="/jump" component={ Jump }></Route>
        </Router>
    </Provider>
);

export default RouteConfig;