import { ISvgIcon } from '@type/icons';
import React from 'react';

const SupportIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
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
          d="M11.5 22C15.5 22 19 20 19 16"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M11.5 22C12.3284 22 13 21.3284 13 20.5C13 19.6716 12.3284 19 11.5 19C10.6716 19 10 19.6716 10 20.5C10 21.3284 10.6716 22 11.5 22Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M17 16H18.5C19.8808 16 21 14.881 21 13.5002C21 12.8264 21 12.1334 21 11.4993C21 10.1186 19.8808 9 18.5 9H17V16Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M7 16H5.49995C4.11924 16 2.99995 14.881 2.99995 13.5002C2.99995 12.8264 2.99995 12.1334 2.99995 11.4993C2.99995 10.1186 4.11924 9 5.49995 9H7V16Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M19 9C19 4.5 16 2 12 2C8 2 5 4.5 5 9"
        ></path>
      </svg>
    </>
  );
};

export default SupportIcon;
