import logo from './logo.svg';
import './App.css';

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
          rel="noopener noreferrer"
        >
          Learn React Test#1
        </a>
        <h2> add feature test#2 </h2>
        <h2>version : { process.env.REACT_APP_VERSION }</h2>
      </header>
      <h2> footer </h2>
    </div>
  );
}

export default App;
