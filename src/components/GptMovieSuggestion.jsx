import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const { movieResults, movieNames } = gpt;
  const containerRef = useRef(null);

  if (!movieNames) return null; // Return null if movieNames are not available

  const handleScrollDown = () => {
    const container = containerRef.current;
    container.scrollTop += 100; // Scroll down by 100 pixels
  };

  const handleScrollUp = () => {
    const container = containerRef.current;
    container.scrollTop -= 100; // Scroll up by 100 pixels
  };

  return  (
    <div
      className="flex flex-col items-center h-96 p-4 m-4 bg-black text-white bg-opacity-90 overflow-hidden rounded-3xl relative"
      
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
     
      <div className="flex flex-col w-full h-full overflow-y-auto scrollbar-hidden" ref={containerRef}>
        
        {movieNames.map((movie, index) => (
          <MovieList key={index} title={movie} movies={movieResults[index]} />
        ))}
      </div>

      {/* Button to scroll down */}
      <button
        className="absolute bottom-4 right-4 bg-transparent text-white text-xl"
        onClick={handleScrollDown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="sr-only">Scroll Down</span>
      </button>

      {/* Button to scroll up */}
      <button
        className="absolute top-4 right-4 bg-transparent text-white text-xl"
        onClick={handleScrollUp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="sr-only">Scroll Up</span>
      </button>
    </div>
  );
};

export default GptMovieSuggestion;