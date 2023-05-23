import React, {useState} from "react";
// import * as React from 'react'  // React.useState
import logo from './logo.svg';
import './App.css';
import StringCounter from "./components/StringCounter";
import StringButton, {capitalize, camelCase} from './components/StringFunctions'


// make a new component called StringFunctions
// StringFunction component should have two functions
// 1) Capitalize the inputString state
//     -- Capitalize the first letter of each word
//    coffee is best black -> Coffee Is Best Black
// 2) camelCase the inputString state
//     -- lowercase the first letter of the first word, Capitalize the rest
//    Coffee is best black -> coffee Is Best Black
//   
// --for both assume words are split with a single space - " "
//
// make 2 button elements here in App.js will invoke those functions


function App() {

  const [helloWorld, setHelloWorld] = useState('Hello World')
  const helloCoders = <h1>Hello coders</h1>

  const [inputString, setInputString] = useState('default string')
  const [num, setNum] = useState(0)

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
        {/* {helloWorld}
        <button onClick={setHelloWorldState}>Set Hello World to Coders</button> */}

        {/* <input type='input' placeholder="Enter a string" onChange={inputHandler} /> */}
        <h3>inputString State: {inputString}</h3>
        <input 
          type='input' 
          placeholder="Enter a string" 
          onChange={(e) => setInputString(e.target.value)} 
        />
        {/* buttons for StringFunctions*/}
        <button onClick={() => setInputString(capitalize(inputString))}>Capitalize It!</button>
        <button onClick={() => camelCase(inputString, setInputString)}>camelCase It!</button>

        {/* --------------------String-------------------------------
        <StringCounter 
          madeUpProperty='I made this' 
          inputString={inputString} 
        /> */}

        ------------------String Functions------------------------
        {/* component goes here */}
          <StringButton 
            name = 'Capitalize It!'
            inputString={inputString}
            setInputString={setInputString}
          />
          <StringButton
            name = 'camelCase It!'
            inputString={inputString}
            setInputString={setInputString}
          />

        -----------------Calculator---------------
        <h3>Number: {num}</h3>
        <button onClick={() => setNum(num+1)}>Add</button> 
        <button onClick={() => setNum(num-1)}>Subtract</button>  
        <button onClick={() => setNum(num / 2)} >Divide</button>   
        <button onClick={() => setNum(num * num)}>Multiply</button>  
        
        <CalcButton 
          name="Add"
          num={num}
          setNum={setNum}
        />
        <CalcButton 
          name="Subtract"
          num={num}
          setNum={setNum}
        />        
    
    
      </div>
    </div>
  );
}

export default App;
