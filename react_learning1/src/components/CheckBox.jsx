/*

Checkbox
For checkboxes, use the checked attribute instead of value to control its state.

We'll use the useState Hook to manage the value of the textarea:

In the handleChange function, use the e.target.type property check if the current input is a checkbox or not.

*/

import React, { useState } from 'react'

const CheckBox = () => {
    // 
    const [inputs , setInputs] = useState({})
    

    // funtion 
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.type==='checkbox'? target.checked : target.value;
        // Why use checked for checkboxes?

// Because a checkbox represents a yes/no choice. Its state is a boolean, not the text value of the input.
        const name = target.name

        setInputs(values=>({values , [name] : value}))
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">My name is </label>
        <input type="text"  name ='firstname' value={inputs.firstname} onChange={handleChange}/>

            <p>I want a burger with</p>
        <label htmlFor="">Tomoto</label>
        <input type="checkbox"  name = 'tamato' checked={inputs.tamato} onChange={handleChange}/>

        <label htmlFor="">Onion</label>
        <input type="checkbox" name= 'onion'  checked={inputs.onion} onChange={handleChange}/>
      </form>

      <h2>{JSON.stringify(inputs)}</h2>
    </div>
  )
}

export default CheckBox
