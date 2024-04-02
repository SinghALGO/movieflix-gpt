import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.movies);
   if(!movies)return;
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies}/>
    </div>
  )
}

export default SecondaryContainer;