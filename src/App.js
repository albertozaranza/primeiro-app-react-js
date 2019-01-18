import React, { Component } from 'react'
import Post from './componentes/Post'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: 'Alberto',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({nome: event.target.value});
    }
    render() {
        return(
            <div>
                <h1>Olá, {this.state.nome}</h1>
                <input type="text" value={this.state.nome} onChange={this.handleChange}/>
                <Post title='Bom noite'/>
                <Post title='Boa tarde'/>
                <Post title='Bom dia'/>
            </div>
        )
    }
}