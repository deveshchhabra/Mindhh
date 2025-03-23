


import React, { useState } from "react";

const InteractiveIcon = ({isHovered,isClicked}) => {
  // State to track interaction
 

  return (
    
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={`transition duration-300 ${
      isClicked
        ? "fill-purple-500 stroke-purple-500" // Click state
        : isHovered
        ? "fill-purple-100 stroke-purple-300" // Hover state
        : "fill-none stroke-gray-500" // Default state
    }`}
  >
    
    <rect
      x="3.5"
      y="3.5"
      width="17"
      height="17"
      rx="8.5"
      className="transition duration-300"
      stroke={isHovered || isClicked ? "white" : "gray"}
    />
    <g clipPath="url(#clip0_371_17613)">
      <path
        d="M16.1668 11.1667V9.50004C16.1668 8.57957 15.4206 7.83337 14.5002 7.83337H9.50016C8.57969 7.83337 7.8335 8.57957 7.8335 9.50004V14.5C7.8335 15.4205 8.57969 16.1667 9.50016 16.1667H16.1668"
        className="transition duration-300"
        stroke={isClicked ? "purple" : "white"}
        strokeWidth="0.625"
        strokeLinecap="round"
      />
      <path
        d="M12 9.5V11.375M11.375 12.625L10.75 13.25"
        stroke={isHovered || isClicked ? "purple" : "white"}
        strokeWidth="0.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.625 12C12.625 12.3452 12.3452 12.625 12 12.625C11.6548 12.625 11.375 12.3452 11.375 12C11.375 11.6548 11.6548 11.375 12 11.375C12.3452 11.375 12.625 11.6548 12.625 12Z"
        stroke={isClicked ? "purple" : "white"}
        strokeWidth="0.625"
      />
      <path
        d="M13.6665 14.5H16.1665"
        className="transition duration-300"
        stroke={isClicked ? "purple" : "white"}
        strokeWidth="0.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 12.8334H16.1667"
        className="transition duration-300"
        stroke={isHovered || isClicked ? "purple" : "white"}
        strokeWidth="0.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_371_17613">
        <rect
          width="10"
          height="10"
          fill="white"
          transform="translate(7 7)"
        />
      </clipPath>
    </defs>
  </svg>
  );
};

export default InteractiveIcon;


