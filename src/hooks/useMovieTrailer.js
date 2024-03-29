import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
const useMovieTrailer = () => {
  const dispatch = useDispatch();
   const getMovievideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1011985/videos?language=en-US' ,API_OPTIONS);
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