import React from 'react'

export const capitalize = (inputString) => {
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
    // console.log(props);
    const switchCase = (param) => {
        switch (param) {
            case 'camelCase It!':
                return camelCase(props.inputString, props.setInputString)
            case 'Capitalize It!':
                return props.setInputString(capitalize(props.inputString, props.setInputString))
            default:
                break;
        }
    }
    return (
        // Great for two options
        // <button onClick={() => {
        //     (props.name === 'camelCase It!') 
        //     ? 
        //     camelCase(props.inputString, props.setInputString)
        //     :
        //     props.setInputString(capitalize(props.inputString, props.setInputString))
        // }}
        // >{props.name}</button>

        // Good for multiple options
        <button onClick={() => switchCase(props.name)}>{props.name}</button>
    )
}

export default StringFunction