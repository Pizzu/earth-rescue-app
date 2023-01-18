import React from 'react';
import { ISvgIcon } from '../../../types/icons';

const LogoutIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`fill-transparent ${isHighlighted ? 'stroke-secondaryRed-700' : 'stroke-neutral-800 '} transition-all`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8V5C2 3.34 3.34 2 5 2H19C20.66 2 22 3.34 22 5V19C22 20.66 20.66 22 19 22H5C3.34 22 2 20.66 2 19V16"
          strokeWidth="1.5"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M2 8V5C2 3.34 3.34 2 5 2H19C20.66 2 22 3.34 22 5V19C22 20.66 20.66 22 19 22H5C3.34 22 2 20.66 2 19V16"
        ></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10 7L5 12L10 17"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M18 12H5"></path>
      </svg>
    </>
  );
};

export default LogoutIcon;
