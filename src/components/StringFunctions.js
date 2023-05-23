import React from 'react'

export const capitalize = (inputString) => {
    console.log(inputString);
    let result = inputString.split(' ')
    for (let index = 0; index < result.length; index++) {
        result[index] = result[index].charAt(0).toUpperCase() + result[index].slice(1)
    }
    console.log(result);
    return result.join(' ')
}

export const camelCase = (inputString, setInputString) => {
    let splitArr = inputString.split(' ')
    let resultArr = new Array
    resultArr.push(splitArr[0].toLowerCase())
    for (let index = 1; index < splitArr.length; index++) {
        let element = splitArr[index];
        element = element.split('')
        element[0] = element[0].toUpperCase()
        element = element.join('')
        resultArr.push(element)
    }    
    
    setInputString(resultArr.join(' '))
}

const StringFunction = (props) => {
    console.log(props);
    
    return (
        <button onClick={() => {
            (props.name === 'camelCase It!') 
            ? 
            camelCase(props.inputString, props.setInputString)
            :
            props.setInputString(capitalize(props.inputString))
        }}
        >{props.name}</button>
    )
}

export default StringFunction