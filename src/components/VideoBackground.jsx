import React from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react';

const VideoBackground = () => {
  const getMovievideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1011985/videos?language=en-US' ,API_OPTIONS);
    const jsonData = await data.json();
    const trailers = jsonData.results.filter(video => video.type === 'Trailer');
    const officialTrailer = trailers[0].key;
  }
  useEffect(() => {
    getMovievideo();
  },[]);
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground;