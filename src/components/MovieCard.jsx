import React from 'react'
import { IMAGE_CDN } from '../utils/constants';
const MovieCard = ({posterPath, movieId}) => {
  if(!posterPath) return
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMAGE_CDN+posterPath} alt="Movie Card" className="rounded-md"/>
    </div>
  )
}

export default MovieCard;