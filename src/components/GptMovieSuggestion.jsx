import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const { movieResults, movieNames } = gpt;
  const containerRef = useRef(null);

  if (!movieNames) return null; // Return null if movieNames are not available

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const { clientY } = e;

    // Check if mouse pointer is within 20 pixels from the top or bottom edge
    const topEdge = clientY < 20;
    const bottomEdge = clientY > container.clientHeight - 20;

    if (topEdge) {
      container.scrollBy({
        top: -10,
        behavior: 'smooth'
      });
    } else if (bottomEdge) {
      container.scrollBy({
        top: 10,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="flex flex-col items-center h-96 p-4 m-4 bg-black text-white bg-opacity-70 overflow-hidden rounded-lg relative"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ width: '85%' }} 
    >
      <style>
        {`
          /* Hide default scrollbar */
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
     
      <div className="flex flex-col  w-full h-full overflow-y-auto scrollbar-hidden">
        
        {movieNames.map((movie, index) => (
          <MovieList key={index} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;