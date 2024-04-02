import React, { useState, useRef } from 'react';
import Header from './Header';
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import {login} from '../utils/userSlice';
import { USERLOGO } from '../utils/constants'; 
import { BACKGROUND_IMG } from '../utils/constants';
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
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
    if(validation) return;
    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
  displayName: name.current.value, photoURL: USERLOGO
}).then(() => {
    const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch(login({uid,email,displayName, photoURL}));
}).catch((error) => {
  setErrorMessage(error.message);
});
       
       
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
  });

    }
  }
  return (
    <div><Header/>
    <div className="absolute h-screen">
    <img src={BACKGROUND_IMG} alt="background image tiles"/>
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