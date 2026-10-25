/*
Keys in React Lists
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys must be unique among siblings, but they don't have to be unique across the entire application.

Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

*/

import React from 'react'

const ListKey = () => {
    const Flowers=[
        {id : 1001, Name:'Rose'},
        {id : 1002,Name:'Lotas'},
        {id : 1003, Name: 'Iris'}
    ]
  return (
    <div>
      <ul>
        {Flowers.map((flower)=>
            <li key={flower.id}>the flawer name is {flower.Name}</li>
        )}
      </ul>
    </div>
  )
}

export default ListKey
