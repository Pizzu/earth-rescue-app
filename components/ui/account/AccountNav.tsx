import { SingleText } from '@components/typography';
import { Avatar, Box, SvgHandler } from '@components/ui';

export interface IAccountNav {
  username: string;
  profileImg?: string;
}

const AccountNav: React.FC<IAccountNav> = ({ username, profileImg }) => {
  return (
    <Box className="flex gap-3 items-center cursor-pointer">
      <Box className="flex gap-2 items-center">
        <Avatar profileImg={profileImg} />
        <Box>
          <SingleText type="text-200" weight="font-medium">
            {username}
          </SingleText>
          <SingleText type="text-100" weight="font-medium" className="text-neutral-600">
            Account Settings
          </SingleText>
        </Box>
      </Box>
      <Box>
        <SvgHandler icon="chevronDownIcon" width="1.2" height="1.2" />
      </Box>
    </Box>
  );
};

export default AccountNav;
