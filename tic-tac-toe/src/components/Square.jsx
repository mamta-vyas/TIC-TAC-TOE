import React from 'react'

const Square = (props) => {
    
  return (
    <div 
    onClick={props.onClick}
    style={{
      border: "1px solid black",
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
     }}
    >
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
