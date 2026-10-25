// React Props are like function arguments in JavaScript and attributes in HTML.

// To send props into a component, use the same syntax as HTML attributes:

import React from 'react'

const PropsUnderstand = (props) => {
  return (
    <div>
      <h1>the car name is {props.brand}</h1>
    </div>
  )
}

export default PropsUnderstand

