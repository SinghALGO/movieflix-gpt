import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/trailerIdSlice";
import { useEffect } from "react";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
 
   const getMovievideo = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US" ,API_OPTIONS);
    const jsonData = await data.json();
    const trailers = jsonData.results.filter(video => video.type === 'Trailer');
    const officialTrailer = trailers.length  ? trailers[0]: jsonData.results[0];
    dispatch(addTrailerVideo(officialTrailer));
  }
  useEffect(() => {
  
      getMovievideo();
    
  },[]);
}
export default useMovieTrailer;