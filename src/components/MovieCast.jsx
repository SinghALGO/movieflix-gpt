import {useRef} from "react";
import useCast from "../hooks/useCast";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCast = ({ id }) => {
 
  useCast(id);
  const castInfo = useSelector((store) => store.movie.castInfo);
  const scrollContainerRef = useRef(null);
   const handleMouseMove = (event) => {
    const container = scrollContainerRef.current;
    if (container) {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const { left, top, width, height } = rect;
      const xRatio = (clientX - left) / width;
      const scrollSpeed = 30;

      if (xRatio < 0.05) {
        container.scrollLeft -= scrollSpeed;
      } else if (xRatio > 0.95) {
        container.scrollLeft += scrollSpeed;
      }
    }
  };
 
  if (!castInfo) return null;
 

  return (
    <div className="bg-black py-0 px-8 ">
      <div className="relative -top-20 ">
      <div className="md:mb-5 mb-2">
        <span className="text-white font-bold md:text-3xl text-xl">Cast</span>
      </div>
      <div className="flex overflow-hidden" ref={scrollContainerRef}  onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}>
        <div className="w-12/12 py-2">
          <div className="flex flex-row gap-5">
            {castInfo?.map((cast) =>
              cast?.profile_path ? (
                <div
                  key={cast.id}
                  className="flex justify-between items-center rounded-lg  flex-col bg-zinc-700 max-h-44 md:max-h-64"
                >
                  <div className=" rounded-t-lg overflow-hidden h-[150px] md:h-auto xl:w-[170px] md:w-[150px] sm:w-[130px] w-[90px] lg:w-[160px]">
                    <img
                      className="w-full"
                      src={IMG_CDN_URL + cast?.profile_path}
                      alt="actor"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center px-2 py-1">
                    <span className="text-white font-semibold xl:text-base lg:text-base md:text-sm sm:text-sm text-xs text-center">
                      {cast?.name}
                    </span>
                    <span className="text-gray-300 font-light xl:text-sm md:text-xs sm:text-xs text-[10px] lg:text-sm text-center">{cast?.character}</span>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MovieCast;