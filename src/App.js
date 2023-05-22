import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';


function App() {

  const [helloWorld, setHelloWorld] = useState('Hello World')
  const helloCoders = <h1>Hello coders</h1>

  const setHelloWorldState = () => {
    // alert('I Triggered')
    setHelloWorld('Hello Coders!')
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>React Review</h3>
      </header>
      <div className="App-div">
        {helloWorld}
        <button onClick={setHelloWorldState}>Set Hello World to Coders</button>
      </div>
    </div>
  );
}

export default App;
