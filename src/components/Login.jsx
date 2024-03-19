import React, { useState, useRef } from 'react';
import Header from './Header';
import {checkValidData} from "../utils/validate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    setErrorMessage(null);
    const validation = checkValidData(email.current.value, password.current.value, name.current);
    setErrorMessage(validation);
  }
  return (
    <div><Header/>
    <div className="absolute h-screen">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/23e51548-38c3-495f-897d-cf0a2eb11171/CA-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background image tiles"/>
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In": "Sign Up"}</h1>
      {!isSignIn&&(<input ref={name} placeholder="Full Name" type="text" className="p-4 my-4 w-full bg-gray-800"/>)}
      <input ref={email} placeholder="Email Address" type="text" className="p-4 my-4 w-full bg-gray-800"/>
       
      <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800"/>
      <button onClick={handleButtonClick} className="p-4 my-6 bg-red bg-red-700 w-full rounded-lg hover:bg-red-950">{isSignIn ? "Sign In": "Sign Up"}</button>
      <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "Are you a new User? Sign Up Now": "Already registered? Sign In Now"}</p>
      
    </form></div>
  
  )
}

export default Login;