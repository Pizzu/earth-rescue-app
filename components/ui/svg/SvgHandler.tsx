import { CommunityIcon, GoalsIcon, HouseIcon, NewsIcon, TreesIcon } from '@components/icons';

export interface ISvgHandler {
  icon: 'houseIcon' | 'goalsIcon' | 'communityIcon' | 'treesIcon' | 'newsIcon';
  width?: string;
  height?: string;
  isHighlighted?: boolean;
}

const SvgHandler: React.FC<ISvgHandler> = ({ icon, width = '2', height = '2', isHighlighted = false }) => {
  switch (icon) {
    case 'houseIcon':
      return <HouseIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'newsIcon':
      return <NewsIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'goalsIcon':
      return <GoalsIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'treesIcon':
      return <TreesIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'communityIcon':
      return <CommunityIcon width={width} height={height} isHighlighted={isHighlighted} />;
    default:
      return null;
  }
};

export default SvgHandler;
