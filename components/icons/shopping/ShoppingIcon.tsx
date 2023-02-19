import { ISvgIcon } from '@type/icons';
import React from 'react';

const ShoppingIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`fill-transparent ${isHighlighted ? 'stroke-primaryGreen' : 'stroke-neutral-800 '} transition-all`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          fill="none"
          d="M18 22H6C4.9 22 4 21.1 4 20V10H20V20C20 21.1 19.1 22 18 22Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M7 12V7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7V12"
        ></path>
      </svg>
    </>
  );
};

export default ShoppingIcon;
