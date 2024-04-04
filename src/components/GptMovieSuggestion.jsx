import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const {movieResults, movieNames} = gpt;
  if(!movieNames) return;
  return (
     <div className=" block p-4 m-4 bg-black text-white  ">
     <div>
      {movieNames.map((movie,index) => <MovieList key={index} title={movie} movies={movieResults[index]}/>)}
    
      </div>
    </div>
  )
}

export default GptMovieSuggestion;