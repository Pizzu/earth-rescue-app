import { SingleText } from '@components/typography';
import Link from 'next/link';

export interface ITextLink {
  href: string;
  type: 'text-400' | 'text-300' | 'text-200' | 'text-100' | 'text-50';
  weight?: 'font-normal' | 'font-medium' | 'font-bold';
  children: React.ReactNode;
}

const TextLink: React.FC<ITextLink> = ({ href, type, weight = 'font-normal', children }) => {
  return (
    <Link href={href} passHref>
      <a>
        <SingleText type={type} weight={weight} className={'underline text-primaryGreen'}>
          {children}
        </SingleText>
      </a>
    </Link>
  );
};

export default TextLink;
