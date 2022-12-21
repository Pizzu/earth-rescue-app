import { SingleText } from '@components/typography';
import { Avatar, SvgHandler } from '@components/ui';
import { MouseEventHandler } from 'react';

export interface IAccountNavBtn {
  username: string;
  profileImg?: string;
  onBtnClicked?: MouseEventHandler<HTMLDivElement>;
}

const AccountNavBtn: React.FC<IAccountNavBtn> = ({ username, profileImg, onBtnClicked }) => {
  return (
    <div onClick={onBtnClicked} className="flex gap-3 items-center cursor-pointer">
      <div className="flex gap-2 items-center">
        <Avatar profileImg={profileImg} />
        <div>
          <SingleText type="text-200" weight="font-medium">
            {username}
          </SingleText>
          <SingleText type="text-100" weight="font-medium" className="text-neutral-600">
            Account Settings
          </SingleText>
        </div>
      </div>
      <div>
        <SvgHandler icon="chevronDownIcon" width="1.2" height="1.2" />
      </div>
    </div>
  );
};

export default AccountNavBtn;
