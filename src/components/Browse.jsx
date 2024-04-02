import React from 'react';
import Header from './Header';
import GptSearch from './GptSearch';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div><Header/>
    <GptSearch/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}
export default Browse;