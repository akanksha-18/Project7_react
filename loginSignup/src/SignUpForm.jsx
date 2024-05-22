import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import {auth} from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUpForm = () => {

    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=async (e)=>{
      e.preventDefault()
      try{
         await createUserWithEmailAndPassword(auth,email,password)
         console.log("Account Created");
         toast.success('🦄 Account Created !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      }catch(err){
        console.log(err);
        toast.error('email id already in use! make sure password is more than 6 letters ', {
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
         <h2>SignUp</h2>
         <label htmlFor="email">
            Email:
            <input type="text"  onChange={(e)=>setEmail(e.target.value)}/>
         </label>
         <label htmlFor="password">
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
         </label>
         <button type='submit'>Sign Up</button>
         <p>Already registered <Link to="/login">Login</Link></p>
      </form>
      <ToastContainer />
    </div>
  )
}

export default SignUpForm
