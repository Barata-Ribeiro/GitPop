import React from "react";

const LoadingAnim = () => {
  return (
    <div className="flex flex-col justify-center items-center my-32">
      <div className="relative h-8 w-8">
        <span className="absolute top-0 h-8 w-8 animate-spin rounded-full border-4 border-solid border-cinnabar-500 border-current border-r-transparent"></span>
        <span className="absolute top-2 left-2 h-4 w-4 animate-reverse-spin rounded-full border-4 border-solid border-cinnabar-700 border-current border-r-transparent"></span>
      </div>
      <p className="mt-3 font-semibold text-shark-950">Loading...</p>
    </div>
  );
};

export default LoadingAnim;
