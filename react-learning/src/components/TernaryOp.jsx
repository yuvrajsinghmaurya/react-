/*


Ternary Operator
Another way to conditionally render elements is by using a ternary operator.

condition ? true : false
We will go back to the goal example.

Example:
Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:

*/
import React from 'react'


import MadeGoal from './MadeGoal'
import MissedGoal from './MissedGoal'

const TernaryOp = (props) => {
    const isPlayer = props.isPlayer
  return (
    <div>
      {isPlayer ? <MadeGoal/> : <MissedGoal/>}
    </div>
  )
}

export default TernaryOp
