import React from 'react'
import { useRef } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
const MovieList = ({title, movies}) => {
   const scrollContainerRef = useRef(null);
   const handleMouseMove = (event) => {
    const container = scrollContainerRef.current;
    if (container) {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const { left, top, width, height } = rect;
      const xRatio = (clientX - left) / width;
      const scrollSpeed = 30;

      if (xRatio < 0.05) {
        container.scrollLeft -= scrollSpeed;
      } else if (xRatio > 0.95) {
        container.scrollLeft += scrollSpeed;
      }
    }
  };
  return (
    <div className="px-9  ">
       <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
     <div className="flex overflow-hidden" ref={scrollContainerRef}  onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}>
     
      <div className="flex">
        {movies?.map(movie => (
          <Link to={"/movieinfo/"+movie?.id}>
        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
        </Link>))}
      </div>
     </div>
     
    </div>
  )
}

export default MovieList;