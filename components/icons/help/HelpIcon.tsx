import { ISvgIcon } from '@type/icons';
import React from 'react';

const HelpIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
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
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12.01 14C12.01 13.5 12.01 13.5 12.01 13.5C12.04 12.75 13 12.46 14.04 11.2C14.41 10.74 14.69 10.41 14.86 9.85C15.15 8.95 14.92 8.18 14.86 8.02C14.8 7.79 14.52 7 13.72 6.46C13.06 6.02 12.42 6 12.14 6C11.9 6 11.36 6 10.78 6.3C10.28 6.56 9.98 6.9 9.83 7.1C9.24 7.82 9.06 8.63 9 9.06"
        ></path>
        <path strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M11.99 18H12.01"></path>
      </svg>
    </>
  );
};

export default HelpIcon;
