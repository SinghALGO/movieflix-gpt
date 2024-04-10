import { useRef } from "react";
import useVideo from "../hooks/useVideo";
import { useSelector } from "react-redux";

const MovieVideos = ({ id }) => {
  useVideo(id);
  const movieVideos = useSelector((store) => store.movie.movieVideos);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollSpeed = 180;
      if (direction === "left") {
        container.scrollLeft -= scrollSpeed;
      } else if (direction === "right") {
        container.scrollLeft += scrollSpeed;
      }
    }
  };

  if (!movieVideos || movieVideos.length === 0) return null;

  return (
    <div className="bg-black py-4 md:px-14 px-9">
      <div className="md:mb-5 mb-3">
        <span className="text-white font-bold md:text-3xl text-xl">Videos</span>
      </div>
      <div className="my-5 relative">
        <div
          className="flex gap-10 overflow-hidden"
          ref={scrollContainerRef}
          style={{ cursor: "grab" }}
        >
          {movieVideos.map((movieVideo) => (
            <div key={movieVideo?.key} className="w-full md:w-auto">
              <iframe
                className="aspect-video md:w-[560px] md:h-[315px]"
                src={"https://www.youtube-nocookie.com/embed/" + movieVideo?.key}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 flex items-center h-full">
          <button
            className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center absolute left-0 ml-2 pb-1 font-extrabold"
            onClick={() => handleScroll("left")}
          >
            {"<"}
          </button>
        </div>
        <div className="absolute top-0 right-0 flex items-center h-full">
          <button
            className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center absolute right-0 mr-2 pb-1 font-extrabold"
            onClick={() => handleScroll("right")}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieVideos;
