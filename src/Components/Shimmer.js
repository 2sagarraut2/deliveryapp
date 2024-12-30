import React from "react";

const Shimmer = ({ cardCount = 10 }) => {
  return (
    <div>
      <div className="shimmer-filter-btn"></div>
      <div className="flex flex-wrap gap-4 m-4 sm:m-4 md:m-[1%_11%]">
        {Array.from({ length: cardCount }).map((_, index) => (
          <div
            className="w-[273px] h-[300px] bg-gray-200 rounded-lg relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/80 after:to-transparent after:animate-shimmer"
            key={index}
          >
            <div className="w-[273px] h-[182px] bg-gray-300 rounded-lg"></div>
            <div className="w-[80%] h-[20px] bg-gray-300 mx-4 my-2 rounded-md"></div>
            <div className="w-[60%] h-[20px] bg-gray-300 mx-4 my-2 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
