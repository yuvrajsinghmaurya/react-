import React  , {useState ,  useContext} from 'react'
import UserContext from '../context/UserContect'



const Login = () => {

    const [username , setUsername] = useState('')

    const [ pass , setPass] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefalult
        setUser({username , pass})

    }
  return (
    <div>
      <h2 >Login</h2>

      <input type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter username" />


      <br /><br />

      <input type="password"
      value={pass}
      onClick={(e)=> setPass(e.target.value)}
      placeholder="Enter password" />
      
      <br /><br />

      <button onClick={handleSubmit} className='p-5 bg-blue-600  w-16 text-white' >Login</button>
    </div>
  )
}

export default Login
