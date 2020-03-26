import React, { Component } from 'react';
import{Link} from "react-router-dom";
import Routes from "./routes"
import './app.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            
         }
    }
    

    render(){
        return(
             <div className="app">
                 <Routes />
             </div>
        );
    }
}

export default App;