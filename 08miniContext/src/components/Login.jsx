import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)  // we send the data to the context
    // const {user} = useContext(UserContext)  // get the data from the context
    

    const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>

        <input type="text"
        className='border bg-gray-800 rounded ' 
         value={username}
         onChange={ (e) => setUsername(e.target.value)}
        placeholder='username' />

        {" "}
        
        <input type="password"
        className='border bg-gray-800 rounded '
         value={password}
         onChange={ (e) => setpassword(e.target.value)}
        placeholder='password' />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login