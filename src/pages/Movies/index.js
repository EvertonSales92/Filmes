import React, { Component } from 'react';
import{Link} from "react-router-dom";
import './movies.css';


class Movies extends Component{

    constructor(props){
        super(props);
        this.state = { 
           movie: []
        }
        this.movieDetail = this.movieDetail.bind(this);
    }

    componentDidMount(){
        this.movieDetail()
        
    }

    movieDetail(){

        const { id } = this.props.match.params;
        const url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((response) => response.json())
        .then((json)=>{
            this.setState({movie:json});
            //teste
            console.log(json)
        })
    }
    

render(){
        return(
            <div className="movie">
                
                <strong>{this.state.movie.nome}</strong>
                <img src={this.state.movie.foto} alt=""/>
                <p>{this.state.movie.sinopse}</p>
                <Link to="/">Voltar</Link>
                
            </div>
        );
    }
}

export default Movies;