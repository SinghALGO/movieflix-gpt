import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainContainer = () => {
  const movies = useSelector(store => store.movie.movies);
  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];
  if(!mainMovie)return;

  const {original_title, id, overview} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;