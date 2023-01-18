import React from 'react';
import { ISvgIcon } from '../../../types/icons';

const SearchIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`fill-transparent ${isHighlighted ? 'stroke-primaryGreen' : 'stroke-neutral-500'} transition-all`}
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </>
  );
};

export default SearchIcon;
