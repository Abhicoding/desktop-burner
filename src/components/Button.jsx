import React from 'react'

const Button = (props) => {
  return (
    <div className={props.className} 
      onClick={props.clickHandler}>{props.value}</div>
  )
}

export default Button