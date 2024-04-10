import {useRef} from "react";
import useVideo from "../hooks/useVideo";
import { useSelector } from "react-redux";

const MovieVideos = ({ id }) => {
  useVideo(id);
  const movieVideos = useSelector((store) => store.movie.movieVideos);
   const scrollContainerRef = useRef(null);
   const handleMouseMove = (event) => {
    const container = scrollContainerRef.current;
    if (container) {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const { left, top, width, height } = rect;
      const xRatio = (clientX - left) / width;
      const scrollSpeed = 50;

      if (xRatio < 0.05) {
        container.scrollLeft -= scrollSpeed;
      } else if (xRatio > 0.95) {
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
      <div className="my-5">
        <div className="flex gap-10 overflow-hidden" ref={scrollContainerRef}  onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}>
          {movieVideos.map((movieVideo) => (
            <div key={movieVideo?.key} className="w-full md:w-auto">
              <iframe
                className="aspect-video md:w-[560px] md:h-[315px]"

                src={
                  "https://www.youtube-nocookie.com/embed/" + movieVideo?.key
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieVideos;