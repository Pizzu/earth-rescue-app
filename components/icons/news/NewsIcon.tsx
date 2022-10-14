import React from 'react';
import { ISvgIcon } from '../../../types/icons';

const NewsIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`fill-transparent stroke-neutral-800 ${isHighlighted && 'stroke-primaryGreen'}`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M22 17H10V20C10 21.1046 9.10457 22 8 22H20C21.1046 22 22 21.1046 22 20V17Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M10 17H20V4C20 2.89543 19.1046 2 18 2H4C5.10457 2 6 2.89543 6 4V20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20V17Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M2 4C2 2.89543 2.89543 2 4 2V2C5.10457 2 6 2.89543 6 4V6H2V4Z"
        ></path>
        <path strokeLinecap="round" strokeWidth="1.5" d="M10 6H16"></path>
        <path strokeLinecap="round" strokeWidth="1.5" d="M10 10H14"></path>
      </svg>
    </>
  );
};

export default NewsIcon;
