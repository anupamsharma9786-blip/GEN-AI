import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("second")
    const [password, setPassword] = useState("")
     


    return (
        <main>
            <div className="form-container">
                <h1>INSTY</h1>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        onInput={(e)=>{setEmail(e.target.value)}} 
                        type='text' 
                        name='email' 
                        placeholder='Enter Email Address' required />
                    <input 
                        onInput={(e)=>{setUsername(e.target.value)}} 
                        type='text' 
                        name='username' 
                        placeholder='Enter Username' required />
                    <input 
                        onInput={(e)=>{setPassword(e.target.value)}} 
                        type='password' 
                        name='password' 
                        placeholder='Enter Password' required />
                    <button type='submit'>Register</button>
                </form>
                <p className='toggleForm'>Already have an account? <Link className="link" to="/login">Login</Link></p>
            </div>

        </main>
    )
}

export default Register