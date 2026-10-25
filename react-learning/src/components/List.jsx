// In React, you will render lists with some type of loop.

// The JavaScript map() array method is generally the preferred method.


import React from 'react'

const List = () => {

    // Let's create a simple list using the map() method:

    const Schools = ['primary' , 'middle' , 'high' ,'inter']
  return (
    <div>
      <h1>My school:</h1>
      <ul>
        {Schools.map((school)=>
            <li>I am in {school}</li>
        )}
      </ul>
    </div>
  )
}

export default List
