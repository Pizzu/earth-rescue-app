import { ISvgIcon } from '@type/icons';
import React from 'react';

const ReceiptIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
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
          d="M20 22V2H4V22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22Z"
        ></path>
        <path strokeLinejoin="round" strokeWidth="1.5" d="M7 16H17"></path>
        <path strokeLinejoin="round" strokeWidth="1.5" d="M7 12H12"></path>
        <path strokeLinejoin="round" strokeWidth="1.5" d="M7 6H12"></path>
        <path strokeLinejoin="round" strokeWidth="1.5" d="M14 6H17"></path>
        <path strokeLinejoin="round" strokeWidth="1.5" d="M14 9H17"></path>
        <path strokeLinejoin="round" strokeWidth="1.5" d="M14 12H17"></path>
        <path strokeLinejoin="round" strokeWidth="1.5" d="M7 9H12"></path>
      </svg>
    </>
  );
};

export default ReceiptIcon;
