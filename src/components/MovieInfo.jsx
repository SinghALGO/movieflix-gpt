import React from "react";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import MovieInfoContainer from "./MovieInfoContainer";
import Header from "./Header";
import { IMAGE_CDN } from "../utils/constants";
import Loader from "./Loader";
const MovieInfo = () => {
  const { id } = useParams();
  useMovieInfo(id);

  const info = useSelector(store => store.movie.movieInfo);
  if(!info) return <Loader />;


  return (
    <div>
      <Header />
      <div className="w-full min-h-[110vh] md:min-h-screen top-0 absolute -z-10 overflow-hidden bg-black">
        <img className="w-full h-[110vh] md:h-auto object-cover mx-auto brightness-[.3]" src={IMAGE_CDN + info.backdrop_path} alt="moviebg" />
      </div>
       <MovieInfoContainer info={info}/>
    </div>
  );
};

export default MovieInfo;