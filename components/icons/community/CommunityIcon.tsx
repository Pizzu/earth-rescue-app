import { ISvgIcon } from '@type/icons';
import React from 'react';

const CommunityIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
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
          d="M16.67 14.23C17.5 15.26 18 16.57 18 18C20 18 22 18 22 18C22 15.79 20.21 14 18 14C17.53 14 17.09 14.08 16.67 14.23Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M7.33 14.23C6.91 14.08 6.47 14 6 14C3.79 14 2 15.79 2 18C2 18 4 18 6 18C6 16.57 6.5 15.26 7.33 14.23Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12 12C8.69 12 6 14.69 6 18C6.01 18 18 18 18 18C18 14.69 15.31 12 12 12Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        ></path>
      </svg>
    </>
  );
};

export default CommunityIcon;
