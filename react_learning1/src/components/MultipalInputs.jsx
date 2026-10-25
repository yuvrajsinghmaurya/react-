/*
Handling Multiple Inputs
When you have multiple controlled input fields in a form, you can manage their state either by:

1. Using a separate useState call for each input.

2. Using a single useState call with an object to hold all form field values.

We will use the second approach, as it is more common for forms.

Make sure each input field has a unique name attribute.

Also, when initializing the state, use an object instead of a string. If the input fields have no initial value, use an empty object.

*/

import React, { useState } from 'react'

const MultipalInputs = () => {
    // use single usesate and store all input value 
    const [inputs , setInputs] = useState({});

    // now function to handle all inputs value 
    const handleChange= (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values =>({...values, [name]:value}))
    }
  return (
    <div>
      <h1>multipal inputs</h1>
      <form action="">
        <label htmlFor="">first name</label>
        <input type="text" name = 'firstname' value={inputs.firstname} onChange={handleChange} />

        <label htmlFor="">Last name</label>
        <input type="text" name = 'lastname' value={inputs.lastname} onChange={handleChange} />

        <label htmlFor="">Addess</label>
        <textarea  name='address' value={inputs.address} onChange={handleChange}></textarea>
      </form>

      {/* <pre>{JSON.stringify(inputs, null, 2)}</pre> */}
      <h1>{JSON.stringify(inputs)}</h1>

    </div>
  )
}

export default MultipalInputs
