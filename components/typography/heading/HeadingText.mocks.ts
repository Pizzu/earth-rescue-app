import { IHeadingText } from './HeadingText';

const headingOne: IHeadingText = {
  elementTag: 'h1',
  type: 'text-headingOne',
  children: 'Heading Text One',
};

const headingTwo: IHeadingText = {
  elementTag: 'h2',
  type: 'text-headingTwo',
  children: 'Heading Text Two',
};

const headingThree: IHeadingText = {
  elementTag: 'h3',
  type: 'text-headingThree',
  children: 'Heading Text Three',
};

const headingFour: IHeadingText = {
  elementTag: 'h4',
  type: 'text-headingFour',
  children: 'Heading Text Four',
};

const headingFive: IHeadingText = {
  elementTag: 'h5',
  type: 'text-headingFive',
  children: 'Heading Text Five',
};

const headingSix: IHeadingText = {
  elementTag: 'h6',
  type: 'text-headingSix',
  children: 'Heading Text Six',
};

export const mockHeadingTextProps = {
  headingOne,
  headingTwo,
  headingThree,
  headingFour,
  headingFive,
  headingSix,
};
