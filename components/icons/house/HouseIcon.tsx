import { ISvgIcon } from '@type/icons';
import React from 'react';

const HouseIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
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
          d="M20 12H17.4C16.5 12 15.6 11.6 15.1 10.9L14.3 10C13.1 8.5 10.8 8.5 9.6 10L8.9 10.9C8.3 11.6 7.5 12 6.6 12H4V19C4 20.7 5.3 22 7 22H17C18.7 22 20 20.7 20 19V12Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M9.3 3.2999L2 11.9999H6.6C7.5 11.9999 8.4 11.5999 8.9 10.8999L9.7 9.9999C10.9 8.4999 13.2 8.4999 14.4 9.9999L15.2 10.8999C15.8 11.5999 16.6 11.9999 17.5 11.9999H22L14.7 3.2999C13.3 1.5999 10.7 1.5999 9.3 3.2999Z"
        ></path>
      </svg>
    </>
  );
};

export default HouseIcon;
