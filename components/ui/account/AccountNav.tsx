import { AccountNavBtn, AccountNavMenu } from '@components/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export interface IAccountNav {
  username: string;
  profileImg?: string;
}

const menuVariants = {
  open: {
    y: '100%',
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
  closed: {
    y: '100%',
    scale: 0,
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.4,
    },
  },
};

const AccountNav: React.FC<IAccountNav> = ({ username, profileImg }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onAccountBtnClicked = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <AccountNavBtn username={username} profileImg={profileImg} onBtnClicked={onAccountBtnClicked} isActive={isMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute w-full bottom-0 left-0 "
          >
            <AccountNavMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccountNav;
