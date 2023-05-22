import React from 'react'

const StringCounter = (props) => {
    // props ={
    //     madeUpProperty:'I made this', 
    //     inputString: {inputString}
    // } 
  return (
    <>
        <div>StringCounter!</div>
        <p>{props.inputString}</p>
    </>
  )
}

export default StringCounter