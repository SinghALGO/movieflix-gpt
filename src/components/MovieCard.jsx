import React from 'react'
import { IMAGE_CDN } from '../utils/constants';
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48">
      <img src={IMAGE_CDN+posterPath} alt="Movie Card"/>
    </div>
  )
}

export default MovieCard;