import React from 'react'

const Button = (property) => {
  return (
    <div class={property.class} onClick={property.clickHandler}>{property.value}</div>
  )
}

export default Button