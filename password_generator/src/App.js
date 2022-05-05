import logo from './logo.svg';
import './App.css';
import './styles/output.css'
import PasswordParameters from './components/password_parameters.jsx';
import Output from './components/output.jsx';

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
          Learn React
        </a>
      </header>
      <PasswordParameters />
      <Output />
      <footer>
        <div>
          <a href="https://github.com/estanob" 
            target="_blank" 
            rel="noopener noreferrer">
              Github
          </a>
          <a href="https://linkedin.com/in/estanob" 
            target="_blank" 
            rel="noopener noreferrer">
              LinkedIn
          </a>
          <a href="https://brandonestano.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer">
              Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
