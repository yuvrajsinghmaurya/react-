/*
Textarea
The textarea element in React is slightly different from ordinary HTML.

In HTML the value of a textarea is the text between the start tag <textarea> and the end tag </textarea>.



In React the value of a textarea is placed in a value attribute, just like with the input element.

We'll use the useState Hook to manage the value of the textarea


*/


// React uses the value attribute to control the textarea:


import React, { useState } from 'react'

const Textarea = () => {

    // store the  value of text filed 
    const [mytext , setmytext] = useState('')
    
    // now function to get the value  form  text filed and store in state 
    const handleText=(e)=>{
        setmytext(e.target.value)

    }


  return (
    <div>
      <form action="">
        <label htmlFor="">write here Text 
            
        <textarea 
            value={mytext}
            onChange={handleText}

        />
        </label>
      </form>
    </div>
  )
}

export default Textarea
