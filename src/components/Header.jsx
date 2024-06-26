import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { useDispatch } from 'react-redux';
import {auth} from "../utils/firebase";
import {login, logout} from '../utils/userSlice';
import { signOut, onAuthStateChanged} from 'firebase/auth';
import { useNavigate , Link } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { supportedLanguages } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
import {lang} from '../utils/languageConstants';
import { addGptMovie } from '../utils/gptSlice';
import { HiMenuAlt3 } from 'react-icons/hi'; 

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langId = useSelector(store => store.config.language);
  const gptToggle = useSelector((store) => store.gpt.gptSearch);
   const [showMenu, setShowMenu] = useState(false);

  
  const handleGptClick = () => {
    dispatch(toggleGptSearch());
    dispatch(addGptMovie({movieNames:null, movieResults:null}));
  };
  const handleLanguageChange = (e) => {
   dispatch(changeLanguage(e.target.value));
  }
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(login({uid,email,displayName, photoURL}));
     if (window.location.pathname === "/") {
          navigate("/browse");
        }
    
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
 
  if(!langId)return;
  return (
    <div className="absolute  w-screen px-0 py-2 bg-gradient-to-b from-black z-10 flex flex-col items-center md:flex-row justify-between">
     <div className="w-screen  px-8 py-2 md:flex md:items-center justify-between md:pr-10">
        <div className="flex items-center justify-between">
          <Link to="/">
          <img className="w-44 cursor-pointer" src={LOGO} alt="logo" />
          </Link>
         {user.user && <div className="md:hidden">
            <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
              <HiMenuAlt3 className="w-8 h-8" />
            </button>
          </div>}
          
          
        </div>
        {user.user &&   <div className={`md:flex md:items-center justify-between space-x-4 ${showMenu ? 'flex' : 'hidden'}` }>
         {!showMenu && <p className="text-white font-bold text-xl mt-3 md:mb-6 ">{lang[langId].welcome},{" "}{user.user?.displayName}</p>} 

          <select className="p-2 m-2 mb-5 bg-gray-900 text-white rounded-lg" onChange={handleLanguageChange}>
            {supportedLanguages.map((language) => <option  key={language.id} value={language.id}>{language.name}</option>)}
          </select>
          <button onClick={handleGptClick} className=" px-3 py-0 mb-4 md:py-2 md:px-6 md:mx-4 md:mb-5 text-white font-bold bg-purple-800 rounded-lg hover:bg-purple-600">{gptToggle ? lang[langId].buttonHome : lang[langId].buttonGpt}</button>
          <img alt="usericon" className="hidden md:block w-12 h-12 mb-4" src={user.user?.photoURL} />
          <button onClick={handleSignout} className="font-bold text-white mb-5 ml-4 rounded-lg bg-red-600 px-4 py-1 pb-2 hover:bg-red-400">{lang[langId].buttonSignOut}</button>
        </div>}
      
      </div>
    </div>
  )
}

export default Header;