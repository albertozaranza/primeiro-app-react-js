import React, { Component } from 'react'
import Comentario from './Comentario'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            comentario: [],
            novoComentario: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleSubmit(event) {
        this.setState({comentario: [
            ...this.state.comentario,
            {texto: this.state.novoComentario}
        ]});
        this.setState({novoComentario: ''})
        event.preventDefault();
    }
    handleTextChange(event) {
        this.setState({novoComentario: event.target.value})
    }
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.novoComentario}
                        onChange={this.handleTextChange}/>
                    <button>Comentar</button>
                </form>
                {this.state.comentario.map((comentario, index) => {
                    return <Comentario key={index} texto={comentario.texto}/>
                })}
                
            </div>
        )
    }
}