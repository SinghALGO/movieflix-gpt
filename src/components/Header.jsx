import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from "../utils/firebase";
import {login, logout} from '../utils/userSlice';
import { signOut, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(login({uid,email,displayName, photoURL}));
    navigate("/browse");
  } else {
    dispatch(logout());
    navigate("/");
  }})
   },[]);
  const handleSignout = () => {
    signOut(auth).then(() => {
    navigate("/");
}).catch((error) => {
  navigate("/error");
});
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
     
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      {user.user &&(<div className="flex p-2"><img alt="usericon" className="w-12 h-12" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"></img>
      <button onClick={handleSignout}className="font-bold text-white mb-5 ml-4">Sign Out</button></div>)}
    </div>
  )
}

export default Header;