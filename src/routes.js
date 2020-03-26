import React, { Component } from 'react';
import{BrowserRouter, Route, Switch, Link} from "react-router-dom";

import Home from './components/Home';
import Header from './components/Header';
import Error from './pages/Error';
import Movies from './pages/Movies';

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/movies/:id" component={Movies}/>
                <Route  path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;