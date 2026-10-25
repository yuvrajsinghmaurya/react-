// React Events
// Just like HTML DOM events, React can perform actions based on user events.

// React has the same events as HTML: click, change, mouseover etc.

/*

React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onclick="shoot()".



*/
import React from 'react'

const Events = () => {
    // normal event
    const shoot=()=>{
        alert("shoot  the goverment")
    }

    // To pass an argument to an event handler, use an arrow function.
    const shot1= (a)=>{
        alert(a)
    }
  return (
    <div>
      <button onClick={shoot}>click to shot</button>

      <button onClick={shot1}>click to see aragumrnt event</button>
    </div>
  )
}

export default Events
