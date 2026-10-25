/*


Controlled Components

In a controlled component, form data is handled by the React component.

The value of the input element is driven by the React state, and any changes to that value are managed through event handlers that update the state.

When the data is handled by the components, all the data is stored in the component state.

We can use the useState Hook to keep track of each input value and provide a "single source of truth" for the entire application

*/
import React, { useState } from 'react'

const ControlledCom = () => {

    // to take the value from input filed and store in a state
    const [name ,setName] = useState("")

    // get the input value and store in set state 
    const storeName= (e)=>{
        setName(e.target.value);

    }
  return (
    <div>
    <form action="">
          <label htmlFor="">Enter  the name</label>
      <input type="text"  value={name} onChange={storeName}/>

      {/* now whaerer you enter in input filed this will show here  */}
      <h1>the name is {name}</h1>
    </form>
    </div>
  )
}

export default ControlledCom
