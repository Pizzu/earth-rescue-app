import Image from 'next/image';

export interface IAvatar {
  profileImg?: string;
}

const Avatar: React.FC<IAvatar> = ({ profileImg }) => {
  return (
    <div className="relative w-10 h-10">
      <Image className="object-cover rounded-full" src={profileImg ?? ''} alt="Profile image" layout="fill" />
    </div>
  );
};

export default Avatar;
