import { ISvgIcon } from '@type/icons';
import React from 'react';

const GoalsIcon: React.FC<ISvgIcon> = ({ width, height, isHighlighted = false }) => {
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
          d="M12.02 14.06L14 22L16 18L20 20L17 12.02C16.17 11.98 15.48 12.67 15.52 13.5V13.51C15.59 14.84 13.95 15.52 13.05 14.53C12.78 14.23 12.39 14.07 12.02 14.06Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M10.95 14.53C10.05 15.52 8.41 14.84 8.48 13.51V13.5C8.52 12.67 7.83 11.98 7 12.02L4 20L8 18L10 22L11.98 14.06C11.61 14.07 11.22 14.23 10.95 14.53Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M13.05 2.47C13.95 1.48 15.59 2.16 15.52 3.49C15.48 4.33 16.17 5.02 17 4.98C18.33 4.91 19.01 6.55 18.02 7.45C17.4 8.01 17.4 8.99 18.02 9.55C19.01 10.44 18.33 12.08 17 12.02C16.16 11.98 15.47 12.67 15.51 13.51C15.58 14.84 13.94 15.52 13.04 14.53C12.48 13.91 11.5 13.91 10.94 14.53C10.05 15.52 8.41 14.84 8.47 13.51C8.51 12.67 7.82 11.98 6.98 12.02C5.65 12.09 4.97 10.45 5.96 9.55C6.58 8.99 6.58 8.01 5.96 7.45C4.98 6.55 5.66 4.91 6.99 4.98C7.83 5.02 8.52 4.33 8.48 3.5C8.41 2.16 10.05 1.48 10.95 2.47C11.51 3.1 12.49 3.1 13.05 2.47Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11Z"
        ></path>
      </svg>
    </>
  );
};

export default GoalsIcon;
