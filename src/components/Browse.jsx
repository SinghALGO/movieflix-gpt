import React from 'react';
import Header from './Header';
import { useSelector } from'react-redux'; 
import GptSearch from './GptSearch';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();
  const gptToggle = useSelector((store) => store.gpt.gptSearch);
  return (
    <div><Header/>
    {gptToggle ? <GptSearch/> :<><MainContainer/>
    <SecondaryContainer/></>}
 
    </div>
  )
}
export default Browse;