import React, {Component} from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router';
import Yrz from '@/conponments/YRZ.js';
import Candan1 from "./candan1";



class ContentMain extends Component {
    render() {
        return (
            <div>
                <Route path='/yrz' component={Yrz}/>
                <Route path='/candan1' component={Candan1}/>
            </div>
        )
    }
}

export default withRouter(ContentMain);