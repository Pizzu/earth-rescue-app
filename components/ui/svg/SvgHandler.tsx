import {
  ChevronDownIcon,
  CommunityIcon,
  GoalsIcon,
  HelpIcon,
  HouseIcon,
  LogoutIcon,
  NewsIcon,
  ReceiptIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingIcon,
  SupportIcon,
  TreesIcon,
  UserIcon,
} from '@components/icons';
import { Icon } from '@type/icons';

export interface ISvgHandler extends Icon {
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
    case 'searchIcon':
      return <SearchIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'shoppingIcon':
      return <ShoppingIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'chevronDownIcon':
      return <ChevronDownIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'userIcon':
      return <UserIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'settingsIcon':
      return <SettingsIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'receiptIcon':
      return <ReceiptIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'helpIcon':
      return <HelpIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'supportIcon':
      return <SupportIcon width={width} height={height} isHighlighted={isHighlighted} />;
    case 'logoutIcon':
      return <LogoutIcon width={width} height={height} isHighlighted={isHighlighted} />;
    default:
      return null;
  }
};

export default SvgHandler;
