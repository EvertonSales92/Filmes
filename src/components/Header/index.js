import React, { Component } from 'react';
import{Link} from "react-router-dom";
import './header.css';


class Header extends Component{

    render(){
        return(
             <div className="header">
                 <img src={require('../../assets/logo.png')}  alt="Teste" className="logo"/>
                 <Link to="/">Quarentena Filmes</Link>
             </div>
        );
    }
}


export default Header;