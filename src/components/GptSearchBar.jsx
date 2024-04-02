import React from 'react'

const GptSearchBar = () => {
  return (
         <div className="flex justify-center items-center h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/23e51548-38c3-495f-897d-cf0a2eb11171/CA-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <form className="w-1/2 max-w-lg">
        <div className="flex items-center bg-white rounded-full shadow-xl">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder="What should I watch today?"
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