import React, { Component } from 'react';
import{Link} from "react-router-dom";

import './home.css';



class Home extends Component{

    constructor(props){
        super(props);
        this.state = { 
            movies: []
        }

         this.loadMovies = this.loadMovies.bind(this);
    }
    
 componentDidMount(){
         this.loadMovies();
    }

    loadMovies(){
        const url =  'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((response)=> response.json())
        .then((json)=>{
            this.setState({movies:json});
            //teste
            console.log(json)
        })
    }

    render(){
        return(
             <div className="container">
                 <div className="list-movies">
                 {this.state.movies.map((item) =>{
                     return(
                     <article key={item.id}>
                         <strong>{item.nome}</strong>
                         <img src={item.foto} alt="Imagem"/>
                         <Link to={`/movies/${item.id}`}>Acessar</Link>
                     </article>
                     );
                 })}
                 </div>
                
             </div>
        );
    }
}

export default Home;