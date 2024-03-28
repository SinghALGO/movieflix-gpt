import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from "../utils/firebase";
import {login, logout} from '../utils/userSlice';
import { signOut, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      {user.user &&(<div className="flex p-2"><img alt="usericon" className="w-12 h-12" src={user.user.photoURL}/>
      <button onClick={handleSignout}className="font-bold text-white mb-5 ml-4">Sign Out</button></div>)}
    </div>
  )
}

export default Header;