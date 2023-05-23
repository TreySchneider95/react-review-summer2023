import React from 'react'

const StringCounter = (props) => {
    // props = {
    //     madeUpProperty:'I made this', 
    //     inputString: {inputString}
    // } 
  return (
    <>
        <div>StringCounter!</div>
        <p>String Length = {props.inputString.length}</p>
    </>
  )
}

export default StringCounter