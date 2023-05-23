import React from 'react'

const CalcButton = (props) => {
//functions
const add = param => param + 1

const switchCase = (param, num) => {
    switch (param) {
        case "+Add+":
            return add(props.num)
        case "-Subtract-":
            return props.num - 1

        case "-Divide-":
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