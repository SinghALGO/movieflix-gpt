import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import {lang} from '../utils/languageConstants';
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.movies);
  const langId = useSelector(store => store.config.language);
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  if(!langId)return;
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="pl-10 relative -top-56">
      <MovieList title={lang[langId].title1} movies={movies}/>
      <MovieList title={lang[langId].title2} movies={popularMovies}/>
      <MovieList title={lang[langId].title3} movies={topRatedMovies}/>
      <MovieList title={lang[langId].title4} movies={upcomingMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer;