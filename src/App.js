import React, {useState} from "react";
// import * as React from 'react'  // React.useState
import logo from './logo.svg';
import './App.css';
import StringCounter from "./components/StringCounter";


// make a new component called StringFunctions
// StringFunction component should have to functions
// 1) Capitalize the inputString state
// 2) camelCase the inputString state
// make 2 button elements here in App.js will invoke those functions



function App() {

  const [helloWorld, setHelloWorld] = useState('Hello World')
  const helloCoders = <h1>Hello coders</h1>

  const [inputString, setInputString] = useState('default string')

  const setHelloWorldState = () => {
    // alert('I Triggered')
    setHelloWorld('Hello Coders!')
  }

  // const inputHandler = (event) => {
  //   setInputString(event.target.value)
  // }
  const inputHandler = event => setInputString(event.target.value)


  

  return (
    <div className="App">
      <header className="App-header">
        <h3>React Review</h3>
      </header>
      <div className="App-div">
        {helloWorld}
        <button onClick={setHelloWorldState}>Set Hello World to Coders</button>

        {/* <input type='input' placeholder="Enter a string" onChange={inputHandler} /> */}
        <h3>inputString State: {inputString}</h3>
        <input 
          type='input' 
          placeholder="Enter a string" 
          onChange={(e) => setInputString(e.target.value)} 
        />
        {/* buttons for StringFunctions*/}

        --------------------String-------------------------------
        <StringCounter 
          madeUpProperty='I made this' 
          inputString={inputString} 
        />

        ------------------String Functions------------------------
        {/* component goes here */}

      </div>
    </div>
  );
}

export default App;
