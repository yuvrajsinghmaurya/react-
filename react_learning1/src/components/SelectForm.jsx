/*
A drop down list, or a select box, in React is also a bit different from HTML.

In HTML, the selected value in the drop down list is defined with the selected attribute:

*/

import React, { useState } from 'react'

// 

const SelectForm = () => {

    // In React, the selected value is defined with a value attribute on the select tag:
    const [mycar, setMycar] = useState('')

    // get the selected value 
    const handleSelectvalue = (e)=>{
        setMycar(e.target.value)
    }

  return (
    <div>
      <form action="">
        <label htmlFor="">select the  value</label>
        <select name="" id="" onChange={handleSelectvalue}>
            
            <option value="thar">thar</option>
            <option value="form">form</option>
            <option value="volvo">volvo</option>
            <option value="fiat">fiat</option>
        </select>
      </form>
      <h1>selected value  is {mycar}</h1>
    </div>
  )
}

export default SelectForm
