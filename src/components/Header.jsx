import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from "../utils/firebase";
import {login, logout} from '../utils/userSlice';
import { signOut, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { supportedLanguages } from '../utils/constants';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGptClick = () => {
    dispatch(toggleGptSearch());
  };
  
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(login({uid,email,displayName, photoURL}));
    navigate("/browse");
  } else {
    dispatch(logout());
    navigate("/");
  }})
  return () => unsubscribe();
   },[]);
  const handleSignout = () => {
    signOut(auth).then(() => {
}).catch((error) => {
  navigate("/error");
});
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
     
      <img className="w-44" src={LOGO} alt="logo"/>
      {user.user &&(<div className="flex p-2">
        <select className="p-2 m-2 mb-5 bg-gray-900 text-white rounded-lg">
          {supportedLanguages.map((lang) => <option value={lang.id}>{lang.name}</option>)}
          
        </select>
        <button onClick={handleGptClick} className="py-2 px-6 mx-4 mb-5 text-white font-bold bg-purple-800 rounded-lg hover:bg-purple-600">GPT Search</button><img alt="usericon" className="w-12 h-12" src={user.user.photoURL}/>
      <button onClick={handleSignout}className="font-bold text-white mb-5 ml-4 rounded-lg bg-red-600 px-4 py-1 pb-2 hover:bg-red-400">Sign Out</button>
       
      </div>)
      }
    </div>
  )
}

export default Header;