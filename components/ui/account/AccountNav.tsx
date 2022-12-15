import { SingleText } from '@components/typography';
import { Avatar, SvgHandler } from '@components/ui';
import Link from 'next/link';

export interface IAccountNav {
  username: string;
  profileImg?: string;
}

const AccountNav: React.FC<IAccountNav> = ({ username, profileImg }) => {
  return (
    <div className="relative">
      <div className="flex gap-3 items-center cursor-pointer">
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
      <div className="absolute w-full top-full left-0 flex flex-col p-6 bg-neutral-100 shadow-[0_2px_25px_rgba(0,0,0,0.05)] border-neutral-300 border-0.06 rounded-3xl">
        <Link href={'/news'} passHref>
          <a className={'text-primaryGreen transition-colors'}>Documentation</a>
        </Link>
        <Link href={'/news'} passHref>
          <a className={'text-primaryGreen transition-colors'}>Documentation</a>
        </Link>
      </div>
    </div>
  );
};

export default AccountNav;
