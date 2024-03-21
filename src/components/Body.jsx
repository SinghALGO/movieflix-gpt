import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter , useNavigate} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login,logout } from '../utils/userSlice';
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const appRouter = createBrowserRouter([{
    path:"/",
    element:<Login/>
   },
   {
    path: "/browse",
    element:<Browse/>
   }
   ])
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
    const {uid,email,displayName} = user;
    dispatch(login({uid,email,displayName}));
     navigate('/browse');
  
  } else {
    dispatch(logout());
    navigate('/');
  }})
   },[]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;