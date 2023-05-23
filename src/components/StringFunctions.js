import React from 'react'

export const capitalize = (inputString) => {
    let result = inputString.split(' ')
    for (let index = 0; index < result.length; index++) {
        result[index] = result[index].charAt(0).toUpperCase() + result[index].slice(1)
    }
    console.log(result);
    return result.join(' ')
}

export const camelCase = () => {
    console.log('camelCase');
}