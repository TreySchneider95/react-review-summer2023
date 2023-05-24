import React from 'react'


const CalcButton = (props)=>{
    return (
        <button onClick={()=>{
            if(props.name === 'Add'){
                props.setNum(props.num+1)
            }else if(props.name === 'Subtract'){
                props.setNum(props.num-1)
            }else if(props.name === 'Divide'){
                props.setNum(props.num/2)
            }else if(props.name === 'Multiply'){
                props.setNum(props.num*props.num)
            }
        }}>
            {props.name}
        </button>
    )
}

export default CalcButton