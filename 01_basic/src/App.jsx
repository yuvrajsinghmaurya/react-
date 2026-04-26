// ================ why we need hooks ======================== 

import React, { useState } from 'react'
import{ } from 'react' 

/*
const App = () => {
  let counter = 50 

  const addValue = ()=>{
    // console.log("value added :" , Math.random() )
    counter= counter+ 1
    console.log(counter)

  }

  // Now here we need the hoooks 

  return (
    <div>
      <h1>motivation and react </h1>

      <br />

      <p>Counter value : {counter}</p>
      <br />

      <button
      // core js 
      onClick={addValue}
      
      
      >Add value</button>
      <br />
      <button>Remove value</button>
    </div>
  )
}

export default App
*/



// ======  now here if you run the above code , i have  use simple useed onclick Dom method and fuction to update  a variable (ex - counter). here it is updating the value and we can see in console , but  on UI the value is not updating - this is  the problem where we need  hooks to change the state of UI 

const App = () => {
  // let counter = 50 
    //  =====Now here we need the hoooks  to chnage the state of UI ===
 const [counter , setCounter] = useState(10)

  const addValue = ()=>{
    
    // counter= counter+ 1
    if(counter<20){
      setCounter(counter+ 1 )
    }
    
    console.log(counter)

  }

  //  same thing for remove value 
  const removeValue = ()=>{
    if(counter>0){
       setCounter(counter-1)
    }
    console.log(counter)
  } 



  return (
    <div>
      <h1>motivation and react </h1>

      <br />

      <p>Counter value : {counter}</p>
      <br />

      <button
      // core js 
      onClick={addValue}
      
      
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </div>
  )
}

export default App

