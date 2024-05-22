import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        //  toast("Login successfully!");
        toast.success('🦄 Login successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          
          });
      }catch(err){
        console.log(err);
       
        toast.error('Login failed. Please check your credentials.!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          
          });
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
      <ToastContainer />
    </div>
  )
}

export default Login
