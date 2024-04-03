import React from 'react'
import { useRef } from 'react';
import { BACKGROUND_IMG } from '../utils/constants';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openAI';
const GptSearchBar = () => {
  const langId = useSelector(store => store.config.language);
  const searchText = useRef(null);
  const handleGptSearchClick = async() => {
  const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: "+searchText.current.value+". Only give me names of five movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Mujhse Shadi Krogi, Golmaal";   
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
    console.log(gptResults.choices[0].content);
  };
  if(!langId)return;
  return (
         <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}>
      <form className="w-5/12 max-w-lg" onSubmit={e=>e.preventDefault()}>
        <div className="flex items-center bg-white rounded-full shadow-xl border-2 border-solid border-red-600">
          <input
          ref={searchText}
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder={lang[langId].TextGPT}
          />
          <div className="p-4">
            <button  onClick={handleGptSearchClick} className="bg-red-600 text-white rounded-full p-2 hover:bg-red-700 focus:outline-none w-12 h-12 flex items-center justify-center">
              <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 13l4-4-4-4M3 9h18"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GptSearchBar;