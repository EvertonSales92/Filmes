import React, { Component } from 'react';
import{Link} from "react-router-dom";


class Error extends Component{

    render(){
        return(
             <div>
                 <h1>Pagina não existe</h1>
                 <Link to="/">Voltar</Link>
             </div>
        );
    }
}


export default Error;