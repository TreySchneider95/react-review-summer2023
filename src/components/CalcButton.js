import React from 'react'

const CalcButton = (props) => {
//functions
const add = param => param + 1

const switchCase = (param, num) => {  // syncronous only
    switch (param) {
        case "+Add+":
            //invoke a separate function 
            return add(props.num)

        case "-Subtract-":
            // runs inside case
            return props.num - 1

        case "-Divide-":
            // all params passed into switch case
            return num / 2
            
        default:
            break;
    }
}
  return (
    <button onClick={() => props.setNum(switchCase(props.name, props.num))}>{props.name}</button>
  )
}

export default CalcButton