import React from "react";


const HeroSkeleton = ({ size = "16", color = "yellow-400" }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`w-${size} h-${size} border-4 border-${color} border-t-transparent border-solid rounded-full animate-spin`}
      ></div>
    </div>
  );
};
export default HeroSkeleton;

