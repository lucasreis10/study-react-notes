import logo from './logo.svg';
import './App.css';
import Routes from './routes/Router'
import history from './state/history'


function App() {

  return (
    <div className="App">
      <Routes />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => history.push('tic-tac-toe')}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
