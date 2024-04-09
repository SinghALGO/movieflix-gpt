import React from 'react'
import { useSelector } from 'react-redux';
import { lang } from '../utils/languageConstants';
import { Link } from 'react-router-dom';
const VideoTitle = ({title, overview, id}) => {
  const langId = useSelector(store => store.config.language);
  if(!langId)return;
  return (
    <div className="w-screen aspect-video pt-[25%] md:pt-[15%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black"><h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
    <p className="hidden md:block py-6 text-lg w-2/4">{overview}</p>
    <div className="">
      {/* <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-70">{lang[langId].buttonPlay}</button> */}
       <Link to={"/movieinfo/" + id}>
      <button className="mx-0 my-5 bg-white text-black px-6 py-2 md:py-4 md:px-12 text-xl  rounded-lg hover:bg-opacity-70">{lang[langId].buttonMoreInfo}</button>
    </Link>
    </div>
    </div>
  )
}

export default VideoTitle;