import React, { Component } from 'react';

function Prueba(props){
    return(
        <div>{props.data}</div>
    )
}

export default class RenderizadoCondicional extends Component{

    constructor(props)
    {
        super(props)
        this.state={data: false}

        this.activate = this.activate.bind(this)
    }

    activate(e)
    {
        if(this.state.data === false)
            this.setState({data: true})
        else
            this.setState({data: false})
    }

    render(){
        return (
            <div>
                <button onClick={this.activate}>Activar/Desactivar</button>
                {this.state.data ? <Prueba data='Activado'/> : <Prueba data='Desactivado'/>}
            </div>
        )
    }
}
