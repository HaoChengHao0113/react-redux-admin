import React from "react";
import { Router, Route, browserHistory } from 'react-router';
import Layout from '@/layout/layout.js';
import Yrz from '@/conponments/YRZ.js';
import Candan1 from "../conponments/candan1";
import Login from '@/conponments/Login';

const RouteConfig = (
    <Router history={ browserHistory }>
        <Route path="/login" component={ Login }></Route>
        <Route path="/" component={ Layout }>
            <Route path="/yrz" component={ Yrz }></Route>
            <Route path="/candan1" component={ Candan1 }></Route>
        </Route>
    </Router>
);

export default RouteConfig;