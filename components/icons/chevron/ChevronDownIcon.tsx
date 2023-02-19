import { ISvgIcon } from '@type/icons';
import React from 'react';

const ChevronDownIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`fill-transparent ${isHighlighted ? 'stroke-primaryGreen' : 'stroke-neutral-500 '} transition-all`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M4 8L12 16L20 8"></path>
      </svg>
    </>
  );
};

export default ChevronDownIcon;
