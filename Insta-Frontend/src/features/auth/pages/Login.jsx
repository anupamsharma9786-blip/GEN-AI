import React, { useState } from 'react'
import "../styles/form.scss"
import { Link } from 'react-router'
import axios from 'axios'


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await axios.post("http://localhost:3000/api/auth/login", {
            username,
            email,
            password
        },
        {withCredentials: true}
        ) 

        console.log(response.data)
    }

  return (
    <main>
        <div className="form-container">
            <h1>INSTY</h1>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={(e)=>{ setUsername(e.target.value)
                    setEmail(e.target.value)
                }}
                type='text' 
                name='username' 
                placeholder='Enter Username or Email' 
                required />
                <input 
                onInput={(e)=>{ setPassword(e.target.value)}}
                type='password' 
                name='password' 
                placeholder='Enter Password' 
                required />
                <button type='submit'>Login</button>
            </form>
            <p className='toggleForm'>Don't have an account? <Link className="link" to="/register">Register</Link></p>
        </div>
    </main>
  )
}

export default Login