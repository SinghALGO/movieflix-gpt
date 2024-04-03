import React from 'react'
import { BACKGROUND_IMG } from '../utils/constants';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
  const langId = useSelector(store => store.config.language);
  if(!langId)return;
  return (
         <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}>
      <form className="w-5/12 max-w-lg">
        <div className="flex items-center bg-white rounded-full shadow-xl border-2 border-solid border-red-600">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder={lang[langId].TextGPT}
          />
          <div className="p-4">
            <button className="bg-red-600 text-white rounded-full p-2 hover:bg-red-700 focus:outline-none w-12 h-12 flex items-center justify-center">
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