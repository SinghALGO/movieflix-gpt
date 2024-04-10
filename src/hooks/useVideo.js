import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../utils/moviesSlice";

const useVideo = (id) => {
    const dispatch = useDispatch();

    const getVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos", API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieVideos(json.results));
    }

    useEffect(() => {
        getVideos();
    }, [id])
}

export default useVideo;