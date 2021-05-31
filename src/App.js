import logo from './logo.svg';
import './App.css';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <br />
      <RenderizadoCondicional />
      <br />
      <EventosES6 />
      <br />
      <EventosES7 />
      <br />
      <MasSobreEventos />
      <br />
      <ComunicacionComponentes />
      <br />
      <CicloVida />
      <br />
      <AjaxApis />
      <br />
      <ContadorHooks />
    </div>
  );
}

export default App;
