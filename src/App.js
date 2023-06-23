import RandomNumberGenerator from "./randomNumberGenerator";

import Form from "./Form";
import Images from "./Images";
import logo from "./logo.svg";
import "./App.css";
import { Greeting } from "./Greeting";
import Icons from "./Icons";

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
        <RandomNumberGenerator />
        <Form />
        <Greeting />
        <Images />
        <Icons />
      </header>
    </div>
  );
}

export default App;
