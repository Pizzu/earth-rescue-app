import { SingleText } from '@components/typography';
import { Avatar, SvgHandler } from '@components/ui';
import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';

export interface IAccountNavBtn {
  username: string;
  profileImg?: string;
  onBtnClicked?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  isActive?: boolean;
}

const AccountNavBtn: React.FC<IAccountNavBtn> = ({ username, profileImg, onBtnClicked, isActive = false }) => {
  return (
    <button onClick={onBtnClicked} className="flex gap-3 items-center cursor-pointer">
      <div className="flex gap-2 items-center">
        <Avatar profileImg={profileImg} />
        <div className="flex flex-col items-start">
          <SingleText type="text-200" weight="font-medium" className={`${isActive ? 'text-primaryGreen' : ''} transition-colors`}>
            {username}
          </SingleText>
          <SingleText type="text-100" weight="font-medium" className="text-neutral-600">
            Account Settings
          </SingleText>
        </div>
      </div>
      <motion.div animate={{ rotate: isActive ? 180 : 0 }}>
        <SvgHandler icon="chevronDownIcon" width="1.2" height="1.2" isHighlighted={isActive} />
      </motion.div>
    </button>
  );
};

export default AccountNavBtn;
