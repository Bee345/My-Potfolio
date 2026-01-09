import React from "react";

const ProgressBar = ({ value, barClass }) => {
  return (
    <div className={`w-full h-3 bg-gray-800 rounded-full ${barClass}`}>
      <div
        className="h-full bg-yellow-400 rounded-full transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
