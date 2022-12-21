import Link from 'next/link';

const AccountNavMenu: React.FC = () => {
  return (
    <div className="flex flex-col p-6 bg-neutral-100 shadow-[0_2px_25px_rgba(0,0,0,0.05)] border-neutral-300 border-0.06 rounded-3xl">
      <Link href={'/news'} passHref>
        <a className={'text-primaryGreen transition-colors'}>Documentation</a>
      </Link>
      <Link href={'/news'} passHref>
        <a className={'text-primaryGreen transition-colors'}>Documentation</a>
      </Link>
    </div>
  );
};

export default AccountNavMenu;
