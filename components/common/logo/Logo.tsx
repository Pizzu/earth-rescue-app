import Image from 'next/image';
import Link from 'next/link';

export interface ILogo {
  size?: 'large' | 'medium' | 'small';
  position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky';
}

const Logo: React.FC<ILogo> = ({ size = 'medium', position = 'static' }) => {
  let sizeClass = '';
  switch (size) {
    case 'large':
      sizeClass = 'w-20 h-20';
      break;
    case 'medium':
      sizeClass = 'w-13 h-14';
      break;
    case 'small':
      sizeClass = 'w-7 h-8';
      break;
    default:
      return null;
  }

  return (
    <>
      <Link href={'/'} passHref>
        <a className={`${position} ${sizeClass}`}>
          <Image className="object-contain" src="/logo.png" alt="Earth Rescue" layout="fill" />
        </a>
      </Link>
    </>
  );
};

export default Logo;
