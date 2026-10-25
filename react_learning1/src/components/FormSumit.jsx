
/*

Submitting Forms
You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:


*/
import React, { useState } from 'react'

const FormSumit = () => {
    // now fisrt step store the input filed value in state 
    const [name , setName] = useState("");
    const [pass , setPass]= useState("");
    // function to handle this name and pass stored 

  // Handle name input
    const handleName = (e) => {
         setName(e.target.value);
    };

  // Handle password input
    const handlePass = (e) => {
     setPass(e.target.value);
     };

    // now make the function to summit  the form 
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`your form is summited ${name}`)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter the name</label>
        <input type="text" value={name} onChange={handleName} />
        <label htmlFor="">Enter the pass</label>
        <input type="text" value={pass} onChange={handlePass} />
        <label htmlFor="">click to submit the form</label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormSumit
