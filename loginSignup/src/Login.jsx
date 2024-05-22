import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

import {auth} from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {

    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=async (e)=>{
      e.preventDefault()
      try{
         await signInWithEmailAndPassword(auth,email,password)
         console.log("Login successfully");
      }catch(err){
        console.log(err);
        alert('Login failed. Please check your credentials.');
      }
    }

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit} >
         <h2>Login</h2>
         <label htmlFor="email">
            Email:
            <input type="text"  onChange={(e)=>setEmail(e.target.value)}/>
         </label>
         <label htmlFor="password">
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
         </label>
         <button type='submit'>Login</button>
         <p>Don't Have account? <Link to="/">Signup</Link></p>
      </form>
    </div>
  )
}

export default Login
