import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {

const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));

    const data1 = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const jsonData1 = await data1.json();
    dispatch(addPopularMovies(jsonData1.results));

    const data2 = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const jsonData2 = await data2.json();
    dispatch(addTopRatedMovies(jsonData2.results));

    const data3 = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const jsonData3 = await data3.json();
    dispatch(addUpcomingMovies(jsonData3.results));
  
  }
  useEffect(() => {getNowPlayingMovies()},[]);
}
export default useNowPlayingMovies;