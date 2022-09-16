import React from 'react';

export interface IDisplayText {
  elementTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  type: 'text-displayOne' | 'text-displayTwo' | 'text-displayThree' | 'text-displayFour';
  className?: string;
  children: React.ReactNode;
}

const DisplayText: React.FC<IDisplayText> = ({ elementTag, type, className, children }) => {
  return React.createElement(elementTag, { className: `${type} ${className}` }, children);
};

export default DisplayText;
