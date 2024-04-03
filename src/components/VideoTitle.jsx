import React from 'react'
import { useSelector } from 'react-redux';
import { lang } from '../utils/languageConstants';
const VideoTitle = ({title, overview}) => {
  const langId = useSelector(store => store.config.language);
  if(!langId)return;
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black"><h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-2/4">{overview}</p>
    <div className="">
      <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-70">{lang[langId].buttonPlay}</button>
      <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl  rounded-lg hover:bg-opacity-70">{lang[langId].buttonMoreInfo}</button>
    </div>
    </div>
  )
}

export default VideoTitle;