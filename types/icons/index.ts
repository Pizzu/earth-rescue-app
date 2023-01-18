export interface Icon {
  icon:
    | 'houseIcon'
    | 'goalsIcon'
    | 'communityIcon'
    | 'treesIcon'
    | 'newsIcon'
    | 'searchIcon'
    | 'shoppingIcon'
    | 'chevronDownIcon'
    | 'userIcon'
    | 'settingsIcon'
    | 'receiptIcon'
    | 'helpIcon'
    | 'supportIcon'
    | 'logoutIcon';
}

export interface ISvgIcon {
  width: string;
  height: string;
  isHighlighted?: boolean;
}
