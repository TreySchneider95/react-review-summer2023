import React, {useState} from "react";
// import * as React from 'react'  // React.useState
import logo from './logo.svg';
import './App.css';
import StringCounter from "./components/StringCounter";


function App() {

  const [helloWorld, setHelloWorld] = useState('Hello World')
  const helloCoders = <h1>Hello coders</h1>

  const [inputString, setInputString] = useState('default string')

  const setHelloWorldState = () => {
    // alert('I Triggered')
    setHelloWorld('Hello Coders!')
  }

  const inputHandler = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>React Review</h3>
      </header>
      <div className="App-div">
        {helloWorld}
        <button onClick={setHelloWorldState}>Set Hello World to Coders</button>

        <h3>inputString State: {inputString}</h3>

        <StringCounter madeUpProperty='I made this' inputString={inputString} />
      </div>
    </div>
  );
}

export default App;
