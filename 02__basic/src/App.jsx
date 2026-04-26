// ================props in react ================
/*
Props (properties) are used to pass data from a parent component to a child component in React.
*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // pass the data parent to child
  let Obj = {
    name : 'sunit',
    age : 26

  }

  return (
    <>
    <div className='text-3xl font-bold underline text-red-500'>
       this is a react
   
</div>
    <Card someObj={Obj}/>
    </>
  )
}

export default App
