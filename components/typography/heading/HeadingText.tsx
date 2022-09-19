import React from 'react';

export interface IHeadingText {
  elementTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  type: 'text-headingOne' | 'text-headingTwo' | 'text-headingThree' | 'text-headingFour' | 'text-headingFive' | 'text-headingSix';
  className?: string;
  children: React.ReactNode;
}

const HeadingText: React.FC<IHeadingText> = ({ elementTag, type, className, children }) => {
  return React.createElement(elementTag, { className: `${type} font-bold ${className}` }, children);
};

export default HeadingText;
