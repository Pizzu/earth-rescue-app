import React from 'react';
import { ISvgIcon } from '../../../types/icons';

const TreesIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`fill-transparent ${isHighlighted ? 'stroke-primaryGreen' : 'stroke-neutral-800 '} transition-all`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeWidth="1.5" d="M9.72 17H9V22H10V17.2L9.72 17Z"></path>
        <path strokeLinecap="round" strokeWidth="1.5" d="M16 18H15V22H16V18Z"></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M12.36 5.57C11.9 6.22 11.79 6.86 11.77 7.13C11.65 7.18 9.96 7.87 9.67 9.51C9.49 10.54 9.96 11.34 10.12 11.59C9.95 11.71 8.37 12.92 8.51 14.74C8.58 15.68 9.08 16.33 9.26 16.54C9.41 16.71 9.57 16.87 9.74 17H1.5L5.47 12H3.5L7.5 7H5.5L9.5 2L12.36 5.57Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M22.46 13.97C22.23 12.6 21.12 11.85 20.9 11.7C21.59 10.74 21.67 9.53 21.11 8.59C20.52 7.6 19.45 7.31 19.22 7.25C19.18 7 18.82 5.11 17.12 4.33C17 4.28 16.41 4.01 15.59 4C15.34 4 13.86 4 12.75 5.1C11.96 5.89 11.8 6.8 11.76 7.14C11.64 7.19 9.95 7.88 9.66 9.52C9.48 10.55 9.95 11.35 10.11 11.59C9.94 11.72 8.36 12.92 8.5 14.74C8.57 15.68 9.07 16.33 9.25 16.54C10.45 17.97 12.46 18.03 14.18 17.99C15.35 17.96 16.53 17.93 17.7 17.89C18.26 17.87 18.83 17.88 19.39 17.8C21.24 17.56 22.78 15.88 22.46 13.97Z"
        ></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M15.5 8V18"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M18.5 13L15.5 17"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M12.5 10L15.5 14"></path>
      </svg>
    </>
  );
};

export default TreesIcon;
