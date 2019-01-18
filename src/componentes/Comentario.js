import React, { Component } from 'react'

export default class Comentario extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.texto}</h2>
            </div>
        )
    }
}