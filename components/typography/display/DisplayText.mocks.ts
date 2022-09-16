import { IDisplayText } from './DisplayText';

const displayOne: IDisplayText = {
  elementTag: 'h1',
  type: 'text-displayOne',
  children: 'Display Text One',
};

const displayTwo: IDisplayText = {
  elementTag: 'h1',
  type: 'text-displayTwo',
  children: 'Display Text Two',
};

const displayThree: IDisplayText = {
  elementTag: 'h1',
  type: 'text-displayThree',
  children: 'Display Text Three',
};

const displayFour: IDisplayText = {
  elementTag: 'h1',
  type: 'text-displayFour',
  children: 'Display Text Four',
};

export const mockDisplayTextProps = {
  displayOne,
  displayTwo,
  displayThree,
  displayFour,
};
