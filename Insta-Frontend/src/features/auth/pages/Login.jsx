import React, { useState } from 'react'
import "../styles/form.scss"
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'


const Login = () => {

    const {user,loading, handleLogin} = useAuth()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        await handleLogin(username, email, password)

        navigate("/")

        
    }

    if(loading && user){
        return <h1>Loading...</h1>
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