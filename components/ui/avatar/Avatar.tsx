import { Box } from '@components/ui';
import Image from 'next/image';

export interface IAvatar {
  profileImg?: string;
}

const Avatar: React.FC<IAvatar> = ({ profileImg }) => {
  return (
    <Box className="relative w-10 h-10">
      <Image className="object-cover rounded-full" src={profileImg ?? ''} alt="Profile image" layout="fill" />
    </Box>
  );
};

export default Avatar;
