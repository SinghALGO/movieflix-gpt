import React from 'react'
import { useSelector } from 'react-redux';
const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const {movieResults, movieNames} = gpt;
  if(!movieNames) return;
  return (
    <div className="">
     <div className=" block p-4 m-4 bg-black text-white flex ">
      {movieNames.map((movieName, index) => (
        <p key={index}>{movieName}</p>
      ))}
    </div>
    </div>
  )
}

export default GptMovieSuggestion;