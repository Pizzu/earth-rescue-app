import React from 'react';
import { ISvgIcon } from '../../../types/icons';

const SettingsIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`fill-transparent ${isHighlighted ? 'stroke-primaryGreen' : 'stroke-neutral-800 '} transition-all`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 4V1"></path>
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M22.5 8.59L19.61 9.53"></path>
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18.54 21L16.7 18.47"></path>
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.3 18.47L5.46 21"></path>
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M4.39 9.53L1.5 8.59"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 22V20"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M4.39 14.47L2 15.25"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.3 5.53L5.82 3.5"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18.18 3.5L16.7 5.53"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M22 15.25L19.61 14.47"></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        ></path>
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M10.85 10L8 5.07001"></path>
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8 18.93L10.85 14"></path>
        <path strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.31 12H20"></path>
        <path
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M14.31 12L13.15 14H10.85L9.69 12L10.85 10H13.15L14.31 12Z"
        ></path>
      </svg>
    </>
  );
};

export default SettingsIcon;
