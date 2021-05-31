import React, {Component} from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h2>Eventos de componentes de clase ES6</h2>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Propierties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  sumar = e => {
    console.log('Sumando');
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = e => {
    console.log('Restando');
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h2>Eventos de componentes de clase ES7</h2>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

function Boton({myOnClick}) {
  return <button onClick={myOnClick}>Boton hecho componente</button>;
}

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button onClick={e => this.handleClick(e, 'Hola')}>Saludar</button>
        {/*Evento Personalizado*/}
        <Boton myOnClick={e => this.handleClick(e, 'Hola')}/>
      </div>
    );
  }
}
